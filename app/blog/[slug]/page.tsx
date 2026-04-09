import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { posts } from '../posts'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

function ArticleSchema({ post }: { post: (typeof posts)[0] }) {
  // Static data from our own posts.ts — safe to serialize
  const schema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Person', name: post.author },
    publisher: { '@type': 'Organization', '@id': 'https://www.trydately.app/#organization' },
    mainEntityOfPage: `https://www.trydately.app/blog/${post.slug}`,
  })
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)

  if (!post) notFound()

  return (
    <main className="min-h-screen luxury-bg">
      <ArticleSchema post={post} />
      <article className="max-w-3xl mx-auto px-6 md:px-12 py-20">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 mb-12 transition-colors duration-200"
          style={{
            color: 'var(--text-taupe)',
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
          }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-6">
          <time
            dateTime={post.date}
            className="text-sm font-body"
            style={{ color: 'var(--text-taupe)' }}
          >
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
          <span className="text-sm font-body" style={{ color: 'var(--text-taupe)' }}>
            &middot; {post.readTime}
          </span>
          <span className="text-sm font-body" style={{ color: 'var(--text-taupe)' }}>
            &middot; By {post.author}
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-3xl md:text-4xl mb-10 leading-tight"
          style={{
            color: 'var(--text-ivory)',
            fontFamily: 'var(--font-libre), Georgia, serif',
          }}
        >
          {post.title}
        </h1>

        {/* Content */}
        <div
          className="space-y-4"
          style={{
            color: 'var(--text-linen)',
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
          }}
        >
          {post.content.split('\n\n').map((block, i) => {
            if (block.startsWith('## ')) {
              return (
                <h2
                  key={i}
                  className="text-xl mt-10 mb-4"
                  style={{
                    color: 'var(--text-ivory)',
                    fontFamily: 'var(--font-libre), Georgia, serif',
                  }}
                >
                  {block.replace('## ', '')}
                </h2>
              )
            }
            if (block.startsWith('- ') || block.startsWith('1. ')) {
              const items = block.split('\n').filter(Boolean)
              return (
                <ul key={i} className="space-y-2 list-disc list-inside">
                  {items.map((item, j) => (
                    <li key={j} className="leading-relaxed">
                      {item.replace(/^[-\d]+\.\s?/, '').replace(/^\*\*(.+?)\*\*/, '$1')}
                    </li>
                  ))}
                </ul>
              )
            }
            return (
              <p key={i} className="leading-relaxed">
                {block}
              </p>
            )
          })}
        </div>

        {/* CTA */}
        <div
          className="mt-16 p-8 rounded-2xl text-center"
          style={{
            background: 'rgba(139, 58, 52, 0.1)',
            border: '1px solid rgba(199, 178, 138, 0.2)',
          }}
        >
          <p
            className="font-body text-lg mb-4"
            style={{ color: 'var(--text-ivory)' }}
          >
            Ready for better dates?
          </p>
          <Link
            href="/#waitlist"
            className="btn-primary inline-block px-8 py-3 rounded-xl font-body font-medium"
          >
            Join the Waitlist
          </Link>
        </div>
      </article>
    </main>
  )
}
