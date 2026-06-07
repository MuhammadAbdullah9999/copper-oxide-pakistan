import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-posts';

export const dynamic = 'force-static';

const BASE_URL = 'https://www.sulmantraders.com';

export default function sitemap(): MetadataRoute.Sitemap {
  // Define standard pages
  const standardRoutes = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/copper-oxide`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/silver-nitrate`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/copper-sulphate`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/copper-oxide-price-in-pakistan`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/copper-sulphate-price-in-pakistan`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/silver-nitrate-price-in-pakistan`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/copper-carbonate-price-in-pakistan`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.4,
    },
  ];

  // Define product pages
  // Only include canonical product URLs here. Copper oxide, copper sulphate,
  // and silver nitrate have dedicated canonical pages above.
  const productIds = [
    'silver-chloride',
    'copper-carbonate',
    'cobalt-oxide',
  ];

  const productRoutes = productIds.map(id => ({
    url: `${BASE_URL}/products/${id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const blogRoutes = blogPosts.map(post => ({
    url: `${BASE_URL}/blog/${post.id}`,
    lastModified: new Date(post.isoDate),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...standardRoutes, ...productRoutes, ...blogRoutes];
} 
