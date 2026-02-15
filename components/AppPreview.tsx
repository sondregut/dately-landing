'use client'

import { motion } from 'framer-motion'

export default function AppPreview() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, var(--bg-dark) 0%, var(--bg-dark-deep) 50%, var(--bg-dark) 100%)',
        }}
      />

      {/* Subtle glow behind phone */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 58, 52, 0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="decorative-line rotate-180" />
            <span className="display-tagline" style={{ color: 'var(--text-linen)' }}>
              Sneak Peek
            </span>
            <div className="decorative-line" />
          </div>
          <h2 className="section-heading">Your Next Date, in Your Pocket</h2>
        </motion.div>

        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <div className="relative">
            {/* Phone frame */}
            <div
              className="w-[280px] h-[580px] rounded-[3rem] p-3 relative"
              style={{
                background: 'linear-gradient(145deg, #2a2220 0%, #1a1412 100%)',
                boxShadow: '0 25px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(199, 178, 138, 0.1)',
              }}
            >
              {/* Screen */}
              <div
                className="w-full h-full rounded-[2.3rem] overflow-hidden flex flex-col items-center justify-center relative"
                style={{
                  background: 'linear-gradient(180deg, var(--bg-dark) 0%, var(--bg-dark-mid) 50%, var(--bg-dark-deep) 100%)',
                }}
              >
                {/* Notch */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 rounded-b-2xl"
                  style={{ background: '#1a1412' }}
                />

                {/* Content inside phone */}
                <div className="flex flex-col items-center gap-6 px-6">
                  {/* Mini logo */}
                  <span className="font-heading text-2xl" style={{ color: 'var(--text-ivory)' }}>
                    Dately
                  </span>

                  {/* Scratch card preview */}
                  <div
                    className="w-44 h-56 rounded-2xl flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, var(--wine-red) 0%, var(--oxblood) 50%, var(--burgundy) 100%)',
                      boxShadow: '0 8px 30px rgba(139, 58, 52, 0.3)',
                    }}
                  >
                    <div className="text-center">
                      <svg className="w-10 h-10 mx-auto mb-3 opacity-60" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24" style={{ color: 'var(--champagne-gold)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
                      </svg>
                      <p className="text-xs font-body opacity-60" style={{ color: 'var(--champagne-gold)' }}>
                        Scratch to reveal
                      </p>
                    </div>
                  </div>

                  {/* Coming soon badge */}
                  <span
                    className="text-xs font-body font-medium px-4 py-1.5 rounded-full"
                    style={{
                      background: 'rgba(199, 178, 138, 0.1)',
                      border: '1px solid rgba(199, 178, 138, 0.2)',
                      color: 'var(--champagne-gold)',
                    }}
                  >
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body text-base"
          style={{ color: 'var(--text-linen)' }}
        >
          Available soon on iOS
        </motion.p>
      </div>
    </section>
  )
}
