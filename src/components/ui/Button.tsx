import { cn } from '@/lib/utils'
import Link from 'next/link'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: ReactNode
}

interface ButtonAsButton extends ButtonBaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  href?: never
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string
  target?: string
  rel?: string
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-[#00D4FF] text-[#060B18] font-semibold hover:shadow-[0_0_24px_#00D4FF60] hover:scale-105 active:scale-100',
  secondary:
    'border border-[#00D4FF] text-[#00D4FF] bg-transparent hover:bg-[#00D4FF]/10 hover:shadow-[0_0_16px_#00D4FF30]',
  ghost:
    'text-[#7E9CC0] bg-transparent hover:text-[#F0F4FF] hover:bg-[#1E3A5F]/30',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-sm rounded-xl',
  lg: 'px-8 py-4 text-base rounded-xl',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#060B18] disabled:opacity-50 disabled:cursor-not-allowed',
    variants[variant],
    sizes[size],
    className
  )

  if ('href' in props && props.href) {
    const { href, target, rel } = props as ButtonAsLink
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {children}
      </Link>
    )
  }

  const { href: _href, target: _target, rel: _rel, ...buttonProps } = props as ButtonAsButton & { href?: never; target?: never; rel?: never }
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
