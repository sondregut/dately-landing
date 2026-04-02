'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'

interface PromoCode {
  code: string
  type: string
  is_active: boolean
  max_uses: number | null
  current_uses: number
  duration_days: number | null
  expires_at: string | null
  owner: string | null
  owner_email: string | null
  created_at: string | null
}

interface Redemption {
  id: string
  code: string
  user_id: string
  redeemed_at: string | null
  promo_expires_at: string | null
  revoked_at: string | null
  display_name: string | null
  email: string | null
  is_pro: boolean
  code_owner: string | null
  code_owner_email: string | null
  code_type: string
}

interface Stats {
  totalCodes: number
  codesUsed: number
  totalRedemptions: number
  activeProUsers: number
}

export default function PromoCodesPage() {
  const [promoCodes, setPromoCodes] = useState<PromoCode[]>([])
  const [redemptions, setRedemptions] = useState<Redemption[]>([])
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)
  const [showCreate, setShowCreate] = useState(false)
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [filterOwner, setFilterOwner] = useState<string | null>(null)
  const [filterCode, setFilterCode] = useState<string | null>(null)
  const [revoking, setRevoking] = useState<string | null>(null)

  // Create form state
  const [newCode, setNewCode] = useState('')
  const [newType, setNewType] = useState<'lifetime' | 'time_limited'>('time_limited')
  const [newDurationDays, setNewDurationDays] = useState(30)
  const [newMaxUses, setNewMaxUses] = useState<string>('')
  const [newOwner, setNewOwner] = useState('')
  const [newOwnerEmail, setNewOwnerEmail] = useState('')
  const [creating, setCreating] = useState(false)
  const [createError, setCreateError] = useState<string | null>(null)

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch('/admin/api/promo-codes')
      const data = await res.json()
      setPromoCodes(data.promoCodes || [])
      setRedemptions(data.redemptions || [])
      setStats(data.stats || null)
    } catch (err) {
      console.error('Failed to fetch promo codes:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const activeRedemptions = useMemo(
    () => redemptions.filter(r => !r.revoked_at),
    [redemptions]
  )

  const ownerGroups = useMemo(() => {
    const groups = new Map<string, number>()
    for (const r of activeRedemptions) {
      const owner = r.code_owner || 'Direct'
      groups.set(owner, (groups.get(owner) || 0) + 1)
    }
    return Array.from(groups.entries()).sort((a, b) => b[1] - a[1])
  }, [activeRedemptions])

  const codeGroups = useMemo(() => {
    const groups = new Map<string, { count: number; owner: string | null }>()
    for (const r of activeRedemptions) {
      const existing = groups.get(r.code)
      if (existing) {
        existing.count++
      } else {
        groups.set(r.code, { count: 1, owner: r.code_owner })
      }
    }
    return Array.from(groups.entries()).sort((a, b) => b[1].count - a[1].count)
  }, [activeRedemptions])

  const filteredRedemptions = useMemo(() => {
    let filtered = activeRedemptions
    if (filterOwner) {
      filtered = filtered.filter(r =>
        filterOwner === 'Direct' ? !r.code_owner : r.code_owner === filterOwner
      )
    }
    if (filterCode) {
      filtered = filtered.filter(r => r.code === filterCode)
    }
    return filtered
  }, [activeRedemptions, filterOwner, filterCode])

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault()
    setCreating(true)
    setCreateError(null)

    try {
      const res = await fetch('/admin/api/promo-codes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code: newCode,
          type: newType,
          durationDays: newType === 'time_limited' ? newDurationDays : null,
          maxUses: newMaxUses ? parseInt(newMaxUses) : null,
          owner: newOwner || null,
          ownerEmail: newOwnerEmail || null,
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Failed to create code')
      }

      setNewCode('')
      setNewType('time_limited')
      setNewDurationDays(30)
      setNewMaxUses('')
      setNewOwner('')
      setNewOwnerEmail('')
      setShowCreate(false)
      await fetchData()
    } catch (err) {
      setCreateError(err instanceof Error ? err.message : 'Failed to create code')
    } finally {
      setCreating(false)
    }
  }

  async function toggleActive(code: string, currentlyActive: boolean) {
    try {
      await fetch('/admin/api/promo-codes', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, isActive: !currentlyActive }),
      })
      await fetchData()
    } catch (err) {
      console.error('Failed to toggle code:', err)
    }
  }

  async function revokeRedemption(code: string, userId: string) {
    if (!confirm(`Revoke promo code "${code}" from this user? Their Pro access will be removed.`)) return

    setRevoking(`${code}-${userId}`)
    try {
      const res = await fetch(
        `/admin/api/promo-codes?code=${encodeURIComponent(code)}&userId=${encodeURIComponent(userId)}`,
        { method: 'DELETE' }
      )
      if (!res.ok) {
        const data = await res.json()
        alert(data.error || 'Failed to revoke')
        return
      }
      await fetchData()
    } catch (err) {
      console.error('Failed to revoke:', err)
      alert('Failed to revoke redemption')
    } finally {
      setRevoking(null)
    }
  }

  function copyToClipboard(code: string) {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  function formatDate(dateStr: string | null) {
    if (!dateStr) return '—'
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  function durationLabel(code: PromoCode) {
    if (code.type === 'lifetime') return 'Lifetime'
    if (code.type === 'time_limited' && code.duration_days) {
      if (code.duration_days >= 365) return `${Math.round(code.duration_days / 365)} year${code.duration_days >= 730 ? 's' : ''}`
      if (code.duration_days >= 30) return `${Math.round(code.duration_days / 30)} month${code.duration_days >= 60 ? 's' : ''}`
      return `${code.duration_days} day${code.duration_days !== 1 ? 's' : ''}`
    }
    return code.type
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <span className="animate-pulse" style={{ color: 'var(--text-taupe)' }}>Loading promo codes...</span>
      </div>
    )
  }

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(199, 178, 138, 0.1)',
  }

  const inputStyle = {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(199, 178, 138, 0.2)',
    color: 'var(--text-ivory)',
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1
            className="text-3xl md:text-4xl mb-2"
            style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre), Georgia, serif' }}
          >
            Promo Codes
          </h1>
          <p style={{ color: 'var(--text-taupe)', fontFamily: 'var(--font-inter), system-ui, sans-serif' }} className="text-sm">
            Create and manage promo codes for reviewers, press, and beta testers
          </p>
        </div>
        <button
          onClick={() => setShowCreate(!showCreate)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-colors btn-primary"
          style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Create Code
        </button>
      </div>

      {/* Stats */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Codes', value: stats.totalCodes },
            { label: 'Codes Used', value: stats.codesUsed },
            { label: 'Total Redemptions', value: stats.totalRedemptions },
            { label: 'Active Pro Users', value: stats.activeProUsers },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl p-5" style={cardStyle}>
              <div className="text-2xl font-bold" style={{ color: 'var(--text-ivory)' }}>{stat.value}</div>
              <div className="text-sm mt-1" style={{ color: 'var(--text-taupe)', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Create Form */}
      {showCreate && (
        <div className="rounded-xl p-6 mb-8" style={cardStyle}>
          <h2
            className="text-lg font-semibold mb-4"
            style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre), Georgia, serif' }}
          >
            Create New Promo Code
          </h2>
          <form onSubmit={handleCreate} className="space-y-4" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: 'var(--text-linen)' }}>Code</label>
                <input
                  type="text"
                  value={newCode}
                  onChange={(e) => setNewCode(e.target.value.toUpperCase())}
                  placeholder="e.g. REVIEWER2026"
                  className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--champagne-gold)] font-mono tracking-wider"
                  style={inputStyle}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: 'var(--text-linen)' }}>Access Type</label>
                <select
                  value={newType}
                  onChange={(e) => setNewType(e.target.value as 'lifetime' | 'time_limited')}
                  className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--champagne-gold)]"
                  style={inputStyle}
                >
                  <option value="time_limited">Time Limited</option>
                  <option value="lifetime">Lifetime</option>
                </select>
              </div>

              {newType === 'time_limited' && (
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: 'var(--text-linen)' }}>Duration</label>
                  <select
                    value={newDurationDays}
                    onChange={(e) => setNewDurationDays(parseInt(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--champagne-gold)]"
                    style={inputStyle}
                  >
                    <option value={7}>7 days</option>
                    <option value={14}>14 days</option>
                    <option value={30}>1 month (30 days)</option>
                    <option value={60}>2 months (60 days)</option>
                    <option value={90}>3 months (90 days)</option>
                    <option value={180}>6 months (180 days)</option>
                    <option value={365}>1 year (365 days)</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: 'var(--text-linen)' }}>Max Uses</label>
                <input
                  type="number"
                  value={newMaxUses}
                  onChange={(e) => setNewMaxUses(e.target.value)}
                  placeholder="Unlimited"
                  min={1}
                  className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--champagne-gold)]"
                  style={inputStyle}
                />
                <p className="text-xs mt-1" style={{ color: 'var(--text-taupe)' }}>Leave empty for unlimited uses</p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: 'var(--text-linen)' }}>Owner Name</label>
                <input
                  type="text"
                  value={newOwner}
                  onChange={(e) => setNewOwner(e.target.value)}
                  placeholder="e.g. John from TechCrunch"
                  className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--champagne-gold)]"
                  style={inputStyle}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: 'var(--text-linen)' }}>Owner Email</label>
                <input
                  type="email"
                  value={newOwnerEmail}
                  onChange={(e) => setNewOwnerEmail(e.target.value)}
                  placeholder="e.g. john@techcrunch.com"
                  className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--champagne-gold)]"
                  style={inputStyle}
                />
              </div>
            </div>

            {createError && (
              <p className="text-sm" style={{ color: 'var(--wine-red)' }}>{createError}</p>
            )}

            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                disabled={creating || !newCode.trim()}
                className="px-5 py-2.5 rounded-lg font-medium text-sm transition-colors btn-primary disabled:opacity-50"
              >
                {creating ? 'Creating...' : 'Create Code'}
              </button>
              <button
                type="button"
                onClick={() => { setShowCreate(false); setCreateError(null) }}
                className="px-5 py-2.5 rounded-lg font-medium text-sm transition-colors"
                style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-linen)' }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Promo Codes Table */}
      <div className="rounded-xl overflow-hidden mb-8" style={cardStyle}>
        <div className="px-6 py-4" style={{ borderBottom: '1px solid rgba(199, 178, 138, 0.1)' }}>
          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre), Georgia, serif' }}>
            All Codes
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                {['Code', 'Access', 'Uses', 'Owner', 'Created', 'Status', 'Actions'].map(h => (
                  <th key={h} className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-taupe)' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {promoCodes.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center" style={{ color: 'var(--text-taupe)' }}>
                    No promo codes yet. Create one to get started.
                  </td>
                </tr>
              ) : (
                promoCodes.map((code) => (
                  <tr key={code.code} className="transition-colors hover:bg-white/[0.02]" style={{ borderTop: '1px solid rgba(199, 178, 138, 0.05)' }}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-semibold tracking-wider" style={{ color: 'var(--text-ivory)' }}>{code.code}</span>
                        <button
                          onClick={() => copyToClipboard(code.code)}
                          className="transition-colors"
                          style={{ color: copiedCode === code.code ? '#4ade80' : 'var(--text-taupe)' }}
                          title="Copy code"
                        >
                          {copiedCode === code.code ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium"
                        style={{ background: 'rgba(199, 178, 138, 0.15)', color: 'var(--champagne-gold)' }}
                      >
                        {code.type === 'lifetime' ? 'Lifetime' : durationLabel(code)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm" style={{ color: 'var(--text-linen)' }}>
                        {code.current_uses}{code.max_uses !== null ? ` / ${code.max_uses}` : ''}
                      </span>
                      {code.max_uses === null && (
                        <span className="text-xs ml-1" style={{ color: 'var(--text-taupe)' }}>(unlimited)</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        {code.owner ? (
                          <>
                            <div style={{ color: 'var(--text-ivory)' }}>{code.owner}</div>
                            {code.owner_email && <div className="text-xs" style={{ color: 'var(--text-taupe)' }}>{code.owner_email}</div>}
                          </>
                        ) : (
                          <span style={{ color: 'var(--text-taupe)' }}>—</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm" style={{ color: 'var(--text-taupe)' }}>{formatDate(code.created_at)}</td>
                    <td className="px-6 py-4">
                      <span
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: code.is_active ? 'rgba(74, 222, 128, 0.1)' : 'rgba(139, 58, 52, 0.15)',
                          color: code.is_active ? '#4ade80' : 'var(--wine-red)',
                        }}
                      >
                        {code.is_active ? 'Active' : 'Disabled'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => toggleActive(code.code, code.is_active)}
                        className="text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
                        style={{
                          background: code.is_active ? 'rgba(139, 58, 52, 0.15)' : 'rgba(74, 222, 128, 0.1)',
                          color: code.is_active ? 'var(--wine-red)' : '#4ade80',
                        }}
                      >
                        {code.is_active ? 'Disable' : 'Enable'}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Redemptions Section */}
      {activeRedemptions.length > 0 && (
        <>
          {/* Filter by Code Owner */}
          {ownerGroups.length > 0 && (
            <div className="rounded-xl p-6 mb-6" style={cardStyle}>
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5" style={{ color: 'var(--text-taupe)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                <h2 className="text-lg font-semibold" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre), Georgia, serif' }}>
                  Filter by Owner
                </h2>
                {(filterOwner || filterCode) && (
                  <button
                    onClick={() => { setFilterOwner(null); setFilterCode(null) }}
                    className="ml-auto text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
                    style={{ background: 'rgba(199, 178, 138, 0.15)', color: 'var(--champagne-gold)', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                  >
                    Clear Filters
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-3" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
                {ownerGroups.map(([owner, count]) => (
                  <button
                    key={owner}
                    onClick={() => setFilterOwner(filterOwner === owner ? null : owner)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
                    style={{
                      border: filterOwner === owner
                        ? '1px solid rgba(199, 178, 138, 0.4)'
                        : '1px solid rgba(199, 178, 138, 0.1)',
                      background: filterOwner === owner
                        ? 'rgba(199, 178, 138, 0.1)'
                        : 'rgba(255, 255, 255, 0.02)',
                      color: filterOwner === owner ? 'var(--champagne-gold)' : 'var(--text-linen)',
                    }}
                  >
                    <span>{owner}</span>
                    <span
                      className="px-2 py-0.5 rounded-full text-xs font-bold"
                      style={{
                        background: filterOwner === owner ? 'rgba(199, 178, 138, 0.2)' : 'rgba(255,255,255,0.05)',
                        color: filterOwner === owner ? 'var(--champagne-gold)' : 'var(--text-taupe)',
                      }}
                    >
                      {count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Redemptions by Code */}
          {codeGroups.length > 0 && (
            <div className="rounded-xl p-6 mb-6" style={cardStyle}>
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5" style={{ color: 'var(--text-taupe)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <h2 className="text-lg font-semibold" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre), Georgia, serif' }}>
                  Redemptions by Code
                </h2>
              </div>
              <div className="flex flex-wrap gap-3" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
                {codeGroups.map(([code, { count, owner }]) => (
                  <button
                    key={code}
                    onClick={() => setFilterCode(filterCode === code ? null : code)}
                    className="flex flex-col items-start px-4 py-3 rounded-xl text-sm transition-all"
                    style={{
                      border: filterCode === code
                        ? '1px solid rgba(199, 178, 138, 0.4)'
                        : '1px solid rgba(199, 178, 138, 0.1)',
                      background: filterCode === code
                        ? 'rgba(199, 178, 138, 0.1)'
                        : 'rgba(255, 255, 255, 0.02)',
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-semibold tracking-wider" style={{ color: 'var(--text-ivory)' }}>{code}</span>
                      <span
                        className="px-2 py-0.5 rounded-full text-xs font-bold"
                        style={{
                          background: filterCode === code ? 'rgba(199, 178, 138, 0.2)' : 'rgba(255,255,255,0.05)',
                          color: filterCode === code ? 'var(--champagne-gold)' : 'var(--text-taupe)',
                        }}
                      >
                        {count}
                      </span>
                    </div>
                    {owner && (
                      <span className="text-xs mt-0.5" style={{ color: 'var(--text-taupe)' }}>({owner})</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Redemptions Table */}
          <div className="rounded-xl overflow-hidden" style={cardStyle}>
            <div className="px-6 py-4 flex items-center gap-2" style={{ borderBottom: '1px solid rgba(199, 178, 138, 0.1)' }}>
              <svg className="w-5 h-5" style={{ color: 'var(--text-taupe)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
              <h2 className="text-lg font-semibold" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre), Georgia, serif' }}>
                Redemptions
              </h2>
              <span className="text-sm ml-2" style={{ color: 'var(--text-taupe)', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
                ({filteredRedemptions.length}{filteredRedemptions.length !== activeRedemptions.length ? ` of ${activeRedemptions.length}` : ''})
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                    {['User', 'Code', 'Code Owner', 'Status', 'Redeemed', 'Expires', 'Actions'].map(h => (
                      <th key={h} className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-taupe)' }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredRedemptions.map((r) => (
                    <tr key={`${r.code}-${r.user_id}`} className="transition-colors hover:bg-white/[0.02]" style={{ borderTop: '1px solid rgba(199, 178, 138, 0.05)' }}>
                      <td className="px-6 py-4">
                        <div className="text-sm">
                          <div className="font-medium" style={{ color: 'var(--text-ivory)' }}>{r.display_name || 'Unknown'}</div>
                          <div className="text-xs" style={{ color: 'var(--text-taupe)' }}>{r.email || r.user_id.slice(0, 12) + '...'}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-mono text-sm font-medium" style={{ color: 'var(--champagne-gold)' }}>{r.code}</span>
                      </td>
                      <td className="px-6 py-4 text-sm" style={{ color: 'var(--text-linen)' }}>
                        {r.code_owner || <span style={{ color: 'var(--text-taupe)' }}>Direct</span>}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium"
                          style={{
                            background: r.is_pro ? 'rgba(74, 222, 128, 0.1)' : 'rgba(255,255,255,0.05)',
                            color: r.is_pro ? '#4ade80' : 'var(--text-taupe)',
                          }}
                        >
                          {r.is_pro ? 'Pro' : 'Free'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm" style={{ color: 'var(--text-taupe)' }}>{formatDate(r.redeemed_at)}</td>
                      <td className="px-6 py-4 text-sm" style={{ color: 'var(--text-taupe)' }}>
                        {r.promo_expires_at ? formatDate(r.promo_expires_at) : 'Never'}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => revokeRedemption(r.code, r.user_id)}
                          disabled={revoking === `${r.code}-${r.user_id}` || !r.is_pro}
                          className="flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                          style={{ background: 'rgba(139, 58, 52, 0.15)', color: 'var(--wine-red)' }}
                          title={!r.is_pro ? 'Already revoked' : 'Revoke access'}
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                          </svg>
                          {revoking === `${r.code}-${r.user_id}` ? 'Revoking...' : 'Revoke'}
                        </button>
                      </td>
                    </tr>
                  ))}
                  {filteredRedemptions.length === 0 && (
                    <tr>
                      <td colSpan={7} className="px-6 py-12 text-center" style={{ color: 'var(--text-taupe)' }}>
                        No redemptions match the current filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
