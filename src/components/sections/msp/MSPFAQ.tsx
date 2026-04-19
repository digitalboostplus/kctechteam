'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const faqs = [
  {
    q: 'How fast can you onboard us?',
    a: 'Most Kansas City clients are fully onboarded in 2–4 weeks depending on size. Our onboarding runs in parallel with your current provider so there is zero gap in coverage — and we handle the transition paperwork with your outgoing vendor.',
  },
  {
    q: 'Do we have to sign a long-term contract?',
    a: 'No. Our standard agreement is month-to-month after the first 90 days, with 60 days notice to cancel. We believe in earning your business every month — not locking you in.',
  },
  {
    q: 'What does your 99.9% uptime SLA actually cover?',
    a: 'Network availability, server uptime, and critical line-of-business application performance. If we miss the SLA, you get financial credits automatically applied to your next invoice. Monthly SLA reports are delivered to your executive team.',
  },
  {
    q: 'Is your help desk in the United States?',
    a: "Yes — every technician is based in Kansas City, MO. You'll hear a local voice on every call, and we can be on-site within the KC metro for anything that can't be resolved remotely.",
  },
  {
    q: 'How do you price compared to hiring in-house IT?',
    a: "A dedicated IT hire in Kansas City runs $85K–$140K fully loaded, plus benefits, training, tools, and coverage gaps. Our Business tier typically costs 40–60% less and delivers an entire team — help desk, security, backups, vCIO, and engineering — instead of one person.",
  },
  {
    q: 'Can you work with our existing IT staff?',
    a: "Absolutely. Many clients use us as a co-managed IT partner — we handle monitoring, security, patching, and after-hours support while your internal IT focuses on strategic projects. We're team-first, not territorial.",
  },
  {
    q: 'What about compliance? We handle HIPAA / PCI / SOC 2.',
    a: 'We support HIPAA, PCI-DSS, SOC 2 Type II, NIST CSF, and CMMC environments. Our Enterprise tier includes compliance mapping, audit evidence collection, and dedicated engineers who live inside your regulatory framework.',
  },
  {
    q: 'What if we have a cybersecurity incident in the middle of the night?',
    a: 'Our Business and Enterprise plans include 24/7 managed detection and response. Real humans in our SOC triage, isolate, and escalate threats around the clock. Most incidents are contained before your team even wakes up.',
  },
]

export default function MSPFAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0D1428]">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          badge="FAQ"
          title="Questions,"
          highlight="Answered"
          className="mb-12"
        />

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-[#1E3A5F] bg-[#111C35]/70 overflow-hidden transition-colors hover:border-[#00D4FF]/30"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-medium text-base text-[#F0F4FF]">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#7E9CC0] shrink-0 ml-4 transition-transform ${
                    open === i ? 'rotate-180 text-[#00D4FF]' : ''
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-[#7E9CC0] leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
