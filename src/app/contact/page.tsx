'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import GlowEffect from '@/components/ui/GlowEffect'

const serviceOptions = [
  'AI Consulting',
  'Automation Consulting',
  'IT Managed Services',
  'Cybersecurity',
  'Multiple Services',
  'Not Sure Yet',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate form submission (replace with actual API/email service)
    await new Promise((res) => setTimeout(res, 1200))
    setSubmitted(true)
    setLoading(false)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1428] to-[#060B18]" />
        <GlowEffect className="top-0 right-0 translate-x-1/4 -translate-y-1/4" />
        <div className="max-w-4xl mx-auto relative text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/30 mb-6">
            Free Consultation — No Obligation
          </span>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-[#F0F4FF] mb-6 leading-tight">
            Let&apos;s Talk About Your{' '}
            <span className="gradient-text">Technology Goals</span>
          </h1>
          <p className="text-lg text-[#7E9CC0] max-w-2xl mx-auto">
            Schedule a free 30-minute consultation with our Kansas City technology experts. We&apos;ll
            discuss your challenges and outline a customized solution — no pressure, no commitment.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-heading font-bold text-xl text-[#F0F4FF] mb-6">
                Get in Touch
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#00D4FF]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#7E9CC0] mb-1">Phone</p>
                    <a href="tel:+18165550100" className="text-sm text-[#F0F4FF] hover:text-[#00D4FF] transition-colors font-medium">
                      (816) 555-0100
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#00D4FF]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#7E9CC0] mb-1">Email</p>
                    <a href="mailto:hello@kctechteam.com" className="text-sm text-[#F0F4FF] hover:text-[#00D4FF] transition-colors font-medium">
                      hello@kctechteam.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#00D4FF]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#7E9CC0] mb-1">Office</p>
                    <p className="text-sm text-[#F0F4FF] font-medium">
                      1000 Walnut St, Suite 1400<br />
                      Kansas City, MO 64106
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#00D4FF]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#7E9CC0] mb-1">Hours</p>
                    <p className="text-sm text-[#F0F4FF] font-medium">
                      Mon–Fri: 8AM–6PM CST<br />
                      <span className="text-[#7E9CC0]">24/7 emergency support for MSP clients</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response time */}
            <div className="rounded-xl border border-[#00FF88]/20 bg-[#00FF88]/5 p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
                <span className="text-xs font-semibold text-[#00FF88]">Typical Response Time</span>
              </div>
              <p className="text-sm text-[#7E9CC0]">
                We respond to all inquiries within <strong className="text-[#F0F4FF]">2 business hours</strong> during business days.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-[#00FF88]/10 border border-[#00FF88]/30 flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-[#00FF88]" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-[#F0F4FF] mb-3">
                  Message Received!
                </h3>
                <p className="text-[#7E9CC0] max-w-md">
                  Thank you for reaching out to KC Tech Team. We&apos;ll be in touch within 2 business hours to schedule your free consultation.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-[#00D4FF] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-[#7E9CC0] mb-2">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full bg-[#111C35] border border-[#1E3A5F] rounded-xl px-4 py-3 text-sm text-[#F0F4FF] placeholder:text-[#7E9CC0]/40 focus:outline-none focus:border-[#00D4FF]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-[#7E9CC0] mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full bg-[#111C35] border border-[#1E3A5F] rounded-xl px-4 py-3 text-sm text-[#F0F4FF] placeholder:text-[#7E9CC0]/40 focus:outline-none focus:border-[#00D4FF]/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-xs font-medium text-[#7E9CC0] mb-2">
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full bg-[#111C35] border border-[#1E3A5F] rounded-xl px-4 py-3 text-sm text-[#F0F4FF] placeholder:text-[#7E9CC0]/40 focus:outline-none focus:border-[#00D4FF]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-[#7E9CC0] mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(816) 555-0100"
                      className="w-full bg-[#111C35] border border-[#1E3A5F] rounded-xl px-4 py-3 text-sm text-[#F0F4FF] placeholder:text-[#7E9CC0]/40 focus:outline-none focus:border-[#00D4FF]/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-medium text-[#7E9CC0] mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#111C35] border border-[#1E3A5F] rounded-xl px-4 py-3 text-sm text-[#F0F4FF] focus:outline-none focus:border-[#00D4FF]/50 transition-colors"
                  >
                    <option value="" className="text-[#7E9CC0]">Select a service...</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-[#7E9CC0] mb-2">
                    Tell Us About Your Needs *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your business and what technology challenges you're facing..."
                    className="w-full bg-[#111C35] border border-[#1E3A5F] rounded-xl px-4 py-3 text-sm text-[#F0F4FF] placeholder:text-[#7E9CC0]/40 focus:outline-none focus:border-[#00D4FF]/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#00D4FF] text-[#060B18] font-semibold text-sm hover:shadow-[0_0_30px_#00D4FF60] transition-all disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.02]"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#060B18]/30 border-t-[#060B18] rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message & Schedule Consultation
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-[#7E9CC0]">
                  By submitting, you agree to be contacted by KC Tech Team regarding your inquiry.
                  We never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
