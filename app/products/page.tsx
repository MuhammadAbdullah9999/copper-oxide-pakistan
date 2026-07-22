import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { Button } from "@/components/ui/button"
import { ArrowRight, Beaker, CheckCircle, Sparkles } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"
import { productSalesInfo } from "@/lib/product-sales"

export const metadata: Metadata = {
  title: 'Industrial Chemical Supplier Pakistan | Prices, MOQ & MSDS',
  description: 'Buy industrial chemicals in Pakistan from Sulman Traders: Copper Oxide, Copper Sulphate / Neela Thotha, Silver Nitrate, Silver Chloride, Copper Carbonate, and Black Cobalt Oxide for ceramics, glass, agriculture, lab, and pigment buyers.',
  keywords: [
    'chemical products Pakistan',
    'chemical supplier Pakistan',
    'industrial chemical supplier Pakistan',
    'buy chemicals Pakistan',
    'copper oxide Pakistan',
    'copper oxide supplier Pakistan',
    'cobalt oxide Pakistan',
    'black cobalt oxide Pakistan',
    'Co3O4 supplier Pakistan',
    'silver nitrate Pakistan', 
    'silver nitrate supplier Pakistan',
    'copper sulphate Pakistan',
    'copper sulphate supplier Pakistan',
    'silver chloride Pakistan',
    'copper carbonate Pakistan',
    'industrial chemicals Pakistan',
    'laboratory chemicals Pakistan',
    'chemical supplier Lahore',
    'bulk chemicals Pakistan'
  ],
  alternates: {
    canonical: 'https://www.sulmantraders.com/products',
  }
}

