import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { generateProductMetadata } from '@/lib/metadata'
import Script from 'next/script'

// Product data
type Product = {
  name: string;
  image: string;
  description: string;
  purity: string;
  specifications: Record<string, string>;
  applications: { title: string; description: string }[];
  benefits: string[];
  uses?: string[];
};

const products: Record<string, Product> = {
  'copper-oxide': {
    name: 'Copper Oxide (CuO)',
    image: '/black-powder.jpeg',
    description: 'High-purity copper oxide powder manufactured to meet the most demanding industrial requirements.',
    purity: '99.5%+',
    specifications: {
      'Chemical Formula': 'CuO',
      'Appearance': 'Black Powder',
      'Molecular Weight': '79.545 g/mol',
      'Melting Point': '1,326°C',
      'Bulk Density': '6.31 g/cm³'
    },
    applications: [
      {
        title: 'Ceramics Industry',
        description: 'Used as a coloring agent in ceramics and glazes, providing deep blue and green colors.'
      },
      {
        title: 'Battery Manufacturing',
        description: 'Essential component in the production of high-performance batteries and superconductors.'
      },
      {
        title: 'Catalyst Applications',
        description: 'Serves as a catalyst in various chemical reactions and industrial processes.'
      },
      {
        title: 'Electronics',
        description: 'Used in the manufacturing of electronic components and semiconductor devices.'
      }
    ],
    benefits: [
      'Consistent particle size distribution',
      'High chemical purity',
      'Excellent thermal stability',
      'Superior conductivity properties'
    ]
  },
  'silver-nitrate': {
    name: 'Silver Nitrate (AgNO₃)',
    image: '/silver-nitrate.png',
    description: 'Premium quality silver nitrate for analytical and industrial applications.',
    purity: '99.9%+',
    specifications: {
      'Chemical Formula': 'AgNO₃',
      'Appearance': 'White Crystalline Solid',
      'Molecular Weight': '169.87 g/mol',
      'Melting Point': '212°C',
      'Solubility': 'Highly soluble in water'
    },
    applications: [
      {
        title: 'Photography',
        description: 'Essential in traditional photography and film development processes.'
      },
      {
        title: 'Medical Applications',
        description: 'Used in medical devices and as an antimicrobial agent.'
      },
      {
        title: 'Laboratory Analysis',
        description: 'Critical reagent in analytical chemistry and testing procedures.'
      },
      {
        title: 'Mirror Production',
        description: 'Key component in the manufacturing of high-quality mirrors.'
      }
    ],
    benefits: [
      'High purity grade',
      'Consistent quality',
      'Excellent solubility',
      'Versatile applications',
      'Manufactured in Pakistan for over 10 years'
    ],
    uses: [
      'Electroplating and surface finishing',
      'Antimicrobial and cauterizing agent in healthcare',
      'Staining agent in microscopy',
      'Production of silver-based chemicals',
      'Laboratory reagent for precipitation and titration',
      'Manufacture of mirrors and specialized glassware'
    ]
  },
  'copper-sulphate': {
    name: 'Copper Sulphate (CuSO₄)',
    image: '/images/products/copper-sulphate-in-bowl 1.png',
    description: 'High-grade copper sulphate pentahydrate for agricultural and industrial use.',
    purity: '98%+',
    specifications: {
      'Chemical Formula': 'CuSO₄·5H₂O',
      'Appearance': 'Blue Crystalline Solid',
      'Molecular Weight': '249.69 g/mol',
      'pH Value': '3.7-4.2 (5% solution)',
      'Solubility': 'Highly soluble in water'
    },
    applications: [
      {
        title: 'Agriculture',
        description: 'Used as a fungicide, herbicide, and soil amendment in agriculture.'
      },
      {
        title: 'Mining Industry',
        description: 'Essential in ore processing and metal extraction operations.'
      },
      {
        title: 'Water Treatment',
        description: 'Used for algae control and water purification processes.'
      },
      {
        title: 'Animal Feed',
        description: 'Nutritional supplement in animal feed formulations.'
      }
    ],
    benefits: [
      'Cost-effective solution',
      'Wide range of applications',
      'Excellent solubility',
      'Stable composition'
    ]
  },
  'silver-chloride': {
    name: 'Silver Chloride (AgCl)',
    image: '/silver-chloride.png',
    description: 'High-purity silver chloride for specialized technical applications.',
    purity: '99.9%+',
    specifications: {
      'Chemical Formula': 'AgCl',
      'Appearance': 'White Powder',
      'Molecular Weight': '143.32 g/mol',
      'Melting Point': '455°C',
      'Solubility': 'Insoluble in water'
    },
    applications: [
      {
        title: 'Photographic Industry',
        description: 'Critical component in photographic emulsions and films.'
      },
      {
        title: 'Electronics',
        description: 'Used in the manufacture of electronic components and sensors.'
      },
      {
        title: 'Reference Electrodes',
        description: 'Essential material in electrochemical reference electrodes.'
      },
      {
        title: 'Optical Applications',
        description: 'Used in specialized optical components and coatings.'
      }
    ],
    benefits: [
      'High chemical stability',
      'Excellent photosensitivity',
      'Consistent quality',
      'Pure composition'
    ]
  },
  // 'copper-carbonate': {
  //   name: 'Copper Carbonate (CuCO₃)',
  //   image: '/copper-oxide-in-plate.jpeg',
  //   description: 'Premium quality basic copper carbonate for industrial and chemical applications.',
  //   purity: '98%+',
  //   specifications: {
  //     'Chemical Formula': 'CuCO₃·Cu(OH)₂',
  //     'Appearance': 'Green-Blue Powder',
  //     'Molecular Weight': '221.12 g/mol',
  //     'Decomposition': '200°C',
  //     'Solubility': 'Insoluble in water'
  //   },
  //   applications: [
  //     {
  //       title: 'Pigments',
  //       description: 'Used in the production of pigments and colorants.'
  //     },
  //     {
  //       title: 'Ceramics',
  //       description: 'Component in ceramic glazes and decorative applications.'
  //     },
  //     {
  //       title: 'Chemical Industry',
  //       description: 'Precursor in various chemical synthesis processes.'
  //     },
  //     {
  //       title: 'Wood Preservation',
  //       description: 'Used in wood treatment and preservation applications.'
  //     }
  //   ],
  //   benefits: [
  //     'Stable composition',
  //     'Uniform particle size',
  //     'Environmental friendly',
  //     'Versatile applications'
  //   ]
  // }
}

