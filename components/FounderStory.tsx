'use client'

import { motion } from 'framer-motion'

export default function FounderStory() {
  return (
    <section className="section-padding relative">
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(139, 58, 52, 0.05) 0%, transparent 60%), linear-gradient(180deg, var(--bg-dark) 0%, var(--bg-dark-mid) 100%)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="decorative-line rotate-180" />
            <span className="display-tagline" style={{ color: 'var(--text-linen)' }}>
              Our Story
            </span>
            <div className="decorative-line" />
          </div>
          <h2 className="section-heading mb-8">Why We Built Dately</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card rounded-2xl p-8 md:p-12 text-left"
        >
          <p
            className="font-body text-base leading-relaxed mb-4"
            style={{ color: 'var(--text-linen)' }}
          >
            Dately started with a simple frustration: spending more time deciding what to do than
            actually going out. Every couple knows the drill &mdash; you trade suggestions back and
            forth, scroll through review sites, and eventually just default to the same place again.
          </p>
          <p
            className="font-body text-base leading-relaxed mb-4"
            style={{ color: 'var(--text-linen)' }}
          >
            We wanted an app that removes that friction entirely. One that knows your city, respects
            your budget, matches your mood &mdash; and adds an element of surprise that makes even a
            Tuesday night feel like an adventure.
          </p>
          <p
            className="font-body text-base leading-relaxed mb-6"
            style={{ color: 'var(--text-linen)' }}
          >
            So we built Dately. Every venue is real, every
            plan is personalized by AI that actually understands what makes a great date. And the
            scratch-to-reveal mechanic? That was born from the idea that anticipation is half the fun.
          </p>
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-heading text-lg"
              style={{
                background: 'linear-gradient(135deg, var(--wine-red), var(--oxblood))',
                color: 'var(--text-ivory)',
              }}
            >
              S
            </div>
            <div>
              <p className="font-body text-sm font-medium" style={{ color: 'var(--text-ivory)' }}>
                Sondre Guttormsen
              </p>
              <p className="font-body text-xs" style={{ color: 'var(--text-taupe)' }}>
                Founder &amp; Developer
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
