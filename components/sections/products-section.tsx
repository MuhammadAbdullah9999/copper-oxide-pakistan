'use client'
import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    id: 'copper-oxide',
    name: 'Copper Oxide',
    chemical: 'CuO',
    image: '/black-powder.jpeg',
    description: 'High-purity copper oxide powder for industrial applications. Ideal for ceramics, batteries, and catalysts.',
    purity: '99.5%+',
    applications: ['Ceramics', 'Batteries', 'Catalysts', 'Electronics'],
    keywords: ['copper oxide', 'CuO', 'copper oxide powder', 'copper oxide pakistan']
  },
  {
    id: 'silver-nitrate',
    name: 'Silver Nitrate',
    chemical: 'AgNO₃',
    image: '/silver-nitrate.png',
    description: 'Premium quality silver nitrate for laboratory and industrial use. Perfect for analytical chemistry and manufacturing.',
    purity: '99.9%+',
    applications: ['Photography', 'Medicine', 'Electronics', 'Mirror Production'],
    keywords: ['silver nitrate', 'AgNO3', 'silver nitrate solution', 'silver nitrate pakistan']
  },
  {
    id: 'copper-sulphate',
    name: 'Copper Sulphate',
    chemical: 'CuSO₄',
    image: '/copper-sulphate-product.png',
    description: 'High-grade copper sulphate for agricultural and industrial applications. Essential for farming and manufacturing.',
    purity: '98%+',
    applications: ['Agriculture', 'Mining', 'Electroplating', 'Animal Feed'],
    keywords: ['copper sulphate', 'CuSO4', 'copper sulfate', 'blue vitriol pakistan']
  },
  {
    id: 'silver-chloride',
    name: 'Silver Chloride',
    chemical: 'AgCl',
    image: '/silver-chloride.png',
    description: 'Pure silver chloride for photographic and technical applications. High-quality for precise requirements.',
    purity: '99.9%+',
    applications: ['Photography', 'Electronics', 'Ceramics'],
    keywords: ['silver chloride', 'AgCl', 'silver chloride powder', 'silver chloride pakistan']
  },
  // {
  //   id: 'copper-carbonate',
  //   name: 'Copper Carbonate',
  //   chemical: 'CuCO₃',
  //   image: '/copper-oxide-in-plate.jpeg',
  //   description: 'Premium copper carbonate for industrial and chemical applications. Superior quality for diverse uses.',
  //   purity: '98%+',
  //   applications: ['Pigments', 'Ceramics', 'Chemical Industry'],
  //   keywords: ['copper carbonate', 'CuCO3', 'basic copper carbonate', 'copper carbonate pakistan']
  // }
]

export default function ProductsSection() {
  const [searchQuery, setSearchQuery] = useState('')
  
  const filteredProducts = products.filter(product => {
    const searchLower = searchQuery.toLowerCase()
    return (
      product.name.toLowerCase().includes(searchLower) ||
      product.chemical.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower) ||
      product.keywords.some(keyword => keyword.toLowerCase().includes(searchLower))
    )
  })

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12 relative">
          <Input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  // fill
                  width={100}
                  height={100}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-amber-700 font-mono mb-3">{product.chemical}</p>
                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-gray-700">Purity: </span>
                  <span className="text-sm text-gray-600">{product.purity}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.applications.map((app, index) => (
                    <span
                      key={index}
                      className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full"
                    >
                      {app}
                    </span>
                  ))}
                </div>
                <Link href={`/products/${product.id}`}>
                  <Button className="w-full bg-amber-700 hover:bg-amber-800">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
