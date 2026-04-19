'use client'

import { motion } from 'framer-motion'
import {
  Activity,
  Headphones,
  Cloud,
  RefreshCw,
  HardDrive,
  Briefcase,
  Lock,
  Laptop,
  Mail,
  Wifi,
} from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const offerings = [
  {
    icon: Activity,
    title: '24/7 Network Monitoring',
    description:
      'Round-the-clock monitoring of every server, switch, firewall, and endpoint. We detect and resolve issues before you ever see them.',
  },
  {
    icon: Headphones,
    title: 'Local KC Help Desk',
    description:
      'Dedicated Kansas City-based support team. Under 15-minute response for critical tickets, unlimited remote and phone support.',
  },
  {
    icon: Cloud,
    title: 'Cloud & Microsoft 365',
    description:
      'Full management of Microsoft 365, Azure, AWS, and Google Workspace. License optimization, identity management, and security hardening.',
  },
  {
    icon: Lock,
    title: 'Cybersecurity & EDR',
    description:
      'Next-gen endpoint protection, managed firewall, DNS filtering, dark web monitoring, and 24/7 SOC-managed threat detection.',
  },
  {
    icon: RefreshCw,
    title: 'Patch Management',
    description:
      'Automated OS and third-party patching across every device. Never lose sleep over CVEs, zero-days, or end-of-life software again.',
  },
  {
    icon: HardDrive,
    title: 'Backup & Disaster Recovery',
    description:
      'Image-level backups with immutable cloud copies. RTO under 4 hours, RPO under 1 hour, and quarterly recovery testing.',
  },
  {
    icon: Briefcase,
    title: 'Virtual CIO (vCIO)',
    description:
      'Strategic technology planning, annual budgets, vendor management, and quarterly business reviews — a CIO without the six-figure salary.',
  },
  {
    icon: Laptop,
    title: 'Employee Onboarding',
    description:
      'Standardized workstation provisioning, identity setup, software deployment, and training. New hires productive on day one.',
  },
  {
    icon: Mail,
    title: 'Email & Spam Protection',
    description:
      'Advanced email threat protection, phishing simulations, and DMARC/SPF/DKIM hardening to stop business email compromise.',
  },
  {
    icon: Wifi,
    title: 'Network & Wi-Fi',
    description:
      'Design, deployment, and management of enterprise Wi-Fi, VLANs, VPN, and SD-WAN — reliable connectivity in every office location.',
  },
]

export default function MSPServices() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, #00D4FF 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeading
          badge="What's Included"
          title="Everything You Need,"
          highlight="One Flat Rate"
          subtitle="Our all-inclusive managed IT plan wraps every service below into a single predictable monthly fee per user. No surprise invoices. No nickel-and-diming."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {offerings.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group rounded-2xl border border-[#1E3A5F] bg-[#111C35]/70 backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 hover:shadow-[0_0_30px_#00D4FF15] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF]/30 flex items-center justify-center mb-4 group-hover:bg-[#00D4FF]/20 transition-colors">
                  <Icon className="w-5 h-5 text-[#00D4FF]" />
                </div>
                <h3 className="font-heading font-semibold text-base text-[#F0F4FF] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#7E9CC0] leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
