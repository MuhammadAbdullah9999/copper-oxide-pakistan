import HeroCarousel from "@/components/sections/hero-carousel"
import ProductsSection from "@/components/sections/products-section"
import AboutSection from "@/components/sections/about-section"
import ManufacturingSection from "@/components/sections/manufacturing-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import FeaturesSection from "@/components/sections/features-section"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sulman Traders - Leading Chemical Manufacturer in Pakistan',
  description: 'Premium manufacturer of Copper Oxide, Silver Nitrate, Silver Chloride, and Copper Sulphate in Pakistan. High-purity chemicals for industrial applications.',
  keywords: [
    'copper oxide pakistan',
    'silver nitrate pakistan',
    'silver chloride manufacturer',
    'copper sulphate supplier',
    'chemical manufacturer lahore',
    'industrial chemicals pakistan',
    'copper oxide powder',
    'silver nitrate supplier',
    'copper carbonate pakistan',
    'chemical distributor pakistan'
  ],
  openGraph: {
    title: 'Sulman Traders - Leading Chemical Manufacturer in Pakistan',
    description: 'Premium manufacturer of industrial chemicals including Copper Oxide, Silver Nitrate, and more. Serving Pakistan with high-quality products.',
    images: ['/og-image.jpg'],
  }
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Carousel */}
        <HeroCarousel />
        
        {/* Features Section */}
        <FeaturesSection />

        {/* About Section */}
        <AboutSection />

        {/* Products Section */}
        <ProductsSection />

        {/* Manufacturing Section */}
        <ManufacturingSection />

        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Trust Section */}
        <section className="py-16 bg-amber-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Trusted by Industries Across Pakistan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              With over 50 years of experience in chemical manufacturing, we serve diverse industries with high-quality products and reliable service.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="p-4">
                <div className="text-4xl font-bold text-amber-700 mb-2">500+</div>
                <div className="text-gray-600">Active Clients</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-amber-700 mb-2">50+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-amber-700 mb-2">99%</div>
                <div className="text-gray-600">Quality Rate</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-amber-700 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
