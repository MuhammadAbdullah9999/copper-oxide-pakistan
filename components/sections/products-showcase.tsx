'use client'

import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Star } from 'lucide-react'

export default function ProductsShowcase() {
  const products = [
    {
      id: 'copper-oxide',
      name: 'Copper Oxide',
      formula: 'CuO',
      purity: '99.9%',
      image: '/black-powder.jpeg',
      description: 'High-purity black copper oxide powder for ceramics, batteries, and industrial catalysts.',
      applications: ['Ceramics', 'Batteries', 'Electronics', 'Catalysts'],
      color: 'from-gray-700 to-gray-900',
      highlight: 'Most Popular',
      features: [
        'Consistent particle size',
        'High thermal stability',
        'Food grade available',
        'Bulk orders welcome'
      ]
    },
    {
      id: 'silver-nitrate',
      name: 'Silver Nitrate',
      formula: 'AgNO₃',
      purity: '99.9%',
      image: '/silver-nitrate-product.png',
      description: 'Pharmaceutical-grade silver nitrate crystals for medical, laboratory, and photographic applications.',
      applications: ['Medical', 'Laboratory', 'Photography', 'Electronics'],
      color: 'from-gray-300 to-gray-500',
      highlight: 'Medical Grade',
      features: [
        'USP/BP grade',
        'Light-protected packaging',
        'MSDS included',
        'Small batches available'
      ]
    },
    {
      id: 'copper-sulphate',
      name: 'Copper Sulphate',
      formula: 'CuSO₄·5H₂O',
      purity: '98%+',
      image: '/copper-sulphate-product.png',
      description: 'Blue vitriol for agriculture, water treatment, mining, and animal feed supplement.',
      applications: ['Agriculture', 'Mining', 'Water Treatment', 'Animal Feed'],
      color: 'from-blue-400 to-blue-600',
      highlight: 'Best for Agriculture',
      features: [
        'Fungicide grade',
        'Soluble in water',
        'Agricultural certified',
        'Wholesale pricing'
      ]
    }
  ]

  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-amber-600 fill-amber-600" />
            <span className="text-sm font-semibold text-amber-700">Premium Quality Chemicals</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800"> Chemical Products</span>
          </h2>
          <p className="text-xl text-gray-600">
            Manufactured in Pakistan with international quality standards. All products are lab-tested, certified, and delivered with complete documentation.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl border-2 border-gray-100 overflow-hidden hover:border-amber-200 hover:shadow-2xl transition-all duration-500"
            >
              {/* Highlight Badge */}
              {product.highlight && (
                <div className="absolute top-6 left-6 z-10 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  {product.highlight}
                </div>
              )}

              {/* Product Image */}
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                <Image
                  src={product.image}
                  alt={`${product.name} (${product.formula}) manufactured in Pakistan`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-20`} />
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Title & Formula */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                  <span className="text-lg font-mono font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-lg">
                    {product.formula}
                  </span>
                </div>

                {/* Purity Badge */}
                <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-1 mb-4">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-700">{product.purity} Purity</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Applications */}
                <div className="mb-6">
                  <div className="text-sm font-semibold text-gray-700 mb-3">Key Applications:</div>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app) => (
                      <span key={app} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {product.features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link href={`/products/${product.id}`}>
                  <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white group-hover:shadow-lg transition-all">
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-12 border-2 border-amber-100">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Need Custom Chemical Solutions?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We can manufacture custom chemical formulations according to your specific requirements. Contact our technical team for consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                Contact Technical Team
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="border-amber-600 text-amber-700 hover:bg-amber-50">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
