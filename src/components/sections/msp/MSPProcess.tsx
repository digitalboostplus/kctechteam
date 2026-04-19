'use client'

import { motion } from 'framer-motion'
import { Search, ClipboardList, Rocket, TrendingUp } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Free IT Assessment',
    description:
      'A 30-minute discovery call plus a no-cost technical audit of your current environment. We uncover risks, quick wins, and cost leaks before you sign anything.',
    duration: 'Week 1',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Tailored Proposal',
    description:
      "You get a flat-rate proposal with exact scope, SLAs, and an executive summary. No upsells. If we can't clearly beat your current setup, we'll say so.",
    duration: 'Week 1-2',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'White-Glove Onboarding',
    description:
      'Our team takes over seamlessly — agents deployed, backups configured, security hardened, and staff introduced to your new help desk. Zero downtime.',
    duration: 'Week 3-4',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Ongoing Partnership',
    description:
      'Monthly health reports, quarterly vCIO reviews, and a proactive roadmap. As your business grows, your IT scales with you — predictably and securely.',
    duration: 'Month 2+',
  },
]

export default function MSPProcess() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="How It Works"
          title="From Chaos to"
          highlight="Confidence in 30 Days"
          subtitle="Our proven onboarding process gets you fully managed without disrupting your operations."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-transparent" />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative"
              >
                <div className="relative z-10 flex justify-center mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-[#111C35] border-2 border-[#00D4FF]/40 flex items-center justify-center shadow-[0_0_30px_#00D4FF20]">
                    <Icon className="w-10 h-10 text-[#00D4FF]" />
                  </div>
                </div>

                <div className="text-center">
                  <div className="font-heading font-bold text-xs text-[#00FF88] tracking-widest mb-2">
                    STEP {step.number} · {step.duration}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#F0F4FF] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#7E9CC0] leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
