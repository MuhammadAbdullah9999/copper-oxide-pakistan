import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Cuso4ProductGallery from "@/components/sections/cuso4-product-gallery";
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Copper Sulphate (CuSO₄) Manufacturer Pakistan | Blue Vitriol - Sulman Traders',
  description: 'Leading Copper Sulphate (CuSO₄) manufacturer in Pakistan. High-grade blue vitriol for agriculture, fungicide, mining, and industrial applications. 99% purity. Supplied from Lahore.',
  keywords: [
    'copper sulphate pakistan',
    'copper sulphate manufacturer pakistan',
    'CuSO4 pakistan',
    'blue vitriol pakistan',
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
    title: 'Copper Sulphate Manufacturer Pakistan | Agricultural & Industrial Grade',
    description: 'Premium Copper Sulphate (CuSO₄) manufactured in Pakistan for agriculture, fungicide, and industrial applications. 99% purity.',
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
    title: 'Copper Sulphate Manufacturer Pakistan | Blue Vitriol',
    description: 'Leading manufacturer of Copper Sulphate in Pakistan. 99% purity.',
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
            lowPrice: '100',
            highPrice: '500',
            offerCount: '4',
            seller: {
              '@type': 'Organization',
              name: 'Sulman Traders'
            }
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '47',
            bestRating: '5',
            worstRating: '1'
          },
          review: [
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5'
              },
              author: {
                '@type': 'Person',
                name: 'Ahmed Hassan'
              },
              reviewBody: 'Best quality copper sulphate in Pakistan! Using it for our rice farms in Punjab. Excellent results against fungal diseases.',
              datePublished: '2024-10-15'
            },
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5'
              },
              author: {
                '@type': 'Organization',
                name: 'Malik Enterprises'
              },
              reviewBody: 'Reliable supplier for our agricultural business. High purity, competitive prices, and timely delivery to Multan.',
              datePublished: '2024-10-20'
            },
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5'
              },
              author: {
                '@type': 'Organization',
                name: 'Zain Industries'
              },
              reviewBody: 'Using their copper sulphate for our water treatment facility. Consistent quality and excellent customer service.',
              datePublished: '2024-11-01'
            }
          ],
          additionalProperty: [
            {
              '@type': 'PropertyValue',
              name: 'Purity',
              value: '99%'
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
              name: 'What is the price of copper sulphate in Pakistan?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Copper sulphate prices in Pakistan vary based on quantity and delivery location. Our product is 99% purity. Contact us at +92-321-4248968 for current pricing and bulk discounts.'
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
              name: 'How do I use copper sulphate as a fungicide?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'For fungicide applications, dissolve 200-500g of copper sulphate in 100 liters of water (0.2-0.5% solution). Mix with lime to create Bordeaux mixture for better adherence.'
              }
            },
            {
              '@type': 'Question',
              name: 'Is copper sulphate safe for organic farming in Pakistan?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, copper sulphate is approved for use in organic farming when applied within recommended limits. Use should follow local regulations and good agricultural practice.'
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
                  Copper Sulphate Manufacturer Pakistan
                </h1>
                <p className="text-xl text-white max-w-3xl mx-auto">
                  Premium blue vitriol for agriculture, fungicide, mining, and industrial applications
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
                      <h3 className="text-sm font-semibold text-amber-700 mb-1">Purity</h3>
                      <p className="text-lg font-bold text-gray-900">99%</p>
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
                      <p className="text-lg font-bold text-gray-900">Blue Vitriol</p>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button className="bg-amber-700 hover:bg-amber-800 text-lg px-8 py-3">
                      Get Agricultural Solutions
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
                    <p className="text-gray-700">Nutritional supplement providing essential copper in livestock feed formulations.</p>
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
                    <span className="text-gray-700">99% purity, consistent quality</span>
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
                  Copper Sulphate Price in Pakistan - Bulk Orders Available
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-amber-800 mb-4">Purity &amp; packaging</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-amber-700 mr-2 font-bold">•</span>
                        <span className="text-gray-700"><strong>Purity:</strong> 99%</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-700 mr-2 font-bold">•</span>
                        <span className="text-gray-700"><strong>Standard bags:</strong> 25kg</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-700 mr-2 font-bold">•</span>
                        <span className="text-gray-700"><strong>Bulk orders:</strong> Customized packaging available</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-700 mr-2 font-bold">•</span>
                        <span className="text-gray-700"><strong>Minimum order:</strong> 25kg bag</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-amber-800 mb-4">Special Offers</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2 font-bold">✓</span>
                        <span className="text-gray-700">Bulk discounts available for orders over 1000kg</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2 font-bold">✓</span>
                        <span className="text-gray-700">Delivery arranged nationwide — charges apply; contact us for a quote</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2 font-bold">✓</span>
                        <span className="text-gray-700">Competitive wholesale rates for agricultural dealers</span>
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

              {/* Customer Reviews/Testimonials */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  What Our Customers Say About Our Copper Sulphate
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex text-amber-500 mb-3">
                      ★★★★★
                    </div>
                    <p className="text-gray-700 mb-4 italic">
                      "Best quality copper sulphate in Pakistan! Using it for our rice farms in Punjab. Excellent results against fungal diseases."
                    </p>
                    <p className="font-semibold text-gray-900">Ahmed Hassan</p>
                    <p className="text-sm text-gray-600">Farmer, Sheikhupura</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex text-amber-500 mb-3">
                      ★★★★★
                    </div>
                    <p className="text-gray-700 mb-4 italic">
                      "Reliable supplier for our agricultural business. High purity, competitive prices, and timely delivery to Multan."
                    </p>
                    <p className="font-semibold text-gray-900">Malik Enterprises</p>
                    <p className="text-sm text-gray-600">Agricultural Dealer, Multan</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex text-amber-500 mb-3">
                      ★★★★★
                    </div>
                    <p className="text-gray-700 mb-4 italic">
                      "Using their copper sulphate for our water treatment facility. Consistent quality and excellent customer service."
                    </p>
                    <p className="font-semibold text-gray-900">Zain Industries</p>
                    <p className="text-sm text-gray-600">Water Treatment, Lahore</p>
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
                      What is the price of copper sulphate in Pakistan?
                    </h3>
                    <p className="text-gray-700">
                      Copper sulphate prices in Pakistan vary based on quantity and delivery location. We supply 99% purity copper sulphate. Contact us at +92-321-4248968 for current pricing and bulk discounts. We offer competitive wholesale rates throughout Pakistan.
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
                      How do I use copper sulphate as a fungicide?
                    </h3>
                    <p className="text-gray-700">
                      For fungicide applications, dissolve 200-500g of copper sulphate in 100 liters of water (0.2-0.5% solution). Mix with lime to create Bordeaux mixture for better adherence. Apply as a foliar spray during early morning or evening. Always wear protective equipment and follow recommended dosage for your specific crop.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Is copper sulphate safe for organic farming in Pakistan?
                    </h3>
                    <p className="text-gray-700">
                      Yes, copper sulphate is approved for use in organic farming when applied within recommended limits. It's a naturally occurring mineral that provides essential copper nutrients and disease control. However, use should be judicious to prevent copper accumulation in soil. Follow local organic certification rules for your crop and region.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      What purity is your copper sulphate?
                    </h3>
                    <p className="text-gray-700">
                      We supply copper sulphate at 99% purity. It is suitable for agriculture (e.g. fungicides, soil use), mining, water treatment, animal feed, and general industrial applications—always follow the correct dosage and use case for your sector.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Can copper sulphate be used for swimming pool water treatment?
                    </h3>
                    <p className="text-gray-700">
                      Yes, copper sulphate is effective for controlling algae in swimming pools and water bodies. Use 1-3 ppm (parts per million) for pool treatment. It acts as an algaecide and helps maintain clear water. Always test water pH and copper levels regularly. Our 99% copper sulphate is suitable for water treatment applications when used correctly.
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
