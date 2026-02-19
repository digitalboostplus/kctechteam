import Link from 'next/link'
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'

const services = [
  { label: 'AI Consulting', href: '/services/ai-consulting' },
  { label: 'Automation', href: '/services/automation' },
  { label: 'IT Managed Services', href: '/services/it-msp' },
  { label: 'Cybersecurity', href: '/services/cybersecurity' },
  { label: 'Web Development', href: '/services/web-development' },
  { label: 'Custom Integrations', href: '/services/custom-integrations' },
]

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Free Consultation', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[#1E3A5F] bg-[#0D1428]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#00D4FF] flex items-center justify-center">
                <Zap className="w-4 h-4 text-[#060B18]" fill="currentColor" />
              </div>
              <span className="font-heading font-bold text-lg text-[#F0F4FF]">
                KC <span className="text-[#00D4FF]">Tech</span> Team
              </span>
            </Link>
            <p className="text-sm text-[#7E9CC0] leading-relaxed mb-6">
              Kansas City&apos;s premier AI consulting, IT managed services, automation, and cybersecurity firm. Transforming businesses through cutting-edge technology.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://linkedin.com/company/kc-tech-team" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-lg border border-[#1E3A5F] flex items-center justify-center text-[#7E9CC0] hover:text-[#00D4FF] hover:border-[#00D4FF] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/kctechteam" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-9 h-9 rounded-lg border border-[#1E3A5F] flex items-center justify-center text-[#7E9CC0] hover:text-[#00D4FF] hover:border-[#00D4FF] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://github.com/kctechteam" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-lg border border-[#1E3A5F] flex items-center justify-center text-[#7E9CC0] hover:text-[#00D4FF] hover:border-[#00D4FF] transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-sm text-[#F0F4FF] uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-[#7E9CC0] hover:text-[#00D4FF] transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-sm text-[#F0F4FF] uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={`${c.label}-${c.href}`}>
                  <Link href={c.href} className="text-sm text-[#7E9CC0] hover:text-[#00D4FF] transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-sm text-[#F0F4FF] uppercase tracking-wider mb-4">
              Kansas City Office
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#00D4FF] mt-0.5 shrink-0" />
                <span className="text-sm text-[#7E9CC0]">
                  1000 Walnut St, Suite 1400<br />
                  Kansas City, MO 64106
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#00D4FF] shrink-0" />
                <a href="tel:+18165550100" className="text-sm text-[#7E9CC0] hover:text-[#00D4FF] transition-colors">
                  (816) 555-0100
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#00D4FF] shrink-0" />
                <a href="mailto:hello@kctechteam.com" className="text-sm text-[#7E9CC0] hover:text-[#00D4FF] transition-colors">
                  hello@kctechteam.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1E3A5F] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#7E9CC0]">
            &copy; {new Date().getFullYear()} KC Tech Team. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/sitemap.xml" className="text-xs text-[#7E9CC0] hover:text-[#00D4FF] transition-colors">
              Sitemap
            </Link>
            <span className="text-xs text-[#7E9CC0]">
              HQ: Kansas City, MO &mdash; Serving Clients Globally
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
