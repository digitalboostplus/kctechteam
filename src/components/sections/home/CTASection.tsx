'use client'

import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import GlowEffect from '@/components/ui/GlowEffect'

export default function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1428] via-[#111C35] to-[#0D1428]" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, #00D4FF 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />
      <GlowEffect className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size="xl" />

      <div className="max-w-4xl mx-auto relative text-center">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/30 mb-6">
          Free, No-Obligation Consultation
        </span>

        <h2 className="font-heading font-bold text-4xl sm:text-5xl text-[#F0F4FF] mb-6 leading-tight">
          Start Your AI Journey{' '}
          <span className="gradient-text">Today</span>
        </h2>

        <p className="text-xl text-[#7E9CC0] mb-10 max-w-2xl mx-auto leading-relaxed">
          Schedule a free 30-minute consultation with our Kansas City technology experts.
          No pressure, no commitment — just real insights for your business.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00D4FF] text-[#060B18] font-semibold text-base hover:shadow-[0_0_40px_#00D4FF70] transition-all duration-200 hover:scale-105"
          >
            <Calendar className="w-5 h-5" />
            Book Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="tel:+18165550100"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[#1E3A5F] text-[#F0F4FF] font-medium text-base hover:border-[#00D4FF]/50 hover:bg-[#00D4FF]/5 transition-all duration-200"
          >
            Call (816) 555-0100
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#7E9CC0]">
          {[
            'No credit card required',
            'Response within 2 hours',
            'Local KC team',
            '5-star rated',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
