import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

export default function Card({ children, className, hover = true, glow = false }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-[#1E3A5F] bg-[#111C35]/70 backdrop-blur-sm p-6',
        hover && 'transition-all duration-300 hover:border-[#00D4FF]/50 hover:shadow-[0_0_30px_#00D4FF15]',
        glow && 'shadow-[0_0_30px_#00D4FF20]',
        className
      )}
    >
      {children}
    </div>
  )
}
