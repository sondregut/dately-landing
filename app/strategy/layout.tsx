import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing Strategy | Dately Internal',
  robots: {
    index: false,
    follow: false,
  },
}

export default function StrategyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
