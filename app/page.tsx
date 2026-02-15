import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import AppPreview from '@/components/AppPreview'
import Audiences from '@/components/Audiences'
import FAQ from '@/components/FAQ'
import Waitlist from '@/components/Waitlist'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <AppPreview />
      <Audiences />
      <FAQ />
      <Waitlist />
      <Footer />
    </main>
  )
}
