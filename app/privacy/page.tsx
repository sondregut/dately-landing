import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Dately protects your data. Our privacy policy covers what we collect, how we use it, and your rights as a user.',
  alternates: {
    canonical: '/privacy',
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
          style={headingStyle}
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
          Last updated: March 2026
        </p>

        {/* Intro */}
        <p className="leading-relaxed mb-12" style={bodyStyle}>
          Dately (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains
          what information we collect, how we use it, who we share it with, and your rights regarding your data.
          By using Dately, you agree to the practices described below.
        </p>

        {/* Content */}
        <div className="space-y-10">

          {/* 1. Information We Collect */}
          <section>
            <h2 className="text-xl mb-4" style={headingStyle}>
              1. Information We Collect
            </h2>

            <h3 className="text-lg mb-2 mt-6" style={headingStyle}>
              Account Data
            </h3>
            <p className="leading-relaxed mb-3" style={bodyStyle}>
              When you create an account, we collect your email address, display name, and optional profile avatar.
              If you sign in with Apple, we receive your Apple ID and the name you choose to share.
            </p>

            <h3 className="text-lg mb-2 mt-6" style={headingStyle}>
              Couple &amp; Partner Data
            </h3>
            <p className="leading-relaxed mb-3" style={bodyStyle}>
              If you link with a partner, we store the couple relationship, including invite codes and
              anniversary date. This data is used to personalize date plans for both partners.
            </p>

            <h3 className="text-lg mb-2 mt-6" style={headingStyle}>
              Location Data
            </h3>
            <p className="leading-relaxed mb-3" style={bodyStyle}>
              With your permission, we collect your GPS coordinates to find nearby venues, restaurants,
              and events. We also store reverse-geocoded location names (city, neighborhood) and
              cached coordinates to reduce repeated location lookups.
            </p>

            <h3 className="text-lg mb-2 mt-6" style={headingStyle}>
              Date Plans &amp; Preferences
            </h3>
            <p className="leading-relaxed mb-3" style={bodyStyle}>
              We collect the preferences you provide when creating date plans, including budget range,
              vibes and mood, dietary restrictions, accessibility constraints, and any special requests
              or free-text input. Generated date plans (itineraries, venues, times) are stored in your account.
            </p>

            <h3 className="text-lg mb-2 mt-6" style={headingStyle}>
              Photos &amp; Media
            </h3>
            <p className="leading-relaxed mb-3" style={bodyStyle}>
              If you upload photos to your scrapbook or set a profile avatar, those images are stored
              in our cloud storage along with any captions you add.
            </p>

            <h3 className="text-lg mb-2 mt-6" style={headingStyle}>
              Journal Entries &amp; Memories
            </h3>
            <p className="leading-relaxed mb-3" style={bodyStyle}>
              After completing a date, you can rate the experience, write reflections, and save
              favorite moments. This content is stored privately in your account.
            </p>

            <h3 className="text-lg mb-2 mt-6" style={headingStyle}>
              Subscription &amp; Payment Data
            </h3>
            <p className="leading-relaxed mb-3" style={bodyStyle}>
              Payments are processed entirely through the Apple App Store and managed by RevenueCat.
              We never receive or store your credit card number or billing address. We receive
              confirmation of your subscription status, transaction IDs, and product identifiers.
            </p>

            <h3 className="text-lg mb-2 mt-6" style={headingStyle}>
              Device &amp; Notification Data
            </h3>
            <p className="leading-relaxed mb-3" style={bodyStyle}>
              If you enable push notifications, we store your Apple Push Notification service (APNs)
              token and your per-category notification preferences (e.g., date reminders, partner activity).
            </p>

            <h3 className="text-lg mb-2 mt-6" style={headingStyle}>
              Usage Data
            </h3>
            <p className="leading-relaxed" style={bodyStyle}>
              Certain usage metrics — such as scratch counts and reroll counts — are tracked locally
              on your device and are not transmitted to our servers.
            </p>
          </section>

          {/* 2. How We Use Your Information */}
          <section>
            <h2 className="text-xl mb-4" style={headingStyle}>
              2. How We Use Your Information
            </h2>
            <ul className="space-y-2 list-disc list-inside" style={bodyStyle}>
              <li className="leading-relaxed">
                <strong>Generate personalized date plans</strong> — We send your preferences, location,
                and constraints to AI providers to create tailored date itineraries with real venues and events.
              </li>
              <li className="leading-relaxed">
                <strong>Find local venues, events, and restaurants</strong> — We use your location to
                query places and events APIs so your date plans feature real, nearby options.
              </li>
              <li className="leading-relaxed">
                <strong>Process payments and manage subscriptions</strong> — We verify your subscription
                status to unlock premium features.
              </li>
              <li className="leading-relaxed">
                <strong>Send push notifications</strong> — With your permission, we send date reminders,
                partner activity updates, and other relevant notifications.
              </li>
              <li className="leading-relaxed">
                <strong>Improve our services</strong> — We use aggregated, anonymized usage patterns to
                improve the app experience.
              </li>
            </ul>
          </section>

          {/* 3. Third-Party Services */}
          <section>
            <h2 className="text-xl mb-4" style={headingStyle}>
              3. Third-Party Services
            </h2>
            <p className="leading-relaxed mb-6" style={bodyStyle}>
              We use the following third-party services to operate Dately. Each service only receives
              the minimum data necessary for its function.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse" style={bodyStyle}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(207,197,189,0.2)' }}>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--text-ivory)' }}>Service</th>
                    <th className="text-left py-3 font-semibold" style={{ color: 'var(--text-ivory)' }}>Data Shared</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Supabase (Database, Auth, Storage)', 'Account data, couple data, date plans, photos — hosted in us-east-1 (USA)'],
                    ['RevenueCat', 'Anonymous user ID, purchase events, subscription status'],
                    ['Anthropic (Claude AI)', 'Preferences, location, constraints — used for date plan generation'],
                    ['OpenAI (GPT-4o)', 'Same as Anthropic — used as fallback only'],
                    ['Google Places API', 'Location coordinates, search queries'],
                    ['Foursquare', 'Location coordinates, search queries — used as fallback'],
                    ['Ticketmaster', 'Location, date range — for concert and event discovery'],
                    ['SerpApi (Google Events)', 'Location, date range — for local event discovery'],
                    ['TMDB', 'Movie genre queries — no personal data sent'],
                    ['OpenWeatherMap', 'Location coordinates — for weather-aware planning'],
                    ['Unsplash', 'Search queries — no personal data sent'],
                    ['Apple (MapKit, APNs, Sign-In)', 'Location data, device token, Apple ID (if using Sign in with Apple)'],
                  ].map(([service, data]) => (
                    <tr key={service} style={{ borderBottom: '1px solid rgba(207,197,189,0.1)' }}>
                      <td className="py-3 pr-4 align-top font-medium" style={{ color: 'var(--text-ivory)' }}>{service}</td>
                      <td className="py-3 align-top">{data}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 4. AI-Generated Content */}
          <section>
            <h2 className="text-xl mb-4" style={headingStyle}>
              4. AI-Generated Content
            </h2>
            <p className="leading-relaxed mb-3" style={bodyStyle}>
              Date plans in Dately are generated by artificial intelligence using your preferences
              combined with real venue and event data from our API partners. AI helps create
              personalized itineraries — it does not invent fictional venues or businesses.
            </p>
            <p className="leading-relaxed mb-3" style={bodyStyle}>
              Data sent to our AI providers (Anthropic and OpenAI) is transmitted via their commercial
              APIs. Under their API terms of service, your data is <strong>not used to train their models</strong>.
              No user content is retained by AI providers beyond the duration of request processing.
            </p>
            <p className="leading-relaxed" style={bodyStyle}>
              While we strive for accuracy, AI-generated plans may occasionally contain errors.
              We recommend confirming details (hours, availability, pricing) with venues directly.
            </p>
          </section>

          {/* 5. Data Storage & Security */}
          <section>
            <h2 className="text-xl mb-4" style={headingStyle}>
              5. Data Storage &amp; Security
            </h2>
            <ul className="space-y-2 list-disc list-inside" style={bodyStyle}>
              <li className="leading-relaxed">
                All server-side data is stored in <strong>Supabase PostgreSQL</strong> databases hosted
                in us-east-1 (Virginia, USA).
              </li>
              <li className="leading-relaxed">
                Photos are stored in <strong>Supabase Storage</strong> with encryption at rest.
              </li>
              <li className="leading-relaxed">
                Authentication tokens are stored securely in the <strong>iOS Keychain</strong>.
              </li>
              <li className="leading-relaxed">
                Local caches (e.g., preferences, cached locations) are stored in UserDefaults
                and are cleared when you sign out.
              </li>
              <li className="leading-relaxed">
                All communication between the app and our servers uses <strong>HTTPS/TLS</strong> encryption.
              </li>
            </ul>
          </section>

          {/* 6. Your Rights & Controls */}
          <section>
            <h2 className="text-xl mb-4" style={headingStyle}>
              6. Your Rights &amp; Controls
            </h2>
            <ul className="space-y-2 list-disc list-inside" style={bodyStyle}>
              <li className="leading-relaxed">
                <strong>Export your data</strong> — You can request a copy of all your data through the
                &quot;Download My Data&quot; option in the app&apos;s settings.
              </li>
              <li className="leading-relaxed">
                <strong>Delete your account</strong> — You can delete your account from within the app.
                This permanently removes all your data from our servers, including date plans, photos,
                journal entries, and couple links.
              </li>
              <li className="leading-relaxed">
                <strong>Control notifications</strong> — You can enable or disable individual notification
                categories (date reminders, partner activity, etc.) in the app&apos;s notification settings.
              </li>
              <li className="leading-relaxed">
                <strong>Control location access</strong> — You can grant, limit, or revoke location
                permissions at any time through iOS Settings.
              </li>
              <li className="leading-relaxed">
                <strong>Control camera &amp; photo library access</strong> — You can revoke camera or
                photo library permissions at any time through iOS Settings.
              </li>
            </ul>
            <p className="leading-relaxed mt-4" style={bodyStyle}>
              If you are located in the European Economic Area, you have additional rights under the GDPR,
              including the right to access, rectify, port, and erase your personal data. Contact us
              at{' '}
              <a href="mailto:privacy@trydately.com" style={linkStyle} className="hover:underline">
                privacy@trydately.com
              </a>{' '}
              to exercise these rights.
            </p>
          </section>

          {/* 7. Data Retention */}
          <section>
            <h2 className="text-xl mb-4" style={headingStyle}>
              7. Data Retention
            </h2>
            <ul className="space-y-2 list-disc list-inside" style={bodyStyle}>
              <li className="leading-relaxed">
                Account data, date plans, photos, and journal entries are retained until you delete your account.
              </li>
              <li className="leading-relaxed">
                Local caches and preferences are cleared when you sign out of the app.
              </li>
              <li className="leading-relaxed">
                Push notification tokens are cleared when you log out or uninstall the app.
              </li>
              <li className="leading-relaxed">
                If you delete your account, all associated server-side data is permanently removed.
              </li>
            </ul>
          </section>

          {/* 8. Couple Data Privacy */}
          <section>
            <h2 className="text-xl mb-4" style={headingStyle}>
              8. Couple Data Privacy
            </h2>
            <p className="leading-relaxed mb-3" style={bodyStyle}>
              Couple data — including shared date plans, scrapbook entries, and relationship details — is
              private and only visible to the two linked partners. No other users can access your
              couple data.
            </p>
            <p className="leading-relaxed mb-3" style={bodyStyle}>
              Content from the Spicy pack has enhanced privacy protections and is stored with additional
              access controls.
            </p>
            <p className="leading-relaxed" style={bodyStyle}>
              If either partner disconnects the couple link, the link is removed for both users.
              Shared date plans and scrapbook entries remain in each individual&apos;s account history.
            </p>
          </section>

          {/* 9. Children's Privacy */}
          <section>
            <h2 className="text-xl mb-4" style={headingStyle}>
              9. Children&apos;s Privacy
            </h2>
            <p className="leading-relaxed" style={bodyStyle}>
              Dately is intended for users aged 17 and older. We do not knowingly collect personal
              information from anyone under 17. If we learn that we have collected data from a user
              under 17, we will promptly delete their account and associated data.
            </p>
          </section>

          {/* 10. Changes to This Policy */}
          <section>
            <h2 className="text-xl mb-4" style={headingStyle}>
              10. Changes to This Policy
            </h2>
            <p className="leading-relaxed" style={bodyStyle}>
              We may update this Privacy Policy from time to time. When we make changes, we will
              update the &quot;Last updated&quot; date at the top of this page. We encourage you to review
              this policy periodically. Continued use of Dately after changes are posted constitutes
              acceptance of the updated policy.
            </p>
          </section>

          {/* 11. Contact Us */}
          <section>
            <h2 className="text-xl mb-4" style={headingStyle}>
              11. Contact Us
            </h2>
            <p className="leading-relaxed" style={bodyStyle}>
              If you have any questions, concerns, or requests regarding this Privacy Policy or
              your personal data, please contact us at{' '}
              <a
                href="mailto:privacy@trydately.com"
                style={linkStyle}
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
