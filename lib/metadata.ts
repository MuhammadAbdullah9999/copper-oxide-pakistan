import type { Metadata, Viewport } from 'next';

// Base URL for the site - update this with your production URL
const BASE_URL = 'https://www.sulmantraders.com';

// Viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#b45309',
};

// Default metadata for the entire site
export const defaultMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Chemical Manufacturer & Supplier Pakistan | Copper Sulphate, Copper Oxide, Cobalt Oxide',
    template: '%s | Sulman Traders'
  },
  description: 'Sulman Traders is a Lahore-based chemical manufacturer and supplier in Pakistan. Buy Copper Sulphate / Neela Thotha, Copper Oxide (CuO), Black Cobalt Oxide (Co3O4), Silver Nitrate, Silver Chloride, and Copper Carbonate with COA/SDS support and nationwide delivery.',
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
    'neela thotha pakistan',
    'neela thotha price pakistan',
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
    // Cobalt Oxide Keywords
    'black cobalt oxide pakistan',
    'cobalt oxide supplier pakistan',
    'Co3O4 pakistan',
    'cobalt oxide ceramic glaze',
    'cobalt oxide pigment pakistan',
    // General Keywords
    'chemical manufacturer lahore',
    'chemical supplier lahore',
    'chemical supplier pakistan',
    'industrial chemicals pakistan',
    'laboratory chemicals pakistan',
    'bulk chemicals pakistan'
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
    title: 'Chemical Manufacturer & Supplier Pakistan | Sulman Traders',
    description: 'Buy Copper Sulphate / Neela Thotha, Copper Oxide, Black Cobalt Oxide, Silver Nitrate, Silver Chloride, and Copper Carbonate in Pakistan.',
    images: [`${BASE_URL}/copper-sulphate-banner.png`],
    url: BASE_URL,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chemical Manufacturer & Supplier Pakistan | Sulman Traders',
    description: 'Buy Copper Sulphate, Copper Oxide, Black Cobalt Oxide, Silver Nitrate, and industrial chemicals in Pakistan.',
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
  other: {
    'google-adsense-account': 'ca-pub-1028357665079905',
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
  const canonicalPath: Record<string, string> = {
    'copper-oxide': '/copper-oxide',
    'silver-nitrate': '/silver-nitrate',
    'copper-sulphate': '/copper-sulphate',
  };
  const url = `${BASE_URL}${canonicalPath[productId] || `/products/${productId}`}`;

  // Map existing images from public/ for accurate social previews
  const productOgImage: Record<string, string> = {
    'copper-oxide': '/black-powder.jpeg',
    'silver-nitrate': '/silver-nitrate-product.png',
    'copper-sulphate': '/copper-sulphate-product.png',
    'silver-chloride': '/silver-chloride-product.png',
    'copper-carbonate': '/copper-carbonate-powder.png',
    'cobalt-oxide': '/cobalt-oxide-bulk.png',
  };
  const imageUrl = `${BASE_URL}${productOgImage[productId] || '/og-image.jpg'}`;

  const ctrMetadata: Record<string, { title: string; description: string }> = {
    'copper-oxide': {
      title: 'Copper Oxide CuO Supplier Pakistan | PKR 3,000/kg',
      description:
        'Buy Copper Oxide (CuO) in Pakistan from Sulman Traders. Current price PKR 3,000/kg, 25 kg packaging, 10 kg MOQ. COA/SDS available.',
    },
    'silver-nitrate': {
      title: 'Silver Nitrate AgNO3 Supplier Pakistan | 25 g Price',
      description:
        'Buy Silver Nitrate (AgNO3) in Pakistan. 99.9% grade PKR 12,000 per 25 g and 70% grade PKR 8,000 per 25 g. Prices vary with silver rates.',
    },
    'copper-sulphate': {
      title: 'Copper Sulphate CuSO4 Supplier Pakistan | 25 kg Price',
      description:
        'Buy Copper Sulphate / Neela Thotha in Pakistan. 25 kg bags, lab grade PKR 1,200/kg, agri grade 20% PKR 900/kg, agri grade 15% PKR 750/kg.',
    },
    'silver-chloride': {
      title: 'AgCl Silver Chloride Supplier Pakistan | 99.9% Pure Powder',
      description:
        'Buy high-purity AgCl / Silver Chloride in Pakistan. Uses include electrodes, photography, lab chemistry, and silver recovery. COA/SDS and quote support available.',
    },
    'copper-carbonate': {
      title: 'Copper Carbonate Supplier Pakistan | 55% Grade Price',
      description:
        'Buy 55% basic Copper Carbonate in Pakistan for ceramic glazes, pigments, copper salts, and formulations. Current price PKR 2,000/kg.',
    },
    'cobalt-oxide': {
      title: 'Black Cobalt Oxide Co3O4 Supplier Pakistan | 99.9% Pure',
      description:
        'Buy 99.9% pure Black Cobalt Oxide (Co3O4) in Pakistan for ceramic glazes, cobalt blue glass, pigments, and technical use. 2 kg MOQ.',
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
