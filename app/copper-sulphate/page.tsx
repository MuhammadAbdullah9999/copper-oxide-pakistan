import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Cuso4ProductGallery from "@/components/sections/cuso4-product-gallery";
import { Metadata } from 'next';
import Script from 'next/script';
import { productSalesInfo } from "@/lib/product-sales";

const copperSulphateSales = productSalesInfo['copper-sulphate'];

export const metadata: Metadata = {
  title: 'Copper Sulphate Price Pakistan | Neela Thotha 25 kg Bags',
  description: 'Buy Copper Sulphate / Neela Thotha in Pakistan. 25 kg bags: lab grade PKR 1,200/kg, agri 20% PKR 900/kg, agri 15% PKR 750/kg.',
  keywords: [
    'copper sulphate pakistan',
    'copper sulphate manufacturer pakistan',
    'CuSO4 pakistan',
    'blue vitriol pakistan',
    'neela thotha pakistan',
    'neela thotha price pakistan',
    'blue thotha pakistan',
    'copper sulphate lahore',
    'copper sulphate agriculture pakistan',
    'copper sulphate fungicide pakistan',
    'copper sulphate supplier pakistan',
    'agricultural copper sulphate',
    'copper sulfate pakistan',
    'buy copper sulphate pakistan',
    'copper sulphate price pakistan',
    'copper sulphate pentahydrate pakistan',
    'copper sulphate fertilizer pakistan',
    'copper sulphate mining pakistan',
    'copper sulphate electroplating pakistan'
  ],
  alternates: {
    canonical: 'https://www.sulmantraders.com/copper-sulphate',
  },
  openGraph: {
    title: 'Copper Sulphate Price Pakistan | Neela Thotha 25 kg Bags',
    description: 'Copper Sulphate (CuSO₄) / Neela Thotha in 25 kg bags. Lab grade and agriculture grades available from PKR 750-1,200 per kg.',
    url: 'https://www.sulmantraders.com/copper-sulphate',
    images: [
      {
        url: 'https://www.sulmantraders.com/copper-sulphate-product.png',
        width: 1200,
        height: 630,
        alt: 'High quality copper sulphate blue crystals manufactured by Sulman Traders Pakistan'
      }
    ],
    type: 'website',
    siteName: 'Sulman Traders',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Copper Sulphate Price Pakistan | Neela Thotha',
    description: 'Buy Copper Sulphate / Neela Thotha in 25 kg bags. Lab and agriculture grades from PKR 750-1,200/kg.',
    images: ['https://www.sulmantraders.com/copper-sulphate-product.png'],
  },
};