export async function generateMetadata({ params }: { params: { productId: string } }): Promise<Metadata> {
  const product = products[params.productId as keyof typeof products]
  if (!product) return { title: 'Product Not Found' }

  // Use the utility to generate consistent metadata with additional keywords
  const specificKeywords = params.productId === 'copper-oxide' 
    ? ['copper oxide powder', 'black copper oxide', 'CuO manufacturer Pakistan', 'copper oxide ceramics', 'copper oxide batteries', 'copper oxide catalyst'] 
    : params.productId === 'silver-nitrate'
    ? ['silver nitrate crystals', 'AgNO3 supplier Pakistan', 'high purity silver nitrate', 'silver nitrate medical', 'silver nitrate photography', 'silver nitrate laboratory']
    : params.productId === 'copper-sulphate'
    ? ['blue vitriol', 'CuSO4 agricultural', 'copper sulphate pentahydrate', 'copper sulphate fungicide', 'agricultural copper sulphate', 'copper sulphate mining']
    : params.productId === 'silver-chloride'
    ? ['silver chloride powder', 'AgCl Pakistan', 'silver chloride photography', 'silver chloride electrodes']
    : ['high purity chemicals', 'technical grade chemicals'];

  return generateProductMetadata(
    product.name,
    product.description,
    params.productId,
    specificKeywords
  );
}

export async function generateStaticParams() {
  return [
    { productId: 'copper-oxide' },
    { productId: 'silver-nitrate' },
    { productId: 'copper-sulphate' },
    { productId: 'silver-chloride' },
  ];
}

