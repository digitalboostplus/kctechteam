'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, DollarSign, Clock3, ShieldAlert, UserX, TrendingDown } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const painPoints = [
  {
    icon: AlertTriangle,
    title: 'Downtime Kills Revenue',
    description:
      'Every hour of IT downtime costs the average SMB $8,000+. Reactive break-fix models leave you exposed when systems fail.',
  },
  {
    icon: DollarSign,
    title: 'Unpredictable IT Bills',
    description:
      'Hourly billing and surprise project fees make IT impossible to budget. You never know what next month will cost.',
  },
  {
    icon: Clock3,
    title: 'Slow Response Times',
    description:
      'When tickets sit in a queue for hours, your team loses productivity. Employees give up and find workarounds.',
  },
  {
    icon: ShieldAlert,
    title: 'Ransomware & Breaches',
    description:
      "43% of cyberattacks target small businesses. Without 24/7 monitoring, you won't know you've been hit until it's too late.",
  },
  {
    icon: UserX,
    title: 'IT Staff Turnover',
    description:
      'Losing your in-house IT lead means months of ramp-up, tribal knowledge gone, and business continuity at risk.',
  },
  {
    icon: TrendingDown,
    title: 'Aging Infrastructure',
    description:
      'Out-of-warranty servers, unpatched software, and legacy systems become ticking time bombs no one wants to touch.',
  },
]

export default function MSPPainPoints() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D1428]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="The Problem"
          title="Most Kansas City Businesses Are"
          highlight="One Outage Away From Disaster"
          subtitle="Reactive IT support isn't just expensive — it's a liability. These are the problems our KC clients faced before switching to managed services."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, i) => {
            const Icon = point.icon
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-[#1E3A5F] bg-[#111C35]/70 backdrop-blur-sm p-6 hover:border-[#00D4FF]/30 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[#1E3A5F]/60 border border-[#1E3A5F] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#FF6B6B]" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-[#F0F4FF] mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-[#7E9CC0] leading-relaxed">{point.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
