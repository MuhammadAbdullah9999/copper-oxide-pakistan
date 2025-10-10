import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowRight, Beaker, CheckCircle, Sparkles } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

export const metadata: Metadata = {
  title: 'Chemical Products - Copper Oxide, Silver Nitrate, Copper Sulphate | Sulman Traders Pakistan',
  description: 'Browse our premium chemical products manufactured in Pakistan: Copper Oxide (CuO) 99.9%, Silver Nitrate (AgNO₃) 99.9%, Copper Sulphate (CuSO₄) 98%+. High purity, lab-tested, nationwide delivery.',
  keywords: [
    'chemical products Pakistan',
    'copper oxide Pakistan',
    'silver nitrate Pakistan', 
    'copper sulphate Pakistan',
    'industrial chemicals Pakistan',
    'laboratory chemicals Pakistan',
    'buy chemicals Pakistan',
    'chemical manufacturer Lahore'
  ],
  alternates: {
    canonical: 'https://www.sulmantraders.com/products',
  }
}

export default function ProductsPage() {
  const products = [
    {
      id: 'copper-oxide',
      name: 'Copper Oxide',
      formula: 'CuO',
      purity: '99.9%',
      image: '/black-powder.jpeg',
      shortDesc: 'High-purity black copper oxide powder',
      applications: ['Ceramics & Glazes', 'Battery Manufacturing', 'Electronics', 'Catalysts'],
      color: 'from-gray-700 to-gray-900',
      badge: 'Most Popular',
      badgeColor: 'bg-amber-500'
    },
    {
      id: 'silver-nitrate',
      name: 'Silver Nitrate',
      formula: 'AgNO₃',
      purity: '99.9%',
      image: '/silver-nitrate-product.png',
      shortDesc: 'Pharmaceutical-grade silver nitrate crystals',
      applications: ['Medical & Healthcare', 'Laboratory Research', 'Photography', 'Electronics'],
      color: 'from-gray-300 to-gray-500',
      badge: 'Medical Grade',
      badgeColor: 'bg-green-500'
    },
    {
      id: 'copper-sulphate',
      name: 'Copper Sulphate',
      formula: 'CuSO₄·5H₂O',
      purity: '98%+',
      image: '/copper-sulphate-product.png',
      shortDesc: 'Blue vitriol for agricultural and industrial use',
      applications: ['Agriculture', 'Mining & Ore Processing', 'Water Treatment', 'Animal Feed'],
      color: 'from-orange-400 to-orange-600',
      badge: 'Best for Agriculture',
      badgeColor: 'bg-orange-500'
    },
    {
      id: 'silver-chloride',
      name: 'Silver Chloride',
      formula: 'AgCl',
      purity: '99.9%',
      image: '/silver-chloride-product.png',
      shortDesc: 'High-purity silver chloride for technical applications',
      applications: ['Photography', 'Electronics', 'Reference Electrodes', 'Optical Components'],
      color: 'from-amber-400 to-amber-600',
      badge: 'Technical Grade',
      badgeColor: 'bg-amber-600'
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
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
                High-purity chemicals manufactured in Pakistan. Lab-tested, certified, and trusted by 500+ companies across industries.
              </p>

              {/* Features */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700 font-medium">Lab Tested</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700 font-medium">99.9% Purity</span>
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
                        alt={`${product.name} (${product.formula}) - High purity chemical manufactured in Pakistan`}
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

                      {/* Purity Badge */}
                      <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-1 mb-4">
                        <Beaker className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">{product.purity} Purity</span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 mb-6">{product.shortDesc}</p>

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
                      <Link href={`/products/${product.id}`}>
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
                Need Custom Chemical Solutions?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                We can manufacture custom chemical formulations according to your specific requirements. Contact our technical team for consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all font-bold">
                    Contact Technical Team
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="tel:+923214248968">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm">
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
