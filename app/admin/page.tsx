import Link from 'next/link'

const adminPages = [
  {
    title: 'Marketing Strategy',
    description: 'Brand positioning, messaging framework, campaign concepts, visual guidelines, App Store copy, social media copy, video scripts, and more.',
    href: '/admin/strategy',
    badge: '16 sections',
    accent: true,
  },
  {
    title: 'Content Ideas',
    description: '108 content ideas for Instagram & TikTok organized by theme — relatable struggles, date tips, feature showcases, trending formats, founder stories, UGC, seasonal, educational, and aspirational.',
    href: '/admin/content-ideas',
    badge: '108 ideas',
    accent: false,
  },
  {
    title: 'Screen Recordings',
    description: 'Simple scripts for recording the app generating a date — shot lists, text overlays, voiceover lines, timing, and setup tips. One version silent, one with VO.',
    href: '/admin/recordings',
    badge: '2 scripts',
    accent: false,
  },
]

export default function AdminHub() {
  return (
    <div>
      <h1
        className="text-4xl md:text-5xl mb-3"
        style={{
          color: 'var(--text-ivory)',
          fontFamily: 'var(--font-libre), Georgia, serif'
        }}
      >
        Admin
      </h1>
      <p
        className="text-lg mb-10"
        style={{
          color: 'var(--text-taupe)',
          fontFamily: 'var(--font-inter), system-ui, sans-serif'
        }}
      >
        Internal documents and resources
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {adminPages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="group block p-6 rounded-xl transition-all duration-200"
            style={{
              background: page.accent ? 'rgba(139, 58, 52, 0.1)' : 'rgba(255, 255, 255, 0.03)',
              border: page.accent ? '1px solid rgba(139, 58, 52, 0.25)' : '1px solid rgba(199, 178, 138, 0.1)',
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <h2
                className="text-xl group-hover:opacity-80 transition-opacity"
                style={{
                  color: 'var(--text-ivory)',
                  fontFamily: 'var(--font-libre), Georgia, serif'
                }}
              >
                {page.title}
              </h2>
              <span
                className="text-xs px-2.5 py-1 rounded-full"
                style={{
                  background: page.accent ? 'rgba(139, 58, 52, 0.3)' : 'rgba(199, 178, 138, 0.15)',
                  color: page.accent ? 'var(--text-ivory)' : 'var(--champagne-gold)',
                }}
              >
                {page.badge}
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{
                color: 'var(--text-linen)',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                opacity: 0.8,
              }}
            >
              {page.description}
            </p>
            <div
              className="mt-4 text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
              style={{
                color: page.accent ? 'var(--wine-red)' : 'var(--champagne-gold)',
                fontFamily: 'var(--font-inter), system-ui, sans-serif'
              }}
            >
              View document
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
