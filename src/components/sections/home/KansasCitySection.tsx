import Link from 'next/link'
import { MapPin, Globe, ArrowRight } from 'lucide-react'
import Badge from '@/components/ui/Badge'

export default function KansasCitySection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0D1428]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <MapPin className="w-6 h-6 text-[#00D4FF]" />
          <Badge variant="accent">Proudly Headquartered in KC</Badge>
        </div>

        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#F0F4FF] mb-6 leading-tight">
          Kansas City&apos;s Premier AI Consulting &amp;{' '}
          <span className="gradient-text">IT Managed Services Firm</span>
        </h2>

        <div className="space-y-4 text-[#7E9CC0] leading-relaxed mb-10">
          <p>
            KC Tech Team is headquartered in Kansas City, Missouri — with deep roots in the KC business
            community and a strong presence across the Greater Kansas City Metropolitan Area, including
            Overland Park, Lenexa, Leawood, Lee&apos;s Summit, Independence, and Blue Springs. We
            specialize in{' '}
            <strong className="text-[#F0F4FF]">AI consulting</strong>,{' '}
            <strong className="text-[#F0F4FF]">IT managed services</strong>,{' '}
            <strong className="text-[#F0F4FF]">intelligent automation</strong>,{' '}
            <strong className="text-[#F0F4FF]">cybersecurity</strong>,{' '}
            <strong className="text-[#F0F4FF]">web development</strong>, and{' '}
            <strong className="text-[#F0F4FF]">custom integrations</strong>.
          </p>
          <p>
            While our primary support and on-site capabilities are focused in the Kansas City region,
            we proudly partner with companies across the United States and internationally. Whether
            you&apos;re a KC-based healthcare provider, a national logistics company, or a global
            enterprise — KC Tech Team delivers the same level of dedicated, expert service.
          </p>
          <p>
            We&apos;ve helped over 50 organizations modernize their technology infrastructure, implement
            AI-driven workflows, and achieve enterprise-grade cybersecurity posture — all without
            enterprise-grade price tags.
          </p>
        </div>

        {/* Local & global reach */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-[#00D4FF]" />
              <span className="text-xs font-semibold text-[#F0F4FF] uppercase tracking-wider">KC Metro Coverage</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                'Kansas City, MO',
                'Kansas City, KS',
                'Overland Park',
                'Lenexa',
                'Leawood',
                "Lee's Summit",
                'Independence',
                'Blue Springs',
                'Olathe',
                'Shawnee',
              ].map((city) => (
                <span
                  key={city}
                  className="px-3 py-1 rounded-full text-xs border border-[#1E3A5F] text-[#7E9CC0]"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Globe className="w-4 h-4 text-[#00FF88]" />
              <span className="text-xs font-semibold text-[#F0F4FF] uppercase tracking-wider">Also Serving</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {['United States', 'Canada', 'United Kingdom', 'Europe', 'Worldwide Remote'].map((region) => (
                <span
                  key={region}
                  className="px-3 py-1 rounded-full text-xs border border-[#00FF88]/20 text-[#00FF88]/80"
                >
                  {region}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00D4FF] text-[#060B18] font-semibold text-sm hover:shadow-[0_0_24px_#00D4FF60] transition-all duration-200 hover:scale-105"
        >
          Schedule a Free Consultation
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
