import { generateMetadata as genMeta } from '@/lib/seo'
import { team } from '@/data/team'
import MissionSection from '@/components/sections/about/MissionSection'
import TeamSection from '@/components/sections/about/TeamSection'
import CTASection from '@/components/sections/home/CTASection'
import StatsSection from '@/components/sections/home/StatsSection'
import GlowEffect from '@/components/ui/GlowEffect'

export const metadata = genMeta({
  title: 'About KC Tech Team | AI & IT Consulting Based in Kansas City, MO',
  description:
    'KC Tech Team is headquartered in Kansas City, MO — delivering AI consulting, IT managed services, automation, and cybersecurity to businesses locally and globally. Meet our team.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1428] to-[#060B18]" />
        <GlowEffect className="top-0 right-0 translate-x-1/4" size="xl" />
        <div className="max-w-4xl mx-auto relative">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/30 mb-6">
            About KC Tech Team
          </span>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-[#F0F4FF] mb-6 leading-tight">
            Your Technology{' '}
            <span className="gradient-text">Partner</span>
          </h1>
          <p className="text-xl text-[#7E9CC0] max-w-2xl leading-relaxed mb-8">
            Founded in Kansas City, Missouri — built to serve businesses locally and scale with
            clients around the world.
          </p>
          <div className="prose prose-invert max-w-none">
            <p className="text-[#7E9CC0] leading-relaxed">
              KC Tech Team is headquartered in downtown Kansas City, MO. Our primary support focus
              is the Greater KC Metro — from the Crossroads to Overland Park, from the Northland to
              Lee&apos;s Summit — where we provide hands-on, on-site service and deep local business
              understanding. At the same time, our team of 20+ technology professionals regularly
              partners with companies across the United States and internationally, delivering the
              same high standard of service regardless of geography.
            </p>
            <p className="text-[#7E9CC0] leading-relaxed mt-4">
              What sets KC Tech Team apart is our commitment to measurable outcomes. We don&apos;t
              sell technology — we deliver results. Every engagement starts with a clear understanding
              of your business goals and ends with outcomes you can see on your bottom line, whether
              you&apos;re around the corner or across the world.
            </p>
          </div>
        </div>
      </section>

      <MissionSection />
      <StatsSection />
      <TeamSection members={team} />
      <CTASection />
    </>
  )
}
