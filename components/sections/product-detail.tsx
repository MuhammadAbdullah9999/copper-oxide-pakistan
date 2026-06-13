'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { productSalesInfo } from "@/lib/product-sales"

const copperOxideSales = productSalesInfo['copper-oxide']

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
              Copper Oxide (CuO) Powder in Pakistan
            </h1>
            <p className="text-gray-700 mb-6">
              Buy black copper oxide powder from Sulman Traders in Lahore for ceramics, glass colouring, pigments, coatings, catalysts, and industrial formulations. Current listed price is {copperOxideSales.priceLabel} with {copperOxideSales.packaging}.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-sm font-semibold text-amber-700 mb-1">Purity</h4>
                <p className="text-gray-800">99.9%</p>
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
              <div>
                <h4 className="text-sm font-semibold text-amber-700 mb-1">Current Price</h4>
                <p className="text-gray-800">{copperOxideSales.priceLabel}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-amber-700 mb-1">Packaging</h4>
                <p className="text-gray-800">{copperOxideSales.packaging}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-amber-700 mb-1">MOQ</h4>
                <p className="text-gray-800">{copperOxideSales.moq}</p>
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
          <p className="text-gray-700 leading-relaxed mb-6">
            Buyers searching for copper oxide in Pakistan usually need a reliable black CuO powder supplier, clear documentation, and application support. Sulman Traders supplies copper oxide for ceramic glazes, glass colouring, pigment work, electroplating-related formulations, coatings, catalysts, and technical manufacturing across Lahore, Karachi, Islamabad, Faisalabad, Multan, and other major cities.
          </p>

          <div className="mb-10 rounded-lg bg-amber-50 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Copper Oxide Price, MOQ, and Packaging
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold text-amber-700 mb-1">Current price</h3>
                <p className="text-gray-800">{copperOxideSales.priceLabel}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-amber-700 mb-1">Packaging</h3>
                <p className="text-gray-800">{copperOxideSales.packaging}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-amber-700 mb-1">Minimum order</h3>
                <p className="text-gray-800">{copperOxideSales.moq}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700">{copperOxideSales.note}</p>
          </div>

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
            Copper Oxide Buyer Checklist
          </h2>
          <div className="grid gap-6 md:grid-cols-3 mb-10">
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Confirm the grade</h3>
              <p className="text-gray-700">Ask whether the CuO is suitable for ceramics, glass, pigment, coating, electroplating, catalyst, or general industrial use.</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Request documents</h3>
              <p className="text-gray-700">Request purity, appearance, packaging size, product specifications, and MSDS before bulk ordering.</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Run a sample trial</h3>
              <p className="text-gray-700">For colour-critical ceramics, glass, and pigments, test the same batch in your own process before full production.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions About Copper Oxide
          </h2>
          <div className="space-y-5 mb-10">
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Where can I buy copper oxide in Pakistan?</h3>
              <p className="text-gray-700">You can buy copper oxide powder from Sulman Traders in Lahore. We supply manufacturers, traders, laboratories, ceramic producers, glass users, pigment makers, and industrial buyers across Pakistan.</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-2">What is black copper oxide used for?</h3>
              <p className="text-gray-700">Black copper oxide (CuO) is used in ceramic glazes, coloured glass, pigments, electroplating-related formulations, antifouling coatings, catalysts, battery research, and electronic materials.</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How do I get copper oxide price in Pakistan?</h3>
              <p className="text-gray-700">The current listed copper oxide price is {copperOxideSales.priceLabel}. Standard packaging is 25 kg, the minimum order is 10 kg, and 25 kg is recommended for better value. Delivery charges and final availability are confirmed at quotation.</p>
            </div>
          </div>

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
