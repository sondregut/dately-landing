'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="glass-card rounded-3xl p-12 md:p-16 bg-gradient-to-br from-coral-400/5 to-lavender-400/5 border border-coral-400/10">
          <div className="text-6xl mb-6">💕</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for your next adventure?
          </h2>
          <p className="text-lg text-warm-brown/60 mb-8 max-w-md mx-auto">
            Download Dately and start creating memorable moments together.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#"
              className="btn-glow flex items-center gap-3 px-6 py-4 bg-coral-400 text-white rounded-xl hover:bg-coral-500 transition-colors"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span className="font-semibold">App Store</span>
            </a>

            <a
              href="#"
              className="btn-glow flex items-center gap-3 px-6 py-4 bg-coral-400 text-white rounded-xl hover:bg-coral-500 transition-colors"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/>
              </svg>
              <span className="font-semibold">Google Play</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
