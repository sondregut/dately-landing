'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '@/lib/supabase'
import type { SupabaseClient } from '@supabase/supabase-js'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) return

    setStatus('loading')
    setErrorMessage('')

    if (!supabase) {
      setStatus('error')
      setErrorMessage('Service temporarily unavailable. Please try again later.')
      return
    }

    try {
      const { error } = await (supabase as SupabaseClient)
        .from('waitlist')
        .insert([
          {
            email: email.toLowerCase().trim(),
            name: name.trim() || null,
            referral_source: typeof window !== 'undefined' ? document.referrer || 'direct' : 'direct'
          }
        ])

      if (error) {
        if (error.code === '23505') {
          // Unique constraint violation - email already exists
          setStatus('success')
          setEmail('')
          setName('')
        } else {
          throw error
        }
      } else {
        setStatus('success')
        setEmail('')
        setName('')
      }
    } catch (err) {
      console.error('Waitlist signup error:', err)
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="waitlist" className="relative py-24 px-6 md:px-12 lg:px-24">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, var(--bg-dark-deep) 0%, var(--bg-dark-mid) 50%, var(--bg-dark) 100%)',
        }}
      />

      {/* Subtle glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, var(--wine-red) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-xl mx-auto text-center">
        {/* Decorative line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="decorative-line rotate-180" />
          <span className="display-tagline" style={{ color: 'var(--text-linen)' }}>
            Be the First
          </span>
          <div className="decorative-line" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4"
          style={{ color: 'var(--text-ivory)' }}
        >
          Join the Waitlist
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-lg mb-10"
          style={{ color: 'var(--text-linen)' }}
        >
          Get early access and be the first to experience Dately.
        </motion.p>

        {/* Form */}
        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 rounded-2xl"
            style={{
              background: 'rgba(139, 58, 52, 0.1)',
              border: '1px solid rgba(199, 178, 138, 0.2)',
            }}
          >
            <div className="text-4xl mb-4">✓</div>
            <h3
              className="font-heading text-xl mb-2"
              style={{ color: 'var(--text-ivory)' }}
            >
              You're on the list!
            </h3>
            <p
              className="font-body text-sm"
              style={{ color: 'var(--text-linen)' }}
            >
              We'll notify you when Dately launches. Get ready for unforgettable dates.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* Name field (optional) */}
            <input
              type="text"
              placeholder="Your name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-6 py-4 rounded-xl font-body text-base outline-none transition-all duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'var(--text-ivory)',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'rgba(199, 178, 138, 0.5)'
                e.target.style.background = 'rgba(255, 255, 255, 0.08)'
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                e.target.style.background = 'rgba(255, 255, 255, 0.05)'
              }}
            />

            {/* Email field */}
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-6 py-4 rounded-xl font-body text-base outline-none transition-all duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'var(--text-ivory)',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'rgba(199, 178, 138, 0.5)'
                e.target.style.background = 'rgba(255, 255, 255, 0.08)'
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                e.target.style.background = 'rgba(255, 255, 255, 0.05)'
              }}
            />

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary w-full px-8 py-4 rounded-xl font-body font-medium text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Joining...
                </span>
              ) : (
                'Join Waitlist'
              )}
            </button>

            {/* Error message */}
            {status === 'error' && (
              <p className="text-sm" style={{ color: '#E27A75' }}>
                {errorMessage}
              </p>
            )}

            {/* Privacy note */}
            <p
              className="text-xs font-body pt-2"
              style={{ color: 'var(--text-taupe)' }}
            >
              We respect your privacy. No spam, ever.
            </p>
          </motion.form>
        )}
      </div>
    </section>
  )
}
