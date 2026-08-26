import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { notFound, permanentRedirect } from 'next/navigation'
import { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Cuso4ProductGallery from '@/components/sections/cuso4-product-gallery'
import { CUSO4_GALLERY_IMAGES } from '@/lib/cuso4-gallery-images'
import { generateProductMetadata } from '@/lib/metadata'
import { productSalesInfo } from '@/lib/product-sales'
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
    purity: '99.9%',
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
    purity: '99%',
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
  'copper-carbonate': {
    name: 'Copper Carbonate (Basic)',
    image: '/copper-carbonate-powder.png',
    description: 'Basic copper carbonate powder for ceramic glazes, pigments, agriculture-related formulations, and chemical manufacturing.',
    purity: '55%',
    specifications: {
      'Chemical Formula': 'CuCO₃·Cu(OH)₂',
      'Appearance': 'Green-Blue Powder',
      'Grade': '55%',
      'Molecular Weight': '221.12 g/mol',
      'Decomposition': '200°C',
      'Solubility': 'Insoluble in water'
    },
    applications: [
      {
        title: 'Pigments',
        description: 'Used in the production of green and blue-green pigment systems.'
      },
      {
        title: 'Ceramics',
        description: 'Copper source for ceramic glazes, pottery, tiles, and decorative finishes.'
      },
      {
        title: 'Chemical Industry',
        description: 'Intermediate for preparing copper salts and specialty copper compounds.'
      },
      {
        title: 'Agriculture Formulations',
        description: 'Copper source in selected formulations where the correct grade is specified.'
      }
    ],
    benefits: [
      'Stable basic copper carbonate composition',
      'Useful blue-green colour profile',
      'Suitable for multiple industrial applications',
      'Available with technical documentation on request'
    ]
  },
  'cobalt-oxide': {
    name: 'Black Cobalt Oxide (Co₃O₄)',
    image: '/cobalt-oxide-bulk.png',
    description: 'Black cobalt(II,III) oxide powder for ceramic glazes, tile colour, cobalt blue glass, pigment manufacturing, and selected technical applications.',
    purity: '99.9%',
    specifications: {
      'Chemical Formula': 'Co₃O₄',
      'Appearance': 'Black Powder',
      'Molecular Weight': '240.80 g/mol',
      'Material Type': 'Cobalt(II,III) oxide / spinel cobalt oxide',
      'Primary Grade': '99.9% pure ceramic and industrial use'
    },
    applications: [
      {
        title: 'Ceramic & Tile Industry',
        description: 'A powerful colourant for ceramic glazes, floor tiles, wall tiles, sanitary ware, pottery, and decorative ceramic finishes.'
      },
      {
        title: 'Glass Industry',
        description: 'Used to produce cobalt blue glass and to correct unwanted yellow tint in selected glass formulations.'
      },
      {
        title: 'Pigment Manufacturing',
        description: 'Raw material for cobalt blue, cobalt black, and mixed-metal ceramic pigment systems.'
      },
      {
        title: 'Battery Materials',
        description: 'Used in lithium cobalt oxide and cobalt-containing battery material supply chains where high-purity grades are specified.'
      },
      {
        title: 'Catalysts',
        description: 'Used in oxidation catalysis, environmental emission-control research, and selected chemical manufacturing processes.'
      },
      {
        title: 'Sensors & Electronics',
        description: 'Used in gas sensors, electronic ceramic components, and advanced materials research.'
      }
    ],
    benefits: [
      'Strong cobalt blue colour development in ceramic and glass systems',
      'Useful black oxide form for pigment and mixed-metal oxide production',
      'Suitable for ceramic, tile, pottery, glass, and pigment customers',
      'Bulk supply support for manufacturers and traders',
      'COA and SDS available on request',
      'Application guidance for choosing ceramic-grade versus higher-spec technical material'
    ],
    uses: [
      'Deep blue ceramic glazes and tile colour',
      'Cobalt blue glass and decorative glass products',
      'Cobalt blue, cobalt black, and mixed-metal ceramic pigment production',
      'Sanitary ware, pottery, floor tile, and wall tile glaze systems',
      'Lithium cobalt oxide and battery material production where high-purity cobalt feedstock is required',
      'Oxidation catalysts, emission-control materials, and process catalyst research',
      'Gas sensor materials and electronic ceramic components'
    ]
  },
  'tin-sulphate': {
    name: 'Tin Sulphate (SnSO₄)',
    image: '/tin-sulphate-product.png',
    description: 'Tin(II) sulphate (stannous sulphate) sourced and supplied for tin electroplating baths, textile mordanting, reducing-agent use, and manufacture of other tin salts.',
    purity: 'Technical / plating grade',
    specifications: {
      'Chemical Formula': 'SnSO₄',
      'Other Names': 'Stannous sulphate, tin(II) sulphate',
      'Appearance': 'White to off-white crystalline powder',
      'Molecular Weight': '214.77 g/mol',
      'Solubility': '~33 g per 100 mL water at 25°C (deliquescent)',
      'Decomposition': '~378°C (decomposes to SnO₂ and SO₂)'
    },
    applications: [
      {
        title: 'Tin Electroplating',
        description: 'The primary source of Sn²⁺ ions in acid tin electroplating baths used to deposit protective, solderable tin coatings on steel, copper, and other base metals, including tinplate and PCB/electronics finishing.'
      },
      {
        title: 'Textile Dyeing & Mordanting',
        description: 'Used as a mordant in textile dyeing to improve dye fixation and colour fastness on fabrics.'
      },
      {
        title: 'Reducing Agent',
        description: 'Valued for its reducing properties in analytical chemistry, colorimetric determination of metal ions, and selected organic synthesis steps.'
      },
      {
        title: 'Tin Salt & Chemical Manufacturing',
        description: 'A convenient, tin(IV)-free source of tin(II) ions for producing other stannous compounds and specialty tin chemicals.'
      }
    ],
    benefits: [
      'Reliable Sn²⁺ source uncontaminated by tin(IV) species',
      'Good aqueous solubility for plating bath and process use',
      'Suitable for electroplating, textile, and laboratory buyers',
      'Sourced and supplied with application guidance on request'
    ],
    uses: [
      'Bright and matte acid tin electroplating baths',
      'Tinplate, busbar, and connector surface finishing',
      'PCB and electronic component tin/solder finishing',
      'Mordant for dyeing and textile colour fixation',
      'Reducing agent in analytical and colorimetric methods',
      'Feedstock for manufacturing other tin(II) salts'
    ]
  }
}

