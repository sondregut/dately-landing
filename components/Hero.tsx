'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-coral-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-lavender-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-coral-400/10 border border-coral-400/20"
        >
          <span className="text-lg">✨</span>
          <span className="text-sm font-medium text-coral-500">Date nights made easy</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Date Nights,{' '}
          <span className="gradient-text">Simplified</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-warm-brown/70 mb-12 max-w-2xl mx-auto"
        >
          Scratch to reveal surprise date plans powered by AI.
          Create unforgettable memories with your partner.
        </motion.p>

        {/* Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mx-auto mb-12 w-64 md:w-72"
        >
          <div className="relative phone-shine overflow-hidden rounded-[3rem] bg-gradient-to-br from-coral-400 to-rose-400 p-1 shadow-2xl shadow-coral-400/30">
            <div className="rounded-[2.75rem] bg-cream-100 aspect-[9/19] flex items-center justify-center overflow-hidden">
              {/* Placeholder app screen */}
              <div className="w-full h-full bg-gradient-to-b from-cream-50 to-cream-200 flex flex-col items-center justify-center p-6">
                <div className="text-6xl mb-4">💕</div>
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-coral-400/20 to-lavender-400/20 border-2 border-dashed border-coral-400/30 flex items-center justify-center mb-4">
                  <span className="text-coral-400 text-sm font-medium">Scratch me!</span>
                </div>
                <div className="w-24 h-3 bg-coral-400/20 rounded-full mb-2" />
                <div className="w-32 h-3 bg-lavender-400/20 rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Download Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* App Store Button */}
          <a
            href="#"
            className="btn-glow flex items-center gap-3 px-6 py-4 bg-warm-brown text-white rounded-xl hover:bg-warm-brown/90 transition-colors"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-80">Download on the</div>
              <div className="text-lg font-semibold -mt-1">App Store</div>
            </div>
          </a>

          {/* Google Play Button */}
          <a
            href="#"
            className="btn-glow flex items-center gap-3 px-6 py-4 bg-warm-brown text-white rounded-xl hover:bg-warm-brown/90 transition-colors"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-80">Get it on</div>
              <div className="text-lg font-semibold -mt-1">Google Play</div>
            </div>
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8 text-sm text-warm-brown/50"
        >
          Join thousands of couples making date night fun again
        </motion.p>
      </div>
    </section>
  )
}
