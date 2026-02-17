import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Dately protects your data. Our privacy policy covers what we collect, how we use it, and your rights as a user.',
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyPage() {
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
          Privacy Policy
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
              Information We Collect
            </h2>
            <p className="leading-relaxed" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
              We collect information you provide directly to us, such as when you create an
              account, use our services, or contact us for support.
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
              How We Use Your Information
            </h2>
            <p className="leading-relaxed" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
              We use the information we collect to provide, maintain, and improve our services,
              to personalize your date recommendations, and to communicate with you.
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
              Contact Us
            </h2>
            <p className="leading-relaxed" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a
                href="mailto:privacy@trydately.com"
                style={{ color: 'var(--champagne-gold)' }}
                className="hover:underline"
              >
                privacy@trydately.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
