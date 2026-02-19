import HeroSection from '@/components/sections/home/HeroSection'
import ServicesOverview from '@/components/sections/home/ServicesOverview'
import StatsSection from '@/components/sections/home/StatsSection'
import WhyKCSection from '@/components/sections/home/WhyKCSection'
import KansasCitySection from '@/components/sections/home/KansasCitySection'
import TestimonialsSection from '@/components/sections/home/TestimonialsSection'
import CTASection from '@/components/sections/home/CTASection'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata = genMeta({
  title: 'AI Consulting & IT Managed Services Kansas City',
  description:
    "Kansas City's #1 AI consulting, IT managed services, automation, and cybersecurity firm. Transform your KC business with proven technology solutions. Free consultation.",
  path: '/',
})

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <StatsSection />
      <WhyKCSection />
      <KansasCitySection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
