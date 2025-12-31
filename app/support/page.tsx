import Link from 'next/link'

export default function SupportPage() {
  return (
    <main className="min-h-screen luxury-bg">
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-20">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-12 transition-colors duration-200"
          style={{
            color: 'var(--text-taupe)',
            fontFamily: 'var(--font-inter), system-ui, sans-serif'
          }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl mb-8"
          style={{
            color: 'var(--text-ivory)',
            fontFamily: 'var(--font-libre), Georgia, serif'
          }}
        >
          Support
        </h1>

        {/* Subtitle */}
        <p
          className="text-sm mb-12"
          style={{
            color: 'var(--text-taupe)',
            fontFamily: 'var(--font-inter), system-ui, sans-serif'
          }}
        >
          We&apos;re here to help
        </p>

        {/* Content */}
        <div className="space-y-8">
          <section>
            <h2
              className="text-xl mb-4"
              style={{
                color: 'var(--text-ivory)',
                fontFamily: 'var(--font-libre), Georgia, serif'
              }}
            >
              Contact Us
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
              Have a question or need assistance? Reach out to our support team.
            </p>
            <a
              href="mailto:support@trydately.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-primary"
            >
              Email Support
            </a>
          </section>

          <section>
            <h2
              className="text-xl mb-4"
              style={{
                color: 'var(--text-ivory)',
                fontFamily: 'var(--font-libre), Georgia, serif'
              }}
            >
              FAQs
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
                  How does Dately work?
                </h3>
                <p className="leading-relaxed" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
                  Dately uses AI to generate personalized date plans based on your preferences.
                  Simply scratch to reveal your surprise date!
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
                  Is Dately free to use?
                </h3>
                <p className="leading-relaxed" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
                  Dately offers both free and premium plans. Free users can generate a limited
                  number of date plans per month.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2
              className="text-xl mb-4"
              style={{
                color: 'var(--text-ivory)',
                fontFamily: 'var(--font-libre), Georgia, serif'
              }}
            >
              Follow Us
            </h2>
            <a
              href="https://instagram.com/trydately"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors duration-200"
              style={{ color: 'var(--champagne-gold)' }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @trydately
            </a>
          </section>
        </div>
      </div>
    </main>
  )
}
