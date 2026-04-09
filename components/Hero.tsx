'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Romantic couple enjoying a surprise date night"
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          quality={65}
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(15, 11, 10, 0.85) 0%, rgba(15, 11, 10, 0.7) 50%, rgba(15, 11, 10, 0.5) 100%)',
          }}
        />
        {/* Bottom fade into next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{
            background: 'linear-gradient(to top, var(--bg-dark-deep) 0%, transparent 100%)',
          }}
        />
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-3xl">
          {/* Tagline with decorative line */}
          <div className="flex items-center gap-4 mb-8 hero-fade-in" style={{ animationDelay: '0s' }}>
            <div className="decorative-line" />
            <span className="display-tagline" style={{ color: 'var(--text-linen)' }}>
              Scratch to Reveal Your Next Date
            </span>
          </div>

          {/* Logo / Brand Name */}
          <h1
            className="display-logo mb-8 hero-fade-in"
            style={{ color: 'var(--text-ivory)', animationDelay: '0.1s' }}
          >
            Dately
            <span className="sr-only"> — AI-Powered Surprise Date Planner for Couples</span>
          </h1>

          {/* Description */}
          <p
            className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-body hero-fade-in"
            style={{ color: 'var(--text-linen)', animationDelay: '0.2s' }}
          >
            AI-powered surprise date plans you scratch to reveal. Create unforgettable
            memories with your partner, one spontaneous adventure at a time.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 hero-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* App Store Button - Coming Soon */}
            <span
              className="store-btn flex items-center gap-3 px-6 py-4 rounded-xl cursor-default opacity-70"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--text-ivory)' }} aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-60" style={{ color: 'var(--text-linen)' }}>Coming Soon on the</div>
                <div className="text-base font-medium -mt-0.5" style={{ color: 'var(--text-ivory)' }}>App Store</div>
              </div>
            </span>

            {/* Waitlist Button */}
            <a
              href="#waitlist"
              className="btn-secondary flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-medium"
            >
              <span>Join Waitlist</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Availability Note */}
          <p
            className="text-sm font-body hero-fade-in"
            style={{ color: 'var(--text-taupe)', animationDelay: '0.5s' }}
          >
            Coming soon to iOS. Join the waitlist for early access.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hero-fade-in" style={{ animationDelay: '1s' }}>
        <a
          href="#how-it-works"
          className="block hero-bounce"
          aria-label="Scroll down"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" style={{ color: 'var(--text-taupe)' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </a>
      </div>
    </section>
  )
}
