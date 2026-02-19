import Link from 'next/link'
import { Brain, Zap, Server, Shield, Globe, Link2, ArrowRight } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import SectionHeading from '@/components/ui/SectionHeading'
import GlowEffect from '@/components/ui/GlowEffect'
import CTASection from '@/components/sections/home/CTASection'

export const metadata = genMeta({
  title: 'AI & IT Services Kansas City',
  description:
    'KC Tech Team offers AI consulting, IT managed services, automation, and cybersecurity for Kansas City businesses. Explore our full suite of technology services.',
  path: '/services',
})

const services = [
  {
    icon: Brain,
    title: 'AI Consulting',
    description:
      'Custom AI strategy, LLM integration, machine learning models, and AI roadmapping for Kansas City businesses ready to lead with artificial intelligence.',
    href: '/services/ai-consulting',
    color: '#00D4FF',
    features: ['AI Readiness Assessment', 'Custom AI Strategy', 'LLM Integration', 'ML Models', 'AI Governance', 'Team Training'],
  },
  {
    icon: Zap,
    title: 'Automation Consulting',
    description:
      'Eliminate manual work with RPA, workflow automation, and AI-powered process automation. Our KC clients average 40% operational cost reduction.',
    href: '/services/automation',
    color: '#00FF88',
    features: ['Process Discovery', 'RPA Implementation', 'Workflow Orchestration', 'AI Automation', 'ERP/CRM Integration', 'Analytics Dashboard'],
  },
  {
    icon: Server,
    title: 'IT Managed Services',
    description:
      '24/7 monitoring, Kansas City-based help desk, cloud management, and full IT support with a guaranteed 99.9% uptime SLA.',
    href: '/services/it-msp',
    color: '#00D4FF',
    features: ['24/7 Monitoring', 'KC Help Desk', 'Cloud Management', 'Patch Management', 'Backup & DR', 'vCIO Services'],
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description:
      'Enterprise-grade threat detection, HIPAA/SOC2/PCI-DSS compliance, penetration testing, and 24/7 SOC for Kansas City businesses.',
    href: '/services/cybersecurity',
    color: '#00FF88',
    features: ['24/7 SOC', 'Vulnerability Assessments', 'HIPAA Compliance', 'Security Training', 'Zero Trust', 'Incident Response'],
  },
  {
    icon: Globe,
    title: 'Web Development',
    description:
      'High-performance, conversion-optimized websites and web applications. From marketing sites to full-stack SaaS platforms — built to impress and built to rank.',
    href: '/services/web-development',
    color: '#00D4FF',
    features: ['Custom Website Design', 'E-Commerce', 'Web Applications', 'CMS Integration', 'SEO Optimization', 'Maintenance Plans'],
  },
  {
    icon: Link2,
    title: 'Custom Integrations',
    description:
      'Connect your business systems and eliminate data silos. CRM, ERP, payment, and marketing platform integrations that make your tools work as one.',
    href: '/services/custom-integrations',
    color: '#00FF88',
    features: ['CRM & ERP Integrations', 'API Development', 'Payment Integrations', 'Marketing Platforms', 'Data Pipelines', 'Real-Time Sync'],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1428] to-[#060B18]" />
        <GlowEffect className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" size="xl" />
        <div className="max-w-4xl mx-auto relative text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/30 mb-6">
            Full-Stack Technology Services
          </span>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-[#F0F4FF] mb-6 leading-tight">
            Technology Services Built for{' '}
            <span className="gradient-text">Kansas City</span>
          </h1>
          <p className="text-xl text-[#7E9CC0] max-w-2xl mx-auto leading-relaxed">
            From AI strategy to 24/7 IT support, KC Tech Team delivers the complete technology foundation Kansas City businesses need to compete and grow.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link key={service.title} href={service.href} className="block group">
                  <div className="h-full rounded-2xl border border-[#1E3A5F] bg-[#111C35]/70 backdrop-blur-sm p-8 transition-all duration-300 hover:border-[#00D4FF]/50 hover:shadow-[0_0_40px_#00D4FF10]">
                    <div className="flex items-start gap-5 mb-6">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                        style={{ background: `${service.color}15`, border: `1px solid ${service.color}30` }}
                      >
                        <Icon className="w-7 h-7" style={{ color: service.color }} />
                      </div>
                      <div>
                        <h2 className="font-heading font-bold text-xl text-[#F0F4FF] mb-2">
                          {service.title}
                        </h2>
                        <p className="text-[#7E9CC0] text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-[#7E9CC0]">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ background: service.color }} />
                          {f}
                        </div>
                      ))}
                    </div>

                    <span
                      className="inline-flex items-center gap-1 text-sm font-medium transition-all duration-200 group-hover:gap-2"
                      style={{ color: service.color }}
                    >
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
