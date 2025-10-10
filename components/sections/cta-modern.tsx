'use client'

import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function CTAModern() {
  return (
    <section className="py-24 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Content */}
          <div className="text-center mb-12">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <span className="text-white font-semibold">🎉 Get Instant Quote</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Order High-Quality Chemicals?
            </h2>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get instant pricing, free samples, and technical consultation from Pakistan's #1 chemical manufacturer. 
              <span className="block mt-2 font-semibold">Same-day dispatch • Nationwide delivery • Lab certified</span>
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Phone */}
            <a 
              href="tel:+923214248968"
              className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us Now</h3>
              <p className="text-gray-600 mb-3">Speak with our chemical experts</p>
              <div className="text-amber-600 font-bold text-lg">+92-321-4248968</div>
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/923214248968"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-3">Quick response in 5 minutes</p>
              <div className="text-amber-600 font-bold text-lg">Message Us</div>
            </a>

            {/* Email */}
            <a 
              href="mailto:info@sulmantraders.com"
              className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Quote</h3>
              <p className="text-gray-600 mb-3">Get detailed pricing & specs</p>
              <div className="text-amber-600 font-bold text-lg">Send Email</div>
            </a>
          </div>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-amber-700 hover:bg-gray-50 text-lg px-10 py-7 rounded-xl shadow-2xl hover:shadow-3xl transition-all group font-bold"
              >
                Request Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/products">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-7 rounded-xl backdrop-blur-sm"
              >
                Browse Products
              </Button>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">100% Quality Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Same-Day Dispatch</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Secure Payment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
