import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import AppPreview from '@/components/AppPreview'
import Audiences from '@/components/Audiences'
import FAQ from '@/components/FAQ'
import Waitlist from '@/components/Waitlist'
import Footer from '@/components/Footer'

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Dately',
  url: 'https://trydately.com',
  logo: 'https://trydately.com/icon.png',
  sameAs: [
    'https://instagram.com/trydately',
  ],
}

const softwareAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Dately',
  operatingSystem: 'iOS',
  applicationCategory: 'LifestyleApplication',
  description: 'AI-powered surprise date planner that creates personalized itineraries with real local venues. Scratch to reveal your next date adventure.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Dately?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dately is an iOS app that creates AI-powered surprise date plans. You set your mood, budget, and time — then scratch to reveal a personalized itinerary built from real local venues and events.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the scratch-to-reveal feature work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Once your date plan is generated, each activity is hidden behind a scratch card. Swipe to reveal each part of your itinerary one at a time — adding a fun element of surprise to your date night.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Dately free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dately will offer a free tier with a limited number of date plans per month. Premium plans unlock unlimited dates, advanced customization, and exclusive date packs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cities is Dately available in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dately works in any city. We use Google Places, Ticketmaster, and local event data to find real venues and experiences wherever you are.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Dately find venues and events?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We combine multiple data sources — Google Places for restaurants, cafes, and attractions; Ticketmaster for concerts and shows; and local event APIs for community events. Every suggestion is a real place you can visit.',
      },
    },
    {
      '@type': 'Question',
      name: 'When does Dately launch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are currently in development with a launch planned for 2026. Join the waitlist to get early access and be the first to know when we go live.',
      },
    },
  ],
}

const webSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Dately',
  url: 'https://trydately.com',
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
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
    </>
  )
}
