import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Metadata } from 'next';
import Script from 'next/script';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/lib/blog-posts';

export const metadata: Metadata = {
  title: 'Chemical Industry Blog - Sulman Traders',
  description: 'Expert articles on chemical products including Copper Oxide, Silver Nitrate, and Copper Sulphate. Industry insights, applications, and manufacturing best practices.',
  keywords: [
    'chemical blog',
    'copper oxide applications',
    'silver nitrate uses',
    'copper sulphate agriculture',
    'industrial chemicals blog',
    'chemical manufacturing insights',
    'pakistan chemical industry'
  ],
  alternates: {
    canonical: 'https://www.sulmantraders.com/blog',
  }
};

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Script id="blog-schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Chemical Industry Blog - Sulman Traders',
          description: 'Expert articles on chemical products including Copper Oxide, Silver Nitrate, and Copper Sulphate.',
          url: 'https://www.sulmantraders.com/blog',
          publisher: {
            '@type': 'Organization',
            name: 'Sulman Traders',
            logo: {
              '@type': 'ImageObject',
              url: 'https://www.sulmantraders.com/logo.png'
            }
          },
          blogPosts: blogPosts.map(post => ({
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            datePublished: post.isoDate,
            author: {
              '@type': 'Person',
              name: post.author
            },
            url: `https://www.sulmantraders.com/blog/${post.id}`
          }))
        })}
      </Script>

      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Chemical Industry Insights</h1>
            <p className="text-xl max-w-3xl mb-8">
              Expert articles on chemical products, industry applications, and manufacturing practices.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-amber-700 text-white px-3 py-1 rounded-full text-sm">#CopperOxide</span>
              <span className="bg-amber-700 text-white px-3 py-1 rounded-full text-sm">#SilverNitrate</span>
              <span className="bg-amber-700 text-white px-3 py-1 rounded-full text-sm">#CopperSulphate</span>
              <span className="bg-amber-700 text-white px-3 py-1 rounded-full text-sm">#ChemicalManufacturing</span>
              <span className="bg-amber-700 text-white px-3 py-1 rounded-full text-sm">#IndustryInsights</span>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:translate-y-[-4px]">
                  <Link href={`/blog/${post.id}`} className="block relative h-56 overflow-hidden">
                    <OptimizedImage
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transform transition-transform hover:scale-105"
                    />
                  </Link>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-semibold text-amber-700">{post.category}</span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-3 line-clamp-2">
                      <Link href={`/blog/${post.id}`} className="hover:text-amber-700 transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">By {post.author}</span>
                      <Link href={`/blog/${post.id}`}>
                        <Button variant="outline" className="text-amber-700 border-amber-700 hover:bg-amber-50">
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Email Subscription */}
            <div className="mt-16 bg-amber-50 p-8 rounded-lg max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-center">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 mb-6 text-center">
                Get the latest articles, industry insights, and product updates delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
                <Button className="bg-amber-700 hover:bg-amber-800">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 
