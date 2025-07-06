import type { Metadata, Viewport } from 'next';

// Base URL for the site - update this with your production URL
const BASE_URL = 'https://www.sulmantraders.com';

// Viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

// Default metadata for the entire site
export const defaultMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Copper Oxide & Silver Nitrate Manufacturer | Sulman Traders Pakistan',
    template: '%s | Sulman Traders'
  },
  description: 'Leading manufacturer of high-purity Copper Oxide (CuO) and Silver Nitrate (AgNO₃) in Pakistan. Serving industries nationwide with premium quality chemicals for industrial, laboratory, and technical applications.',
  keywords: [
    'copper oxide manufacturer pakistan',
    'silver nitrate manufacturer pakistan',
    'copper oxide powder lahore',
    'silver nitrate crystals pakistan',
    'CuO manufacturer pakistan',
    'AgNO3 supplier pakistan',
    'industrial copper oxide pakistan',
    'laboratory silver nitrate lahore',
    'chemical manufacturer lahore',
    'industrial chemicals pakistan'
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
    title: 'Premium Copper Oxide & Silver Nitrate Manufacturer | Pakistan',
    description: 'Leading manufacturer of high-purity Copper Oxide (CuO) and Silver Nitrate (AgNO₃). Serving industries across Pakistan with premium quality chemicals.',
    images: [`${BASE_URL}/og-image.jpg`],
    url: BASE_URL,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Copper Oxide & Silver Nitrate Manufacturer | Pakistan',
    description: 'Premium manufacturer of Copper Oxide (CuO) and Silver Nitrate (AgNO₃). High-purity chemicals for industrial and laboratory applications across Pakistan.',
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