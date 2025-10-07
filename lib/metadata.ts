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
    default: 'Copper Oxide, Silver Nitrate & Copper Sulphate Manufacturer Pakistan | Sulman Traders',
    template: '%s | Sulman Traders'
  },
  description: 'Leading manufacturer of Copper Oxide (CuO), Silver Nitrate (AgNO₃), Copper Sulphate (CuSO₄), and Silver Chloride (AgCl) in Pakistan. Premium quality chemicals for industrial, agricultural, laboratory, and medical applications. Lahore-based manufacturer since 1974.',
  keywords: [
    // Copper Oxide Keywords
    'copper oxide manufacturer pakistan',
    'copper oxide powder lahore',
    'CuO manufacturer pakistan',
    'industrial copper oxide pakistan',
    'copper oxide supplier pakistan',
    'black copper oxide pakistan',
    'copper oxide price pakistan',
    'buy copper oxide pakistan',
    // Silver Nitrate Keywords
    'silver nitrate manufacturer pakistan',
    'silver nitrate crystals pakistan',
    'AgNO3 supplier pakistan',
    'laboratory silver nitrate lahore',
    'silver nitrate price pakistan',
    'buy silver nitrate pakistan',
    'pure silver nitrate pakistan',
    'silver nitrate medical grade pakistan',
    'silver nitrate photography pakistan',
    // Copper Sulphate Keywords
    'copper sulphate manufacturer pakistan',
    'copper sulphate pakistan',
    'CuSO4 pakistan',
    'blue vitriol pakistan',
    'copper sulphate agriculture pakistan',
    'copper sulphate lahore',
    'copper sulphate price pakistan',
    'buy copper sulphate pakistan',
    'copper sulfate pakistan',
    'copper sulphate fungicide pakistan',
    'agricultural copper sulphate pakistan',
    // Silver Chloride Keywords
    'silver chloride pakistan',
    'AgCl pakistan',
    'silver chloride manufacturer pakistan',
    // General Keywords
    'chemical manufacturer lahore',
    'industrial chemicals pakistan',
    'laboratory chemicals pakistan',
    'chemical supplier pakistan'
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
    title: 'Copper Oxide, Silver Nitrate & Copper Sulphate Manufacturer | Pakistan',
    description: 'Leading manufacturer of Copper Oxide (CuO), Silver Nitrate (AgNO₃), Copper Sulphate (CuSO₄), and Silver Chloride (AgCl). Premium quality chemicals for industrial, agricultural, and laboratory applications across Pakistan.',
    images: [`${BASE_URL}/copper-oxide-banner.png`],
    url: BASE_URL,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chemical Manufacturer Pakistan | Copper Oxide, Silver Nitrate, Copper Sulphate',
    description: 'Premium manufacturer of Copper Oxide, Silver Nitrate, Copper Sulphate & Silver Chloride in Pakistan. High-purity chemicals for industrial, agricultural, and laboratory applications.',
    images: [`${BASE_URL}/copper-oxide-banner.png`],
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
  // Removed global canonical to allow correct per-page canonicals
};

// Helper to generate metadata for specific product pages
export function generateProductMetadata(
  productName: string, 
  description: string, 
  productId: string,
  additionalKeywords: string[] = []
): Metadata {
  const url = `${BASE_URL}/products/${productId}`;

  // Map existing images from public/ for accurate social previews
  const productOgImage: Record<string, string> = {
    'copper-oxide': '/black-powder.jpeg',
    'silver-nitrate': '/silver-nitrate-product.png',
    'copper-sulphate': '/copper-sulphate-product.png',
    'silver-chloride': '/silver-chloride-product.png',
  };
  const imageUrl = `${BASE_URL}${productOgImage[productId] || '/og-image.jpg'}`;
  
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
      images: [imageUrl],
    },
    twitter: {
      title: `${productName} - Sulman Traders`,
      description: description,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
  };
}; 