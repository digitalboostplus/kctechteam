import Link from 'next/link'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { blogPosts } from '@/data/blog-posts'
import { formatDate } from '@/lib/utils'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'
import GlowEffect from '@/components/ui/GlowEffect'

export const metadata = genMeta({
  title: 'Blog | AI & IT Insights for Kansas City Businesses',
  description:
    'Expert insights on AI consulting, IT managed services, automation, and cybersecurity for Kansas City businesses. KC Tech Team blog.',
  path: '/blog',
  keywords: ['Kansas City tech blog', 'AI insights KC', 'IT tips Kansas City'],
})

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1428] to-[#060B18]" />
        <GlowEffect className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" size="xl" />
        <div className="max-w-4xl mx-auto relative text-center">
          <SectionHeading
            badge="KC Tech Team Blog"
            title="Technology Insights for"
            highlight="Kansas City"
            subtitle="Expert guides, case studies, and insights on AI, automation, IT, and cybersecurity for KC businesses."
          />
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
                <article className="rounded-2xl border border-[#1E3A5F] bg-[#111C35]/70 p-8 transition-all duration-300 hover:border-[#00D4FF]/50 hover:shadow-[0_0_30px_#00D4FF10]">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="accent">{post.category}</Badge>
                    <span className="flex items-center gap-1 text-xs text-[#7E9CC0]">
                      <Clock className="w-3 h-3" />
                      {post.readTime} min read
                    </span>
                    <span className="text-xs text-[#7E9CC0]">{formatDate(post.date)}</span>
                  </div>

                  <h2 className="font-heading font-bold text-xl text-[#F0F4FF] mb-3 group-hover:text-[#00D4FF] transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-[#7E9CC0] text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#7E9CC0]">By {post.author}</span>
                    <span className="inline-flex items-center gap-1 text-sm text-[#00D4FF] font-medium group-hover:gap-2 transition-all">
                      Read more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
