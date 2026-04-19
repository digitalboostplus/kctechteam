import { generateMetadata as genMeta } from '@/lib/seo'
import MSPHero from '@/components/sections/msp/MSPHero'
import MSPPainPoints from '@/components/sections/msp/MSPPainPoints'
import MSPServices from '@/components/sections/msp/MSPServices'
import MSPStats from '@/components/sections/msp/MSPStats'
import MSPProcess from '@/components/sections/msp/MSPProcess'
import MSPPricing from '@/components/sections/msp/MSPPricing'
import MSPIndustries from '@/components/sections/msp/MSPIndustries'
import MSPTestimonials from '@/components/sections/msp/MSPTestimonials'
import MSPFAQ from '@/components/sections/msp/MSPFAQ'
import MSPFinalCTA from '@/components/sections/msp/MSPFinalCTA'

export const metadata = genMeta({
  title: 'IT MSP Kansas City | Flat-Rate Managed IT Services | KC Tech Team',
  description:
    "Kansas City's flat-rate IT managed service provider. 24/7 monitoring, local help desk with 15-minute response, 99.9% uptime SLA, and advanced cybersecurity — one predictable monthly bill. Free IT assessment.",
  path: '/msp',
  keywords: [
    'IT MSP Kansas City',
    'managed service provider Kansas City',
    'managed IT services KC',
    'Kansas City MSP',
    'IT support Kansas City',
    'outsourced IT Kansas City MO',
    'flat rate IT Kansas City',
    'co-managed IT Kansas City',
  ],
})

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How fast can you onboard us?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most Kansas City clients are fully onboarded in 2–4 weeks depending on size. Our onboarding runs in parallel with your current provider so there is zero gap in coverage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do we have to sign a long-term contract?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Our standard agreement is month-to-month after the first 90 days, with 60 days notice to cancel.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does your 99.9% uptime SLA cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Network availability, server uptime, and critical line-of-business application performance. Missed SLAs generate financial credits automatically.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is your help desk local?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — every technician is based in Kansas City, MO, and we provide on-site support throughout the KC metro.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you price vs. in-house IT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A dedicated IT hire in Kansas City costs $85K–$140K fully loaded. Our Business tier typically costs 40–60% less and delivers an entire team rather than one person.',
      },
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'IT Managed Services',
  provider: {
    '@type': 'LocalBusiness',
    name: 'KC Tech Team',
    telephone: '+1-816-555-0100',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1000 Walnut St, Suite 1400',
      addressLocality: 'Kansas City',
      addressRegion: 'MO',
      postalCode: '64106',
      addressCountry: 'US',
    },
  },
  areaServed: 'Greater Kansas City Metropolitan Area',
  description:
    'Flat-rate managed IT services including 24/7 monitoring, help desk, cybersecurity, cloud management, and vCIO advisory for Kansas City businesses.',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '99',
      priceCurrency: 'USD',
      unitText: 'per user per month',
    },
  },
}

export default function MSPLandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <MSPHero />
      <MSPPainPoints />
      <MSPServices />
      <MSPStats />
      <MSPProcess />
      <MSPPricing />
      <MSPIndustries />
      <MSPTestimonials />
      <MSPFAQ />
      <MSPFinalCTA />
    </>
  )
}
