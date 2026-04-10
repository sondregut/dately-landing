import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import AppPreview from '@/components/AppPreview'
import FounderStory from '@/components/FounderStory'
import Audiences from '@/components/Audiences'
import FAQ from '@/components/FAQ'
import Waitlist from '@/components/Waitlist'
import Footer from '@/components/Footer'

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.trydately.app/#organization',
  name: 'Dately',
  url: 'https://www.trydately.app',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.trydately.app/icon.png',
    width: 512,
    height: 512,
  },
  description: 'AI-powered surprise date planner that creates personalized itineraries with real local venues and events.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'support@trydately.com',
    contactType: 'customer support',
  },
  sameAs: [
    'https://instagram.com/trydately',
    'https://tiktok.com/@datelyapp',
  ],
}

const softwareAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': 'https://www.trydately.app/#app',
  name: 'Dately',
  operatingSystem: 'iOS',
  applicationCategory: 'LifestyleApplication',
  description: 'AI-powered surprise date planner that creates personalized itineraries with real local venues. Scratch to reveal your next date adventure.',
  url: 'https://www.trydately.app',
  author: {
    '@type': 'Organization',
    '@id': 'https://www.trydately.app/#organization',
  },
  screenshot: [
    'https://www.trydately.app/screenshots/dately_home.jpg',
    'https://www.trydately.app/screenshots/dately_scratch.jpg',
    'https://www.trydately.app/screenshots/dately_dateplan.jpg',
  ],
  offers: {
    '@type': 'Offer',
    price: 0,
    priceCurrency: 'USD',
    availability: 'https://schema.org/PreOrder',
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
        text: 'Dately is an iOS app designed for couples and singles who want to break out of date-night routines without spending hours planning. Instead of choosing a restaurant or activity yourself, you set a few preferences — your mood (romantic, adventurous, cozy, or spontaneous), your available time, and your budget — and Dately\'s AI generates a complete, multi-stop date itinerary using real venues from your area. The surprise element is central to the experience: each activity in your plan is hidden behind a virtual scratch card. You swipe to reveal each stop one at a time, turning the planning process itself into part of the date. Every suggestion is a real location you can actually visit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the scratch-to-reveal feature work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Once Dately generates your date plan, each activity — whether it\'s a dinner reservation, a live show, or a scenic walk — is hidden behind an interactive scratch card within the app. You swipe your finger across the card to reveal each part of your itinerary one at a time. This means you can choose to reveal the entire plan at once if you prefer to prepare, or reveal each stop just before you head there for maximum spontaneity. The scratch mechanic was designed to bring back the excitement of not knowing what\'s next, turning an ordinary evening into something that feels like an adventure. After your date, you can save the revealed plan to your scrapbook with photos and notes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Dately free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dately offers a free tier that gives you a limited number of AI-generated date plans per month — enough to try the app and see how it works for you. If you want more, premium plans unlock unlimited date generation, advanced customization options like dietary restrictions and accessibility preferences, and exclusive themed date packs (such as anniversary specials, seasonal activities, and adventure challenges). Pricing details will be announced closer to launch. All plans are billed through the Apple App Store, so you can manage or cancel your subscription anytime from your iPhone settings. There are no hidden fees, and free users still get the full scratch-to-reveal experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cities is Dately available in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dately works in any city worldwide. The app uses your location to query real-time venue and event data from multiple sources, so it adapts to wherever you are. Whether you\'re planning a date night in New York, a weekend outing in London, or exploring a smaller town you\'re visiting for the first time, Dately will find real restaurants, bars, attractions, concerts, and local events near you. The quality of suggestions naturally varies by location density — a major city will have more options than a rural area — but the AI is designed to create great plans with whatever is available. You can also set a custom location if you want to plan ahead for a trip.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Dately find venues and events?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dately combines multiple real-time data sources to build your date itinerary — restaurants, cafes, bars, local attractions, concerts, live shows, community events, and more. The AI then takes your preferences (mood, budget, time, dietary needs) and weaves these real venues into a coherent, multi-stop plan that flows logically. Every single suggestion is a real place with a real address that you can navigate to. Dately never invents fictional venues or fabricates business details.',
      },
    },
    {
      '@type': 'Question',
      name: 'When does Dately launch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dately is currently in active development with a launch planned for 2026. The app is being built as a native iOS application and will be available on the Apple App Store. If you join the waitlist, you\'ll be among the first to know when the app goes live and may receive early access before the public launch. Waitlist members will also get updates on new features as they\'re built, including the date scrapbook, social sharing, and themed date packs.',
      },
    },
  ],
}

const webSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.trydately.app/#website',
  name: 'Dately',
  url: 'https://www.trydately.app',
  description: 'AI-powered surprise date planner that creates personalized itineraries with real local venues.',
  publisher: {
    '@type': 'Organization',
    '@id': 'https://www.trydately.app/#organization',
  },
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
        <FounderStory />
        <Audiences />
        <FAQ />
        <Waitlist />
        <Footer />
      </main>
    </>
  )
}
