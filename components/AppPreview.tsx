'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const phones = [
  {
    src: '/screenshots/dately_scratch.png',
    alt: 'Dately scratch-to-reveal card',
    className: '-rotate-6 scale-[0.85] origin-bottom-right',
    zIndex: 1,
  },
  {
    src: '/screenshots/dately_home.png',
    alt: 'Dately home screen',
    className: 'scale-100',
    zIndex: 3,
  },
  {
    src: '/screenshots/dately_dateplan.png',
    alt: 'Dately date plan itinerary',
    className: 'rotate-6 scale-[0.85] origin-bottom-left',
    zIndex: 1,
  },
]

export default function AppPreview() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, var(--bg-dark) 0%, var(--bg-dark-deep) 50%, var(--bg-dark) 100%)',
        }}
      />

      {/* Subtle glow behind phones */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 58, 52, 0.15) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
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

        {/* 3-phone fan layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center items-end gap-[-2rem] mb-10"
        >
          <div className="flex justify-center items-end">
            {phones.map((phone, i) => (
              <motion.div
                key={phone.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
                className={`relative ${phone.className}`}
                style={{
                  zIndex: phone.zIndex,
                  marginLeft: i === 0 ? 0 : '-2rem',
                }}
              >
                <Image
                  src={phone.src}
                  alt={phone.alt}
                  width={280}
                  height={580}
                  className="drop-shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))',
                  }}
                  priority={i === 1}
                />
              </motion.div>
            ))}
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
