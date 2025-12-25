export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: December 24, 2024</p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              STAVHOPP.NO LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates Dately (&quot;the App&quot;). This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when you use our App.
              Please read this policy carefully. By using Dately, you consent to the practices described in this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>

            <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">2.1 Information You Provide</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Account Information:</strong> Email address, name, and password when you create an account</li>
              <li><strong>Profile Information:</strong> Gender, relationship status, and dating preferences</li>
              <li><strong>User Content:</strong> Photos, notes, and memories you save in the App</li>
              <li><strong>Partner Information:</strong> If you connect with a partner, we store this relationship</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">2.2 Information Collected Automatically</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Location Data:</strong> With your permission, we collect your location to provide nearby venue suggestions</li>
              <li><strong>Device Information:</strong> Device type, operating system, and unique device identifiers</li>
              <li><strong>Usage Data:</strong> How you interact with the App, features used, and dates planned</li>
              <li><strong>Analytics:</strong> Aggregated data about App performance and user behavior</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use your information to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Provide personalized date suggestions based on your preferences and location</li>
              <li>Generate AI-powered date ideas tailored to you</li>
              <li>Store your date memories and photos</li>
              <li>Process subscription payments and manage your account</li>
              <li>Send important notifications about your account or the App</li>
              <li>Improve and optimize the App&apos;s features and user experience</li>
              <li>Respond to your support requests and inquiries</li>
              <li>Ensure the security and integrity of our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Information Sharing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We may share your information with:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Your Partner:</strong> If you connect with a partner, they can see shared date plans and memories</li>
              <li><strong>Service Providers:</strong> Third-party services that help us operate the App (hosting, analytics, payment processing)</li>
              <li><strong>AI Services:</strong> We use AI providers to generate date suggestions (your data is anonymized)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We do NOT sell your personal information to third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Our App uses the following third-party services:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Supabase:</strong> For secure data storage and authentication</li>
              <li><strong>RevenueCat:</strong> For subscription management</li>
              <li><strong>Apple Sign In:</strong> For account authentication</li>
              <li><strong>Google Places API:</strong> For venue information</li>
              <li><strong>AI Services (Anthropic/OpenAI):</strong> For generating date suggestions</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Each service has its own privacy policy governing how they handle your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Data Storage and Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement industry-standard security measures to protect your data, including encryption
              in transit and at rest. Your data is stored on secure servers provided by Supabase.
              However, no method of transmission or storage is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Your Rights and Choices</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Update or correct your information in the App settings</li>
              <li><strong>Deletion:</strong> Delete your account and all associated data from the App settings</li>
              <li><strong>Location:</strong> Disable location access in your device settings</li>
              <li><strong>Notifications:</strong> Manage notification preferences in the App settings</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your data for as long as your account is active. When you delete your account,
              we will delete your personal data within 30 days, except where retention is required by law
              or for legitimate business purposes (such as fraud prevention).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Children&apos;s Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Dately is not intended for children under 17 years of age. We do not knowingly collect
              personal information from children. If we discover that a child has provided us with
              personal information, we will delete it immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">10. International Users</h2>
            <p className="text-gray-700 leading-relaxed">
              If you are accessing the App from outside the United States, please be aware that your
              information may be transferred to, stored, and processed in the United States where our
              servers are located. By using the App, you consent to this transfer.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">11. California Privacy Rights</h2>
            <p className="text-gray-700 leading-relaxed">
              California residents have additional rights under the CCPA, including the right to know
              what personal information we collect, request deletion, and opt-out of sales (we do not
              sell personal information). To exercise these rights, contact us at sondre@stavhopp.no.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">12. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any significant
              changes by posting the new policy in the App and updating the &quot;Last updated&quot; date.
              Your continued use of the App after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">13. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:{" "}
              <a href="mailto:sondre@stavhopp.no" className="text-rose-600 hover:text-rose-700">
                sondre@stavhopp.no
              </a>
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              STAVHOPP.NO LLC<br />
              United States
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">&copy; 2025 STAVHOPP.NO LLC. All rights reserved.</p>
        </div>
      </div>
    </main>
  );
}
