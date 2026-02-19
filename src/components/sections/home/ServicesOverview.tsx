'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Brain, Zap, Server, Shield, Globe, Link2, ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const services = [
  {
    icon: Brain,
    title: 'AI Consulting',
    description:
      'Custom AI strategy, LLM integration, and machine learning solutions tailored for Kansas City businesses ready to lead with AI.',
    href: '/services/ai-consulting',
    color: '#00D4FF',
    features: ['AI Roadmapping', 'LLM Integration', 'Custom ML Models'],
  },
  {
    icon: Zap,
    title: 'Automation',
    description:
      'Eliminate manual work with intelligent automation. Our RPA and workflow solutions reduce operational costs by 40% on average.',
    href: '/services/automation',
    color: '#00FF88',
    features: ['RPA Implementation', 'Workflow Automation', 'Process Mining'],
  },
  {
    icon: Server,
    title: 'IT Managed Services',
    description:
      '24/7 monitoring, help desk, cloud management, and network infrastructure with a 99.9% uptime SLA for KC businesses.',
    href: '/services/it-msp',
    color: '#00D4FF',
    features: ['24/7 Monitoring', 'Cloud Management', 'Help Desk'],
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description:
      'Protect your business with enterprise-grade threat detection, compliance management, and incident response.',
    href: '/services/cybersecurity',
    color: '#00FF88',
    features: ['Threat Detection', 'Compliance (HIPAA/SOC2)', 'Security Training'],
  },
  {
    icon: Globe,
    title: 'Web Development',
    description:
      'High-performance websites and web applications built to impress, convert, and rank. Custom design, e-commerce, and full-stack apps for KC businesses.',
    href: '/services/web-development',
    color: '#00D4FF',
    features: ['Custom Design', 'E-Commerce', 'Web Apps'],
  },
  {
    icon: Link2,
    title: 'Custom Integrations',
    description:
      'Connect your CRM, ERP, and marketing tools with seamless API integrations. Eliminate data silos and manual work across your entire operation.',
    href: '/services/custom-integrations',
    color: '#00FF88',
    features: ['API Development', 'CRM/ERP Sync', 'Real-Time Data'],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ServicesOverview() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(#00D4FF 1px, transparent 1px), linear-gradient(90deg, #00D4FF 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeading
          badge="Our Services"
          title="Everything Your Business Needs"
          highlight="to Thrive"
          subtitle="From AI strategy to 24/7 IT support — KC Tech Team delivers the full technology stack Kansas City businesses need to stay competitive."
          className="mb-16"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div key={service.title} variants={cardVariants}>
                <Link href={service.href} className="block group">
                  <div className="h-full rounded-2xl border border-[#1E3A5F] bg-[#111C35]/70 backdrop-blur-sm p-8 transition-all duration-300 hover:border-[#00D4FF]/50 hover:shadow-[0_0_40px_#00D4FF10]">
                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                      style={{ background: `${service.color}15`, border: `1px solid ${service.color}30` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: service.color }} />
                    </div>

                    <h3 className="font-heading font-bold text-xl text-[#F0F4FF] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#7E9CC0] text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-[#7E9CC0]">
                          <div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: service.color }}
                          />
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* Learn more */}
                    <span
                      className="inline-flex items-center gap-1 text-sm font-medium transition-all duration-200 group-hover:gap-2"
                      style={{ color: service.color }}
                    >
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