export default function ProductsPage() {
  const products = [
    {
      id: 'copper-oxide',
      href: '/copper-oxide',
      name: 'Copper Oxide',
      formula: 'CuO',
      specLabel: 'Declared spec',
      spec: '99.9%',
      image: '/black-powder.jpeg',
      shortDesc: 'Black CuO powder for ceramics, glass, pigments, coatings, and technical use',
      applications: ['Ceramics & Glazes', 'Glass Colouring', 'Pigments', 'Antifouling Coatings'],
      color: 'from-gray-700 to-gray-900',
      badge: 'Most Popular',
      badgeColor: 'bg-amber-500'
    },
    {
      id: 'silver-nitrate',
      href: '/silver-nitrate',
      name: 'Silver Nitrate',
      formula: 'AgNO₃',
      specLabel: 'Available grades',
      spec: '99.9% / 70%',
      image: '/silver-nitrate-product.png',
      shortDesc: 'Silver nitrate in 25 g packaging for laboratory, mirror, plating, and industrial buyers',
      applications: ['Laboratory Use', 'Mirror Making', 'Silver Plating', 'Photography'],
      color: 'from-gray-300 to-gray-500',
      badge: 'Lab & Industrial',
      badgeColor: 'bg-green-500'
    },
    {
      id: 'copper-sulphate',
      href: '/copper-sulphate',
      name: 'Copper Sulphate',
      formula: 'CuSO₄·5H₂O',
      specLabel: 'Available grades',
      spec: '25% / 20% / 15%',
      image: '/copper-sulphate-product.png',
      shortDesc: 'Blue vitriol / Neela Thotha in 25 kg bags for agriculture, lab, and industry',
      applications: ['Agriculture', 'Mining & Ore Processing', 'Water Treatment', 'Industrial Formulations'],
      color: 'from-orange-400 to-orange-600',
      badge: 'Best for Agriculture',
      badgeColor: 'bg-orange-500'
    },
    {
      id: 'silver-chloride',
      name: 'Silver Chloride',
      formula: 'AgCl',
      specLabel: 'Declared spec',
      spec: '99.9%',
      image: '/silver-chloride-product.png',
      shortDesc: 'Silver chloride for electrodes, photography, lab chemistry, and silver recovery',
      applications: ['Photography', 'Electronics', 'Reference Electrodes', 'Optical Components'],
      color: 'from-amber-400 to-amber-600',
      badge: 'Technical Grade',
      badgeColor: 'bg-amber-600'
    },
    {
      id: 'copper-carbonate',
      name: 'Copper Carbonate',
      formula: 'CuCO₃·Cu(OH)₂',
      specLabel: 'Available grade',
      spec: '55%',
      image: '/copper-carbonate-powder.png',
      shortDesc: '55% blue-green basic copper carbonate powder',
      applications: ['Ceramic Glazes', 'Pigments', 'Copper Salts', 'Formulations'],
      color: 'from-emerald-500 to-teal-700',
      badge: 'Pigment & Ceramic',
      badgeColor: 'bg-emerald-600'
    },
    {
      id: 'cobalt-oxide',
      name: 'Black Cobalt Oxide',
      formula: 'Co₃O₄',
      specLabel: 'Declared spec',
      spec: '99.9%',
      image: '/cobalt-oxide-bulk.png',
      shortDesc: 'Black cobalt(II,III) oxide for ceramic glazes, glass, pigments, and technical materials',
      applications: ['Ceramic Glazes', 'Cobalt Blue Glass', 'Pottery Colour', 'Pigments'],
      color: 'from-slate-800 to-blue-900',
      badge: 'Ceramic Colourant',
      badgeColor: 'bg-blue-700'
    }
  ]

  const priceGuides = [
    {
      title: 'Copper Oxide Price in Pakistan',
      href: '/copper-oxide-price-in-pakistan',
      text: productSalesInfo['copper-oxide'].priceLabel,
    },
    {
      title: 'Copper Sulphate Price in Pakistan',
      href: '/copper-sulphate-price-in-pakistan',
      text: productSalesInfo['copper-sulphate'].priceLabel,
    },
    {
      title: 'Silver Nitrate Price in Pakistan',
      href: '/silver-nitrate-price-in-pakistan',
      text: productSalesInfo['silver-nitrate'].priceLabel,
    },
    {
      title: 'Copper Carbonate Price in Pakistan',
      href: '/copper-carbonate-price-in-pakistan',
      text: productSalesInfo['copper-carbonate'].priceLabel,
    },
  ]

  const productListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Chemical Products Supplier Pakistan',
    description:
      'Industrial chemicals supplied by Sulman Traders in Pakistan, including Copper Oxide, Black Cobalt Oxide, Silver Nitrate, Copper Sulphate, Silver Chloride, and Copper Carbonate.',
    url: 'https://www.sulmantraders.com/products',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://www.sulmantraders.com${product.href || `/products/${product.id}`}`,
        name: `${product.name} (${product.formula})`,
        image: `https://www.sulmantraders.com${product.image}`,
        description: product.shortDesc,
        offers: {
          '@type': 'Offer',
          priceCurrency: 'PKR',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: 'Sulman Traders',
          },
          description: productSalesInfo[product.id]?.priceLabel,
        },
      })),
    },
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which industrial chemicals does Sulman Traders supply in Pakistan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sulman Traders supplies Copper Oxide, Black Cobalt Oxide, Silver Nitrate, Copper Sulphate, Silver Chloride, Copper Carbonate, and related industrial chemicals for manufacturers, traders, laboratories, agriculture, ceramics, glass, and pigment customers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you manufacture Black Cobalt Oxide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Black Cobalt Oxide is traded and supplied by Sulman Traders. It is offered for ceramic glazes, cobalt blue glass, pigments, catalysts, sensors, and selected technical applications where the buyer specification matches the available grade.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I request product documents?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Buyers can request product specifications, MSDS support, packaging, grade, and application guidance. Batch-specific documents are provided where available for the selected product.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the current product prices and MOQ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Current listed prices include Copper Oxide at PKR 3,500 per kg with 10 kg MOQ, Copper Sulphate at PKR 750-1,200 per kg in 25 kg bags, Silver Nitrate at PKR 12,000 per 25 g for 99.9% and PKR 8,000 per 25 g for 70%, and Copper Carbonate at PKR 2,000 per kg. Silver Nitrate prices may vary with silver market rates.',
        },
      },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Script id="products-collection-schema" type="application/ld+json">
        {JSON.stringify(productListJsonLd)}
      </Script>
      <Script id="products-faq-schema" type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </Script>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="product-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="1.5" fill="currentColor" className="text-amber-600" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#product-grid)" />
            </svg>
          </div>

          {/* Decorative Blobs */}
          <div className="absolute top-10 right-10 w-64 h-64 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

          <div className="container mx-auto px-4 relative z-10">
            <FadeIn direction="up" className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-amber-200 rounded-full px-6 py-3 mb-6 shadow-lg">
                <Sparkles className="w-5 h-5 text-amber-600" />
                <span className="font-semibold text-gray-700">Premium Chemical Products</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Browse Our
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mt-2">
                  Chemical Products
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Industrial chemicals manufactured, sourced, and supplied in Pakistan with clear prices, packaging, declared grades, and MSDS support where available.
              </p>

              {/* Features */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700 font-medium">Clear Prices</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700 font-medium">Declared Grades</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700 font-medium">Fast Delivery</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {products.map((product, index) => (
                <FadeIn key={product.id} delay={index * 150} direction="up">
                  <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl border-2 border-gray-100 overflow-hidden hover:border-amber-200 hover:shadow-2xl transition-all duration-500">
                    {/* Badge */}
                    <div className={`absolute top-6 left-6 z-10 ${product.badgeColor} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                      {product.badge}
                    </div>

                    {/* Product Image */}
                    <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                      <Image
                        src={product.image}
                        alt={`${product.name} (${product.formula}) supplied by Sulman Traders in Pakistan`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-20`} />
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      {/* Title & Formula */}
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
                        <span className="text-lg font-mono font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-lg">
                          {product.formula}
                        </span>
                      </div>

                      {/* Specification Badge */}
                      <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-1 mb-4">
                        <Beaker className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">{product.specLabel}: {product.spec}</span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 mb-6">{product.shortDesc}</p>

                      <div className="mb-6 space-y-1 rounded-lg bg-gray-50 p-4 text-sm text-gray-700">
                        <p>
                          <span className="font-semibold text-gray-900">Price: </span>
                          {productSalesInfo[product.id]?.priceLabel}
                        </p>
                        <p>
                          <span className="font-semibold text-gray-900">Packaging: </span>
                          {productSalesInfo[product.id]?.packaging}
                        </p>
                        <p>
                          <span className="font-semibold text-gray-900">MOQ: </span>
                          {productSalesInfo[product.id]?.moq}
                        </p>
                      </div>

                      {/* Applications */}
                      <div className="mb-6">
                        <div className="text-sm font-semibold text-gray-700 mb-3">Key Applications:</div>
                        <div className="flex flex-wrap gap-2">
                          {product.applications.map((app) => (
                            <span key={app} className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm border border-amber-200">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Link href={product.href || `/products/${product.id}`}>
                        <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white group-hover:shadow-lg transition-all">
                          View Details & Pricing
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <div className="mx-auto mt-14 max-w-6xl rounded-2xl bg-gray-50 p-6">
              <h2 className="mb-5 text-2xl font-bold text-gray-900">
                Chemical Price Guides in Pakistan
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {priceGuides.map((guide) => (
                  <Link
                    key={guide.href}
                    href={guide.href}
                    className="rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:border-amber-300 hover:bg-amber-50"
                  >
                    <h3 className="mb-2 font-semibold text-gray-900">{guide.title}</h3>
                    <p className="text-sm text-gray-700">{guide.text}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-10">
                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  Industrial Chemical Supplier in Pakistan
                </h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  Sulman Traders supplies industrial chemicals for manufacturers, traders, laboratories, agriculture, ceramics, glass, pigments, and technical applications across Pakistan. Our product range includes Copper Oxide (CuO), Black Cobalt Oxide (Co3O4), Silver Nitrate (AgNO3), Copper Sulphate (CuSO4), Silver Chloride (AgCl), and Copper Carbonate.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Bulk Chemical Supply</h3>
                  <p className="leading-relaxed text-gray-700">
                    Order suitable packaging for production use, trading, and repeat industrial supply. We support buyers with product availability, packaging details, quote support, and delivery coordination.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Application Matching</h3>
                  <p className="leading-relaxed text-gray-700">
                    Choose the right grade for ceramic glazes, cobalt blue glass, pigments, agriculture, laboratory work, water treatment, electroplating, and selected technical uses.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Documents on Request</h3>
                  <p className="leading-relaxed text-gray-700">
                    Ask for specifications, MSDS, declared grade, appearance, packaging, and buyer checks before placing a bulk order. For cobalt oxide, we clearly position it as traded and supplied material.
                  </p>
                </div>
              </div>

              <div className="mt-12 border-t border-gray-200 pt-10">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">Product Buying Questions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      Which chemicals can I buy from Sulman Traders?
                    </h3>
                    <p className="text-gray-700">
                      You can request Copper Oxide, Black Cobalt Oxide, Silver Nitrate, Copper Sulphate, Silver Chloride, Copper Carbonate, and related industrial chemical supply.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      Is Black Cobalt Oxide manufactured by Sulman Traders?
                    </h3>
                    <p className="text-gray-700">
                      No. Black Cobalt Oxide (Co3O4) is traded and supplied. It is commonly used for ceramic glazes, tile colour, cobalt blue glass, pigment production, catalysts, sensors, and selected technical applications.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      What are your current product prices and MOQ?
                    </h3>
                    <p className="text-gray-700">
                      Copper Oxide is PKR 3,500/kg with 10 kg MOQ and 25 kg recommended packaging. Copper Sulphate is PKR 750-1,200/kg in 25 kg bags depending on grade. Silver Nitrate is sold in 25 g packs at PKR 12,000 for 99.9% and PKR 8,000 for 70%, with prices varying by silver market rates. Copper Carbonate 55% is PKR 2,000/kg. Cobalt Oxide and Silver Chloride prices are confirmed at quotation.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      How do I choose the right product grade?
                    </h3>
                    <p className="text-gray-700">
                      Share your application, required grade or specification, packaging size, and any document requirements. Ceramic, agriculture, laboratory, glass, pigment, and technical customers often need different checks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-600 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-dots" width="30" height="30" patternUnits="userSpaceOnUse">
                  <circle cx="15" cy="15" r="2" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-dots)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <FadeIn direction="up" className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">
                Need Industrial Chemical Supply?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Share your product, grade, quantity, city, and application. Our team will confirm availability, packaging, current price, and delivery options.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all font-bold">
                    Contact Technical Team
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="tel:+923214248968">
                  <Button
                    size="lg"
                    className="border-2 border-white bg-white text-amber-700 shadow-xl transition-all hover:bg-gray-50 hover:text-amber-800 font-bold"
                  >
                    Call: +92-321-4248968
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
