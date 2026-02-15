'use client'

const scripts = [
  {
    title: 'Screen Recording — No Voiceover',
    duration: '30-45 sec',
    description: 'Pure app walkthrough with text overlays. Let the product speak for itself.',
    steps: [
      { time: '0-3s', action: 'Open Dately app', overlay: '"What should we do tonight?"' },
      { time: '3-6s', action: 'Tap a date pack (e.g. Food Adventures)', overlay: null },
      { time: '6-10s', action: 'Show the 3 scratch cards with hint icons', overlay: '"Pick a card, any card"' },
      { time: '10-18s', action: 'Scratch one card slowly — satisfying reveal', overlay: null },
      { time: '18-25s', action: 'Scroll through the full itinerary — venue names, times, map', overlay: '"Real venues. Real plans. 60 seconds."' },
      { time: '25-30s', action: 'Tap "Commit to Date"', overlay: null },
      { time: '30-35s', action: 'Show confirmed date with share option', overlay: '"Stop planning. Start dating."' },
    ],
    tips: [
      'Use slow, deliberate taps — no rushing',
      'Pause briefly on each venue card so viewers can read the name',
      'The scratch interaction is the hero moment — give it time',
      'Add subtle background music (warm acoustic or lo-fi)',
      'Export at 1080x1920 (9:16) for TikTok/Reels',
    ],
    music: 'Warm acoustic guitar or soft lo-fi beat. No lyrics.',
  },
  {
    title: 'Screen Recording — With Voiceover',
    duration: '30-45 sec',
    description: 'Guided walkthrough with narration explaining each step.',
    steps: [
      { time: '0-5s', action: 'Open Dately app', overlay: null, vo: '"Planning a date used to take me forever. Now it takes 60 seconds."' },
      { time: '5-8s', action: 'Browse the date packs', overlay: null, vo: '"Pick a pack that matches your mood."' },
      { time: '8-12s', action: 'Tap a pack, show the scratch cards', overlay: null, vo: '"You get three cards. Each one is a different surprise date."' },
      { time: '12-20s', action: 'Scratch a card — slow, satisfying reveal', overlay: null, vo: '"Scratch to reveal your plan."' },
      { time: '20-28s', action: 'Scroll through itinerary — venues, ratings, times, map', overlay: null, vo: '"Real restaurants. Real ratings. Real times. Everything you need."' },
      { time: '28-33s', action: 'Tap commit, show confirmation', overlay: null, vo: '"Commit, share with your partner, and just show up."' },
      { time: '33-38s', action: 'End card with logo', overlay: '"Stop planning. Start dating."', vo: '"Dately. Stop planning. Start dating."' },
    ],
    tips: [
      'Record the screen first, add voiceover after',
      'Keep voice warm, casual, and conversational — not salesy',
      'Match tap timing to voiceover beats',
      'Leave 0.5s pauses between sentences for breathing room',
      'Background music at ~20% volume under voiceover',
    ],
    music: 'Same warm acoustic, but lower volume to sit under voice.',
  },
]

const recordingTips = [
  { label: 'Device', value: 'Use a real iPhone — simulators look fake' },
  { label: 'Screen Record', value: 'iOS Control Center → Screen Recording (or QuickTime from Mac)' },
  { label: 'Resolution', value: '1080x1920 (9:16 portrait) for TikTok/Reels' },
  { label: 'Clean Up', value: 'Turn on Do Not Disturb, hide status bar notifications' },
  { label: 'Data', value: 'Make sure you have real date plans loaded — not empty states' },
  { label: 'Location', value: 'Set location to a city with good venue coverage for best results' },
  { label: 'Editing', value: 'CapCut (free) or Final Cut Pro — add text overlays and music' },
]

