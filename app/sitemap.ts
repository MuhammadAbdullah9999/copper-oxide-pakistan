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

  return [...standardRoutes, ...productRoutes];
} 