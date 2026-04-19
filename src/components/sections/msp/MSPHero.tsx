'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ArrowRight, PhoneCall, ShieldCheck, Clock } from 'lucide-react'
import GlowEffect from '@/components/ui/GlowEffect'

const SceneWrapper = dynamic(() => import('@/components/three/SceneWrapper'), { ssr: false })
const CircuitBoardScene = dynamic(() => import('@/components/three/CircuitBoardScene'), { ssr: false })
const ParticleField = dynamic(() => import('@/components/three/ParticleField'), { ssr: false })

export default function MSPHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <SceneWrapper camera={{ position: [0, 0, 8], fov: 55 }}>
          <ParticleField />
          <CircuitBoardScene />
        </SceneWrapper>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#060B18]/50 via-transparent to-[#060B18]" />

      <GlowEffect className="top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" size="xl" />
      <GlowEffect className="bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2" color="#00FF88" size="lg" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/5 text-sm text-[#00D4FF] mb-8">
          <div className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
          Kansas City&apos;s Trusted IT Managed Service Provider
        </div>

        <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-[#F0F4FF] leading-tight mb-6">
          IT That Just <span className="gradient-text">Works</span>
          <br className="hidden sm:block" />
          So You Can Focus on Growth
        </h1>

        <p className="text-xl text-[#7E9CC0] max-w-3xl mx-auto mb-10 leading-relaxed">
          Flat-rate managed IT services from a Kansas City team that monitors, maintains, and secures
          your network 24/7. One predictable monthly bill. Zero surprises. A 99.9% uptime guarantee —
          backed by a local help desk that answers in under 15 minutes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/contact?service=it-msp"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00D4FF] text-[#060B18] font-semibold text-base hover:shadow-[0_0_30px_#00D4FF60] transition-all duration-200 hover:scale-105"
          >
            Get My Free IT Assessment
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="tel:+18165550100"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[#1E3A5F] text-[#F0F4FF] font-medium text-base hover:border-[#00D4FF]/50 hover:bg-[#00D4FF]/5 transition-all duration-200"
          >
            <PhoneCall className="w-4 h-4 text-[#00D4FF]" />
            (816) 555-0100
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#7E9CC0]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#00FF88]" />
            99.9% Uptime SLA
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#00FF88]" />
            15-min Response
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" />
            No long-term contracts
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" />
            Flat monthly pricing
          </div>
        </div>
      </div>
    </section>
  )
}
