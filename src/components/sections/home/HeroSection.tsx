'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import dynamic from 'next/dynamic'
import GlowEffect from '@/components/ui/GlowEffect'

const SceneWrapper = dynamic(() => import('@/components/three/SceneWrapper'), { ssr: false })
const NeuralNetworkScene = dynamic(() => import('@/components/three/NeuralNetworkScene'), { ssr: false })
const ParticleField = dynamic(() => import('@/components/three/ParticleField'), { ssr: false })

const TYPEWRITER_PHRASES = [
  'AI Consulting',
  'IT Managed Services',
  'Intelligent Automation',
  'Cybersecurity',
]

export default function HeroSection() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const phrase = TYPEWRITER_PHRASES[phraseIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (typing) {
      if (displayed.length < phrase.length) {
        timeout = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 60)
      } else {
        timeout = setTimeout(() => setTyping(false), 2200)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      } else {
        setPhraseIndex((i) => (i + 1) % TYPEWRITER_PHRASES.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, phraseIndex])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background 3D scenes */}
      <div className="absolute inset-0">
        <SceneWrapper camera={{ position: [0, 0, 8], fov: 55 }}>
          <ParticleField />
          <NeuralNetworkScene />
        </SceneWrapper>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060B18]/40 via-transparent to-[#060B18]" />

      {/* Glow effects */}
      <GlowEffect className="top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" size="xl" />
      <GlowEffect className="bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2" color="#00FF88" size="lg" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/5 text-sm text-[#00D4FF] mb-8">
          <div className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
          Headquartered in Kansas City, MO &mdash; Serving Clients Globally
        </div>

        {/* Headline */}
        <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-[#F0F4FF] leading-tight mb-6">
          Transform Your Business{' '}
          <br className="hidden sm:block" />
          with{' '}
          <span className="gradient-text">
            {displayed}
            <span className="animate-pulse">|</span>
          </span>
        </h1>

        <p className="text-xl text-[#7E9CC0] max-w-3xl mx-auto mb-12 leading-relaxed">
          KC Tech Team delivers enterprise-grade AI consulting, managed IT services, intelligent
          automation, and cybersecurity solutions. Based in Kansas City, MO — we support local businesses
          with hands-on expertise and partner with companies across the globe.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00D4FF] text-[#060B18] font-semibold text-base hover:shadow-[0_0_30px_#00D4FF60] transition-all duration-200 hover:scale-105"
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[#1E3A5F] text-[#F0F4FF] font-medium text-base hover:border-[#00D4FF]/50 hover:bg-[#00D4FF]/5 transition-all duration-200"
          >
            <Play className="w-4 h-4 text-[#00D4FF]" fill="currentColor" />
            Explore Services
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-[#7E9CC0]">
          {[
            ['50+', 'Clients Served'],
            ['99.9%', 'Uptime SLA'],
            ['40%', 'Avg Cost Reduction'],
            ['24/7', 'Support Coverage'],
          ].map(([value, label]) => (
            <div key={label} className="flex flex-col items-center">
              <span className="font-heading font-bold text-2xl text-[#00D4FF]">{value}</span>
              <span className="text-xs mt-1">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#7E9CC0] text-xs">
        <span>Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border border-[#1E3A5F] flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-[#00D4FF] animate-bounce" />
        </div>
      </div>
    </section>
  )
}
