import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  badge?: string
  title: string
  highlight?: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && 'text-center', className)}>
      {badge && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/30 mb-4">
          {badge}
        </span>
      )}
      <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F0F4FF] leading-tight">
        {title}
        {highlight && (
          <>
            {' '}
            <span className="gradient-text">{highlight}</span>
          </>
        )}
      </h2>
      {/* Cyan underline accent */}
      {centered && (
        <div className="mt-4 flex justify-center">
          <div className="w-16 h-1 rounded-full bg-[#00D4FF] shadow-[0_0_10px_#00D4FF]" />
        </div>
      )}
      {!centered && (
        <div className="mt-4">
          <div className="w-16 h-1 rounded-full bg-[#00D4FF] shadow-[0_0_10px_#00D4FF]" />
        </div>
      )}
      {subtitle && (
        <p className="mt-4 text-lg text-[#7E9CC0] max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
