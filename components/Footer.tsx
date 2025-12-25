export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 border-t border-coral-400/10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">💕</span>
            <span className="text-xl font-semibold gradient-text">Dately</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm">
            <a href="#" className="text-warm-brown/60 hover:text-coral-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-warm-brown/60 hover:text-coral-400 transition-colors">
              Terms of Service
            </a>
            <a href="mailto:hello@dately.app" className="text-warm-brown/60 hover:text-coral-400 transition-colors">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-warm-brown/40">
            © {currentYear} Dately. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
