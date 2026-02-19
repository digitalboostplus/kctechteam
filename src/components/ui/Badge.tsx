import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'accent' | 'success' | 'muted'
  className?: string
}

const variants = {
  accent: 'bg-[#00D4FF]/10 text-[#00D4FF] border-[#00D4FF]/30',
  success: 'bg-[#00FF88]/10 text-[#00FF88] border-[#00FF88]/30',
  muted: 'bg-[#1E3A5F]/50 text-[#7E9CC0] border-[#1E3A5F]',
}

export default function Badge({ children, variant = 'accent', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
