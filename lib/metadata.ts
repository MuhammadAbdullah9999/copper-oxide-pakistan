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
    default: 'Copper Sulphate Manufacturer Pakistan | Copper Oxide, Silver Nitrate - Sulman Traders',
    template: '%s | Sulman Traders'
  },
  description: 'Leading Copper Sulphate manufacturer in Pakistan. Buy high-purity Copper Sulphate (CuSO₄), Copper Oxide (CuO), Silver Nitrate (AgNO₃) in Lahore, Karachi, Islamabad. Agricultural & industrial grade available. 98%+ purity. Fast delivery across Pakistan since 1974.',
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
    title: 'Copper Sulphate Manufacturer Pakistan | Buy Copper Oxide, Silver Nitrate',
    description: 'Leading Copper Sulphate manufacturer in Pakistan. High-purity agricultural & industrial grade Copper Sulphate (CuSO₄), Copper Oxide (CuO), Silver Nitrate (AgNO₃). Available in Lahore, Karachi, Islamabad. 98%+ purity.',
    images: [`${BASE_URL}/copper-sulphate-banner.png`],
    url: BASE_URL,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Copper Sulphate Manufacturer Pakistan | Sulman Traders',
    description: 'Buy high-purity Copper Sulphate (CuSO₄), Copper Oxide, Silver Nitrate in Pakistan. Agricultural & industrial grade. 98%+ purity. Fast delivery across Pakistan.',
    images: [`${BASE_URL}/copper-sulphate-banner.png`],
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
    'copper-carbonate': '/copper-carbonate-powder.png',
  };
  const imageUrl = `${BASE_URL}${productOgImage[productId] || '/og-image.jpg'}`;

  const ctrMetadata: Record<string, { title: string; description: string }> = {
    'copper-oxide': {
      title: 'Copper Oxide CuO Supplier Pakistan | 99.9% Black Powder',
      description:
        'Buy Copper Oxide (CuO) in Pakistan from Sulman Traders. High-purity black powder for ceramics, glass, electroplating, pigments, and industry. COA/SDS available.',
    },
    'silver-nitrate': {
      title: 'Silver Nitrate AgNO3 Supplier Pakistan | 99.9% Pure Crystals',
      description:
        'Buy Silver Nitrate (AgNO3) in Pakistan for lab, pharmaceutical, water treatment, and industrial use. High purity, secure packaging, COA/SDS available.',
    },
    'copper-sulphate': {
      title: 'Copper Sulphate CuSO4 Supplier Pakistan | Blue Vitriol Price',
      description:
        'Buy Copper Sulphate (CuSO4) blue vitriol in Pakistan for agriculture, dairy footbaths, mining, water treatment, and industry. COA/SDS available.',
    },
    'silver-chloride': {
      title: 'AgCl Silver Chloride Supplier Pakistan | 99.9% Pure Powder',
      description:
        'Buy high-purity AgCl / Silver Chloride in Pakistan. Uses include electrodes, photography, lab chemistry, and silver recovery. COA/SDS and quote support available.',
    },
    'copper-carbonate': {
      title: 'Copper Carbonate Supplier Pakistan | Basic Copper Carbonate Powder',
      description:
        'Buy basic Copper Carbonate in Pakistan for ceramic glazes, pigments, copper salts, and formulations. Blue-green powder with COA/SDS available.',
    },
  };

  const snippet = ctrMetadata[productId] || {
    title: `${productName} Supplier Pakistan | Sulman Traders`,
    description,
  };
  
  return {
    title: snippet.title,
    description: snippet.description,
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
      title: snippet.title,
      description: snippet.description,
      url: url,
      images: [imageUrl],
    },
    twitter: {
      title: snippet.title,
      description: snippet.description,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
  };
}; 
