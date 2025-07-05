import type { Metadata } from 'next';

// Base URL for the site - update this with your production URL
const BASE_URL = 'https://www.sulmantraders.com';

// Default metadata for the entire site
export const defaultMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Sulman Traders - Leading Chemical Manufacturer in Pakistan',
    template: '%s | Sulman Traders'
  },
  description: 'Premium manufacturer of Copper Oxide, Silver Nitrate, Silver Chloride, and Copper Sulphate in Pakistan. High-purity chemicals for industrial applications.',
  keywords: [
    'copper oxide pakistan',
    'silver nitrate pakistan',
    'silver chloride manufacturer',
    'copper sulphate supplier',
    'chemical manufacturer lahore',
    'industrial chemicals pakistan',
    'copper oxide powder',
    'silver nitrate supplier',
    'copper carbonate pakistan',
    'chemical distributor pakistan'
  ],
  authors: [{ name: 'Sulman Traders' }],
  creator: 'Sulman Traders',
  publisher: 'Sulman Traders',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    siteName: 'Sulman Traders',
    title: 'Sulman Traders - Leading Chemical Manufacturer in Pakistan',
    description: 'Premium manufacturer of industrial chemicals including Copper Oxide, Silver Nitrate, and more. Serving Pakistan with high-quality products.',
    images: [`${BASE_URL}/og-image.jpg`],
    url: BASE_URL,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sulman Traders - Leading Chemical Manufacturer in Pakistan',
    description: 'Premium manufacturer of industrial chemicals in Pakistan. High-quality products for various applications.',
    images: [`${BASE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  verification: {
    // Add your verification tokens here
    google: 'google-site-verification-token',
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      'en': `${BASE_URL}/en`,
    },
  },
};

// Helper to generate metadata for specific product pages
export function generateProductMetadata(
  productName: string, 
  description: string, 
  productId: string,
  additionalKeywords: string[] = []
): Metadata {
  const url = `${BASE_URL}/products/${productId}`;
  
  return {
    title: `${productName} - Sulman Traders`,
    description: description,
    keywords: [
      productName.toLowerCase(),
      'pakistan',
      'chemical manufacturer',
      'industrial chemicals',
      'high purity chemicals',
      'lahore chemicals',
      ...additionalKeywords
    ],
    openGraph: {
      title: `${productName} - Sulman Traders`,
      description: description,
      url: url,
      images: [`${BASE_URL}/${productId}.jpg`],
    },
    twitter: {
      title: `${productName} - Sulman Traders`,
      description: description,
      images: [`${BASE_URL}/${productId}.jpg`],
    },
    alternates: {
      canonical: url,
    },
  };
}; 