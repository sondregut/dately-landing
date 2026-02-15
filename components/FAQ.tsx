'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'What is Dately?',
    answer: 'Dately is an iOS app that creates AI-powered surprise date plans. You set your mood, budget, and time — then scratch to reveal a personalized itinerary built from real local venues and events.',
  },
  {
    question: 'How does the scratch-to-reveal feature work?',
    answer: 'Once your date plan is generated, each activity is hidden behind a scratch card. Swipe to reveal each part of your itinerary one at a time — adding a fun element of surprise to your date night.',
  },
  {
    question: 'Is Dately free?',
    answer: 'Dately will offer a free tier with a limited number of date plans per month. Premium plans unlock unlimited dates, advanced customization, and exclusive date packs.',
  },
  {
    question: 'What cities is Dately available in?',
    answer: 'Dately works in any city. We use Google Places, Ticketmaster, and local event data to find real venues and experiences wherever you are.',
  },
  {
    question: 'How does Dately find venues and events?',
    answer: 'We combine multiple data sources — Google Places for restaurants, cafes, and attractions; Ticketmaster for concerts and shows; and local event APIs for community events. Every suggestion is a real place you can visit.',
  },
  {
    question: 'When does Dately launch?',
    answer: 'We\'re currently in development with a launch planned for 2026. Join the waitlist to get early access and be the first to know when we go live.',
  },
]

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="border-b"
      style={{ borderColor: 'rgba(199, 178, 138, 0.1)' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left"
      >
        <span className="font-heading text-lg pr-8" style={{ color: 'var(--text-ivory)' }}>
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
          style={{ color: 'var(--champagne-gold)' }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p
              className="font-body text-base leading-relaxed pb-6"
              style={{ color: 'var(--text-linen)' }}
            >
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="section-padding relative">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, var(--bg-dark-mid) 0%, var(--bg-dark-deep) 100%)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="decorative-line rotate-180" />
            <span className="display-tagline" style={{ color: 'var(--text-linen)' }}>
              Questions
            </span>
            <div className="decorative-line" />
          </div>
          <h2 className="section-heading">Frequently Asked Questions</h2>
        </motion.div>

        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