type ProductPageProps = {
  params: Promise<{ productId: string }>;
};

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { productId } = await params;
  const product = products[productId as keyof typeof products]
  if (!product) return { title: 'Product Not Found' }

  // Use the utility to generate consistent metadata with additional keywords
  const specificKeywords = productId === 'copper-oxide'
    ? ['copper oxide powder', 'black copper oxide', 'CuO manufacturer Pakistan', 'copper oxide ceramics', 'copper oxide batteries', 'copper oxide catalyst'] 
    : productId === 'silver-nitrate'
    ? ['silver nitrate crystals', 'AgNO3 supplier Pakistan', 'high purity silver nitrate', 'silver nitrate medical', 'silver nitrate photography', 'silver nitrate laboratory']
    : productId === 'copper-sulphate'
    ? ['blue vitriol', 'CuSO4 agricultural', 'copper sulphate pentahydrate', 'copper sulphate fungicide', 'agricultural copper sulphate', 'copper sulphate mining']
    : productId === 'silver-chloride'
    ? ['silver chloride powder', 'AgCl Pakistan', 'silver chloride photography', 'silver chloride electrodes']
    : productId === 'copper-carbonate'
    ? ['copper carbonate powder', 'basic copper carbonate', 'copper carbonate Pakistan', 'copper carbonate ceramics', 'copper carbonate pigment']
    : productId === 'cobalt-oxide'
    ? ['black cobalt oxide', 'Co3O4 supplier Pakistan', 'cobalt oxide ceramic glaze', 'cobalt oxide blue glass', 'cobalt oxide pigment', 'cobalt oxide battery material']
    : productId === 'tin-sulphate'
    ? ['tin sulphate Pakistan', 'stannous sulphate Pakistan', 'SnSO4 supplier Pakistan', 'tin electroplating chemical Pakistan', 'tin sulphate price Pakistan', 'stannous sulphate electroplating']
    : ['high purity chemicals', 'technical grade chemicals'];

  return generateProductMetadata(
    product.name,
    product.description,
    productId,
    specificKeywords
  );
}

export async function generateStaticParams() {
  return [
    { productId: 'copper-oxide' },
    { productId: 'silver-nitrate' },
    { productId: 'copper-sulphate' },
    { productId: 'silver-chloride' },
    { productId: 'copper-carbonate' },
    { productId: 'cobalt-oxide' },
    { productId: 'tin-sulphate' },
  ];
}

