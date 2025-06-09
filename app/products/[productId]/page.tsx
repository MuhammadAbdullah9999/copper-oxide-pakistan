import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

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
    description: 'Premium quality silver nitrate for analytical and industrial applications. Our Silver Nitrate is available in 99.9% purity and has been manufactured by Sulman Traders in Pakistan for over 10 years, ensuring consistent quality and reliability for our clients. Silver Nitrate (AgNO₃) is a versatile chemical compound widely used in laboratories, industry, and healthcare. Our product is trusted for its high purity, excellent solubility, and strict quality control, making it ideal for demanding applications.',
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
    image: '/copper-sulphate-product.png',
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

  return {
    title: `${product.name} - Sulman Traders`,
    description: product.description,
    keywords: [
      product.name.toLowerCase(),
      'pakistan',
      'chemical manufacturer',
      'industrial chemicals',
      'high purity chemicals',
      'lahore chemicals'
    ]
  }
}

export async function generateStaticParams() {
  return [
    { productId: 'copper-oxide' },
    { productId: 'silver-nitrate' },
    { productId: 'copper-sulphate' },
    { productId: 'silver-chloride' },
    { productId: 'copper-carbonate' },
  ];
}

export default function ProductPage({ params }: { params: { productId: string } }) {
  const product = products[params.productId as keyof typeof products]
  
  if (!product) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative h-[300px] md:h-[400px]">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image
            src={product.image}
            alt={product.name}
            // fill
            width={100}
            height={100}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                {product.description}
              </p>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="container mx-auto px-4 py-12">
          {/* Specifications */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600">{key}</div>
                  <div className="font-medium">{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.applications.map((app, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-2">{app.title}</h3>
                  <p className="text-gray-600">{app.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Uses Section (only for silver-nitrate) */}
          {params.productId === 'silver-nitrate' && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Uses of Silver Nitrate</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {product.uses && product.uses.map((use: string, idx: number) => (
                  <li key={idx}>{use}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Benefits */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {product.benefits.map((benefit, index) => (
                <div key={index} className="bg-amber-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Interested in {product.name}?</h2>
            <p className="text-gray-600 mb-6">Contact us for pricing and detailed product information.</p>
            <Link href="/contact">
              <Button size="lg" className="bg-amber-700 hover:bg-amber-800">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 