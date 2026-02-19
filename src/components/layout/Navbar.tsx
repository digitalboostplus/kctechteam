'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Zap } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'AI Consulting', href: '/services/ai-consulting' },
      { label: 'Automation', href: '/services/automation' },
      { label: 'IT Managed Services', href: '/services/it-msp' },
      { label: 'Cybersecurity', href: '/services/cybersecurity' },
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'Custom Integrations', href: '/services/custom-integrations' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setServicesOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass border-b border-[#1E3A5F] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-[#00D4FF] flex items-center justify-center group-hover:shadow-[0_0_16px_#00D4FF80] transition-shadow">
            <Zap className="w-4 h-4 text-[#060B18]" fill="currentColor" />
          </div>
          <span className="font-heading font-bold text-lg text-[#F0F4FF]">
            KC <span className="text-[#00D4FF]">Tech</span> Team
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <li key={link.href} className="relative">
                <button
                  onClick={() => setServicesOpen((p) => !p)}
                  onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                    pathname.startsWith('/services')
                      ? 'text-[#00D4FF]'
                      : 'text-[#7E9CC0] hover:text-[#F0F4FF]'
                  }`}
                >
                  {link.label}
                  <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesOpen && (
                  <ul className="absolute top-full left-0 mt-2 w-52 glass rounded-xl border border-[#1E3A5F] py-1 shadow-xl">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            pathname === child.href
                              ? 'text-[#00D4FF]'
                              : 'text-[#7E9CC0] hover:text-[#F0F4FF] hover:bg-[#1E3A5F]/30'
                          }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-[#00D4FF]'
                      : 'text-[#7E9CC0] hover:text-[#F0F4FF]'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-5 py-2 rounded-lg text-sm font-semibold bg-[#00D4FF] text-[#060B18] hover:shadow-[0_0_20px_#00D4FF60] transition-all duration-200 hover:scale-105"
          >
            Free Consultation
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-[#7E9CC0] hover:text-[#F0F4FF] hover:bg-[#1E3A5F]/30 transition-colors"
          onClick={() => setIsOpen((p) => !p)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-[#1E3A5F] px-4 py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.href}>
                  <span className="block px-4 py-2 text-sm font-semibold text-[#00D4FF]">
                    {link.label}
                  </span>
                  <ul className="pl-4">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2 text-sm text-[#7E9CC0] hover:text-[#F0F4FF] transition-colors"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block px-4 py-2 text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? 'text-[#00D4FF]'
                        : 'text-[#7E9CC0] hover:text-[#F0F4FF]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
          <Link
            href="/contact"
            className="mt-4 block text-center px-5 py-3 rounded-lg text-sm font-semibold bg-[#00D4FF] text-[#060B18] hover:shadow-[0_0_20px_#00D4FF60] transition-all"
          >
            Free Consultation
          </Link>
        </div>
      )}
    </header>
  )
}
