'use client'

import AnimatedCounter from '@/components/ui/AnimatedCounter'

const stats = [
  { end: 99, suffix: '.9%', label: 'Uptime SLA', description: 'Guaranteed availability' },
  { end: 15, suffix: ' min', label: 'Response Time', description: 'For critical tickets' },
  { end: 24, suffix: '/7', label: 'Monitoring', description: 'Never miss an alert' },
  { end: 40, suffix: '%', label: 'Lower IT Costs', description: 'vs. in-house hiring' },
  { end: 50, suffix: '+', label: 'KC Businesses', description: 'Actively managed' },
  { end: 4, suffix: ' hr', label: 'RTO Target', description: 'Disaster recovery' },
]

export default function MSPStats() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#060B18] via-[#0D1428] to-[#060B18]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-transparent mb-16" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading font-bold text-4xl lg:text-5xl mb-2 gradient-text">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              </div>
              <div className="font-semibold text-sm text-[#F0F4FF] mb-1">{stat.label}</div>
              <div className="text-xs text-[#7E9CC0]">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-transparent mt-16" />
      </div>
    </section>
  )
}
