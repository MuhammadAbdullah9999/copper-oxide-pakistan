'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
export default function ProductDetails() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="flex justify-center">
            <Image
              src="/black-powder.jpeg"
              alt="High-Purity Copper Oxide Powder"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Premium Copper Oxide Powder
            </h1>
            <p className="text-gray-700 mb-6">
              With over 50 years of manufacturing excellence, we produce high-purity copper oxide (CuO) tailored for a wide range of industrial applications. Our copper oxide is trusted by leading industries for its superior quality, consistency, and performance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-sm font-semibold text-amber-700 mb-1">Purity</h4>
                <p className="text-gray-800">99.5%+</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-amber-700 mb-1">Particle Size</h4>
                <p className="text-gray-800">5–10 µm</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-amber-700 mb-1">Color</h4>
                <p className="text-gray-800">Deep Black</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-amber-700 mb-1">Applications</h4>
                <p className="text-gray-800">Ceramics, Batteries, Catalysts, Electronics</p>
              </div>
            </div>

            <Link href="/#contact"><Button className="bg-amber-700 hover:bg-amber-800">
              Request a Quote
            </Button></Link>
          </div>
        </div>

        {/* Description */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            About Our Copper Oxide
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            As a leading manufacturer based in Lahore, Pakistan, we have been producing premium copper oxide products for over five decades. Our advanced manufacturing processes ensure exceptional product quality, meeting both national and international standards.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our copper oxide (CuO) powder features high purity levels, uniform particle size distribution, and low contamination, making it suitable for critical industrial processes. Whether you require material for mass production or specialized research, our copper oxide adapts to your needs.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Key Applications
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Manufacturing of ceramic products and pigments</li>
            <li>Battery electrode material for lithium-ion batteries</li>
            <li>Catalysts in chemical synthesis and processing</li>
            <li>Production of electronic components and semiconductors</li>
            <li>Glass and optical industries for coloration</li>
            <li>Antifouling paints for marine applications</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why Choose Us?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our commitment to quality, customer satisfaction, and innovation sets us apart. We offer customized solutions, competitive pricing, and reliable delivery worldwide. Partner with us for your copper oxide needs and experience the difference built on 50+ years of industry expertise.
          </p>
        </div>
      </div>
    </section>
  )
}
