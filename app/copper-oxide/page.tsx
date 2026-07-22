import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ProductDetails from "@/components/sections/product-detail";
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Copper Oxide Supplier Pakistan | CuO Powder PKR 3,500/kg',
  description: 'Buy black Copper Oxide (CuO) powder in Pakistan for ceramics, glass, pigments, and industrial use. PKR 3,500/kg, 25 kg packaging, 10 kg MOQ.',
  keywords: [
    'copper oxide Pakistan',
    'copper oxide manufacturer Pakistan',
    'CuO Pakistan',
    'black copper oxide',
    'copper oxide powder Pakistan',
    'copper oxide Lahore',
    'copper oxide supplier Pakistan',
    'high purity copper oxide',
    'industrial copper oxide Pakistan',
    'copper oxide CuO manufacturer',
    'copper oxide ceramics Pakistan',
    'copper oxide batteries',
    'copper oxide catalyst Pakistan',
    'buy copper oxide Pakistan',
    'copper oxide price Pakistan',
    'copper oxide chemical Pakistan'
  ],
  alternates: {
    canonical: 'https://www.sulmantraders.com/copper-oxide',
  },
  openGraph: {
    title: 'Copper Oxide Supplier Pakistan | CuO Powder PKR 3,500/kg',
    description: 'Black Copper Oxide (CuO) powder in Pakistan for ceramics, glass, pigments, and industrial use. 25 kg packaging, 10 kg MOQ, and nationwide delivery coordination.',
    url: 'https://www.sulmantraders.com/copper-oxide',
    images: [
      {
        url: 'https://www.sulmantraders.com/black-powder.jpeg',
        width: 1200,
        height: 630,
        alt: 'High purity copper oxide black powder manufactured by Sulman Traders Pakistan'
      }
    ],
    type: 'website',
    siteName: 'Sulman Traders',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Copper Oxide Supplier Pakistan | CuO Powder',
    description: 'Buy black Copper Oxide at PKR 3,500/kg. 25 kg packaging and 10 kg MOQ.',
    images: ['https://www.sulmantraders.com/black-powder.jpeg'],
  },
};

export default function Main(){
    return(
        <div>
            <Script id="copper-oxide-product-schema" type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'Product',
                    name: 'Copper Oxide (CuO)',
                    image: 'https://www.sulmantraders.com/black-powder.jpeg',
                    description: 'High-purity black Copper Oxide (CuO) powder supplied by Sulman Traders in Pakistan for ceramics, glass, pigments, catalysts, electroplating, coatings, and industrial applications.',
                    brand: { '@type': 'Brand', name: 'Sulman Traders' },
                    manufacturer: {
                        '@type': 'Organization',
                        name: 'Sulman Traders',
                        address: {
                            '@type': 'PostalAddress',
                            addressLocality: 'Lahore',
                            addressRegion: 'Punjab',
                            addressCountry: 'PK'
                        }
                    },
                    offers: {
                        '@type': 'Offer',
                        availability: 'https://schema.org/InStock',
                        priceCurrency: 'PKR',
                        price: '3500',
                        unitCode: 'KGM',
                        seller: { '@type': 'Organization', name: 'Sulman Traders' }
                    },
                    additionalProperty: [
                        { '@type': 'PropertyValue', name: 'Chemical Formula', value: 'CuO' },
                        { '@type': 'PropertyValue', name: 'Appearance', value: 'Black Powder' },
                        { '@type': 'PropertyValue', name: 'Purity', value: '99.9%' },
                        { '@type': 'PropertyValue', name: 'Packaging', value: '25 kg standard packaging' },
                        { '@type': 'PropertyValue', name: 'Minimum Order Quantity', value: '10 kg minimum order; 25 kg recommended' }
                    ],
                    category: 'Industrial Chemicals, Ceramic Chemicals, Pigment Raw Materials'
                })}
            </Script>
            <Script id="copper-oxide-faq-schema" type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'FAQPage',
                    mainEntity: [
                        {
                            '@type': 'Question',
                            name: 'Where can I buy Copper Oxide in Pakistan?',
                            acceptedAnswer: {
                                '@type': 'Answer',
                                text: 'You can buy Copper Oxide (CuO) black powder from Sulman Traders in Lahore, Pakistan. We supply copper oxide for ceramics, glass, pigments, coatings, catalysts, electroplating, and industrial applications.'
                            }
                        },
                        {
                            '@type': 'Question',
                            name: 'What is Copper Oxide used for?',
                            acceptedAnswer: {
                                '@type': 'Answer',
                                text: 'Copper Oxide is used in ceramic glazes, glass colouring, pigments, electroplating, antifouling coatings, catalysts, battery research, and electronic materials.'
                            }
                        },
                        {
                            '@type': 'Question',
                            name: 'What documents should I request before buying Copper Oxide?',
                            acceptedAnswer: {
                                '@type': 'Answer',
                                text: 'Buyers should request purity, appearance, particle size where available, product specifications, MSDS, packaging information, and sample testing for colour-critical ceramic or glass use.'
                            }
                        }
                    ]
                })}
            </Script>
            <Header></Header>
            <ProductDetails></ProductDetails>
            <Footer></Footer>
        </div>
    )
}
