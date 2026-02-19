// ── Shared TypeScript Types ───────────────────────────────────────────────

export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  description: string
  icon: string
  features: ServiceFeature[]
  faqs: FAQ[]
  metaTitle: string
  metaDescription: string
}

export interface ServiceFeature {
  title: string
  description: string
  icon: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  linkedin?: string
  twitter?: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: number
  category: string
  tags: string[]
  metaTitle: string
  metaDescription: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
}

export interface NavLink {
  label: string
  href: string
  children?: NavLink[]
}

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export interface Stat {
  value: number
  suffix: string
  label: string
  description: string
}
