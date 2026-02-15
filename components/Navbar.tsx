'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 navbar-glass"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="font-heading text-xl" style={{ color: 'var(--text-ivory)' }}>
              Dately
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm transition-colors duration-200"
                  style={{ color: 'var(--text-linen)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-ivory)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-linen)')}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#waitlist"
                className="btn-primary px-5 py-2 rounded-lg font-body text-sm font-medium"
              >
                Join Waitlist
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                style={{ color: 'var(--text-ivory)' }}
              >
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden overflow-hidden border-t"
                style={{ borderColor: 'rgba(199, 178, 138, 0.08)' }}
              >
                <div className="px-6 py-4 flex flex-col gap-4">
                  {links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-body text-base py-2"
                      style={{ color: 'var(--text-linen)' }}
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    href="#waitlist"
                    onClick={() => setMobileOpen(false)}
                    className="btn-primary px-5 py-3 rounded-lg font-body text-sm font-medium text-center"
                  >
                    Join Waitlist
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