export default function RecordingsPage() {
  return (
    <div>
      <h1
        className="text-4xl md:text-5xl mb-3"
        style={{
          color: 'var(--text-ivory)',
          fontFamily: 'var(--font-libre), Georgia, serif'
        }}
      >
        App Screen Recordings
      </h1>
      <p
        className="text-lg mb-10"
        style={{
          color: 'var(--text-taupe)',
          fontFamily: 'var(--font-inter), system-ui, sans-serif'
        }}
      >
        Simple scripts for recording the date generation flow
      </p>

      {/* Quick Setup */}
      <section className="mb-12 p-6 rounded-xl" style={{ background: 'rgba(199, 178, 138, 0.05)', border: '1px solid rgba(199, 178, 138, 0.15)' }}>
        <h2 className="text-xl mb-4" style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-libre)' }}>
          Recording Setup
        </h2>
        <div className="grid md:grid-cols-2 gap-3">
          {recordingTips.map((tip) => (
            <div key={tip.label} className="flex gap-3 text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
              <span className="font-medium shrink-0" style={{ color: 'var(--text-ivory)', minWidth: '100px' }}>{tip.label}</span>
              <span style={{ color: 'var(--text-linen)', opacity: 0.8 }}>{tip.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Scripts */}
      <div className="space-y-12">
        {scripts.map((script) => (
          <section key={script.title}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>
                {script.title}
              </h2>
              <span
                className="text-xs px-3 py-1 rounded-full"
                style={{
                  background: 'rgba(139, 58, 52, 0.2)',
                  color: 'var(--text-ivory)',
                  border: '1px solid rgba(139, 58, 52, 0.3)',
                  fontFamily: 'var(--font-inter)'
                }}
              >
                {script.duration}
              </span>
            </div>
            <p className="text-sm mb-6" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
              {script.description}
            </p>

            {/* Timeline */}
            <div className="mb-6">
              <h3 className="text-sm uppercase tracking-wider mb-3" style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-inter)' }}>
                Shot List
              </h3>
              <div className="space-y-2">
                {script.steps.map((step, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg flex flex-col md:flex-row md:items-start gap-3"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(199, 178, 138, 0.1)',
                    }}
                  >
                    <span
                      className="text-xs font-mono shrink-0 px-2 py-1 rounded"
                      style={{
                        background: 'rgba(139, 58, 52, 0.15)',
                        color: 'var(--champagne-gold)',
                        minWidth: '60px',
                        textAlign: 'center',
                      }}
                    >
                      {step.time}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-medium" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-inter)' }}>
                        {step.action}
                      </p>
                      {step.overlay && (
                        <p className="text-sm mt-1" style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-inter)' }}>
                          Text overlay: {step.overlay}
                        </p>
                      )}
                      {'vo' in step && step.vo && (
                        <p className="text-sm mt-1 italic" style={{ color: 'var(--text-taupe)', fontFamily: 'var(--font-inter)' }}>
                          VO: {step.vo}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips & Music */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}>
                <h3 className="text-sm uppercase tracking-wider mb-3" style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-inter)' }}>Tips</h3>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
                  {script.tips.map((tip, i) => (
                    <li key={i} style={{ opacity: 0.8 }}>{tip}</li>
                  ))}
                </ul>
              </div>
              <div className="p-5 rounded-lg" style={{ background: 'rgba(139, 58, 52, 0.1)', border: '1px solid rgba(139, 58, 52, 0.2)' }}>
                <h3 className="text-sm uppercase tracking-wider mb-3" style={{ color: 'var(--wine-red)', fontFamily: 'var(--font-inter)' }}>Music</h3>
                <p className="text-sm" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>{script.music}</p>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-12 mt-12" style={{ borderTop: '1px solid rgba(199, 178, 138, 0.1)' }}>
        <p className="text-sm text-center" style={{ color: 'var(--text-taupe)', fontFamily: 'var(--font-inter)' }}>
          Record once, repurpose across TikTok, Reels, Shorts, and ads.
        </p>
      </div>
    </div>
  )
}
