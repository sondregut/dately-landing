import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'Dately - Scratch to Reveal Your Next Date',
  description: 'AI-powered surprise date plans you scratch to reveal. Create unforgettable memories with your partner, one spontaneous adventure at a time.',
  keywords: ['date night', 'couples app', 'date ideas', 'relationship', 'romantic', 'surprise dates', 'AI dating'],
  openGraph: {
    title: 'Dately - Scratch to Reveal Your Next Date',
    description: 'AI-powered surprise date plans you scratch to reveal. Create unforgettable memories with your partner.',
    type: 'website',
  },
  themeColor: '#0F0B0A',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${libreBaskerville.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
