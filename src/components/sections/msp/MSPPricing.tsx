'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { cn } from '@/lib/utils'

interface Tier {
  name: string
  price: string
  cadence: string
  description: string
  highlight?: boolean
  badge?: string
  features: string[]
  ctaLabel: string
  ctaHref: string
}

const tiers: Tier[] = [
  {
    name: 'Essentials',
    price: '$99',
    cadence: '/user / month',
    description: 'Proactive monitoring and help desk for small teams that need dependable IT support.',
    features: [
      '24/7 network & endpoint monitoring',
      'Unlimited remote help desk',
      'Automated OS + app patching',
      'Managed antivirus',
      'Microsoft 365 user management',
      'Monthly health reporting',
      'Business-hours support',
    ],
    ctaLabel: 'Start with Essentials',
    ctaHref: '/contact?service=it-msp&plan=essentials',
  },
  {
    name: 'Business',
    price: '$149',
    cadence: '/user / month',
    description: 'Our most popular plan. Full-stack IT operations plus advanced security for growing KC businesses.',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Everything in Essentials',
      '24/7 support (including after-hours)',
      'Next-gen EDR + managed SOC',
      'Email threat protection + DMARC',
      'Dark web + identity monitoring',
      'Cloud backup with immutable copies',
      'Quarterly vCIO strategy reviews',
      'Phishing simulation training',
    ],
    ctaLabel: 'Choose Business',
    ctaHref: '/contact?service=it-msp&plan=business',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: 'Tailored to your environment',
    description: 'For regulated or multi-location businesses that need compliance, advanced security, and white-glove service.',
    features: [
      'Everything in Business',
      'Dedicated account engineer',
      'Compliance mapping (HIPAA, SOC2, PCI)',
      'On-site support across KC metro',
      'SIEM + log retention',
      'Penetration testing (annual)',
      'Custom SLAs with financial remedies',
      'Executive quarterly business reviews',
    ],
    ctaLabel: 'Request a Quote',
    ctaHref: '/contact?service=it-msp&plan=enterprise',
  },
]

export default function MSPPricing() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0D1428]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Simple, Flat-Rate Pricing"
          title="Pick a Plan."
          highlight="Sleep Better Tonight."
          subtitle="Transparent per-user pricing. No setup fees. No long-term contracts. Cancel with 60 days notice."
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                'relative rounded-2xl p-8 flex flex-col backdrop-blur-sm',
                tier.highlight
                  ? 'border-2 border-[#00D4FF] bg-[#111C35] shadow-[0_0_60px_#00D4FF25]'
                  : 'border border-[#1E3A5F] bg-[#111C35]/70'
              )}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#00D4FF] text-[#060B18]">
                    <Star className="w-3 h-3 fill-current" />
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-heading font-bold text-2xl text-[#F0F4FF] mb-2">{tier.name}</h3>
                <p className="text-sm text-[#7E9CC0] leading-relaxed">{tier.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-heading font-bold text-5xl text-[#F0F4FF]">{tier.price}</span>
                  <span className="text-sm text-[#7E9CC0]">{tier.cadence}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-[#F0F4FF]">
                    <Check className="w-4 h-4 text-[#00FF88] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.ctaHref}
                className={cn(
                  'w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200',
                  tier.highlight
                    ? 'bg-[#00D4FF] text-[#060B18] hover:shadow-[0_0_30px_#00D4FF60] hover:scale-[1.02]'
                    : 'border border-[#1E3A5F] text-[#F0F4FF] hover:border-[#00D4FF]/50 hover:bg-[#00D4FF]/5'
                )}
              >
                {tier.ctaLabel}
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-[#7E9CC0] mt-10">
          Not sure which plan fits? Book a free 30-minute assessment and we&apos;ll tailor a quote to
          your exact environment.
        </p>
      </div>
    </section>
  )
}
