import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import VoiceAgent from '@/components/ai/VoiceAgent'
import { localBusinessSchema, organizationSchema } from '@/lib/seo'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'KC Tech Team | AI Consulting & IT Managed Services Kansas City',
    template: '%s | KC Tech Team',
  },
  description:
    "AI consulting, IT managed services, automation, cybersecurity, web development, and custom integrations firm headquartered in Kansas City, MO. Serving KC businesses and clients globally. Free consultation.",
  keywords:
    'AI consulting Kansas City, IT managed services Kansas City, automation consulting KC, cybersecurity services Kansas City, managed IT services Kansas City MO, KC Tech Team',
  authors: [{ name: 'KC Tech Team', url: 'https://kctechteam.com' }],
  creator: 'KC Tech Team',
  publisher: 'KC Tech Team',
  robots: 'index, follow',
  alternates: { canonical: 'https://kctechteam.com' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kctechteam.com',
    siteName: 'KC Tech Team',
    title: 'KC Tech Team | AI Consulting & IT Managed Services Kansas City',
    description:
      "AI consulting, IT managed services, automation, cybersecurity, web development, and custom integrations. Headquartered in Kansas City, MO — serving clients locally and globally.",
    images: [
      {
        url: 'https://kctechteam.com/images/og-default.png',
        width: 1200,
        height: 630,
        alt: 'KC Tech Team — AI & IT Solutions for Kansas City',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KC Tech Team | AI Consulting Kansas City',
    description:
      "Kansas City's premier AI consulting and IT managed services firm.",
    images: ['https://kctechteam.com/images/og-default.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="bg-[#060B18] text-[#F0F4FF] min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <VoiceAgent />
      </body>
    </html>
  )
}
