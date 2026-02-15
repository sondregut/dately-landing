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
  title: 'Dately - Scratch to Reveal Your Next Date',
  description: 'AI-powered surprise date plans you scratch to reveal. Create unforgettable memories with your partner, one spontaneous adventure at a time.',
  keywords: ['date night', 'couples app', 'date ideas', 'relationship', 'romantic', 'surprise dates', 'AI dating'],
  metadataBase: new URL('https://trydately.com'),
  openGraph: {
    title: 'Dately - Scratch to Reveal Your Next Date',
    description: 'AI-powered surprise date plans you scratch to reveal. Create unforgettable memories with your partner.',
    type: 'website',
    url: 'https://trydately.com',
    siteName: 'Dately',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dately - AI-powered surprise date plans',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dately - Scratch to Reveal Your Next Date',
    description: 'AI-powered surprise date plans you scratch to reveal.',
    images: ['/og-image.png'],
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
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
