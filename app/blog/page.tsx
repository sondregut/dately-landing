import Link from 'next/link'
import { posts } from './posts'

export default function BlogPage() {
  return (
    <main className="min-h-screen luxury-bg">
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-20">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-12 transition-colors duration-200"
          style={{
            color: 'var(--text-taupe)',
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
          }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl mb-4"
          style={{
            color: 'var(--text-ivory)',
            fontFamily: 'var(--font-libre), Georgia, serif',
          }}
        >
          Blog
        </h1>
        <p
          className="text-lg mb-12"
          style={{
            color: 'var(--text-linen)',
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
          }}
        >
          Date night tips, creative ideas, and the story behind Dately.
        </p>

        {/* Posts */}
        <div className="space-y-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block glass-card rounded-2xl p-8 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <time
                  dateTime={post.date}
                  className="text-xs font-body"
                  style={{ color: 'var(--text-taupe)' }}
                >
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
                <span className="text-xs font-body" style={{ color: 'var(--text-taupe)' }}>
                  &middot; {post.readTime}
                </span>
              </div>
              <h2
                className="text-xl mb-3"
                style={{
                  color: 'var(--text-ivory)',
                  fontFamily: 'var(--font-libre), Georgia, serif',
                }}
              >
                {post.title}
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: 'var(--text-linen)',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                }}
              >
                {post.description}
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-xs font-body" style={{ color: 'var(--text-taupe)' }}>
                  By {post.author}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
