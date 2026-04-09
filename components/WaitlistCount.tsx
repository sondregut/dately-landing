'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import type { SupabaseClient } from '@supabase/supabase-js'

export default function WaitlistCount() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    async function fetchCount() {
      if (!supabase) return
      const { count: total } = await (supabase as SupabaseClient)
        .from('waitlist')
        .select('*', { count: 'exact', head: true })
      if (total !== null && total > 0) {
        setCount(total)
      }
    }
    fetchCount()
  }, [])

  if (count === null) return null

  return (
    <span
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-body"
      style={{
        background: 'rgba(139, 58, 52, 0.15)',
        border: '1px solid rgba(199, 178, 138, 0.2)',
        color: 'var(--champagne-gold)',
      }}
    >
      <span
        className="w-2 h-2 rounded-full animate-pulse"
        style={{ background: 'var(--champagne-gold)' }}
      />
      {count.toLocaleString()}+ people on the waitlist
    </span>
  )
}
