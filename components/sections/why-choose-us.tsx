'use client'

import { Shield, Zap, Award, Users, TrendingUp, HeartHandshake } from 'lucide-react'
import Image from 'next/image'

export default function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "All our chemicals meet international quality standards with 99.9% purity guaranteed. Lab-tested and certified with every batch.",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: Zap,
      title: "Fast Nationwide Delivery",
      description: "Same-day dispatch to Lahore, Karachi, Islamabad, Faisalabad. Reach any city in Pakistan within 24-48 hours with secure packaging.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "50+ Years Experience",
      description: "Since 1974, we've been Pakistan's trusted chemical manufacturer. Three generations of expertise in producing premium chemicals.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      title: "500+ Happy Clients",
      description: "Serving hospitals, laboratories, industries, and agricultural businesses across Pakistan. Trusted by Fortune 500 companies.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Competitive Pricing",
      description: "Best prices in Pakistan with bulk discounts available. No hidden costs. Direct from manufacturer saves you 30-40%.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: HeartHandshake,
      title: "24/7 Expert Support",
      description: "Our chemical engineers are available round-the-clock to answer technical questions, provide guidance, and ensure proper usage.",
      color: "from-indigo-500 to-indigo-600"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800 mt-2">
              Sulman Traders?
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Pakistan's most trusted chemical manufacturer. We don't just sell chemicals – we deliver quality, reliability, and peace of mind.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Trust Badges */}
        <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-100">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Trusted & Certified
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl p-6 mb-4">
                <div className="text-3xl font-bold text-amber-700">50+</div>
                <div className="text-sm text-amber-600">Years</div>
              </div>
              <div className="text-sm text-gray-600 font-medium">Manufacturing</div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 mb-4">
                <div className="text-3xl font-bold text-blue-700">99.9%</div>
                <div className="text-sm text-blue-600">Purity</div>
              </div>
              <div className="text-sm text-gray-600 font-medium">Lab Verified</div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-6 mb-4">
                <div className="text-3xl font-bold text-green-700">✓</div>
                <div className="text-sm text-green-600">Quality</div>
              </div>
              <div className="text-sm text-gray-600 font-medium">Lab Certified</div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-6 mb-4">
                <div className="text-3xl font-bold text-purple-700">500+</div>
                <div className="text-sm text-purple-600">Clients</div>
              </div>
              <div className="text-sm text-gray-600 font-medium">Nationwide</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
