import Hero from '@/components/Hero'
import Waitlist from '@/components/Waitlist'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Waitlist />
      <Footer />
    </main>
  )
}
