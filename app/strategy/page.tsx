'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// PIN for accessing this internal document
const CORRECT_PIN = '010699'

// Note: Since this is a client component, metadata is set via the head tag in the component
// The page is protected by PIN, but we also add noindex to prevent accidental indexing

export default function MarketingStrategyPage() {
  const [pin, setPin] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  // Check if already authenticated in session
  useEffect(() => {
    const auth = sessionStorage.getItem('strategy-auth')
    if (auth === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (pin === CORRECT_PIN) {
      setIsAuthenticated(true)
      sessionStorage.setItem('strategy-auth', 'true')
      setError(false)
    } else {
      setError(true)
      setPin('')
    }
  }

  if (!isAuthenticated) {
    return (
      <>
        <head>
          <meta name="robots" content="noindex, nofollow" />
          <title>Marketing Strategy | Dately Internal</title>
        </head>
        <main className="min-h-screen luxury-bg flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <h1
              className="text-3xl mb-2"
              style={{
                color: 'var(--text-ivory)',
                fontFamily: 'var(--font-libre), Georgia, serif'
              }}
            >
              Marketing Strategy
            </h1>
            <p
              className="text-sm"
              style={{
                color: 'var(--text-taupe)',
                fontFamily: 'var(--font-inter), system-ui, sans-serif'
              }}
            >
              Enter PIN to access internal documents
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={6}
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value.replace(/\D/g, ''))
                  setError(false)
                }}
                placeholder="Enter 6-digit PIN"
                className="w-full px-4 py-3 rounded-lg text-center text-xl tracking-[0.5em] font-mono"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: error ? '1px solid var(--wine-red)' : '1px solid rgba(199, 178, 138, 0.2)',
                  color: 'var(--text-ivory)',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif'
                }}
                autoFocus
              />
              {error && (
                <p className="text-sm mt-2 text-center" style={{ color: 'var(--wine-red)' }}>
                  Incorrect PIN. Please try again.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-medium btn-primary"
              style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
            >
              Access Strategy
            </button>
          </form>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="text-sm footer-link"
              style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
            >
              Back to Home
            </Link>
          </div>
        </div>
        </main>
      </>
    )
  }

  return (
    <>
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <title>Marketing Strategy | Dately Internal</title>
      </head>
      <main className="min-h-screen luxury-bg">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 transition-colors duration-200 footer-link"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <span
            className="text-xs px-3 py-1 rounded-full"
            style={{
              background: 'rgba(199, 178, 138, 0.1)',
              color: 'var(--champagne-gold)',
              border: '1px solid rgba(199, 178, 138, 0.2)',
              fontFamily: 'var(--font-inter), system-ui, sans-serif'
            }}
          >
            Internal Document
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl mb-4"
          style={{
            color: 'var(--text-ivory)',
            fontFamily: 'var(--font-libre), Georgia, serif'
          }}
        >
          Marketing & Business Strategy
        </h1>
        <p
          className="text-lg mb-8"
          style={{
            color: 'var(--text-linen)',
            fontFamily: 'var(--font-inter), system-ui, sans-serif'
          }}
        >
          Version 1.0 | Last Updated: January 2026
        </p>

        {/* Quick Nav */}
        <nav className="mb-12 p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}>
          <p className="text-xs uppercase tracking-wider mb-3" style={{ color: 'var(--text-taupe)', fontFamily: 'var(--font-inter)' }}>
            Quick Navigation
          </p>
          <div className="flex flex-wrap gap-2">
            {['Mission', 'Audiences', 'Positioning', 'Messaging', 'Channels', 'Campaigns', 'Visual Guidelines', 'Metrics'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-sm px-3 py-1 rounded-full transition-all"
                style={{
                  background: 'rgba(139, 58, 52, 0.1)',
                  color: 'var(--text-linen)',
                  border: '1px solid rgba(139, 58, 52, 0.2)',
                  fontFamily: 'var(--font-inter)'
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        {/* Content */}
        <div className="space-y-16">

          {/* Executive Summary */}
          <section className="p-6 rounded-xl" style={{ background: 'rgba(199, 178, 138, 0.05)', border: '1px solid rgba(199, 178, 138, 0.15)' }}>
            <h2 className="text-2xl mb-4" style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-libre)' }}>
              Executive Summary
            </h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
              Dately is an AI-powered date planning app that removes the friction from "What should we do?" Whether you're in a relationship trying to keep things fresh, or single and planning a date to impress someone new, Dately generates personalized, real-world itineraries you can book and enjoy.
            </p>
            <div className="inline-block px-4 py-2 rounded-lg" style={{ background: 'rgba(139, 58, 52, 0.2)', border: '1px solid rgba(139, 58, 52, 0.3)' }}>
              <p className="text-lg font-medium" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>
                Core Value Proposition: <span style={{ color: 'var(--champagne-gold)' }}>Stop planning. Start dating.</span>
              </p>
            </div>
          </section>

          {/* Mission */}
          <section id="mission">
            <h2 className="text-2xl mb-6" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>
              1. Mission & Vision
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}>
                <h3 className="text-sm uppercase tracking-wider mb-2" style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-inter)' }}>Mission</h3>
                <p style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
                  To eliminate the stress of date planning so people can focus on what matters: connection, experiences, and making memories.
                </p>
              </div>
              <div className="p-5 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}>
                <h3 className="text-sm uppercase tracking-wider mb-2" style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-inter)' }}>Vision</h3>
                <p style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
                  Become the default answer to "What should we do?" for every date—whether it's your 500th night together or your very first.
                </p>
              </div>
            </div>
            <div className="mt-6 p-5 rounded-lg" style={{ background: 'rgba(139, 58, 52, 0.1)', border: '1px solid rgba(139, 58, 52, 0.2)' }}>
              <h3 className="text-sm uppercase tracking-wider mb-2" style={{ color: 'var(--wine-red)', fontFamily: 'var(--font-inter)' }}>Brand Promise</h3>
              <p className="text-lg" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>
                Real venues. Real events. Zero guesswork. Dately handles the logistics so you can handle the romance.
              </p>
            </div>
          </section>

          {/* Target Audiences */}
          <section id="audiences">
            <h2 className="text-2xl mb-6" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>
              2. Target Audiences
            </h2>
            <div className="grid gap-6">
              {/* Couples */}
              <div className="p-6 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>
                    Segment A: Committed Couples
                  </h3>
                  <span className="px-3 py-1 rounded-full text-sm" style={{ background: 'rgba(199, 178, 138, 0.2)', color: 'var(--champagne-gold)' }}>60% Focus</span>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
                  <div>
                    <p className="font-medium mb-2" style={{ color: 'var(--text-ivory)' }}>Who They Are</p>
                    <ul className="space-y-1 opacity-80">
                      <li>• Ages 25-45, 1+ year relationships</li>
                      <li>• Dual-income professionals</li>
                      <li>• Urban/suburban dwellers</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-2" style={{ color: 'var(--text-ivory)' }}>Pain Points</p>
                    <ul className="space-y-1 opacity-80">
                      <li>• "We always do the same things"</li>
                      <li>• Decision fatigue after work</li>
                      <li>• Planning feels like work</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-2" style={{ color: 'var(--text-ivory)' }}>Motivations</p>
                    <ul className="space-y-1 opacity-80">
                      <li>• Keep relationship exciting</li>
                      <li>• Create shared memories</li>
                      <li>• Feel like "good partners"</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Singles */}
              <div className="p-6 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>
                    Segment B: Singles / New Relationships
                  </h3>
                  <span className="px-3 py-1 rounded-full text-sm" style={{ background: 'rgba(199, 178, 138, 0.2)', color: 'var(--champagne-gold)' }}>25% Focus</span>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
                  <div>
                    <p className="font-medium mb-2" style={{ color: 'var(--text-ivory)' }}>Who They Are</p>
                    <ul className="space-y-1 opacity-80">
                      <li>• Ages 22-38, actively dating</li>
                      <li>• First 0-6 months of relationship</li>
                      <li>• Both planning dates</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-2" style={{ color: 'var(--text-ivory)' }}>Pain Points</p>
                    <ul className="space-y-1 opacity-80">
                      <li>• Pressure to impress</li>
                      <li>• Don't know good date spots</li>
                      <li>• Generic dates feel uninspired</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-2" style={{ color: 'var(--text-ivory)' }}>Motivations</p>
                    <ul className="space-y-1 opacity-80">
                      <li>• Make great impression</li>
                      <li>• Stand out from others</li>
                      <li>• Reduce planning anxiety</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Special Occasions */}
              <div className="p-6 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>
                    Segment C: Long-Distance / Special Occasions
                  </h3>
                  <span className="px-3 py-1 rounded-full text-sm" style={{ background: 'rgba(199, 178, 138, 0.2)', color: 'var(--champagne-gold)' }}>15% Focus</span>
                </div>
                <p className="text-sm" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
                  Long-distance couples, anniversary/birthday planners, visitors in unfamiliar cities. High-stakes occasions that need to be perfect.
                </p>
              </div>
            </div>
          </section>

          {/* Positioning */}
          <section id="positioning">
            <h2 className="text-2xl mb-6" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>
              3. Positioning
            </h2>
            <div className="p-6 rounded-lg mb-6" style={{ background: 'rgba(199, 178, 138, 0.05)', border: '1px solid rgba(199, 178, 138, 0.15)' }}>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
                <strong style={{ color: 'var(--text-ivory)' }}>For couples and daters</strong> who want memorable experiences without the planning headache,{' '}
                <strong style={{ color: 'var(--champagne-gold)' }}>Dately</strong> is an AI-powered date planning app{' '}
                <strong style={{ color: 'var(--text-ivory)' }}>that</strong> generates complete, bookable itineraries based on your preferences and real local data.{' '}
                <strong style={{ color: 'var(--text-ivory)' }}>Unlike</strong> Yelp, Google, or generic "date ideas" articles,{' '}
                <strong style={{ color: 'var(--champagne-gold)' }}>Dately</strong> delivers surprise-ready plans with actual venues, times, and reservations—not a list of options to sort through.
              </p>
            </div>

            <h3 className="text-lg mb-4" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>Competitive Landscape</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(199, 178, 138, 0.2)' }}>
                    <th className="text-left py-3 px-4" style={{ color: 'var(--champagne-gold)' }}>Competitor</th>
                    <th className="text-left py-3 px-4" style={{ color: 'var(--champagne-gold)' }}>What They Do</th>
                    <th className="text-left py-3 px-4" style={{ color: 'var(--champagne-gold)' }}>Why Dately Wins</th>
                  </tr>
                </thead>
                <tbody style={{ color: 'var(--text-linen)' }}>
                  <tr style={{ borderBottom: '1px solid rgba(199, 178, 138, 0.1)' }}>
                    <td className="py-3 px-4">Yelp/Google</td>
                    <td className="py-3 px-4">Search-based discovery</td>
                    <td className="py-3 px-4">We PLAN, not list. Full itineraries, not 47 options.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(199, 178, 138, 0.1)' }}>
                    <td className="py-3 px-4">OpenTable/Resy</td>
                    <td className="py-3 px-4">Restaurant booking only</td>
                    <td className="py-3 px-4">Full date: dinner + activity + dessert</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(199, 178, 138, 0.1)' }}>
                    <td className="py-3 px-4">Pinterest/blogs</td>
                    <td className="py-3 px-4">Generic "date ideas"</td>
                    <td className="py-3 px-4">REAL venues in YOUR area, not theoretical</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(199, 178, 138, 0.1)' }}>
                    <td className="py-3 px-4">ChatGPT</td>
                    <td className="py-3 px-4">Can brainstorm ideas</td>
                    <td className="py-3 px-4">Real APIs—no hallucinated venues or hours</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Messaging */}
          <section id="messaging">
            <h2 className="text-2xl mb-6" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>
              4. Messaging Framework
            </h2>

            <div className="grid gap-4 mb-8">
              <div className="p-5 rounded-lg" style={{ background: 'rgba(139, 58, 52, 0.1)', border: '1px solid rgba(139, 58, 52, 0.2)' }}>
                <p className="text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--wine-red)', fontFamily: 'var(--font-inter)' }}>Primary Message (Universal)</p>
                <p className="text-lg" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>
                  "Stop planning. Start dating. Dately creates personalized date plans in seconds—real venues, real events, ready to book."
                </p>
              </div>
              <div className="p-5 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}>
                <p className="text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-inter)' }}>Couples Message</p>
                <p style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
                  "Keep the spark alive without the stress. Scratch to reveal surprise dates tailored to you both."
                </p>
              </div>
              <div className="p-5 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}>
                <p className="text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-inter)' }}>Singles/Daters Message</p>
                <p style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
                  "Plan dates that impress. AI-powered itineraries with the best spots in your area—so you can focus on the connection."
                </p>
              </div>
            </div>

            <h3 className="text-lg mb-4" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>Taglines</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full" style={{ background: 'rgba(139, 58, 52, 0.2)', color: 'var(--text-ivory)', border: '1px solid rgba(139, 58, 52, 0.3)' }}>
                Primary: "Stop planning. Start dating."
              </span>
              <span className="px-4 py-2 rounded-full" style={{ background: 'rgba(199, 178, 138, 0.1)', color: 'var(--text-linen)', border: '1px solid rgba(199, 178, 138, 0.2)' }}>
                Couples: "Date nights made easy."
              </span>
              <span className="px-4 py-2 rounded-full" style={{ background: 'rgba(199, 178, 138, 0.1)', color: 'var(--text-linen)', border: '1px solid rgba(199, 178, 138, 0.2)' }}>
                Singles: "Plan dates that impress."
              </span>
            </div>
          </section>

          {/* Channels */}
          <section id="channels">
            <h2 className="text-2xl mb-6" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>
              5. Marketing Channels
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-5 rounded-lg" style={{ background: 'rgba(139, 58, 52, 0.1)', border: '1px solid rgba(139, 58, 52, 0.2)' }}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-inter)' }}>Tier 1: Primary</h3>
                  <span className="text-xs px-2 py-1 rounded" style={{ background: 'rgba(139, 58, 52, 0.3)', color: 'var(--text-ivory)' }}>60%</span>
                </div>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
                  <li>• Instagram & TikTok (Organic + Paid)</li>
                  <li>• App Store Optimization (ASO)</li>
                </ul>
              </div>
              <div className="p-5 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-inter)' }}>Tier 2: Secondary</h3>
                  <span className="text-xs px-2 py-1 rounded" style={{ background: 'rgba(199, 178, 138, 0.2)', color: 'var(--champagne-gold)' }}>30%</span>
                </div>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
                  <li>• Influencer Partnerships</li>
                  <li>• Content Marketing / SEO</li>
                  <li>• Podcast Advertising</li>
                </ul>
              </div>
              <div className="p-5 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-inter)' }}>Tier 3: Experimental</h3>
                  <span className="text-xs px-2 py-1 rounded" style={{ background: 'rgba(199, 178, 138, 0.2)', color: 'var(--champagne-gold)' }}>10%</span>
                </div>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
                  <li>• Reddit communities</li>
                  <li>• Pinterest boards</li>
                  <li>• Referral program</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Campaigns */}
          <section id="campaigns">
            <h2 className="text-2xl mb-6" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>
              6. Campaign Concepts
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}>
                <h3 className="text-lg mb-2" style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-libre)' }}>Launch: "Date Different"</h3>
                <p className="text-sm mb-3" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
                  Challenge the status quo of boring, repetitive dates
                </p>
                <p className="text-sm italic" style={{ color: 'var(--text-taupe)', fontFamily: 'var(--font-inter)' }}>
                  Hook: "When's the last time you did something you've never done before... together?"
                </p>
              </div>
              <div className="p-5 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}>
                <h3 className="text-lg mb-2" style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-libre)' }}>Couples: "Your Next 52 Dates"</h3>
                <p className="text-sm mb-3" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
                  A year of weekly dates without the planning
                </p>
                <p className="text-sm italic" style={{ color: 'var(--text-taupe)', fontFamily: 'var(--font-inter)' }}>
                  Hook: "What if every week had a date you didn't have to plan?"
                </p>
              </div>
              <div className="p-5 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}>
                <h3 className="text-lg mb-2" style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-libre)' }}>Singles: "Date Like a Pro"</h3>
                <p className="text-sm mb-3" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
                  Give singles the confidence of a perfect plan
                </p>
                <p className="text-sm italic" style={{ color: 'var(--text-taupe)', fontFamily: 'var(--font-inter)' }}>
                  Hook: "They'll never know you didn't spend hours planning."
                </p>
              </div>
              <div className="p-5 rounded-lg" style={{ background: 'rgba(139, 58, 52, 0.1)', border: '1px solid rgba(139, 58, 52, 0.2)' }}>
                <h3 className="text-lg mb-2" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>Seasonal Campaigns</h3>
                <ul className="text-sm space-y-1" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
                  <li>• Valentine's: "Skip the clichés"</li>
                  <li>• Summer: "Adventure mode"</li>
                  <li>• Holidays: "Quality time {'>'} gifts"</li>
                  <li>• New Year: "Resolution: Date more"</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Visual Guidelines */}
          <section id="visual-guidelines">
            <h2 className="text-2xl mb-6" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>
              7. Visual Guidelines
            </h2>

            {/* Color Palette */}
            <h3 className="text-lg mb-4" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>Color Palette</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="p-4 rounded-lg text-center" style={{ background: '#E8B4A6' }}>
                <p className="font-mono text-sm" style={{ color: '#2D2926' }}>#E8B4A6</p>
                <p className="text-xs mt-1" style={{ color: '#2D2926' }}>Rose Gold</p>
              </div>
              <div className="p-4 rounded-lg text-center" style={{ background: '#0F0B0A', border: '1px solid rgba(199, 178, 138, 0.2)' }}>
                <p className="font-mono text-sm" style={{ color: '#F3EEE9' }}>#0F0B0A</p>
                <p className="text-xs mt-1" style={{ color: '#F3EEE9' }}>Warm Black</p>
              </div>
              <div className="p-4 rounded-lg text-center" style={{ background: '#F3EEE9' }}>
                <p className="font-mono text-sm" style={{ color: '#2D2926' }}>#F3EEE9</p>
                <p className="text-xs mt-1" style={{ color: '#2D2926' }}>Soft Ivory</p>
              </div>
              <div className="p-4 rounded-lg text-center" style={{ background: '#C7B28A' }}>
                <p className="font-mono text-sm" style={{ color: '#2D2926' }}>#C7B28A</p>
                <p className="text-xs mt-1" style={{ color: '#2D2926' }}>Champagne Gold</p>
              </div>
              <div className="p-4 rounded-lg text-center" style={{ background: '#8B3A34' }}>
                <p className="font-mono text-sm" style={{ color: '#F3EEE9' }}>#8B3A34</p>
                <p className="text-xs mt-1" style={{ color: '#F3EEE9' }}>Wine Red</p>
              </div>
              <div className="p-4 rounded-lg text-center" style={{ background: '#F5D6D0' }}>
                <p className="font-mono text-sm" style={{ color: '#2D2926' }}>#F5D6D0</p>
                <p className="text-xs mt-1" style={{ color: '#2D2926' }}>Blush Pink</p>
              </div>
              <div className="p-4 rounded-lg text-center" style={{ background: '#2D2926' }}>
                <p className="font-mono text-sm" style={{ color: '#F3EEE9' }}>#2D2926</p>
                <p className="text-xs mt-1" style={{ color: '#F3EEE9' }}>Charcoal</p>
              </div>
              <div className="p-4 rounded-lg text-center" style={{ background: '#181110', border: '1px solid rgba(199, 178, 138, 0.2)' }}>
                <p className="font-mono text-sm" style={{ color: '#F3EEE9' }}>#181110</p>
                <p className="text-xs mt-1" style={{ color: '#F3EEE9' }}>Deep Cocoa</p>
              </div>
            </div>

            {/* Typography */}
            <h3 className="text-lg mb-4" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>Typography</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-5 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}>
                <p className="text-3xl mb-2" style={{ fontFamily: 'var(--font-libre)', color: 'var(--text-ivory)' }}>Libre Baskerville</p>
                <p className="text-sm" style={{ color: 'var(--text-taupe)', fontFamily: 'var(--font-inter)' }}>
                  Headlines, titles, feature text • Regular & Bold
                </p>
                <div className="mt-4 space-y-1 text-sm" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
                  <p>Main Title: 48-72px Bold</p>
                  <p>Subtitle: 32-40px Regular</p>
                </div>
              </div>
              <div className="p-5 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}>
                <p className="text-3xl mb-2" style={{ fontFamily: 'var(--font-inter)', color: 'var(--text-ivory)' }}>Inter</p>
                <p className="text-sm" style={{ color: 'var(--text-taupe)', fontFamily: 'var(--font-inter)' }}>
                  Body, captions, UI, CTAs • Regular, Medium, SemiBold
                </p>
                <div className="mt-4 space-y-1 text-sm" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
                  <p>Body/CTA: 24-32px SemiBold</p>
                  <p>Caption: 18-24px Medium</p>
                </div>
              </div>
            </div>

            {/* Video Specs */}
            <h3 className="text-lg mb-4" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>Video Editing Specs</h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(199, 178, 138, 0.2)' }}>
                    <th className="text-left py-3 px-4" style={{ color: 'var(--champagne-gold)' }}>Platform</th>
                    <th className="text-left py-3 px-4" style={{ color: 'var(--champagne-gold)' }}>Aspect Ratio</th>
                    <th className="text-left py-3 px-4" style={{ color: 'var(--champagne-gold)' }}>Resolution</th>
                  </tr>
                </thead>
                <tbody style={{ color: 'var(--text-linen)' }}>
                  <tr style={{ borderBottom: '1px solid rgba(199, 178, 138, 0.1)' }}>
                    <td className="py-3 px-4">TikTok / Reels / Shorts</td>
                    <td className="py-3 px-4">9:16</td>
                    <td className="py-3 px-4 font-mono">1080x1920</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(199, 178, 138, 0.1)' }}>
                    <td className="py-3 px-4">Instagram Feed</td>
                    <td className="py-3 px-4">1:1 or 4:5</td>
                    <td className="py-3 px-4 font-mono">1080x1080 or 1080x1350</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(199, 178, 138, 0.1)' }}>
                    <td className="py-3 px-4">YouTube</td>
                    <td className="py-3 px-4">16:9</td>
                    <td className="py-3 px-4 font-mono">1920x1080</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Additional Specs */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}>
                <h4 className="font-medium mb-3" style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-inter)' }}>Text Overlays</h4>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
                  <li>• Background: <code className="px-1 rounded" style={{ background: 'rgba(0,0,0,0.3)' }}>#0F0B0A</code> at 70-80% opacity</li>
                  <li>• Text color: <code className="px-1 rounded" style={{ background: 'rgba(0,0,0,0.3)' }}>#F3EEE9</code> (Soft Ivory)</li>
                  <li>• Accent: <code className="px-1 rounded" style={{ background: 'rgba(0,0,0,0.3)' }}>#E8B4A6</code> (Rose Gold)</li>
                  <li>• Corner radius: 12-16px</li>
                </ul>
              </div>
              <div className="p-5 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}>
                <h4 className="font-medium mb-3" style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-inter)' }}>Motion & Audio</h4>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
                  <li>• Transitions: Soft dissolves, 0.3-0.5s</li>
                  <li>• Text animations: 0.4-0.8s, ease-out</li>
                  <li>• Music: Warm acoustic or lo-fi</li>
                  <li>• Style: Elegant, not flashy</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Metrics */}
          <section id="metrics">
            <h2 className="text-2xl mb-6" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>
              8. Key Metrics & Goals
            </h2>

            <h3 className="text-lg mb-4" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>North Star Metrics</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-lg text-center" style={{ background: 'rgba(139, 58, 52, 0.15)', border: '1px solid rgba(139, 58, 52, 0.3)' }}>
                <p className="text-2xl mb-1" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>Dates/Month</p>
                <p className="text-sm" style={{ color: 'var(--text-taupe)', fontFamily: 'var(--font-inter)' }}>Per active user</p>
              </div>
              <div className="p-4 rounded-lg text-center" style={{ background: 'rgba(139, 58, 52, 0.15)', border: '1px solid rgba(139, 58, 52, 0.3)' }}>
                <p className="text-2xl mb-1" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>W4 Retention</p>
                <p className="text-sm" style={{ color: 'var(--text-taupe)', fontFamily: 'var(--font-inter)' }}>Week 4 still active</p>
              </div>
              <div className="p-4 rounded-lg text-center" style={{ background: 'rgba(139, 58, 52, 0.15)', border: '1px solid rgba(139, 58, 52, 0.3)' }}>
                <p className="text-2xl mb-1" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>Scratch → Commit</p>
                <p className="text-sm" style={{ color: 'var(--text-taupe)', fontFamily: 'var(--font-inter)' }}>Conversion rate</p>
              </div>
            </div>

            <h3 className="text-lg mb-4" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>Month 6 Targets</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(199, 178, 138, 0.2)' }}>
                    <th className="text-left py-3 px-4" style={{ color: 'var(--champagne-gold)' }}>Stage</th>
                    <th className="text-left py-3 px-4" style={{ color: 'var(--champagne-gold)' }}>Metric</th>
                    <th className="text-left py-3 px-4" style={{ color: 'var(--champagne-gold)' }}>Goal</th>
                  </tr>
                </thead>
                <tbody style={{ color: 'var(--text-linen)' }}>
                  <tr style={{ borderBottom: '1px solid rgba(199, 178, 138, 0.1)' }}>
                    <td className="py-3 px-4">Awareness</td>
                    <td className="py-3 px-4">App Store impressions</td>
                    <td className="py-3 px-4 font-medium" style={{ color: 'var(--champagne-gold)' }}>500K/mo</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(199, 178, 138, 0.1)' }}>
                    <td className="py-3 px-4">Acquisition</td>
                    <td className="py-3 px-4">Downloads</td>
                    <td className="py-3 px-4 font-medium" style={{ color: 'var(--champagne-gold)' }}>50K/mo</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(199, 178, 138, 0.1)' }}>
                    <td className="py-3 px-4">Activation</td>
                    <td className="py-3 px-4">First scratch completed</td>
                    <td className="py-3 px-4 font-medium" style={{ color: 'var(--champagne-gold)' }}>70%</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(199, 178, 138, 0.1)' }}>
                    <td className="py-3 px-4">Revenue</td>
                    <td className="py-3 px-4">Free → Pro conversion</td>
                    <td className="py-3 px-4 font-medium" style={{ color: 'var(--champagne-gold)' }}>8%</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(199, 178, 138, 0.1)' }}>
                    <td className="py-3 px-4">Retention</td>
                    <td className="py-3 px-4">30-day retention</td>
                    <td className="py-3 px-4 font-medium" style={{ color: 'var(--champagne-gold)' }}>40%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Footer */}
          <div className="pt-12 mt-12" style={{ borderTop: '1px solid rgba(199, 178, 138, 0.1)' }}>
            <p className="text-sm text-center" style={{ color: 'var(--text-taupe)', fontFamily: 'var(--font-inter)' }}>
              This document should be referenced for all marketing content, campaigns, and communications.
              <br />
              Last updated: January 2026 • Version 1.0
            </p>
          </div>

        </div>
        </div>
      </main>
    </>
  )
}