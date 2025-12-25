'use client'

import { motion } from 'framer-motion'

const features = [
  {
    icon: '🎟️',
    title: 'Scratch & Reveal',
    description: 'Swipe to reveal your surprise date plan. The anticipation makes it exciting!',
    color: 'coral',
  },
  {
    icon: '✨',
    title: 'AI-Powered Plans',
    description: 'Personalized dates based on your preferences, budget, and local venues.',
    color: 'lavender',
  },
  {
    icon: '📸',
    title: 'Memory Scrapbook',
    description: 'Capture and save your favorite moments from each date together.',
    color: 'peach',
  },
]

const colorClasses = {
  coral: 'bg-coral-400/10 border-coral-400/20',
  lavender: 'bg-lavender-400/10 border-lavender-400/20',
  peach: 'bg-peach-400/10 border-peach-400/20',
}

export default function Features() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How it works
          </h2>
          <p className="text-lg text-warm-brown/60 max-w-xl mx-auto">
            Three simple steps to your perfect date night
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card rounded-2xl p-8 text-center ${colorClasses[feature.color as keyof typeof colorClasses]}`}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-warm-brown/60">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
