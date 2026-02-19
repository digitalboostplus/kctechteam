'use client'

import AnimatedCounter from '@/components/ui/AnimatedCounter'

const stats = [
  { end: 50, suffix: '+', label: 'Clients Served', description: 'Locally & globally' },
  { end: 99, suffix: '.9%', label: 'Uptime SLA', description: 'Guaranteed availability' },
  { end: 40, suffix: '%', label: 'Avg Cost Reduction', description: 'Through automation' },
  { end: 24, suffix: '/7', label: 'Support Coverage', description: 'Round-the-clock monitoring' },
  { end: 5, suffix: '+', label: 'Years of Excellence', description: 'Based in Kansas City, MO' },
  { end: 100, suffix: '%', label: 'Client Satisfaction', description: 'On first-year reviews' },
]

export default function StatsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#060B18] via-[#0D1428] to-[#060B18]" />
      <div className="absolute inset-0 bg-[#00D4FF]/3" />

      <div className="max-w-7xl mx-auto relative">
        {/* Top border */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-transparent mb-16" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="font-heading font-bold text-4xl lg:text-5xl mb-2 gradient-text">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              </div>
              <div className="font-semibold text-sm text-[#F0F4FF] mb-1">{stat.label}</div>
              <div className="text-xs text-[#7E9CC0]">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Bottom border */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-transparent mt-16" />
      </div>
    </section>
  )
}
