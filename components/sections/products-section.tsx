'use client'
import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'
import { ProductCard } from "@/components/ui/product-card"

const products = [
  {
    id: 'copper-oxide',
    name: 'Copper Oxide',
    chemical: 'CuO',
    image: '/black-powder.jpeg',
    description: 'High-purity copper oxide powder for industrial applications. Ideal for ceramics, batteries, and catalysts.',
    purity: '99.5%+',
    applications: ['Ceramics', 'Batteries', 'Catalysts', 'Electronics'],
    keywords: ['copper oxide', 'CuO', 'copper oxide powder', 'copper oxide pakistan'],
    alt: 'High-purity black copper oxide powder manufactured by Sulman Traders'
  },
  {
    id: 'silver-nitrate',
    name: 'Silver Nitrate',
    chemical: 'AgNO₃',
    image: '/silver-nitrate.png',
    description: 'Premium quality silver nitrate for laboratory and industrial use. Perfect for analytical chemistry and manufacturing.',
    purity: '99.9%+',
    applications: ['Photography', 'Medicine', 'Electronics', 'Mirror Production'],
    keywords: ['silver nitrate', 'AgNO3', 'silver nitrate solution', 'silver nitrate pakistan'],
    alt: 'Pure silver nitrate crystals for laboratory and industrial applications'
  },
  {
    id: 'copper-sulphate',
    name: 'Copper Sulphate',
    chemical: 'CuSO₄',
    image: '/copper-sulphate-product.png',
    description: 'High-grade copper sulphate for agricultural and industrial applications. Essential for farming and manufacturing.',
    purity: '98%+',
    applications: ['Agriculture', 'Mining', 'Electroplating', 'Animal Feed'],
    keywords: ['copper sulphate', 'CuSO4', 'copper sulfate', 'blue vitriol pakistan'],
    alt: 'Blue copper sulphate crystals for agricultural applications'
  },
  {
    id: 'silver-chloride',
    name: 'Silver Chloride',
    chemical: 'AgCl',
    image: '/silver-chloride.png',
    description: 'Pure silver chloride for photographic and technical applications. High-quality for precise requirements.',
    purity: '99.9%+',
    applications: ['Photography', 'Electronics', 'Ceramics'],
    keywords: ['silver chloride', 'AgCl', 'silver chloride powder', 'silver chloride pakistan'],
    alt: 'Premium silver chloride powder for photographic applications'
  },
  // {
  //   id: 'copper-carbonate',
  //   name: 'Copper Carbonate',
  //   chemical: 'CuCO₃',
  //   image: '/copper-oxide-in-plate.jpeg',
  //   description: 'Premium copper carbonate for industrial and chemical applications. Superior quality for diverse uses.',
  //   purity: '98%+',
  //   applications: ['Pigments', 'Ceramics', 'Chemical Industry'],
  //   keywords: ['copper carbonate', 'CuCO3', 'basic copper carbonate', 'copper carbonate pakistan'],
  //   alt: 'Premium copper carbonate powder for industrial applications'
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
    <section id="products" className="py-16 bg-gray-50">
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
            aria-label="Search for products"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
              imageAlt={product.alt}
              chemical={product.chemical}
              applications={product.applications}
              link={`/products/${product.id}`}
              purity={product.purity}
            />
          ))}
          
          {filteredProducts.length === 0 && (
            <div className="col-span-full text-center py-10">
              <h3 className="text-xl font-medium text-gray-600 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search terms</p>
            </div>
          )}
        </div>
        
        {/* More Products CTA */}
        <div className="mt-12 text-center">
          <Link href="/products">
            <Button className="bg-amber-700 hover:bg-amber-800" aria-label="View all our chemical products">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
