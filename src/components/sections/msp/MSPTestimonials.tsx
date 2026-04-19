'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const testimonials = [
  {
    quote:
      "We cut our IT budget 32% the first year and our uptime went from sketchy to flawless. KC Tech Team feels like our in-house IT department — except they actually answer the phone.",
    author: 'Rachel Okafor',
    role: 'COO',
    company: 'Midwest Orthopedic Partners, Overland Park',
    stars: 5,
  },
  {
    quote:
      "They migrated 80 users off our aging on-prem servers to Microsoft 365 over a weekend. Monday morning nobody even noticed — which is the highest compliment I can give an IT partner.",
    author: 'Marcus Bennett',
    role: 'CFO',
    company: 'Bennett Logistics, Kansas City MO',
    stars: 5,
  },
  {
    quote:
      "When our old MSP got acquired and service tanked, KC Tech Team onboarded us in 2 weeks. The vCIO piece alone has saved us from two projects we didn't actually need.",
    author: 'Diana Reyes',
    role: 'Managing Partner',
    company: "Reyes & Hart Legal Group, Lee's Summit",
    stars: 5,
  },
]

export default function MSPTestimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, #00FF88 1px, transparent 0)',
          backgroundSize: '56px 56px',
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeading
          badge="Client Stories"
          title="Kansas City Businesses"
          highlight="Trust KC Tech Team"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-[#1E3A5F] bg-[#111C35]/70 backdrop-blur-sm p-8 flex flex-col"
            >
              <Quote className="w-8 h-8 text-[#00D4FF]/40 mb-4" />

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-[#00FF88] fill-current" />
                ))}
              </div>

              <p className="text-base text-[#F0F4FF] leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="pt-4 border-t border-[#1E3A5F]">
                <div className="font-heading font-semibold text-[#F0F4FF]">{t.author}</div>
                <div className="text-sm text-[#7E9CC0]">{t.role}</div>
                <div className="text-xs text-[#00D4FF] mt-1">{t.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
