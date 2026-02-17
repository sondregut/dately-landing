import type { Metadata, Viewport } from 'next'
import { Inter, Libre_Baskerville } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre',
})

export const viewport: Viewport = {
  themeColor: '#0F0B0A',
}

export const metadata: Metadata = {
  title: {
    default: 'Surprise Date Ideas for Couples — AI Date Planner | Dately',
    template: '%s | Dately',
  },
  description: 'Tired of the same routine? Dately creates AI-powered surprise date plans with real local venues. Scratch to reveal your next adventure. Join the waitlist free.',
  metadataBase: new URL('https://www.trydately.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Dately — Scratch to Reveal Surprise Date Plans',
    description: 'AI picks real local restaurants, events & activities. You scratch to reveal the plan. Try the date night app couples are obsessing over.',
    type: 'website',
    url: 'https://www.trydately.app',
    siteName: 'Dately',
    locale: 'en_US',
    images: [
      {
        url: '/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Dately app — scratch to reveal your surprise date plan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dately — Scratch to Reveal Surprise Date Plans',
    description: 'AI picks real local restaurants, events & activities. You scratch to reveal the plan. Join the waitlist.',
    images: ['/hero-bg.jpg'],
    creator: '@trydately',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${libreBaskerville.variable}`}>
      <head>
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="google-site-verification" content="8ab9cd8ded14e302" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
