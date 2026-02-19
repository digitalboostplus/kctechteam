import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/seo'
import { getServiceBySlug } from '@/data/services'
import ServiceHero from '@/components/sections/services/ServiceHero'
import ServiceFeatures from '@/components/sections/services/ServiceFeatures'
import CTASection from '@/components/sections/home/CTASection'

const service = getServiceBySlug('web-development')!

export const metadata = genMeta({
  title: service.metaTitle,
  description: service.metaDescription,
  path: '/services/web-development',
  keywords: ['web development Kansas City', 'custom website KC', 'web app development Kansas City'],
})

export default function WebDevelopmentPage() {
  return (
    <>
      <ServiceHero
        badge="Web Development"
        title="Web Development for Kansas City Businesses"
        description={service.shortDescription}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl bg-[#00D4FF] text-[#060B18] font-semibold hover:shadow-[0_0_30px_#00D4FF60] transition-all hover:scale-105"
          >
            Start Your Project
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl border border-[#1E3A5F] text-[#F0F4FF] hover:border-[#00D4FF]/50 transition-all"
          >
            View Our Work
          </Link>
        </div>
      </ServiceHero>

      <ServiceFeatures features={service.features} faqs={service.faqs} />
      <CTASection />
    </>
  )
}
