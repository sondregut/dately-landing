'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const steps = [
  {
    number: '01',
    title: 'Choose Your Vibe',
    description: 'Pick a mood, budget, and time. Tell us what you\'re feeling — adventurous, cozy, romantic, or spontaneous.',
    screenshot: '/screenshots/dately_quiz.png',
    screenshotAlt: 'Dately vibe picker screen',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Scratch to Reveal',
    description: 'AI generates a surprise date plan with real local venues. Scratch the card to reveal each activity.',
    screenshot: '/screenshots/dately_scratch.png',
    screenshotAlt: 'Dately scratch-to-reveal card',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Go on Your Date',
    description: 'Follow the itinerary with real directions, save memories to your scrapbook, and rate the experience.',
    screenshot: '/screenshots/dately_dateplan.png',
    screenshotAlt: 'Dately date plan itinerary',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding relative">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, var(--bg-dark-deep) 0%, var(--bg-dark) 50%, var(--bg-dark-mid) 100%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
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
              Simple as 1, 2, 3
            </span>
            <div className="decorative-line" />
          </div>
          <h2 className="section-heading">How It Works</h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
          {/* Connecting lines (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[calc(33.33%_-_1rem)] right-[calc(33.33%_-_1rem)] h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--champagne-gold), transparent)', opacity: 0.2 }} />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center px-4"
            >
              {/* Number badge */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-6 text-sm font-body font-semibold" style={{ background: 'rgba(139, 58, 52, 0.15)', border: '1px solid rgba(139, 58, 52, 0.3)', color: 'var(--champagne-gold)' }}>
                {step.number}
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-4" style={{ color: 'var(--champagne-gold)' }}>
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl mb-3" style={{ color: 'var(--text-ivory)' }}>
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm leading-relaxed max-w-xs mx-auto mb-6" style={{ color: 'var(--text-linen)' }}>
                {step.description}
              </p>

              {/* Screenshot */}
              <div className="flex justify-center">
                <Image
                  src={step.screenshot}
                  alt={step.screenshotAlt}
                  width={180}
                  height={370}
                  className="rounded-lg"
                  style={{
                    filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.4))',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
