'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const testimonials = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'COO',
    company: 'Heartland Financial Group',
    content:
      "KC Tech Team transformed our IT infrastructure in just 3 months. Their managed services team proactively prevents issues before they impact our clients. The 99.9% uptime isn't just a promise — it's our reality.",
    rating: 5,
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    role: 'VP of Operations',
    company: 'KC Manufacturing Co.',
    content:
      "The automation solutions KC Tech Team built for us eliminated 6 hours of daily manual data entry. We reinvested those hours into growing the business. ROI was visible in the first 90 days.",
    rating: 5,
  },
  {
    id: '3',
    name: 'Dr. Linda Park',
    role: 'Practice Administrator',
    company: 'Metro Health Partners',
    content:
      "HIPAA compliance used to keep me up at night. KC Tech Team's cybersecurity team built a fortress around our patient data and handles all our compliance reporting. Total peace of mind.",
    rating: 5,
  },
  {
    id: '4',
    name: 'Tom Reyes',
    role: 'Founder',
    company: 'Reyes Logistics Solutions',
    content:
      "Their AI consulting team helped us implement predictive routing that cut our fuel costs by 22%. I was skeptical about AI, but the KC Tech Team made it practical and immediately profitable.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const dragRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Client Success Stories"
          title="What Kansas City Businesses"
          highlight="Say About Us"
          subtitle="Real results from real KC businesses that partnered with us to transform their technology."
          className="mb-16"
        />

        <motion.div
          ref={dragRef}
          className="flex gap-6 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={dragRef}
          style={{ x: 0 }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="min-w-[340px] sm:min-w-[420px] rounded-2xl border border-[#1E3A5F] bg-[#111C35]/70 backdrop-blur-sm p-8 select-none"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#00D4FF]" fill="currentColor" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote className="w-8 h-8 text-[#00D4FF]/30 mb-3" />

              <p className="text-[#7E9CC0] text-sm leading-relaxed mb-6">&ldquo;{t.content}&rdquo;</p>

              <div className="flex items-center gap-3 pt-4 border-t border-[#1E3A5F]">
                <div className="w-10 h-10 rounded-full bg-[#00D4FF]/20 border border-[#00D4FF]/30 flex items-center justify-center font-heading font-bold text-[#00D4FF] text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#F0F4FF]">{t.name}</p>
                  <p className="text-xs text-[#7E9CC0]">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <p className="text-center text-xs text-[#7E9CC0] mt-6">
          Drag to scroll through testimonials
        </p>
      </div>
    </section>
  )
}
