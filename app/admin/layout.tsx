'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const CORRECT_PIN = '010699'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [pin, setPin] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const auth = sessionStorage.getItem('admin-auth')
    if (auth === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (pin === CORRECT_PIN) {
      setIsAuthenticated(true)
      sessionStorage.setItem('admin-auth', 'true')
      setError(false)
    } else {
      setError(true)
      setPin('')
    }
  }

  if (!mounted) {
    return (
      <main className="min-h-screen luxury-bg flex items-center justify-center px-6">
        <div className="w-full max-w-sm" />
      </main>
    )
  }

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen luxury-bg flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <h1
              className="text-3xl mb-2"
              style={{
                color: 'var(--text-ivory)',
                fontFamily: 'var(--font-libre), Georgia, serif'
              }}
            >
              Admin
            </h1>
            <p
              className="text-sm"
              style={{
                color: 'var(--text-taupe)',
                fontFamily: 'var(--font-inter), system-ui, sans-serif'
              }}
            >
              Enter PIN to access internal documents
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={6}
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value.replace(/\D/g, ''))
                  setError(false)
                }}
                placeholder="Enter 6-digit PIN"
                className="w-full px-4 py-3 rounded-lg text-center text-xl tracking-[0.5em] font-mono"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: error ? '1px solid var(--wine-red)' : '1px solid rgba(199, 178, 138, 0.2)',
                  color: 'var(--text-ivory)',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif'
                }}
                autoFocus
              />
              {error && (
                <p className="text-sm mt-2 text-center" style={{ color: 'var(--wine-red)' }}>
                  Incorrect PIN. Please try again.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-medium btn-primary"
              style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
            >
              Access Admin
            </button>
          </form>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="text-sm footer-link"
              style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen luxury-bg">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-12">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
            <Link href="/" className="transition-colors duration-200 footer-link">
              Home
            </Link>
            <span style={{ color: 'var(--text-taupe)' }}>/</span>
            <Link href="/admin" className="transition-colors duration-200 footer-link">
              Admin
            </Link>
          </div>
          <span
            className="text-xs px-3 py-1 rounded-full"
            style={{
              background: 'rgba(199, 178, 138, 0.1)',
              color: 'var(--champagne-gold)',
              border: '1px solid rgba(199, 178, 138, 0.2)',
              fontFamily: 'var(--font-inter), system-ui, sans-serif'
            }}
          >
            Internal
          </span>
        </div>

        {children}
      </div>
    </main>
  )
}
