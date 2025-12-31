'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col luxury-bg">
      {/* Main Content - Centered */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-3xl">
          {/* Tagline with decorative line */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="decorative-line" />
            <span className="display-tagline" style={{ color: 'var(--text-taupe)' }}>
              Scratch to Reveal Your Next Date
            </span>
          </motion.div>

          {/* Logo / Brand Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="display-logo mb-8"
            style={{ color: 'var(--text-ivory)' }}
          >
            Dately
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-body"
            style={{ color: 'var(--text-linen)' }}
          >
            AI-powered surprise date plans you scratch to reveal. Create unforgettable
            memories with your partner, one spontaneous adventure at a time.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            {/* App Store Button */}
            <a
              href="#"
              className="store-btn flex items-center gap-3 px-6 py-4 rounded-xl"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--text-ivory)' }}>
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-60" style={{ color: 'var(--text-linen)' }}>Download on the</div>
                <div className="text-base font-medium -mt-0.5" style={{ color: 'var(--text-ivory)' }}>App Store</div>
              </div>
            </a>

            {/* Waitlist Button */}
            <a
              href="#waitlist"
              className="btn-secondary flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-medium"
            >
              <span>Join Waitlist</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Availability Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm font-body"
            style={{ color: 'var(--text-taupe)' }}
          >
            Coming soon to iOS. Join the waitlist for early access.
          </motion.p>
        </div>
      </div>

      {/* Subtle Background Image Overlay - positioned right */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Decorative gradient orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, var(--wine-red) 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] rounded-full opacity-[0.02]"
          style={{ background: 'radial-gradient(circle, var(--champagne-gold) 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.02, 0.04, 0.02],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    </section>
  )
}
