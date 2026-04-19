'use client'

import { motion } from 'framer-motion'
import {
  Stethoscope,
  Landmark,
  Factory,
  Truck,
  Scale,
  Building2,
  GraduationCap,
  ShoppingBag,
} from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const industries = [
  { icon: Stethoscope, name: 'Healthcare', note: 'HIPAA-ready' },
  { icon: Landmark, name: 'Financial Services', note: 'SOC 2 + GLBA' },
  { icon: Factory, name: 'Manufacturing', note: 'OT + IT converged' },
  { icon: Truck, name: 'Logistics', note: 'Multi-location ready' },
  { icon: Scale, name: 'Legal', note: 'Client-data secured' },
  { icon: Building2, name: 'Professional Services', note: 'Scale-ready stack' },
  { icon: GraduationCap, name: 'Education', note: 'CIPA + FERPA aware' },
  { icon: ShoppingBag, name: 'Retail', note: 'PCI-DSS hardened' },
]

export default function MSPIndustries() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D1428]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Industry Expertise"
          title="Built for"
          highlight="Kansas City Industries"
          subtitle="We've stood up, secured, and supported IT environments across the verticals that power the KC economy."
          className="mb-16"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((industry, i) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-[#1E3A5F] bg-[#111C35]/70 backdrop-blur-sm p-6 text-center hover:border-[#00D4FF]/40 hover:shadow-[0_0_20px_#00D4FF15] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF]/30 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-[#00D4FF]" />
                </div>
                <div className="font-heading font-semibold text-sm text-[#F0F4FF] mb-1">
                  {industry.name}
                </div>
                <div className="text-xs text-[#7E9CC0]">{industry.note}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
