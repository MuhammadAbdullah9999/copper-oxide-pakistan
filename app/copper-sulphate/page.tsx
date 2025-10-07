import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Copper Sulphate (CuSO₄) Manufacturer Pakistan | Blue Vitriol - Sulman Traders',
  description: 'Leading Copper Sulphate (CuSO₄) manufacturer in Pakistan. High-grade blue vitriol for agriculture, fungicide, mining, and industrial applications. 98%+ purity. Agricultural and industrial grade available in Lahore.',
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
    description: 'Premium Copper Sulphate (CuSO₄) manufactured in Pakistan for agriculture, fungicide, and industrial applications. 98%+ purity.',
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
    description: 'Leading manufacturer of agricultural and industrial grade Copper Sulphate in Pakistan. 98%+ purity.',
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
          description: 'High-grade copper sulphate pentahydrate (blue vitriol) for agricultural, mining, and industrial applications.',
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
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'PKR',
            seller: {
              '@type': 'Organization',
              name: 'Sulman Traders'
            }
          },
          additionalProperty: [
            {
              '@type': 'PropertyValue',
              name: 'Purity',
              value: '98%+'
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
            }
          ],
          category: 'Agricultural Chemicals, Industrial Chemicals, Mining Chemicals'
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
                      <p className="text-lg font-bold text-gray-900">98%+</p>
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
                    <span className="text-gray-700">98%+ high-grade quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-700 mr-2">✓</span>
                    <span className="text-gray-700">Agricultural and industrial grades available</span>
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
