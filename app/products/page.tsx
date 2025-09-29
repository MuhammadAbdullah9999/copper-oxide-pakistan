import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import ProductsSection from "@/components/sections/products-section"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Products - Sulman Traders',
  description: 'Browse our range of high-quality chemical products including Copper Oxide, Silver Nitrate, Copper Sulphate, and more.',
  keywords: ['chemical products', 'copper oxide', 'silver nitrate', 'copper sulphate', 'industrial chemicals', 'pakistan chemicals'],
  alternates: {
    canonical: 'https://www.sulmantraders.com/products',
  }
}

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-2">Our Products</h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
              Discover our range of high-quality chemical products manufactured to meet international standards
            </p>
          </div>
        </div>
        <ProductsSection />
      </main>
      <Footer />
    </div>
  )
} 