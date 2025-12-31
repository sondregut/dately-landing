import Link from 'next/link'

export default function TermsPage() {
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
          Terms of Service
        </h1>

        {/* Last Updated */}
        <p
          className="text-sm mb-12"
          style={{
            color: 'var(--text-taupe)',
            fontFamily: 'var(--font-inter), system-ui, sans-serif'
          }}
        >
          Last updated: December 2024
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
              1. Acceptance of Terms
            </h2>
            <p className="leading-relaxed" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
              By accessing and using Dately, you accept and agree to be bound by the terms and
              provisions of this agreement. If you do not agree to abide by these terms, please
              do not use this service.
            </p>
          </section>

          <section>
            <h2
              className="text-xl mb-4"
              style={{
                color: 'var(--text-ivory)',
                fontFamily: 'var(--font-libre), Georgia, serif'
              }}
            >
              2. Use of Service
            </h2>
            <p className="leading-relaxed" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
              Dately provides AI-powered date planning suggestions. You agree to use the service
              only for lawful purposes and in accordance with these Terms.
            </p>
          </section>

          <section>
            <h2
              className="text-xl mb-4"
              style={{
                color: 'var(--text-ivory)',
                fontFamily: 'var(--font-libre), Georgia, serif'
              }}
            >
              3. Contact
            </h2>
            <p className="leading-relaxed" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
              If you have any questions about these Terms, please contact us at{' '}
              <a
                href="mailto:legal@trydately.com"
                style={{ color: 'var(--champagne-gold)' }}
                className="hover:underline"
              >
                legal@trydately.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
