import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Metadata } from 'next';
import Script from 'next/script';
import { productSalesInfo } from "@/lib/product-sales";

const silverNitrateSales = productSalesInfo['silver-nitrate'];

export const metadata: Metadata = {
  title: 'Silver Nitrate Pakistan | 25 g Price | 99.9% & 70% Grades',
  description: 'Buy Silver Nitrate (AgNO₃) in Pakistan. 99.9% grade at PKR 12,000 per 25 g and 70% grade at PKR 8,000 per 25 g. Prices vary with silver market rates.',
  keywords: [
    'silver nitrate pakistan',
    'silver nitrate manufacturer pakistan',
    'AgNO3 pakistan',
    'silver nitrate crystals pakistan',
    'silver nitrate lahore',
    'silver nitrate supplier pakistan',
    'high purity silver nitrate',
    'laboratory silver nitrate pakistan',
    'medical silver nitrate pakistan',
    'silver nitrate photography pakistan',
    'buy silver nitrate pakistan',
    'silver nitrate price pakistan',
    'pure silver nitrate pakistan',
    'silver nitrate chemical pakistan',
    'silver nitrate medical grade',
    'silver nitrate industrial pakistan'
  ],
  alternates: {
    canonical: 'https://www.sulmantraders.com/silver-nitrate',
  },
  openGraph: {
    title: 'Silver Nitrate Pakistan | 25 g Price',
    description: 'Silver Nitrate in 25 g packaging. 99.9% grade and 70% grade available; prices may vary with silver market rates.',
    url: 'https://www.sulmantraders.com/silver-nitrate',
    images: [
      {
        url: 'https://www.sulmantraders.com/silver-nitrate-product.png',
        width: 1200,
        height: 630,
        alt: 'High purity silver nitrate crystals manufactured by Sulman Traders Pakistan'
      }
    ],
    type: 'website',
    siteName: 'Sulman Traders',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Silver Nitrate (AgNO₃) Manufacturer Pakistan',
    description: 'Buy Silver Nitrate in Pakistan. 25 g MOQ, 99.9% and 70% grades available.',
    images: ['https://www.sulmantraders.com/silver-nitrate-product.png'],
  },
};