export default async function ProductDetail({ params }: ProductPageProps) {
  const { productId } = await params;
  const canonicalRedirects: Record<string, string> = {
    'copper-oxide': '/copper-oxide',
    'silver-nitrate': '/silver-nitrate',
    'copper-sulphate': '/copper-sulphate',
  };

  if (canonicalRedirects[productId]) {
    permanentRedirect(canonicalRedirects[productId]);
  }

  const product = products[productId as keyof typeof products];
  
  if (!product) notFound();

  const salesInfo = productSalesInfo[productId];
  
  // Define breadcrumb structure for structured data and UI
  const breadcrumbs = [
    { name: 'Home', url: 'https://www.sulmantraders.com/' },
    { name: 'Products', url: 'https://www.sulmantraders.com/products' },
    { name: product.name, url: `https://www.sulmantraders.com/products/${productId}` },
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
          image:
            productId === 'copper-sulphate'
              ? [
                  `https://www.sulmantraders.com${product.image}`,
                  ...CUSO4_GALLERY_IMAGES.map((img) => `https://www.sulmantraders.com${img.src}`),
                ]
              : `https://www.sulmantraders.com${product.image}`,
          description: product.description,
          brand: {
            '@type': 'Brand',
            name: 'Sulman Traders'
          },
          ...(productId === 'cobalt-oxide' || productId === 'tin-sulphate'
            ? {}
            : {
                manufacturer: {
                  '@type': 'Organization',
                  name: 'Sulman Traders',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Lahore',
                    addressRegion: 'Punjab',
                    addressCountry: 'PK'
                  }
                }
              }),
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'PKR',
            description: salesInfo?.priceLabel,
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
            })),
            ...(salesInfo
              ? [
                  {
                    '@type': 'PropertyValue',
                    name: 'Current Price',
                    value: salesInfo.priceLabel,
                  },
                  {
                    '@type': 'PropertyValue',
                    name: 'Packaging',
                    value: salesInfo.packaging,
                  },
                  {
                    '@type': 'PropertyValue',
                    name: 'Minimum Order Quantity',
                    value: salesInfo.moq,
                  },
                ]
              : [])
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
                    {salesInfo && (
                      <>
                        <div>
                          <h4 className="text-sm font-semibold text-amber-700 mb-1">Current Price</h4>
                          <p className="text-gray-800">{salesInfo.priceLabel}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-amber-700 mb-1">Packaging</h4>
                          <p className="text-gray-800">{salesInfo.packaging}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-amber-700 mb-1">MOQ</h4>
                          <p className="text-gray-800">{salesInfo.moq}</p>
                        </div>
                      </>
                    )}
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

              {productId === 'copper-sulphate' && (
                <div className="mx-auto mt-12 w-full max-w-5xl border-t border-gray-100 pt-12">
                  <Cuso4ProductGallery
                    heading="Product gallery"
                    subheading="Copper sulphate pentahydrate (CuSO₄·5H₂O), blue vitriol — as supplied across Pakistan."
                  />
                </div>
              )}

              {/* Description Section */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  About Our {product.name.split('(')[0].trim()}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {productId === 'cobalt-oxide'
                    ? `As a Lahore-based chemical supplier and trader, we source and supply ${product.name.split('(')[0].trim()} for ceramic, glass, pigment, and selected technical customers across Pakistan. We focus on reliable bulk availability, practical documentation, and grade matching for the customer application.`
                    : productId === 'tin-sulphate'
                    ? `As a Lahore-based chemical supplier and trader, we source and supply ${product.name.split('(')[0].trim()} for electroplating, textile, and technical customers across Pakistan. We focus on reliable bulk availability, practical documentation, and grade matching for the customer application.`
                    : `As a leading manufacturer based in Lahore, Pakistan, we have been producing premium ${product.name.split('(')[0].trim()} products for over five decades. Our advanced manufacturing processes ensure exceptional product quality, meeting both national and international standards.`}
                </p>

                {salesInfo && (
                  <div className="mb-10 rounded-lg bg-amber-50 p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Price, Packaging, and MOQ
                    </h2>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div>
                        <h3 className="text-sm font-semibold text-amber-700 mb-1">Current price</h3>
                        <p className="text-gray-800">{salesInfo.priceLabel}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-amber-700 mb-1">Packaging</h3>
                        <p className="text-gray-800">{salesInfo.packaging}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-amber-700 mb-1">MOQ</h3>
                        <p className="text-gray-800">{salesInfo.moq}</p>
                      </div>
                    </div>
                    {salesInfo.grades && (
                      <ul className="mt-4 list-disc list-inside text-gray-700">
                        {salesInfo.grades.map((grade) => (
                          <li key={grade}>{grade}</li>
                        ))}
                      </ul>
                    )}
                    {salesInfo.note && <p className="mt-4 text-gray-700">{salesInfo.note}</p>}
                  </div>
                )}

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
