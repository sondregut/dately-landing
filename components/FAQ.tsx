'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const faqs = [
  {
    question: 'What is Dately?',
    answer: 'Dately is an iOS app designed for couples and singles who want to break out of date-night routines without spending hours planning. Instead of choosing a restaurant or activity yourself, you set a few preferences — your mood (romantic, adventurous, cozy, or spontaneous), your available time, and your budget — and Dately\'s AI generates a complete, multi-stop date itinerary using real venues from your area. The surprise element is central to the experience: each activity in your plan is hidden behind a virtual scratch card. You swipe to reveal each stop one at a time, turning the planning process itself into part of the date. All venues are sourced from Google Places, Ticketmaster, and local event APIs, so every suggestion is a real location you can actually visit.',
  },
  {
    question: 'How does the scratch-to-reveal feature work?',
    answer: 'Once Dately generates your date plan, each activity — whether it\'s a dinner reservation, a live show, or a scenic walk — is hidden behind an interactive scratch card within the app. You swipe your finger across the card to reveal each part of your itinerary one at a time. This means you can choose to reveal the entire plan at once if you prefer to prepare, or reveal each stop just before you head there for maximum spontaneity. The scratch mechanic was designed to bring back the excitement of not knowing what\'s next, turning an ordinary evening into something that feels like an adventure. After your date, you can save the revealed plan to your scrapbook with photos and notes.',
  },
  {
    question: 'Is Dately free?',
    answer: 'Dately offers a free tier that gives you a limited number of AI-generated date plans per month — enough to try the app and see how it works for you. If you want more, premium plans unlock unlimited date generation, advanced customization options like dietary restrictions and accessibility preferences, and exclusive themed date packs (such as anniversary specials, seasonal activities, and adventure challenges). Pricing details will be announced closer to launch. All plans are billed through the Apple App Store, so you can manage or cancel your subscription anytime from your iPhone settings. There are no hidden fees, and free users still get the full scratch-to-reveal experience.',
  },
  {
    question: 'What cities is Dately available in?',
    answer: 'Dately works in any city worldwide. The app uses your location to query real-time venue and event data from multiple sources, so it adapts to wherever you are. Whether you\'re planning a date night in New York, a weekend outing in London, or exploring a smaller town you\'re visiting for the first time, Dately will find real restaurants, bars, attractions, concerts, and local events near you. The quality of suggestions naturally varies by location density — a major city will have more options than a rural area — but the AI is designed to create great plans with whatever is available. You can also set a custom location if you want to plan ahead for a trip.',
  },
  {
    question: 'How does Dately find venues and events?',
    answer: 'Dately combines multiple real-time data sources to build your date itinerary. Google Places provides restaurants, cafes, bars, and local attractions with up-to-date information on ratings, hours, and pricing. Ticketmaster supplies concerts, sports events, and live shows happening near you. Local event APIs surface community events like food festivals, art walks, and pop-up markets. The AI — powered by Claude from Anthropic — then takes your preferences (mood, budget, time, dietary needs) and weaves these real venues into a coherent, multi-stop plan that flows logically. Every single suggestion is a real place with a real address that you can navigate to. Dately never invents fictional venues or fabricates business details.',
  },
  {
    question: 'When does Dately launch?',
    answer: 'Dately is currently in active development with a launch planned for 2026. The app is being built as a native iOS application and will be available on the Apple App Store. If you join the waitlist, you\'ll be among the first to know when the app goes live and may receive early access before the public launch. Waitlist members will also get updates on new features as they\'re built, including the date scrapbook, social sharing, and themed date packs. We\'re building in public and sharing progress on our Instagram (@trydately) and TikTok (@datelyapp) if you want to follow along.',
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

      <motion.div
        initial={false}
        animate={{
          height: open ? 'auto' : 0,
          opacity: open ? 1 : 0,
        }}
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
