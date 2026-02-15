'use client'

export default function StrategyPage() {
  return (
    <div>
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
          {['Mission', 'Audiences', 'Positioning', 'Messaging', 'Channels', 'Campaigns', 'Visual Guidelines', 'Metrics', 'App Store Copy', 'Social Copy', 'Video Scripts', 'Email', 'Testimonials', 'Hashtags'].map((item) => (
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
            Dately is an AI-powered date planning app that removes the friction from &quot;What should we do?&quot; Whether you&apos;re in a relationship trying to keep things fresh, or single and planning a date to impress someone new, Dately generates personalized, real-world itineraries you can book and enjoy.
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
                Become the default answer to &quot;What should we do?&quot; for every date—whether it&apos;s your 500th night together or your very first.
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
            <div className="p-6 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>Segment A: Committed Couples</h3>
                <span className="px-3 py-1 rounded-full text-sm" style={{ background: 'rgba(199, 178, 138, 0.2)', color: 'var(--champagne-gold)' }}>60% Focus</span>
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-sm" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
                <div>
                  <p className="font-medium mb-2" style={{ color: 'var(--text-ivory)' }}>Who They Are</p>
                  <ul className="space-y-1 opacity-80">
                    <li>Ages 25-45, 1+ year relationships</li>
                    <li>Dual-income professionals</li>
                    <li>Urban/suburban dwellers</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2" style={{ color: 'var(--text-ivory)' }}>Pain Points</p>
                  <ul className="space-y-1 opacity-80">
                    <li>&quot;We always do the same things&quot;</li>
                    <li>Decision fatigue after work</li>
                    <li>Planning feels like work</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2" style={{ color: 'var(--text-ivory)' }}>Motivations</p>
                  <ul className="space-y-1 opacity-80">
                    <li>Keep relationship exciting</li>
                    <li>Create shared memories</li>
                    <li>Feel like &quot;good partners&quot;</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>Segment B: Singles / New Relationships</h3>
                <span className="px-3 py-1 rounded-full text-sm" style={{ background: 'rgba(199, 178, 138, 0.2)', color: 'var(--champagne-gold)' }}>25% Focus</span>
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-sm" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
                <div>
                  <p className="font-medium mb-2" style={{ color: 'var(--text-ivory)' }}>Who They Are</p>
                  <ul className="space-y-1 opacity-80">
                    <li>Ages 22-38, actively dating</li>
                    <li>First 0-6 months of relationship</li>
                    <li>Both planning dates</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2" style={{ color: 'var(--text-ivory)' }}>Pain Points</p>
                  <ul className="space-y-1 opacity-80">
                    <li>Pressure to impress</li>
                    <li>Don&apos;t know good date spots</li>
                    <li>Generic dates feel uninspired</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2" style={{ color: 'var(--text-ivory)' }}>Motivations</p>
                  <ul className="space-y-1 opacity-80">
                    <li>Make great impression</li>
                    <li>Stand out from others</li>
                    <li>Reduce planning anxiety</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>Segment C: Long-Distance / Special Occasions</h3>
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
              <strong style={{ color: 'var(--text-ivory)' }}>Unlike</strong> Yelp, Google, or generic &quot;date ideas&quot; articles,{' '}
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
                {[
                  ['Yelp/Google', 'Search-based discovery', 'We PLAN, not list. Full itineraries, not 47 options.'],
                  ['OpenTable/Resy', 'Restaurant booking only', 'Full date: dinner + activity + dessert'],
                  ['Pinterest/blogs', 'Generic "date ideas"', 'REAL venues in YOUR area, not theoretical'],
                  ['ChatGPT', 'Can brainstorm ideas', 'Real APIs—no hallucinated venues or hours'],
                ].map(([comp, what, why], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(199, 178, 138, 0.1)' }}>
                    <td className="py-3 px-4">{comp}</td>
                    <td className="py-3 px-4">{what}</td>
                    <td className="py-3 px-4">{why}</td>
                  </tr>
                ))}
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
                &quot;Stop planning. Start dating. Dately creates personalized date plans in seconds—real venues, real events, ready to book.&quot;
              </p>
            </div>
            <div className="p-5 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}>
              <p className="text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-inter)' }}>Couples Message</p>
              <p style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
                &quot;Keep the spark alive without the stress. Scratch to reveal surprise dates tailored to you both.&quot;
              </p>
            </div>
            <div className="p-5 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}>
              <p className="text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-inter)' }}>Singles/Daters Message</p>
              <p style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
                &quot;Plan dates that impress. AI-powered itineraries with the best spots in your area—so you can focus on the connection.&quot;
              </p>
            </div>
          </div>
          <h3 className="text-lg mb-4" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>Taglines</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Primary: "Stop planning. Start dating."', accent: true },
              { label: 'Couples: "Date nights made easy."', accent: false },
              { label: 'Singles: "Plan dates that impress."', accent: false },
            ].map((t) => (
              <span key={t.label} className="px-4 py-2 rounded-full" style={{
                background: t.accent ? 'rgba(139, 58, 52, 0.2)' : 'rgba(199, 178, 138, 0.1)',
                color: t.accent ? 'var(--text-ivory)' : 'var(--text-linen)',
                border: t.accent ? '1px solid rgba(139, 58, 52, 0.3)' : '1px solid rgba(199, 178, 138, 0.2)',
              }}>
                {t.label}
              </span>
            ))}
          </div>
        </section>

        {/* Channels */}
        <section id="channels">
          <h2 className="text-2xl mb-6" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>
            5. Marketing Channels
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Tier 1: Primary', pct: '60%', accent: true, items: ['Instagram & TikTok (Organic + Paid)', 'App Store Optimization (ASO)'] },
              { title: 'Tier 2: Secondary', pct: '30%', accent: false, items: ['Influencer Partnerships', 'Content Marketing / SEO', 'Podcast Advertising'] },
              { title: 'Tier 3: Experimental', pct: '10%', accent: false, items: ['Reddit communities', 'Pinterest boards', 'Referral program'] },
            ].map((tier) => (
              <div key={tier.title} className="p-5 rounded-lg" style={{ background: tier.accent ? 'rgba(139, 58, 52, 0.1)' : 'rgba(255, 255, 255, 0.03)', border: tier.accent ? '1px solid rgba(139, 58, 52, 0.2)' : '1px solid rgba(199, 178, 138, 0.1)' }}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-inter)' }}>{tier.title}</h3>
                  <span className="text-xs px-2 py-1 rounded" style={{ background: tier.accent ? 'rgba(139, 58, 52, 0.3)' : 'rgba(199, 178, 138, 0.2)', color: tier.accent ? 'var(--text-ivory)' : 'var(--champagne-gold)' }}>{tier.pct}</span>
                </div>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
                  {tier.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Campaigns */}
        <section id="campaigns">
          <h2 className="text-2xl mb-6" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>
            6. Campaign Concepts
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Launch: "Date Different"', desc: 'Challenge the status quo of boring, repetitive dates', hook: 'When\'s the last time you did something you\'ve never done before... together?' },
              { title: 'Couples: "Your Next 52 Dates"', desc: 'A year of weekly dates without the planning', hook: 'What if every week had a date you didn\'t have to plan?' },
              { title: 'Singles: "Date Like a Pro"', desc: 'Give singles the confidence of a perfect plan', hook: 'They\'ll never know you didn\'t spend hours planning.' },
            ].map((c) => (
              <div key={c.title} className="p-5 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}>
                <h3 className="text-lg mb-2" style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-libre)' }}>{c.title}</h3>
                <p className="text-sm mb-3" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>{c.desc}</p>
                <p className="text-sm italic" style={{ color: 'var(--text-taupe)', fontFamily: 'var(--font-inter)' }}>Hook: &quot;{c.hook}&quot;</p>
              </div>
            ))}
            <div className="p-5 rounded-lg" style={{ background: 'rgba(139, 58, 52, 0.1)', border: '1px solid rgba(139, 58, 52, 0.2)' }}>
              <h3 className="text-lg mb-2" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>Seasonal Campaigns</h3>
              <ul className="text-sm space-y-1" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
                <li>Valentine&apos;s: &quot;Skip the clich&eacute;s&quot;</li>
                <li>Summer: &quot;Adventure mode&quot;</li>
                <li>Holidays: &quot;Quality time {'>'} gifts&quot;</li>
                <li>New Year: &quot;Resolution: Date more&quot;</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Visual Guidelines */}
        <section id="visual-guidelines">
          <h2 className="text-2xl mb-6" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>
            7. Visual Guidelines
          </h2>
          <h3 className="text-lg mb-4" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>Color Palette</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { hex: '#E8B4A6', name: 'Rose Gold', dark: true },
              { hex: '#0F0B0A', name: 'Warm Black', dark: false, border: true },
              { hex: '#F3EEE9', name: 'Soft Ivory', dark: true },
              { hex: '#C7B28A', name: 'Champagne Gold', dark: true },
              { hex: '#8B3A34', name: 'Wine Red', dark: false },
              { hex: '#F5D6D0', name: 'Blush Pink', dark: true },
              { hex: '#2D2926', name: 'Charcoal', dark: false },
              { hex: '#181110', name: 'Deep Cocoa', dark: false, border: true },
            ].map((c) => (
              <div key={c.hex} className="p-4 rounded-lg text-center" style={{ background: c.hex, border: c.border ? '1px solid rgba(199, 178, 138, 0.2)' : undefined }}>
                <p className="font-mono text-sm" style={{ color: c.dark ? '#2D2926' : '#F3EEE9' }}>{c.hex}</p>
                <p className="text-xs mt-1" style={{ color: c.dark ? '#2D2926' : '#F3EEE9' }}>{c.name}</p>
              </div>
            ))}
          </div>

          <h3 className="text-lg mb-4" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>Typography</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-5 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}>
              <p className="text-3xl mb-2" style={{ fontFamily: 'var(--font-libre)', color: 'var(--text-ivory)' }}>Libre Baskerville</p>
              <p className="text-sm" style={{ color: 'var(--text-taupe)', fontFamily: 'var(--font-inter)' }}>Headlines, titles, feature text</p>
              <div className="mt-4 space-y-1 text-sm" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
                <p>Main Title: 48-72px Bold</p>
                <p>Subtitle: 32-40px Regular</p>
              </div>
            </div>
            <div className="p-5 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}>
              <p className="text-3xl mb-2" style={{ fontFamily: 'var(--font-inter)', color: 'var(--text-ivory)' }}>Inter</p>
              <p className="text-sm" style={{ color: 'var(--text-taupe)', fontFamily: 'var(--font-inter)' }}>Body, captions, UI, CTAs</p>
              <div className="mt-4 space-y-1 text-sm" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
                <p>Body/CTA: 24-32px SemiBold</p>
                <p>Caption: 18-24px Medium</p>
              </div>
            </div>
          </div>

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
                {[
                  ['TikTok / Reels / Shorts', '9:16', '1080x1920'],
                  ['Instagram Feed', '1:1 or 4:5', '1080x1080 or 1080x1350'],
                  ['YouTube', '16:9', '1920x1080'],
                ].map(([platform, ratio, res], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(199, 178, 138, 0.1)' }}>
                    <td className="py-3 px-4">{platform}</td>
                    <td className="py-3 px-4">{ratio}</td>
                    <td className="py-3 px-4 font-mono">{res}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}>
              <h4 className="font-medium mb-3" style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-inter)' }}>Text Overlays</h4>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
                <li>Background: <code className="px-1 rounded" style={{ background: 'rgba(0,0,0,0.3)' }}>#0F0B0A</code> at 70-80% opacity</li>
                <li>Text color: <code className="px-1 rounded" style={{ background: 'rgba(0,0,0,0.3)' }}>#F3EEE9</code> (Soft Ivory)</li>
                <li>Accent: <code className="px-1 rounded" style={{ background: 'rgba(0,0,0,0.3)' }}>#E8B4A6</code> (Rose Gold)</li>
                <li>Corner radius: 12-16px</li>
              </ul>
            </div>
            <div className="p-5 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}>
              <h4 className="font-medium mb-3" style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-inter)' }}>Motion & Audio</h4>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
                <li>Transitions: Soft dissolves, 0.3-0.5s</li>
                <li>Text animations: 0.4-0.8s, ease-out</li>
                <li>Music: Warm acoustic or lo-fi</li>
                <li>Style: Elegant, not flashy</li>
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
            {[
              { metric: 'Dates/Month', sub: 'Per active user' },
              { metric: 'W4 Retention', sub: 'Week 4 still active' },
              { metric: 'Scratch \u2192 Commit', sub: 'Conversion rate' },
            ].map((m) => (
              <div key={m.metric} className="p-4 rounded-lg text-center" style={{ background: 'rgba(139, 58, 52, 0.15)', border: '1px solid rgba(139, 58, 52, 0.3)' }}>
                <p className="text-2xl mb-1" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>{m.metric}</p>
                <p className="text-sm" style={{ color: 'var(--text-taupe)', fontFamily: 'var(--font-inter)' }}>{m.sub}</p>
              </div>
            ))}
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
                {[
                  ['Awareness', 'App Store impressions', '500K/mo'],
                  ['Acquisition', 'Downloads', '50K/mo'],
                  ['Activation', 'First scratch completed', '70%'],
                  ['Revenue', 'Free \u2192 Pro conversion', '8%'],
                  ['Retention', '30-day retention', '40%'],
                ].map(([stage, metric, goal], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(199, 178, 138, 0.1)' }}>
                    <td className="py-3 px-4">{stage}</td>
                    <td className="py-3 px-4">{metric}</td>
                    <td className="py-3 px-4 font-medium" style={{ color: 'var(--champagne-gold)' }}>{goal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Sections 9-16 continue with same pattern - App Store, Social, Video, Email, Landing, Testimonials, Competitors, Hashtags */}

        {/* App Store Copy */}
        <section id="app-store-copy">
          <h2 className="text-2xl mb-6" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>9. App Store Copy</h2>
          <div className="mb-8">
            <h3 className="text-lg mb-4" style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-libre)' }}>Full Description (Universal)</h3>
            <div className="p-6 rounded-lg text-sm whitespace-pre-wrap" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(199, 178, 138, 0.1)', color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
{`DATELY: The AI Date Planner That Actually Works

Stop planning. Start dating. Whether you're keeping the spark alive or planning a first date to impress, Dately creates personalized itineraries in seconds—real venues, real events, ready to book.

SCRATCH TO REVEAL
Every date is a surprise. Scratch interactive cards to reveal AI-generated plans tailored to your vibe and budget. It's like a lottery ticket for your love life.

PERFECT FOR COUPLES & SINGLES
• Couples: Break the routine. Discover new experiences together.
• Singles: Plan dates that impress without the stress.
• New relationships: Focus on the connection, not the logistics.

REAL VENUES. REAL EXPERIENCES.
We don't guess—we know. Using real data from Google Places, Ticketmaster, and live sources, each date includes:
• Specific venue addresses and hours
• Parking tips and reviews
• Reservation links (book directly)
• Travel times between stops
• Cost estimates upfront

AI THAT KNOWS YOUR STYLE
Based on your preferences—budget, energy level, dietary needs, and vibe—our AI (powered by Claude) creates personalized itineraries. No generic suggestions.

8 DATE PACKS FOR ANY MOOD
• Local Events (concerts, shows, festivals)
• Foodie Adventures (restaurant discoveries)
• Outdoor & Active (hikes, sports, adventures)
• Cozy Nights In (movies, cooking at home)
• Budget Friendly (amazing dates, small price)
• Adventure Mode (spontaneous surprises)
• Arts & Culture (museums, galleries, theater)
• Spicy (intimate experiences for adults, 18+)

FREE VS PRO
Free: 2 dates per week, 1 re-roll daily
Pro: Unlimited scratches, 5 re-rolls daily, all packs including Spicy

7-DAY FREE TRIAL • CANCEL ANYTIME

Stop saying "I don't know, what do you want to do?"
Download Dately today.`}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg mb-4" style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-libre)' }}>Short Version (Couples)</h3>
              <div className="p-5 rounded-lg text-sm whitespace-pre-wrap" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(199, 178, 138, 0.1)', color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
{`DATELY: Date Nights Made Easy

Tired of planning the same dates? Dately uses AI to create surprise date itineraries with real venues in your area. Scratch to reveal, commit to the plan, and save the memories in your shared scrapbook.

• Personalized to your budget, vibe, and preferences
• Real venues with addresses, hours, and reservations
• 8 themed packs from Foodie to Adventure to Spicy
• Memory scrapbook to treasure your journey

Stop planning. Start dating.
Try free. Upgrade to Pro for unlimited.`}
              </div>
            </div>
            <div>
              <h3 className="text-lg mb-4" style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-libre)' }}>Short Version (Singles)</h3>
              <div className="p-5 rounded-lg text-sm whitespace-pre-wrap" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(199, 178, 138, 0.1)', color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
{`DATELY: Plan Dates That Impress

Planning a date shouldn't be stressful. Dately creates complete itineraries with the best spots in your area—so you can focus on the person, not the logistics.

• AI picks the perfect venues for your budget and vibe
• Multi-stop plans: dinner, activity, dessert—all timed out
• Real data: addresses, hours, reservation links
• Look like you spent hours planning in under 60 seconds

Your secret weapon for unforgettable dates.
Download free today.`}
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Copy */}
        <section id="social-copy">
          <h2 className="text-2xl mb-6" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>10. Social Media Copy</h2>
          <h3 className="text-lg mb-4" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>Short-Form Copy</h3>
          <div className="grid gap-4 mb-8">
            {[
              { label: 'Universal - Problem/Solution', accent: true, text: 'Planning dates shouldn\'t be stressful. Dately does the work: picks the venue, sets the timing, handles the details. You just show up and enjoy. Real data. AI personalization. 60 seconds to your next great date.' },
              { label: 'Couples - Routine Breaker', accent: false, text: 'When\'s the last time you did something you\'ve NEVER done before... together? Dately finds unique experiences in your area. No more \'I don\'t know, what do you want to do?\' Download free.' },
              { label: 'Singles - Impress', accent: false, text: 'They\'ll never know you didn\'t spend hours planning. Dately creates complete date itineraries—dinner, activity, dessert—in 60 seconds. Your secret weapon for first dates.' },
              { label: 'Singles - Stand Out', accent: false, text: 'Dinner and a movie? Boring. Dately plans unique, memorable dates with real venues in your area. Stand out from every other date they\'ve been on.' },
              { label: 'Spicy Pack (18+)', accent: false, text: 'Couples-only app with an intimate side. Dately generates date ideas, AND when you\'re ready, the Spicy pack adds challenges customized to your comfort level. Private. Personalized. For adults only.' },
            ].map((copy) => (
              <div key={copy.label} className="p-5 rounded-lg" style={{ background: copy.accent ? 'rgba(139, 58, 52, 0.1)' : 'rgba(255, 255, 255, 0.03)', border: copy.accent ? '1px solid rgba(139, 58, 52, 0.2)' : '1px solid rgba(199, 178, 138, 0.1)' }}>
                <p className="text-xs uppercase tracking-wider mb-2" style={{ color: copy.accent ? 'var(--wine-red)' : 'var(--champagne-gold)', fontFamily: 'var(--font-inter)' }}>{copy.label}</p>
                <p style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>&quot;{copy.text}&quot;</p>
              </div>
            ))}
          </div>
          <h3 className="text-lg mb-4" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>Instagram/Facebook Carousel Ad</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {['Planning dates is stressful. It doesn\'t have to be.', 'Tell Dately your vibe, budget, and location', 'Scratch to reveal AI-generated surprise dates', 'Get complete itineraries with real venues', 'Save memories in your personal scrapbook'].map((slide, i) => (
              <div key={i} className="p-4 rounded-lg text-center" style={{ background: 'rgba(139, 58, 52, 0.15)', border: '1px solid rgba(139, 58, 52, 0.3)' }}>
                <p className="text-xs mb-2" style={{ color: 'var(--champagne-gold)' }}>Slide {i + 1}</p>
                <p className="text-sm" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>{slide}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Video Scripts */}
        <section id="video-scripts">
          <h2 className="text-2xl mb-6" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>11. Video Scripts</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-lg mb-4" style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-libre)' }}>30-Second Universal</h3>
              <div className="p-5 rounded-lg text-sm whitespace-pre-wrap" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(199, 178, 138, 0.1)', color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
{`[Scratch animation on screen]
VO: "What should we do tonight?"

[Text: "The question that kills date night"]

VO: "Dately answers it in 60 seconds."

[Phone showing preference selection]
VO: "Tell it your vibe, budget, and location."

[Scratch card being revealed]
VO: "Scratch to reveal your personalized date."

[Full itinerary showing with map]
VO: "Get real venues. Real times. Ready to book."

[Happy couple/person on date]
VO: "All you have to do is show up."

[App logo + App Store badge]
SUPER: "Stop planning. Start dating."
CTA: "Download Free"`}
              </div>
            </div>
            <div>
              <h3 className="text-lg mb-4" style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-libre)' }}>30-Second Singles</h3>
              <div className="p-5 rounded-lg text-sm whitespace-pre-wrap" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(199, 178, 138, 0.1)', color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
{`[Person looking stressed at phone]
VO: "Planning a first date?"

[Overwhelmed by options]
VO: "Too many options. Too much pressure."

[Dately app opening]
VO: "Dately does it for you."

[Quick preference selection, scratch, reveal]
VO: "Budget, vibe, location. Scratch. Done."

[Complete itinerary with venues]
VO: "Dinner. Activity. Dessert. All planned."

[Confident person on date]
VO: "They'll think you're a genius."

[App logo]
SUPER: "Plan dates that impress."
CTA: "Download Free"`}
              </div>
            </div>
          </div>
          <h3 className="text-lg mb-4" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>TikTok Content Concepts</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'He Used AI to Plan Our Date', desc: 'POV of going on a date planned entirely by Dately. Reveal the stops, show reactions.' },
              { title: 'First Date vs. 100th Date', desc: 'Same couple, both dates planned by Dately. Show it works for any stage.' },
              { title: 'Scratch Race', desc: 'Two people scratch at the same time to reveal different dates. React to what they got.' },
              { title: 'I Let an App Plan My Date Night', desc: 'Documentary style: skeptical, then impressed as the date unfolds perfectly.' },
              { title: 'Rating Dates My App Planned', desc: 'Multi-part series rating each stop Dately suggested.' },
              { title: 'Date Planning Speedrun', desc: 'Show the entire process from opening app to having a complete plan in under 60 seconds.' },
            ].map((concept, i) => (
              <div key={i} className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}>
                <p className="font-medium mb-2" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-inter)' }}>{concept.title}</p>
                <p className="text-sm" style={{ color: 'var(--text-taupe)', fontFamily: 'var(--font-inter)' }}>{concept.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Email Marketing */}
        <section id="email">
          <h2 className="text-2xl mb-6" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>12. Email Marketing</h2>
          <h3 className="text-lg mb-4" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>Subject Lines</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { label: 'Universal', lines: ['Your next great date is one scratch away', 'Stop saying \'I don\'t know, what do you want to do?\'', '60 seconds to a date you\'ll actually remember'] },
              { label: 'Couples', lines: ['Scratch Your Way to Better Date Nights', 'We Planned Your Next Date—Scratch to Find Out', 'Break the Routine: Surprise Dates Await', 'The App Your Relationship Deserves'] },
              { label: 'Singles', lines: ['Plan Dates That Actually Impress', 'Your Secret Weapon for First Dates', 'Stop Overthinking. Start Dating.', 'Never Fumble a Date Plan Again'] },
            ].map((group) => (
              <div key={group.label} className="p-5 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}>
                <p className="text-xs uppercase tracking-wider mb-3" style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-inter)' }}>{group.label}</p>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
                  {group.lines.map((line) => <li key={line}>{line}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <h3 className="text-lg mb-4" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>Seasonal Subject Lines</h3>
          <div className="flex flex-wrap gap-3">
            {['Skip the Valentine\'s Clich\u00e9s This Year', 'Summer Date Ideas That Aren\'t Just \'Beach\'', 'New Year Resolution: Date More, Stress Less'].map((line) => (
              <span key={line} className="px-4 py-2 rounded-full text-sm" style={{ background: 'rgba(139, 58, 52, 0.15)', color: 'var(--text-linen)', border: '1px solid rgba(139, 58, 52, 0.3)' }}>{line}</span>
            ))}
          </div>
        </section>

        {/* Landing Page Copy */}
        <section id="landing-copy">
          <h2 className="text-2xl mb-6" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>13. Landing Page Copy</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: 'Universal Hero', accent: true, title: 'Stop Planning. Start Dating.', text: 'AI-powered date itineraries with real venues, personalized to your vibe. Whether it\'s date night #100 or your very first—we\'ve got you.' },
              { label: 'Couples Variant', accent: false, title: 'Date Nights Made Easy', text: 'Dately creates surprise date plans tailored to you both. Scratch to reveal, commit to the adventure, save the memories.' },
              { label: 'Singles Variant', accent: false, title: 'Plan Dates That Impress', text: 'Complete itineraries in 60 seconds. Real venues, perfect timing, zero stress. They\'ll never know you didn\'t spend hours planning.' },
            ].map((v) => (
              <div key={v.label} className="p-5 rounded-lg" style={{ background: v.accent ? 'rgba(139, 58, 52, 0.1)' : 'rgba(255, 255, 255, 0.03)', border: v.accent ? '1px solid rgba(139, 58, 52, 0.2)' : '1px solid rgba(199, 178, 138, 0.1)' }}>
                <p className="text-xs uppercase tracking-wider mb-2" style={{ color: v.accent ? 'var(--wine-red)' : 'var(--champagne-gold)', fontFamily: 'var(--font-inter)' }}>{v.label}</p>
                <p className="text-xl mb-2" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>{v.title}</p>
                <p className="text-sm" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>{v.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials">
          <h2 className="text-2xl mb-6" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>14. Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { label: 'Couples', quotes: ['We\'ve been together 8 years and were in such a rut. Dately gave us dates we never would have thought of ourselves. The scratch mechanic makes it exciting—we do it together every Friday.', 'No more 20-minute debates about where to eat. We just scratch and go. Game changer for busy couples.', 'Our scrapbook has 6 months of dates now. It\'s like a relationship diary I never knew I wanted.'] },
              { label: 'Singles', quotes: ['I used to stress for DAYS about planning a first date. Now I spend 60 seconds. My last date told me I was \'the most thoughtful planner she\'d ever met.\' Thank you, Dately.', 'The multi-stop plans are genius. Dinner, then arcade, then dessert bar—it looked like I planned for hours.', 'Finally, an app that actually helps singles. Not just another dating app.'] },
            ].map((group) => (
              <div key={group.label}>
                <h3 className="text-lg mb-4" style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-libre)' }}>{group.label}</h3>
                <div className="space-y-4">
                  {group.quotes.map((q, i) => (
                    <div key={i} className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}>
                      <p className="text-sm italic" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>&quot;{q}&quot;</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Competitor Comparison */}
        <section id="competitor-copy">
          <h2 className="text-2xl mb-6" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>15. Competitor Comparison Copy</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { vs: 'vs. Google/Yelp', text: 'Dately isn\'t a search engine. We don\'t give you 47 restaurants to scroll through. We give you ONE complete plan—dinner at 7, comedy show at 9, dessert at 11. Done.' },
              { vs: 'vs. ChatGPT/Generic AI', text: 'ChatGPT might suggest \'a romantic Italian restaurant.\' Dately tells you WHICH one, confirms it\'s open, and gives you the reservation link. Real data beats generic suggestions.' },
              { vs: 'vs. \'Date Ideas\' Articles', text: 'Those Pinterest articles are theoretical. \'Have a picnic!\' Great—where? What park? What if it\'s raining? Dately gives you actual, executable plans for your exact location and time.' },
              { vs: 'vs. OpenTable/Resy', text: 'They book one restaurant. Dately plans your entire night—dinner, activity, dessert—and times it so you\'re never rushing or waiting.' },
            ].map((comp) => (
              <div key={comp.vs} className="p-5 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}>
                <p className="font-medium mb-2" style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-inter)' }}>{comp.vs}</p>
                <p className="text-sm" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>&quot;{comp.text}&quot;</p>
              </div>
            ))}
          </div>
        </section>

        {/* Hashtags */}
        <section id="hashtags">
          <h2 className="text-2xl mb-6" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>16. Hashtags</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { label: 'Primary', tags: ['#Dately', '#DateNight', '#DateIdeas', '#DatePlanning'], accent: true },
              { label: 'Couples', tags: ['#CouplesOfInstagram', '#RelationshipGoals', '#DateNightIdeas', '#CoupleGoals'], accent: false },
              { label: 'Singles', tags: ['#FirstDate', '#DatingAdvice', '#DatingTips', '#SingleLife'], accent: false },
              { label: 'Lifestyle', tags: ['#WeekendPlans', '#ThingsToDoIn[City]', '#LocalEvents', '#ExperienceLife'], accent: false },
            ].map((group) => (
              <div key={group.label}>
                <p className="text-sm uppercase tracking-wider mb-3" style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-inter)' }}>{group.label}</p>
                <div className="flex flex-wrap gap-2">
                  {group.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full text-sm" style={{ background: group.accent ? 'rgba(139, 58, 52, 0.2)' : 'rgba(199, 178, 138, 0.1)', color: group.accent ? 'var(--text-ivory)' : 'var(--text-linen)', border: group.accent ? '1px solid rgba(139, 58, 52, 0.3)' : '1px solid rgba(199, 178, 138, 0.2)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <div className="pt-12 mt-12" style={{ borderTop: '1px solid rgba(199, 178, 138, 0.1)' }}>
          <p className="text-sm text-center" style={{ color: 'var(--text-taupe)', fontFamily: 'var(--font-inter)' }}>
            This document should be referenced for all marketing content, campaigns, and communications.
            <br />
            Last updated: January 2026
          </p>
        </div>
      </div>
    </div>
  )
}
