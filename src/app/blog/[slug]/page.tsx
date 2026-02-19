import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, User, Tag } from 'lucide-react'
import { blogPosts, getBlogPostBySlug } from '@/data/blog-posts'
import { formatDate } from '@/lib/utils'
import { generateMetadata as genMeta } from '@/lib/seo'
import Badge from '@/components/ui/Badge'
import CTASection from '@/components/sections/home/CTASection'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return {}
  return genMeta({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    keywords: post.tags,
  })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  // Convert markdown-ish content to simple HTML (no external libs needed)
  const htmlContent = post.content
    .split('\n')
    .map((line) => {
      if (line.startsWith('# ')) return `<h1 class="font-heading font-bold text-3xl text-[#F0F4FF] mt-10 mb-4">${line.slice(2)}</h1>`
      if (line.startsWith('## ')) return `<h2 class="font-heading font-bold text-2xl text-[#F0F4FF] mt-8 mb-3">${line.slice(3)}</h2>`
      if (line.startsWith('### ')) return `<h3 class="font-heading font-semibold text-xl text-[#F0F4FF] mt-6 mb-2">${line.slice(4)}</h3>`
      if (line.startsWith('- ')) return `<li class="text-[#7E9CC0] text-sm leading-relaxed ml-4 list-disc">${line.slice(2)}</li>`
      if (line.match(/^\d+\. /)) return `<li class="text-[#7E9CC0] text-sm leading-relaxed ml-4 list-decimal">${line.replace(/^\d+\. /, '')}</li>`
      if (line.trim() === '') return '<br />'
      return `<p class="text-[#7E9CC0] text-sm leading-relaxed mb-4">${line}</p>`
    })
    .join('')

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0D1428] to-[#060B18]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[#7E9CC0] hover:text-[#00D4FF] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <Badge variant="accent" className="mb-4">
            {post.category}
          </Badge>

          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-[#F0F4FF] mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[#7E9CC0]">
            <span className="flex items-center gap-1">
              <User className="w-3 h-3" /> {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> {post.readTime} min read
            </span>
            <span>{formatDate(post.date)}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-[#1E3A5F] flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs border border-[#1E3A5F] text-[#7E9CC0]"
              >
                <Tag className="w-3 h-3" /> {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      <CTASection />
    </>
  )
}