export default function SilverNitratePage() {
  return (
    <>
      <Script id="product-schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'Silver Nitrate (AgNO₃)',
          image: [
            'https://www.sulmantraders.com/silver-nitrate-product.png',
            'https://www.sulmantraders.com/PXL_20260607_112351830.jpg.jpeg'
          ],
          description: 'Premium quality silver nitrate in 99.9% and 70% grades for medical, laboratory, photography, and industrial applications.',
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
            lowPrice: '8000',
            highPrice: '12000',
            offerCount: '2',
            seller: {
              '@type': 'Organization',
              name: 'Sulman Traders'
            }
          },
          additionalProperty: [
            {
              '@type': 'PropertyValue',
              name: 'Purity',
              value: '99.9% and 70% grades available'
            },
            {
              '@type': 'PropertyValue',
              name: 'Chemical Formula',
              value: 'AgNO₃'
            },
            {
              '@type': 'PropertyValue',
              name: 'Appearance',
              value: 'White Crystalline Solid'
            },
            {
              '@type': 'PropertyValue',
              name: 'Packaging',
              value: silverNitrateSales.packaging
            },
            {
              '@type': 'PropertyValue',
              name: 'Minimum Order Quantity',
              value: silverNitrateSales.moq
            }
          ],
          category: 'Laboratory Chemicals, Medical Supplies, Industrial Chemicals'
        })}
      </Script>

      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <div className="relative h-96 overflow-hidden">
            <Image
              src="/silver-nitrate-banner.png"
              alt="Silver nitrate manufacturer Pakistan"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="container px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Silver Nitrate (AgNO₃) Manufacturer Pakistan
                </h1>
                <p className="text-xl text-white max-w-3xl mx-auto">
                  25 g silver nitrate packaging with 99.9% and 70% grades available in Pakistan
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
                      src="/silver-nitrate-product.png"
                      alt="Silver nitrate crystals in labelled bottle"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover rounded"
                      priority
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Premium Silver Nitrate Manufacturer in Pakistan
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Sulman Traders has been manufacturing and supplying silver nitrate (AgNO₃) in Pakistan since 1974. We offer 99.9% grade and 70% grade silver nitrate in 25 g packaging for medical, laboratory, photography, and industrial applications.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-sm font-semibold text-amber-700 mb-1">Purity</h3>
                      <p className="text-lg font-bold text-gray-900">99.9% / 70%</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-sm font-semibold text-amber-700 mb-1">Formula</h3>
                      <p className="text-lg font-bold text-gray-900">AgNO₃</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-sm font-semibold text-amber-700 mb-1">Appearance</h3>
                      <p className="text-lg font-bold text-gray-900">White Crystals</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-sm font-semibold text-amber-700 mb-1">MOQ</h3>
                      <p className="text-lg font-bold text-gray-900">25 g</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-sm font-semibold text-amber-700 mb-1">99.9% Grade</h3>
                      <p className="text-lg font-bold text-gray-900">PKR 12,000 / 25 g</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-sm font-semibold text-amber-700 mb-1">70% Grade</h3>
                      <p className="text-lg font-bold text-gray-900">PKR 8,000 / 25 g</p>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button className="bg-amber-700 hover:bg-amber-800 text-lg px-8 py-3">
                      Request a Quote
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="mt-12 rounded-lg bg-amber-50 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Silver Nitrate Price, Grades, and Packaging
                </h2>
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-semibold text-amber-800 mb-4">Current prices</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li><strong>99.9% grade:</strong> PKR 12,000 per 25 g</li>
                      <li><strong>70% grade:</strong> PKR 8,000 per 25 g</li>
                      <li><strong>MOQ:</strong> {silverNitrateSales.moq}</li>
                      <li><strong>Packaging:</strong> {silverNitrateSales.packaging}</li>
                    </ul>
                    <p className="mt-4 text-gray-700">
                      {silverNitrateSales.note}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-amber-800 mb-4">Packaging photos</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative h-52 overflow-hidden rounded-lg border border-amber-100 bg-white">
                        <Image
                          src="/PXL_20260607_112351830.jpg.jpeg"
                          alt="Silver nitrate 25 gram box packaging front"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, 220px"
                        />
                      </div>
                      <div className="relative h-52 overflow-hidden rounded-lg border border-amber-100 bg-white">
                        <Image
                          src="/PXL_20260607_112400972.jpg.jpeg"
                          alt="Silver nitrate 25 gram box packaging close-up"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, 220px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Applications */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  Silver Nitrate Applications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold text-amber-700 mb-3">Medical Applications</h3>
                    <p className="text-gray-700">Antimicrobial agent, wound care, cauterization, and medical device manufacturing.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold text-amber-700 mb-3">Laboratory Use</h3>
                    <p className="text-gray-700">Analytical chemistry, titration reagent, precipitation reactions, and research applications.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold text-amber-700 mb-3">Photography</h3>
                    <p className="text-gray-700">Film development, photographic emulsions, and traditional photography processes.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold text-amber-700 mb-3">Industrial</h3>
                    <p className="text-gray-700">Mirror production, electronics manufacturing, silver plating, and chemical synthesis.</p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-16 bg-amber-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Choose Our Silver Nitrate?
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-start">
                    <span className="text-amber-700 mr-2">✓</span>
                    <span className="text-gray-700">99.9% grade and 70% grade available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-700 mr-2">✓</span>
                    <span className="text-gray-700">Manufactured in Pakistan since 1974</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-700 mr-2">✓</span>
                    <span className="text-gray-700">International quality standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-700 mr-2">✓</span>
                    <span className="text-gray-700">Consistent quality and reliable supply</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-700 mr-2">✓</span>
                    <span className="text-gray-700">Competitive pricing in Pakistan market</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-700 mr-2">✓</span>
                    <span className="text-gray-700">Nationwide delivery across Pakistan</span>
                  </li>
                </ul>
              </div>

              {/* Related Blog */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Learn More About Silver Nitrate</h2>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <Link href="/blog/silver-nitrate-medical-applications" className="group">
                    <h3 className="text-xl font-semibold text-amber-700 group-hover:text-amber-800 mb-2">
                      The Revolutionary Medical Applications of Silver Nitrate
                    </h3>
                    <p className="text-gray-700">
                      Discover how silver nitrate continues to be an essential chemical in modern medicine, from wound care to specialized treatments.
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
