import { MetadataRoute } from 'next';

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
  const productIds = [
    'copper-oxide',
    'silver-nitrate',
    'copper-sulphate',
    'silver-chloride',
    // 'copper-carbonate',
  ];

  const productRoutes = productIds.map(id => ({
    url: `${BASE_URL}/products/${id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Define blog posts
  const blogPosts = [
    {
      id: 'top-industrial-applications-copper-oxide',
      date: '2024-04-10',
    },
    {
      id: 'silver-nitrate-medical-applications',
      date: '2024-04-02',
    },
    {
      id: 'copper-sulphate-agriculture-benefits',
      date: '2024-03-28',
    },
  ];

  const blogRoutes = blogPosts.map(post => ({
    url: `${BASE_URL}/blog/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...standardRoutes, ...productRoutes, ...blogRoutes];
} 