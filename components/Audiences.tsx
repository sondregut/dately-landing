'use client'

import { motion } from 'framer-motion'

const audiences = [
  {
    title: 'For Couples',
    description: 'Surprise your partner with curated date nights. From cozy dinners to adventurous outings, keep the spark alive with fresh ideas every week.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    title: 'For Singles',
    description: 'Discover exciting solo adventures and social experiences. The perfect way to explore your city, try new things, and make memories on your own terms.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
  },
]

export default function Audiences() {
  return (
    <section className="section-padding relative">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, var(--bg-dark) 0%, var(--bg-dark-mid) 100%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="decorative-line rotate-180" />
            <span className="display-tagline" style={{ color: 'var(--text-linen)' }}>
              For Everyone
            </span>
            <div className="decorative-line" />
          </div>
          <h2 className="section-heading">Great Dates, Your Way</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiences.map((audience, i) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-10 transition-all duration-300"
            >
              <div className="mb-6" style={{ color: 'var(--champagne-gold)' }}>
                {audience.icon}
              </div>
              <h3 className="font-heading text-2xl mb-4" style={{ color: 'var(--text-ivory)' }}>
                {audience.title}
              </h3>
              <p className="font-body text-base leading-relaxed" style={{ color: 'var(--text-linen)' }}>
                {audience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
