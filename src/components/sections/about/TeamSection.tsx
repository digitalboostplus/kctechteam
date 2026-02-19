import { Linkedin, Twitter } from 'lucide-react'
import type { TeamMember } from '@/types'
import SectionHeading from '@/components/ui/SectionHeading'

interface TeamSectionProps {
  members: TeamMember[]
}

export default function TeamSection({ members }: TeamSectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D1428]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="The Team"
          title="Kansas City's"
          highlight="Tech Experts"
          subtitle="Our team combines deep local knowledge with enterprise technology expertise."
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member) => (
            <div
              key={member.id}
              className="rounded-2xl border border-[#1E3A5F] bg-[#111C35]/70 p-6 text-center group hover:border-[#00D4FF]/40 transition-all"
            >
              {/* Avatar placeholder */}
              <div className="w-20 h-20 rounded-full bg-[#00D4FF]/10 border-2 border-[#00D4FF]/20 flex items-center justify-center mx-auto mb-4 text-[#00D4FF] font-heading font-bold text-2xl">
                {member.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <h3 className="font-heading font-bold text-base text-[#F0F4FF] mb-1">{member.name}</h3>
              <p className="text-xs text-[#00D4FF] font-medium mb-3">{member.role}</p>
              <p className="text-xs text-[#7E9CC0] leading-relaxed mb-4">{member.bio}</p>
              <div className="flex justify-center gap-2">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} LinkedIn`}
                    className="w-8 h-8 rounded-lg border border-[#1E3A5F] flex items-center justify-center text-[#7E9CC0] hover:text-[#00D4FF] hover:border-[#00D4FF] transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} Twitter`}
                    className="w-8 h-8 rounded-lg border border-[#1E3A5F] flex items-center justify-center text-[#7E9CC0] hover:text-[#00D4FF] hover:border-[#00D4FF] transition-colors"
                  >
                    <Twitter className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
