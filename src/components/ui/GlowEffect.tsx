import { cn } from '@/lib/utils'

interface GlowEffectProps {
  color?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const sizes = {
  sm: 'w-32 h-32',
  md: 'w-64 h-64',
  lg: 'w-96 h-96',
  xl: 'w-[600px] h-[600px]',
}

export default function GlowEffect({ color = '#00D4FF', size = 'lg', className }: GlowEffectProps) {
  return (
    <div
      className={cn(
        'absolute rounded-full pointer-events-none blur-3xl opacity-20',
        sizes[size],
        className
      )}
      style={{ background: color }}
      aria-hidden="true"
    />
  )
}