export default function CopperSulphatePage() {
  return (
    <>
      <Script id="product-schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'Copper Sulphate (CuSO₄)',
          image: 'https://www.sulmantraders.com/copper-sulphate-product.png',
          description: 'High-grade copper sulphate pentahydrate (blue vitriol) for agricultural, mining, and industrial applications. Available in Pakistan.',
          brand: {
            '@type': 'Brand',
            name: 'Sulman Traders'
          },
          manufacturer: {
            '@type': 'Organization',
            name: 'Sulman Traders',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Lahore',
              addressRegion: 'Punjab',
              addressCountry: 'PK'
            }
          },
          offers: {
            '@type': 'AggregateOffer',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'PKR',
            lowPrice: '750',
            highPrice: '1200',
            offerCount: '3',
            seller: {
              '@type': 'Organization',
              name: 'Sulman Traders'
            }
          },
          additionalProperty: [
            {
              '@type': 'PropertyValue',
              name: 'Available grades',
              value: 'Lab grade 25%, agriculture grade 20%, agriculture grade 15%'
            },
            {
              '@type': 'PropertyValue',
              name: 'Grade clarification',
              value: 'The 25%, 20%, and 15% figures are commercial grade labels used for quotation. Buyers should confirm the exact assay/specification needed for their application before ordering.'
            },
            {
              '@type': 'PropertyValue',
              name: 'Chemical Formula',
              value: 'CuSO₄·5H₂O'
            },
            {
              '@type': 'PropertyValue',
              name: 'Appearance',
              value: 'Blue Crystalline Solid'
            },
            {
              '@type': 'PropertyValue',
              name: 'Available in Cities',
              value: 'Lahore, Karachi, Islamabad, Faisalabad, Multan, Rawalpindi, Gujranwala'
            },
            {
              '@type': 'PropertyValue',
              name: 'Packaging',
              value: copperSulphateSales.packaging
            },
            {
              '@type': 'PropertyValue',
              name: 'Minimum Order Quantity',
              value: copperSulphateSales.moq
            }
          ],
          category: 'Agricultural Chemicals, Industrial Chemicals, Mining Chemicals'
        })}
      </Script>

      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Is copper sulphate the same as Neela Thotha?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. In Pakistan, copper sulphate pentahydrate is commonly called Blue Vitriol or Neela Thotha. Sulman Traders supplies copper sulphate / Neela Thotha in lab and agriculture grades for agriculture, water treatment, mining, and industrial applications.'
              }
            },
            {
              '@type': 'Question',
              name: 'What is the price of copper sulphate in Pakistan?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sulman Traders currently lists copper sulphate lab grade 25% at PKR 1,200 per kg, agriculture grade 20% at PKR 900 per kg, and agriculture grade 15% at PKR 750 per kg. Standard packaging is 25 kg, and delivery charges are confirmed by city and quantity.'
              }
            },
            {
              '@type': 'Question',
              name: 'Where can I buy copper sulphate in Lahore, Pakistan?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'You can buy high-quality copper sulphate directly from Sulman Traders in Lahore. Contact us via WhatsApp at +92-321-4248968 to discuss delivery options and lead times.'
              }
            },
            {
              '@type': 'Question',
              name: 'How should copper sulphate be used in agriculture or water treatment?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Application rate depends on crop, formulation, water chemistry, target problem, and local guidance. Confirm the correct grade and follow qualified agronomic, technical, and label advice before use.'
              }
            },
            {
              '@type': 'Question',
              name: 'Is copper sulphate suitable for agriculture in Pakistan?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Copper sulphate is used in some agriculture programs, but suitability depends on the grade, crop, formulation, local rules, and application method. Confirm technical guidance before use.'
              }
            }
          ]
        })}
      </Script>

      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <div className="relative h-96 overflow-hidden">
            <Image
              src="/copper-sulphate-banner.png"
              alt="Copper sulphate manufacturer Pakistan"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="container px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Copper Sulphate / Neela Thotha Pakistan
                </h1>
                <p className="text-xl text-white max-w-3xl mx-auto">
                  Premium blue vitriol for agriculture, fungicide, mining, water treatment, and industrial applications
                </p>
              </div>
            </div>
          </div>

          {/* Product Information */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-8 mb-12">
                <div className="md:w-1/2">
                  <div className="rounded-lg overflow-hidden border border-gray-200 bg-white p-4">
                    <Image
                      src="/copper-sulphate-product.png"
                      alt="High quality copper sulphate blue crystals Pakistan"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover rounded"
                      priority
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Leading Copper Sulphate Manufacturer in Pakistan
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Sulman Traders is a trusted manufacturer of copper sulphate pentahydrate (CuSO₄·5H₂O), commonly known as blue vitriol, in Pakistan. With over 50 years of expertise since 1974, we provide high-grade copper sulphate for agricultural, mining, and industrial applications throughout Pakistan.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-sm font-semibold text-amber-700 mb-1">Available Grades</h3>
                      <p className="text-lg font-bold text-gray-900">25%, 20%, 15%</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-sm font-semibold text-amber-700 mb-1">Formula</h3>
                      <p className="text-lg font-bold text-gray-900">CuSO₄·5H₂O</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-sm font-semibold text-amber-700 mb-1">Appearance</h3>
                      <p className="text-lg font-bold text-gray-900">Blue Crystals</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-sm font-semibold text-amber-700 mb-1">Common Name</h3>
                      <p className="text-lg font-bold text-gray-900">Blue Vitriol / Neela Thotha</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-sm font-semibold text-amber-700 mb-1">Current Price</h3>
                      <p className="text-lg font-bold text-gray-900">PKR 750-1,200/kg</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-sm font-semibold text-amber-700 mb-1">Packaging</h3>
                      <p className="text-lg font-bold text-gray-900">25 kg bags</p>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button className="bg-amber-700 hover:bg-amber-800 text-lg px-8 py-3">
                      Request 25 kg Bag Price
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="mx-auto mt-12 w-full max-w-5xl border-t border-gray-100 pt-12">
                <Cuso4ProductGallery
                  heading="Product gallery"
                  subheading="Copper sulphate pentahydrate (CuSO₄·5H₂O), blue vitriol — as supplied across Pakistan."
                />
              </div>

              {/* Applications */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  Copper Sulphate Applications in Pakistan
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold text-amber-700 mb-3">Agriculture</h3>
                    <p className="text-gray-700">Fungicide, herbicide, soil amendment, and micronutrient fertilizer for crops.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold text-amber-700 mb-3">Mining Industry</h3>
                    <p className="text-gray-700">Ore processing, flotation agent, and metal extraction in mining operations.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold text-amber-700 mb-3">Water Treatment</h3>
                    <p className="text-gray-700">Algae control in ponds, swimming pools, and water purification systems.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold text-amber-700 mb-3">Animal Feed</h3>
                    <p className="text-gray-700">Use only with confirmed feed-grade suitability, regulatory approval, and qualified formulation guidance.</p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-16 bg-amber-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Choose Our Copper Sulphate?
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-start">
                    <span className="text-amber-700 mr-2">✓</span>
                    <span className="text-gray-700">Lab grade 25% and agriculture grades 20% / 15% available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-700 mr-2">✓</span>
                    <span className="text-gray-700">Suitable for agriculture, mining, water treatment, and industry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-700 mr-2">✓</span>
                    <span className="text-gray-700">Manufactured in Pakistan since 1974</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-700 mr-2">✓</span>
                    <span className="text-gray-700">Cost-effective solution for farmers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-700 mr-2">✓</span>
                    <span className="text-gray-700">Excellent solubility in water</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-700 mr-2">✓</span>
                    <span className="text-gray-700">Bulk quantities available for wholesale</span>
                  </li>
                </ul>
              </div>

              {/* Pricing & Bulk Orders Section */}
              <div className="mt-16 bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Copper Sulphate Price in Pakistan - 25 kg Bags
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-amber-800 mb-4">Current grade prices</h3>
                    <ul className="space-y-3">
                      {copperSulphateSales.grades?.map((grade) => (
                        <li key={grade} className="flex items-start">
                          <span className="text-amber-700 mr-2 font-bold">•</span>
                          <span className="text-gray-700">{grade}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-gray-700">
                      Standard packaging is 25 kg. Both agriculture grades are strong options for agri buyers; choose the 20% or 15% grade according to use, budget, and application advice.
                    </p>
                    <p className="mt-3 text-sm text-gray-600">
                      The 25%, 20%, and 15% figures are commercial grade labels used for quotation. Confirm the exact assay/specification needed for your application before ordering.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-amber-800 mb-4">Packaging &amp; order details</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2 font-bold">✓</span>
                        <span className="text-gray-700"><strong>Packaging:</strong> {copperSulphateSales.packaging}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2 font-bold">✓</span>
                        <span className="text-gray-700"><strong>MOQ:</strong> {copperSulphateSales.moq}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2 font-bold">✓</span>
                        <span className="text-gray-700">Delivery arranged nationwide; charges are confirmed by city and quantity</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2 font-bold">✓</span>
                        <span className="text-gray-700">Product specifications and MSDS available on request</span>
                      </li>
                    </ul>
                    <Link href="/contact">
                      <Button className="mt-6 bg-amber-700 hover:bg-amber-800 text-lg px-8 py-3">
                        Request Price Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Locations We Serve */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Copper Sulphate Delivery Across Pakistan
                </h2>
                <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
                  We supply high-quality copper sulphate to major cities and regions throughout Pakistan with fast and reliable delivery services.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                    <h3 className="font-semibold text-gray-900">Lahore</h3>
                    <p className="text-sm text-gray-600">Same-day delivery</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                    <h3 className="font-semibold text-gray-900">Karachi</h3>
                    <p className="text-sm text-gray-600">2-3 days delivery</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                    <h3 className="font-semibold text-gray-900">Islamabad</h3>
                    <p className="text-sm text-gray-600">1-2 days delivery</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                    <h3 className="font-semibold text-gray-900">Faisalabad</h3>
                    <p className="text-sm text-gray-600">1-2 days delivery</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                    <h3 className="font-semibold text-gray-900">Multan</h3>
                    <p className="text-sm text-gray-600">2-3 days delivery</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                    <h3 className="font-semibold text-gray-900">Rawalpindi</h3>
                    <p className="text-sm text-gray-600">1-2 days delivery</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                    <h3 className="font-semibold text-gray-900">Gujranwala</h3>
                    <p className="text-sm text-gray-600">Same-day delivery</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                    <h3 className="font-semibold text-gray-900">All Pakistan</h3>
                    <p className="text-sm text-gray-600">Nationwide service</p>
                  </div>
                </div>
              </div>

              {/* Buyer guidance */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  Which Copper Sulphate Grade Should You Buy?
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">Lab grade 25%</h3>
                    <p className="text-gray-700">
                      Choose lab grade when the application needs the strongest available grade, tighter checks, or laboratory and technical work.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">Agriculture grade 20%</h3>
                    <p className="text-gray-700">
                      A strong agriculture option for buyers who want higher grade material while keeping cost below lab grade.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">Agriculture grade 15%</h3>
                    <p className="text-gray-700">
                      A budget-friendly agriculture grade and one of the best options when price per kg is the main buying factor.
                    </p>
                  </div>
                </div>
              </div>

              {/* Comprehensive FAQ Section */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  Frequently Asked Questions About Copper Sulphate
                </h2>
                <div className="max-w-4xl mx-auto space-y-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Is copper sulphate the same as Neela Thotha?
                    </h3>
                    <p className="text-gray-700">
                      Yes. In Pakistan, copper sulphate pentahydrate is commonly called Blue Vitriol or Neela Thotha. Sulman Traders supplies copper sulphate / Neela Thotha in lab and agriculture grades for agriculture, water treatment, mining, and industrial applications.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      What is the price of copper sulphate in Pakistan?
                    </h3>
                    <p className="text-gray-700">
                      Current copper sulphate prices are PKR 1,200 per kg for lab grade 25%, PKR 900 per kg for agriculture grade 20%, and PKR 750 per kg for agriculture grade 15%. These percentages are commercial grade labels used for quotation. Standard packaging is 25 kg, and delivery charges are confirmed by city and quantity.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Where can I buy copper sulphate in Lahore, Pakistan?
                    </h3>
                    <p className="text-gray-700">
                      You can buy high-quality copper sulphate directly from Sulman Traders in Lahore. Contact us via WhatsApp at +92-321-4248968 or visit our facility in Lahore. We ship to Karachi, Islamabad, Faisalabad, and all major cities across Pakistan; delivery is quoted separately.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      How should copper sulphate be used in agriculture or water treatment?
                    </h3>
                    <p className="text-gray-700">
                      Application rate depends on crop, formulation, target disease, water quality, and local agricultural guidance. Confirm the correct grade and follow qualified agronomic, technical, and label advice before use.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Is copper sulphate suitable for agriculture in Pakistan?
                    </h3>
                    <p className="text-gray-700">
                      Copper sulphate is used in some agriculture programs, but suitability depends on the grade, crop, formulation, local rules, and application method. Use should be controlled because excess copper can harm plants, soil, and water.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Which copper sulphate grades are available?
                    </h3>
                    <p className="text-gray-700">
                      We currently offer lab grade 25%, agriculture grade 20%, and agriculture grade 15%. Both agriculture grades are popular for agri use. Choose the grade according to your application, required strength, and budget.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Can copper sulphate be used for swimming pool water treatment?
                    </h3>
                    <p className="text-gray-700">
                      Copper sulphate can be used in selected algae-control and water-treatment applications, but the correct rate depends on water chemistry, target organism, local rules, and whether fish or sensitive plants are present. Confirm the right grade and technical guidance before use.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Do you provide Certificates of Analysis (CoA) or lab reports?
                    </h3>
                    <p className="text-gray-700">
                      We do not issue Certificates of Analysis (CoA). We can share product specifications and Material Safety Data Sheets (MSDS) on request. Contact us for the documentation you need for your application.
                    </p>
                  </div>
                </div>
              </div>

              {/* Related Blog */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Learn More About Copper Sulphate</h2>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <Link href="/blog/copper-sulphate-agriculture-benefits" className="group">
                    <h3 className="text-xl font-semibold text-amber-700 group-hover:text-amber-800 mb-2">
                      How Copper Sulphate is Revolutionizing Agricultural Practices
                    </h3>
                    <p className="text-gray-700">
                      Discover the transformative benefits of copper sulphate in agriculture including disease prevention, soil enhancement, and improved crop yields.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