export default function ProductDetail({ params }: { params: { productId: string } }) {
  const product = products[params.productId as keyof typeof products];
  
  if (!product) notFound();
  
  // Define breadcrumb structure for structured data and UI
  const breadcrumbs = [
    { name: 'Home', url: 'https://www.sulmantraders.com/' },
    { name: 'Products', url: 'https://www.sulmantraders.com/products' },
    { name: product.name, url: `https://www.sulmantraders.com/products/${params.productId}` },
  ];
  
  // Extract application areas for LD+JSON
  const applicationAreas = product.applications.map(app => app.title);

  return (
    <>
      {/* Product JSON-LD Schema */}
      <Script id="product-schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name,
          image: `https://www.sulmantraders.com${product.image}`,
          description: product.description,
          brand: {
            '@type': 'Brand',
            name: 'Sulman Traders'
          },
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
            priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
            seller: {
              '@type': 'Organization',
              name: 'Sulman Traders'
            }
          },
          additionalProperty: [
            {
              '@type': 'PropertyValue',
              name: 'Purity',
              value: product.purity
            },
            ...Object.entries(product.specifications).map(([name, value]) => ({
              '@type': 'PropertyValue',
              name,
              value
            }))
          ],
          category: applicationAreas.join(', ')
        })}
      </Script>
      
      {/* Breadcrumb JSON-LD Schema */}
      <Script id="breadcrumb-schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: crumb.url
          }))
        })}
      </Script>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          {/* Breadcrumbs UI */}
          <div className="bg-gray-100 py-2">
            <div className="container mx-auto px-4">
              <div className="text-sm text-gray-600">
                {breadcrumbs.map((crumb, index) => (
                  <span key={index}>
                    {index > 0 && <span className="mx-2">/</span>}
                    {index === breadcrumbs.length - 1 ? (
                      <span className="font-medium text-amber-700">{crumb.name}</span>
                    ) : (
                      <Link href={crumb.url.replace('https://www.sulmantraders.com', '')} className="hover:text-amber-700">
                        {crumb.name}
                      </Link>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-8 mb-12">
                <div className="md:w-1/2">
                  <div className="rounded-lg overflow-hidden border border-gray-200 bg-white p-4">
                    <Image
                      src={product.image}
                      alt={`${product.name} - High quality chemical product by Sulman Traders`}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover rounded"
                      priority
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                  <p className="text-gray-600 mb-6">{product.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-sm font-semibold text-amber-700 mb-1">Purity</h4>
                      <p className="text-gray-800">{product.purity}</p>
                    </div>
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key}>
                        <h4 className="text-sm font-semibold text-amber-700 mb-1">{key}</h4>
                        <p className="text-gray-800">{value}</p>
                      </div>
                    ))}
                  </div>

                  <Link href="/#contact">
                    <Button className="bg-amber-700 hover:bg-amber-800">
                      Request a Quote
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Description Section */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  About Our {product.name.split('(')[0].trim()}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  As a leading manufacturer based in Lahore, Pakistan, we have been producing premium {product.name.split('(')[0].trim()} products for over five decades. Our advanced manufacturing processes ensure exceptional product quality, meeting both national and international standards.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Key Applications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {product.applications.map((app, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="text-lg font-semibold text-amber-700 mb-2">{app.title}</h3>
                      <p className="text-gray-700">{app.description}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Benefits
                </h2>
                <ul className="list-disc list-inside text-gray-700 mb-6 grid grid-cols-1 md:grid-cols-2 gap-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>

                {product.uses && (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Common Uses
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 mb-6 grid grid-cols-1 md:grid-cols-2 gap-2">
                      {product.uses.map((use, index) => (
                        <li key={index}>{use}</li>
                      ))}
                    </ul>
                  </>
                )}
                
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Choose Us?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our commitment to quality, customer satisfaction, and innovation sets us apart. We offer customized solutions, competitive pricing, and reliable delivery nationwide. Partner with us for your {product.name.split('(')[0].trim()} needs and experience the difference built on 50+ years of industry expertise.
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
} 