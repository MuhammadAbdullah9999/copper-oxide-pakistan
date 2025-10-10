'use client'

import { Quote } from 'lucide-react'
import Image from 'next/image'

export default function SocialProof() {
  const testimonials = [
    {
      name: "Dr. Ahmed Hassan",
      role: "Chief Chemist, PakLab Industries",
      location: "Karachi",
      image: "/placeholder-user.jpg",
      rating: 5,
      text: "We've been purchasing Silver Nitrate from Sulman Traders for 5 years. The purity is consistently 99.9%, and delivery is always on time. Highly recommended for laboratory use.",
      product: "Silver Nitrate"
    },
    {
      name: "Muhammad Rafique",
      role: "Farm Owner, Green Valley Farms",
      location: "Faisalabad",
      image: "/placeholder-user.jpg",
      rating: 5,
      text: "Copper Sulphate from Sulman Traders has significantly improved our crop health. The blue vitriol works perfectly as fungicide. Best quality in Pakistan at competitive prices.",
      product: "Copper Sulphate"
    },
    {
      name: "Ayesha Khan",
      role: "Production Manager, Ceramic Industries Ltd",
      location: "Lahore",
      image: "/placeholder-user.jpg",
      rating: 5,
      text: "Their Copper Oxide is perfect for our ceramic glazes. Particle size is consistent, and the black color is exactly what we need. Excellent quality control.",
      product: "Copper Oxide"
    }
  ]

  const industries = [
    "Hospitals & Healthcare",
    "Universities & Research",
    "Agricultural Sector",
    "Manufacturing Industries",
    "Pharmaceutical Companies",
    "Mining Operations"
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Trusted by
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800"> 500+ Companies</span>
          </h2>
          <p className="text-xl text-gray-600">
            See what our customers across Pakistan say about our chemical products and services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-amber-200">
                <Quote className="w-12 h-12" fill="currentColor" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Product Badge */}
              <div className="inline-block bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {testimonial.product}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                  <div className="text-xs text-gray-400">{testimonial.location}, Pakistan</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industries We Serve */}
        <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Industries We Serve Across Pakistan
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 hover:shadow-md transition-shadow"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600" />
                <span className="text-gray-700 font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-amber-600 mb-2">5000+</div>
            <div className="text-gray-600">Successful Orders</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-amber-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Customer Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-amber-600 mb-2">15+</div>
            <div className="text-gray-600">Cities Covered</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-amber-600 mb-2">99%</div>
            <div className="text-gray-600">On-Time Delivery</div>
          </div>
        </div>
      </div>
    </section>
  )
}
