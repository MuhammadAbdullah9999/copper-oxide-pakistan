'use client'

import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Award, CheckCircle, TrendingUp } from 'lucide-react'
import { useState, useEffect } from 'react'

// Product images for carousel
const productImages = [
  {
    src: "/images/products/copper sulphate-placed-on-paper-4.jpg",
    alt: "High purity Copper Sulphate (CuSO₄) manufactured in Pakistan by Sulman Traders",
    title: "Copper Sulphate (CuSO₄)",
    description: "98% Agricultural Grade"
  },
  {
    src: "/copper-oxide-in-plate.jpeg",
    alt: "High purity Copper Oxide (CuO) manufactured in Pakistan by Sulman Traders",
    title: "Copper Oxide (CuO)",
    description: "99.9% Pure"
  },
  {
    src: "/silver-nitrate-in-pan.jpg",
    alt: "High purity Silver Nitrate (AgNO₃) manufactured in Pakistan by Sulman Traders",
    title: "Silver Nitrate (AgNO₃)",
    description: "99.9% Pure"
  },
  {
    src: "/copper-oxide-pigment.jpg",
    alt: "Copper Oxide Pigment for industrial applications in Pakistan",
    title: "Copper Oxide Pigment",
    description: "Industrial Grade"
  }
]

export default function ModernHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('right')
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [])

  const handleDotClick = (index: number) => {
    setDirection(index > currentImageIndex ? 'right' : 'left')
    setCurrentImageIndex(index)
  }

  const currentProduct = productImages[currentImageIndex]
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-[url('/banner.png')] opacity-5 bg-cover bg-center" />
      </div>

      {/* Animated Shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-40 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-amber-200 rounded-full px-4 py-2 shadow-sm animate-fadeInUp">
              <Award className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-medium text-gray-700">50+ Years of Excellence in Pakistan</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight animate-fadeInUp" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
              Pakistan's Leading
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800 mt-2">
                Chemical Manufacturer
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl animate-fadeInUp" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
              High-purity <strong>Copper Oxide</strong>, <strong>Silver Nitrate</strong>, and <strong>Copper Sulphate</strong> for industries across Pakistan. 
              <span className="block mt-2 text-gray-700 font-medium">99.9% purity guaranteed. Lab-tested. Trusted by 500+ companies.</span>
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 animate-fadeInUp" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Quality Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Same-Day Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Lab Tested</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fadeInUp" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
              <Link href="#products">
                <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                  View Our Products
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="#contact">
                <Button size="lg" variant="outline" className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 shadow-md">
                  Get Instant Quote
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-amber-600 flex items-center gap-1">
                  500+
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="text-sm text-gray-600 mt-1">Active Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600">99.9%</div>
                <div className="text-sm text-gray-600 mt-1">Purity Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600">50+</div>
                <div className="text-sm text-gray-600 mt-1">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Product Images */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main Product Image with Sliding Carousel */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <div className="relative w-full h-[500px] overflow-hidden">
                  {/* Sliding Images Container */}
                  <div 
                    className="flex transition-transform duration-700 ease-in-out h-full"
                    style={{ 
                      transform: `translateX(-${currentImageIndex * 100}%)`,
                    }}
                  >
                    {productImages.map((product, index) => (
                      <div key={index} className="min-w-full h-full relative">
                        <Image
                          src={product.src}
                          alt={product.alt}
                          width={600}
                          height={600}
                          className="object-cover w-full h-full"
                          priority={index === 0}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                          <h3 className="text-white text-2xl font-bold">{product.title}</h3>
                          <p className="text-white/90 text-sm mt-1">{product.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Carousel Indicators */}
                <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
                  {productImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-white w-8' 
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                      aria-label={`View product ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={() => {
                    setDirection('left')
                    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length)
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 group"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6 text-gray-800 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    setDirection('right')
                    setCurrentImageIndex((prev) => (prev + 1) % productImages.length)
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 group"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6 text-gray-800 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Floating Product Cards */}
              <div className="absolute -left-6 top-20 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 max-w-[200px] z-20">
                <Image
                  src="/black-powder.jpeg"
                  alt="Copper Oxide Pakistan"
                  width={100}
                  height={100}
                  className="rounded-lg mb-2"
                />
                <h4 className="font-semibold text-sm">Copper Oxide</h4>
                <p className="text-xs text-gray-500">CuO • 99.9% Pure</p>
              </div>

              <div className="absolute -right-6 bottom-32 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 max-w-[200px] z-20">
                <Image
                  src="/silver-nitrate.png"
                  alt="Silver Nitrate Pakistan"
                  width={100}
                  height={100}
                  className="rounded-lg mb-2"
                />
                <h4 className="font-semibold text-sm">Silver Nitrate</h4>
                <p className="text-xs text-gray-500">AgNO₃ • 99.9% Pure</p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400 rounded-full blur-2xl opacity-50" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full blur-2xl opacity-40" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

