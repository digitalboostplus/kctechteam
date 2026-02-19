import Badge from '@/components/ui/Badge'
import GlowEffect from '@/components/ui/GlowEffect'

interface ServiceHeroProps {
  badge: string
  title: string
  description: string
  children?: React.ReactNode
}

export default function ServiceHero({ badge, title, description, children }: ServiceHeroProps) {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1428] to-[#060B18]" />
      <GlowEffect className="top-0 right-0 translate-x-1/2 -translate-y-1/2" size="xl" />

      <div className="max-w-4xl mx-auto relative text-center">
        <Badge variant="accent" className="mb-6">
          {badge}
        </Badge>
        <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-[#F0F4FF] mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-xl text-[#7E9CC0] max-w-2xl mx-auto leading-relaxed mb-8">
          {description}
        </p>
        {children}
      </div>
    </section>
  )
}
