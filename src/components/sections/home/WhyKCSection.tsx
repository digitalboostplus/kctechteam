'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Cpu, Globe, Lock, TrendingUp, Users } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import dynamic from 'next/dynamic'

const SceneWrapper = dynamic(() => import('@/components/three/SceneWrapper'), { ssr: false })
const DataFlowScene = dynamic(() => import('@/components/three/DataFlowScene'), { ssr: false })

const features = [
  {
    icon: Cpu,
    title: 'Local Experts, Global Technology',
    description:
      'Deep roots in Kansas City with access to cutting-edge AI and enterprise-grade technology.',
  },
  {
    icon: TrendingUp,
    title: 'Proven ROI',
    description:
      'Our clients see an average 40% reduction in operational costs within the first year.',
  },
  {
    icon: Users,
    title: 'Dedicated Account Teams',
    description:
      'You get a named account manager who knows your business, not a rotating support queue.',
  },
  {
    icon: Lock,
    title: 'Security-First Approach',
    description:
      'Every engagement starts with security. We build compliance and protection into the foundation.',
  },
  {
    icon: Globe,
    title: 'Scalable Solutions',
    description:
      'Solutions designed to grow with you — from 10-person teams to enterprise-wide deployments.',
  },
  {
    icon: CheckCircle,
    title: 'No-Lock-In Contracts',
    description:
      'Month-to-month options available. We earn your business every month through results.',
  },
]

export default function WhyKCSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Features */}
          <div>
            <SectionHeading
              badge="Why KC Tech Team"
              title="The Kansas City Technology"
              highlight="Partner You Deserve"
              centered={false}
              className="mb-10"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, i) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-[#00D4FF]" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-sm text-[#F0F4FF] mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-xs text-[#7E9CC0] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Right: 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[450px] rounded-2xl border border-[#1E3A5F] bg-[#0D1428]/50 overflow-hidden"
          >
            <SceneWrapper camera={{ position: [0, 0, 6] }}>
              <DataFlowScene />
            </SceneWrapper>
            {/* Overlay label */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass rounded-xl p-4 border border-[#1E3A5F]">
                <p className="text-xs font-semibold text-[#00D4FF] mb-1">Real-Time Data Intelligence</p>
                <p className="text-xs text-[#7E9CC0]">
                  Visualizing how KC Tech Team connects your business systems into a unified intelligence layer.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
