import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read the Dately terms of service. Understand the rules and guidelines for using our AI-powered date planning app.',
  alternates: {
    canonical: '/terms',
  },
}

const headingStyle = {
  color: 'var(--text-ivory)',
  fontFamily: 'var(--font-libre), Georgia, serif',
}

const bodyStyle = {
  color: 'var(--text-linen)',
  fontFamily: 'var(--font-inter), system-ui, sans-serif',
}

const linkStyle = { color: 'var(--champagne-gold)' }

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
          style={headingStyle}
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
          Last updated: March 2026
        </p>

        {/* Intro */}
        <p className="leading-relaxed mb-12" style={bodyStyle}>
          Welcome to Dately. These Terms of Service (&quot;Terms&quot;) govern your access to and use of the
          Dately mobile application (&quot;App&quot;) and related services provided by Dately (&quot;we,&quot; &quot;us,&quot;
          or &quot;our&quot;). By downloading, installing, or using the App, you agree to be bound by these Terms.
          If you do not agree, do not use the App.
        </p>

        {/* Content */}
        <div className="space-y-10">

          {/* 1. Acceptance of Terms */}
          <section>
            <h2 className="text-xl mb-4" style={headingStyle}>
              1. Acceptance of Terms
            </h2>
            <p className="leading-relaxed" style={bodyStyle}>
              By accessing and using Dately, you accept and agree to be bound by the terms and
              provisions of this agreement. If you do not agree to abide by these terms, please
              do not use this service. You must be at least 17 years old to use Dately.
            </p>
          </section>

          {/* 2. Use of Service */}
          <section>
            <h2 className="text-xl mb-4" style={headingStyle}>
              2. Use of Service
            </h2>
            <p className="leading-relaxed" style={bodyStyle}>
              Dately provides AI-powered date planning suggestions using real venue and event data.
              You agree to use the service only for lawful purposes and in accordance with these Terms.
              We grant you a limited, non-exclusive, non-transferable, revocable license to use the App
              for your personal, non-commercial use.
            </p>
          </section>

          {/* 3. User Conduct */}
          <section>
            <h2 className="text-xl mb-4" style={headingStyle}>
              3. User Conduct
            </h2>
            <p className="leading-relaxed mb-3" style={bodyStyle}>
              You agree not to:
            </p>
            <ul className="space-y-2 list-disc list-inside" style={bodyStyle}>
              <li className="leading-relaxed">Use the App for any unlawful or prohibited purpose</li>
              <li className="leading-relaxed">Attempt to gain unauthorized access to the App, other accounts, or our systems</li>
              <li className="leading-relaxed">Interfere with or disrupt the integrity or performance of the App</li>
              <li className="leading-relaxed">Upload content that is offensive, harmful, or violates the rights of others</li>
              <li className="leading-relaxed">Use the App to harass, abuse, or harm another person</li>
              <li className="leading-relaxed">Reverse engineer, decompile, or disassemble any part of the App</li>
            </ul>
          </section>

          {/* 4. Subscriptions & Payments */}
          <section>
            <h2 className="text-xl mb-4" style={headingStyle}>
              4. Subscriptions &amp; Payments
            </h2>
            <p className="leading-relaxed mb-3" style={bodyStyle}>
              Dately offers subscription-based access to premium features. Subscriptions are billed
              through the Apple App Store and are subject to Apple&apos;s terms and conditions.
            </p>
            <ul className="space-y-2 list-disc list-inside" style={bodyStyle}>
              <li className="leading-relaxed">
                Payment is charged to your Apple ID account upon confirmation of purchase.
              </li>
              <li className="leading-relaxed">
                Subscriptions automatically renew unless canceled at least 24 hours before the end of
                the current billing period.
              </li>
              <li className="leading-relaxed">
                You can manage and cancel subscriptions in your Apple ID account settings.
              </li>
              <li className="leading-relaxed">
                Free trial periods, if offered, will automatically convert to a paid subscription
                unless canceled before the trial ends.
              </li>
            </ul>
            <p className="leading-relaxed mt-4" style={bodyStyle}>
              Your use of the App is also subject to the{' '}
              <a
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                className="hover:underline"
              >
                Apple Standard End User License Agreement (EULA)
              </a>.
            </p>
          </section>

          {/* 5. AI-Generated Content */}
          <section>
            <h2 className="text-xl mb-4" style={headingStyle}>
              5. AI-Generated Content
            </h2>
            <p className="leading-relaxed mb-3" style={bodyStyle}>
              Dately uses artificial intelligence to generate date plan suggestions based on your
              preferences and real venue and event data. While we strive for accuracy:
            </p>
            <ul className="space-y-2 list-disc list-inside" style={bodyStyle}>
              <li className="leading-relaxed">
                AI-generated plans are suggestions only and should not be treated as guarantees.
              </li>
              <li className="leading-relaxed">
                Venue details (hours, availability, pricing) may change without notice. Always confirm
                details directly with venues before visiting.
              </li>
              <li className="leading-relaxed">
                We are not responsible for any inaccuracies in AI-generated content or third-party
                venue information.
              </li>
            </ul>
          </section>

          {/* 6. Intellectual Property */}
          <section>
            <h2 className="text-xl mb-4" style={headingStyle}>
              6. Intellectual Property
            </h2>
            <p className="leading-relaxed mb-3" style={bodyStyle}>
              The App, including its design, features, code, and content, is owned by Dately and
              protected by copyright and other intellectual property laws. You retain ownership of
              any content you create within the App (photos, journal entries, notes).
            </p>
            <p className="leading-relaxed" style={bodyStyle}>
              By uploading content to Dately, you grant us a limited license to store, display,
              and process that content solely for the purpose of providing the service to you and
              your linked partner.
            </p>
          </section>

          {/* 7. Privacy */}
          <section>
            <h2 className="text-xl mb-4" style={headingStyle}>
              7. Privacy
            </h2>
            <p className="leading-relaxed" style={bodyStyle}>
              Your use of the App is also governed by our{' '}
              <Link href="/privacy" style={linkStyle} className="hover:underline">
                Privacy Policy
              </Link>
              , which describes how we collect, use, and protect your data.
            </p>
          </section>

          {/* 8. Limitation of Liability */}
          <section>
            <h2 className="text-xl mb-4" style={headingStyle}>
              8. Limitation of Liability
            </h2>
            <p className="leading-relaxed mb-3" style={bodyStyle}>
              To the maximum extent permitted by applicable law, Dately and its officers, employees,
              and partners shall not be liable for any indirect, incidental, special, consequential,
              or punitive damages arising from your use of the App.
            </p>
            <p className="leading-relaxed" style={bodyStyle}>
              The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind,
              either express or implied. We do not warrant that the App will be uninterrupted,
              error-free, or free of viruses or other harmful components.
            </p>
          </section>

          {/* 9. Termination */}
          <section>
            <h2 className="text-xl mb-4" style={headingStyle}>
              9. Termination
            </h2>
            <p className="leading-relaxed" style={bodyStyle}>
              We may suspend or terminate your access to the App at any time, with or without cause,
              and with or without notice. You may stop using the App at any time and delete your account
              through the App&apos;s settings. Upon termination, your right to use the App ceases immediately.
            </p>
          </section>

          {/* 10. Changes to Terms */}
          <section>
            <h2 className="text-xl mb-4" style={headingStyle}>
              10. Changes to Terms
            </h2>
            <p className="leading-relaxed" style={bodyStyle}>
              We may update these Terms from time to time. When we make changes, we will update
              the &quot;Last updated&quot; date at the top of this page. Continued use of the App after
              changes are posted constitutes acceptance of the updated Terms.
            </p>
          </section>

          {/* 11. Contact */}
          <section>
            <h2 className="text-xl mb-4" style={headingStyle}>
              11. Contact
            </h2>
            <p className="leading-relaxed" style={bodyStyle}>
              If you have any questions about these Terms, please contact us at{' '}
              <a
                href="mailto:legal@trydately.com"
                style={linkStyle}
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
