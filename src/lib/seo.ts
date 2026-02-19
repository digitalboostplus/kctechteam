import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kctechteam.com'
const siteName = 'KC Tech Team'
const defaultDescription =
  'KC Tech Team is Kansas City\'s premier AI consulting, IT managed services, automation, and cybersecurity firm. Transform your business with cutting-edge technology.'

interface SEOProps {
  title: string
  description?: string
  keywords?: string[]
  path?: string
  ogImage?: string
  noIndex?: boolean
}

export function generateMetadata({
  title,
  description = defaultDescription,
  keywords = [],
  path = '',
  ogImage = '/images/og-default.png',
  noIndex = false,
}: SEOProps): Metadata {
  const url = `${siteUrl}${path}`
  const fullTitle = path === '' ? `${siteName} | ${title}` : `${title} | ${siteName}`

  return {
    title: fullTitle,
    description,
    keywords: [
      'AI consulting Kansas City',
      'IT managed services Kansas City',
      'automation consulting KC',
      'cybersecurity services Kansas City',
      'managed IT services Kansas City MO',
      'KC Tech Team',
      ...keywords,
    ].join(', '),
    authors: [{ name: siteName, url: siteUrl }],
    creator: siteName,
    publisher: siteName,
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      images: [
        {
          url: `${siteUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${siteUrl}${ogImage}`],
    },
  }
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'KC Tech Team',
  description:
    'AI consulting, IT managed services, automation, cybersecurity, web development, and custom integrations firm headquartered in Kansas City, MO. Serving KC businesses and clients globally.',
  url: siteUrl,
  telephone: '+1-816-555-0100',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1000 Walnut St, Suite 1400',
    addressLocality: 'Kansas City',
    addressRegion: 'MO',
    postalCode: '64106',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 39.0997,
    longitude: -94.5786,
  },
  areaServed: [
    {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 39.0997,
        longitude: -94.5786,
      },
      geoRadius: '100000',
    },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'United Kingdom' },
  ],
  serviceArea: 'Greater Kansas City Metropolitan Area and Global',
  priceRange: '$$',
  openingHours: 'Mo-Fr 08:00-18:00',
  sameAs: [
    'https://www.linkedin.com/company/kc-tech-team',
    'https://twitter.com/kctechteam',
  ],
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KC Tech Team',
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'hello@kctechteam.com',
  },
}
