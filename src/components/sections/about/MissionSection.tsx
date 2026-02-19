import { Target, Eye, Heart } from 'lucide-react'

export default function MissionSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              label: 'Our Mission',
              content:
                "To make enterprise-grade technology accessible to every Kansas City business — delivering AI, automation, and managed IT solutions that create real competitive advantages, not just technology for technology's sake.",
            },
            {
              icon: Eye,
              label: 'Our Vision',
              content:
                'A Kansas City where every business — regardless of size — has access to the technology, expertise, and support needed to compete in the global digital economy.',
            },
            {
              icon: Heart,
              label: 'Our Values',
              content:
                'Transparency in pricing and communication. Local accountability and community investment. Measurable outcomes over buzzword promises. Long-term partnerships over transactional engagements.',
            },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="rounded-2xl border border-[#1E3A5F] bg-[#111C35]/70 p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#00D4FF]" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#F0F4FF] mb-3">{item.label}</h3>
                <p className="text-sm text-[#7E9CC0] leading-relaxed">{item.content}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
