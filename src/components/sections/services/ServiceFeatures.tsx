'use client'

import { motion } from 'framer-motion'
import { CheckCircle, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import type { ServiceFeature, FAQ } from '@/types'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'

interface ServiceFeaturesProps {
  features: ServiceFeature[]
  faqs: FAQ[]
}

export default function ServiceFeatures({ features, faqs }: ServiceFeaturesProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="What We Deliver"
            title="Comprehensive"
            highlight="Service Offerings"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-[#00D4FF] mt-0.5 shrink-0" />
                    <h3 className="font-heading font-semibold text-base text-[#F0F4FF]">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#7E9CC0] leading-relaxed pl-8">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D1428]">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              badge="FAQ"
              title="Frequently Asked"
              highlight="Questions"
              className="mb-12"
            />
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-[#1E3A5F] bg-[#111C35]/70 overflow-hidden"
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-medium text-sm text-[#F0F4FF]">{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#7E9CC0] shrink-0 ml-4 transition-transform ${
                        openFaq === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-4">
                      <p className="text-sm text-[#7E9CC0] leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
