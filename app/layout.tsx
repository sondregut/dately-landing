import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Dately - Date Nights, Simplified',
  description: 'Scratch to reveal surprise date plans powered by AI. Create unforgettable memories with your partner.',
  keywords: ['date night', 'couples app', 'date ideas', 'relationship', 'romantic'],
  openGraph: {
    title: 'Dately - Date Nights, Simplified',
    description: 'Scratch to reveal surprise date plans powered by AI.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans text-warm-brown antialiased">
        {children}
      </body>
    </html>
  )
}
