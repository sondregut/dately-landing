export default function SupportPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Support</h1>
        <p className="text-gray-500 mb-8">We&apos;re here to help you make the most of Dately</p>

        <div className="space-y-8">
          {/* Contact Section */}
          <section className="bg-rose-50 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              Have a question, feedback, or need help? Reach out to our team:
            </p>
            <a
              href="mailto:sondre@stavhopp.no"
              className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              sondre@stavhopp.no
            </a>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">How do I cancel my subscription?</h3>
                <p className="text-gray-600 text-sm">
                  You can cancel your Dately Pro subscription anytime through your Apple ID settings.
                  Go to Settings &gt; [Your Name] &gt; Subscriptions &gt; Dately, then tap Cancel Subscription.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">How do I delete my account?</h3>
                <p className="text-gray-600 text-sm">
                  To delete your account and all associated data, go to Profile &gt; Settings &gt; Account &amp; Security &gt; Delete Account.
                  This action is permanent and cannot be undone.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">Why does Dately need my location?</h3>
                <p className="text-gray-600 text-sm">
                  We use your location to find nearby restaurants, venues, and activities for your date suggestions.
                  You can disable location access in your device settings, but this will limit the personalization of recommendations.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">How do I connect with my partner?</h3>
                <p className="text-gray-600 text-sm">
                  Go to Profile &gt; Partner to generate an invite code. Share this code with your partner,
                  and they can enter it in their app to connect your accounts.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">How do I restore my purchases?</h3>
                <p className="text-gray-600 text-sm">
                  If you&apos;ve previously subscribed to Dately Pro, you can restore your purchase by going to
                  the paywall screen and tapping &quot;Restore Purchases&quot; at the bottom.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">Is my data secure?</h3>
                <p className="text-gray-600 text-sm">
                  Yes! We use industry-standard encryption and secure servers to protect your data.
                  Your photos and memories are private and only visible to you and your connected partner.
                  Read our <a href="/privacy" className="text-rose-600 hover:underline">Privacy Policy</a> for more details.
                </p>
              </div>
            </div>
          </section>

          {/* Links Section */}
          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Legal</h2>
            <div className="flex gap-6">
              <a href="/terms" className="text-rose-600 hover:text-rose-700 font-medium">
                Terms of Service
              </a>
              <a href="/privacy" className="text-rose-600 hover:text-rose-700 font-medium">
                Privacy Policy
              </a>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">&copy; 2025 STAVHOPP.NO LLC. All rights reserved.</p>
        </div>
      </div>
    </main>
  );
}
