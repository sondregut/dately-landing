export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="fixed bottom-0 left-0 right-0 py-6 px-6 md:px-12 lg:px-24 z-50"
      style={{
        background: 'linear-gradient(to top, var(--bg-dark-deep) 0%, transparent 100%)',
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p
          className="text-sm order-2 md:order-1"
          style={{
            color: 'var(--text-taupe)',
            fontFamily: 'var(--font-inter), system-ui, sans-serif'
          }}
        >
          &copy; {currentYear} Dately. All rights reserved.
        </p>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6 text-sm order-1 md:order-2">
          <a
            href="/"
            className="transition-colors duration-200 hover:opacity-100"
            style={{
              color: 'var(--text-linen)',
              fontFamily: 'var(--font-inter), system-ui, sans-serif'
            }}
          >
            Home
          </a>
          <a
            href="/terms"
            className="transition-colors duration-200 hover:opacity-100"
            style={{
              color: 'var(--text-linen)',
              fontFamily: 'var(--font-inter), system-ui, sans-serif'
            }}
          >
            Terms
          </a>
          <a
            href="/privacy"
            className="transition-colors duration-200 hover:opacity-100"
            style={{
              color: 'var(--text-linen)',
              fontFamily: 'var(--font-inter), system-ui, sans-serif'
            }}
          >
            Privacy
          </a>
          <a
            href="/support"
            className="transition-colors duration-200 hover:opacity-100"
            style={{
              color: 'var(--text-linen)',
              fontFamily: 'var(--font-inter), system-ui, sans-serif'
            }}
          >
            Support
          </a>

          {/* TikTok Icon */}
          <a
            href="https://tiktok.com/@datelyapp"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 transition-colors duration-200"
            style={{ color: 'var(--text-linen)' }}
            aria-label="Follow us on TikTok"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  )
}
