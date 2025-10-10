import HeroCarousel from "@/components/sections/hero-carousel"
import ProductsSection from "@/components/sections/products-section"
import AboutSection from "@/components/sections/about-section"
import ManufacturingSection from "@/components/sections/manufacturing-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import FeaturesSection from "@/components/sections/features-section"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Metadata } from 'next'
import Script from "next/script"
import { defaultMetadata } from "@/lib/metadata"

// Use the default metadata for consistency
export const metadata: Metadata = {
  ...defaultMetadata,
  // Override any specific fields for the homepage
  alternates: {
    canonical: 'https://www.sulmantraders.com/',
  }
}

export default function Home() {
  // Define company FAQ for structured data
  const faqItems = [
    {
      question: "What chemical products do you manufacture in Pakistan?",
      answer: "We manufacture high-purity Copper Oxide (CuO) at 99.9% purity, Silver Nitrate (AgNO₃) at 99.9% purity, Copper Sulphate (CuSO₄) blue vitriol at 99.9% purity, and Silver Chloride (AgCl) at 99.9%+ purity. All products are manufactured in Lahore, Pakistan and meet international quality standards."
    },
    {
      question: "What is Copper Sulphate (Blue Vitriol) used for in Pakistan?",
      answer: "Our Copper Sulphate is widely used in agriculture as a fungicide and soil amendment, in mining for ore processing, in water treatment for algae control, and in animal feed as a nutritional supplement. It's especially popular among Pakistani farmers for crop protection and disease prevention."
    },
    {
      question: "Do you supply Silver Nitrate for medical and laboratory use?",
      answer: "Yes, our Silver Nitrate is pharmaceutical and laboratory grade with 99.9%+ purity. It's used in medical applications for antimicrobial treatments, in photography, in laboratory analysis and research, and in electronics manufacturing. We supply to hospitals, research labs, and industries across Pakistan."
    },
    {
      question: "What are the applications of your Copper Oxide?",
      answer: "Our Copper Oxide is widely used in ceramics manufacturing for coloring and glazing, battery production for high-performance applications, as catalysts in chemical reactions, and in electronic components. It's known for its consistent particle size and high chemical purity."
    },
    {
      question: "Do you deliver chemicals across Pakistan?",
      answer: "Yes, we provide reliable delivery services throughout Pakistan, including Lahore, Karachi, Islamabad, Faisalabad, and all major cities. We ensure safe packaging, timely delivery, proper documentation, and quality assurance certificates with every order."
    },
    {
      question: "How can I buy Copper Sulphate or Silver Nitrate from you?",
      answer: "Contact us through our website contact form, email, or call +92-321-4248968 for product samples, technical specifications, and pricing. We provide detailed product specifications, certificates of analysis, and Material Safety Data Sheets (MSDS) for all our chemicals including Copper Oxide, Silver Nitrate, Copper Sulphate, and Silver Chloride."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Structured data for homepage */}
      <Script id="homepage-schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Sulman Traders',
          url: 'https://www.sulmantraders.com',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://www.sulmantraders.com/products?search={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        })}
      </Script>

      {/* FAQ Structured Data */}
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map(item => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer
            }
          }))
        })}
      </Script>

      <Header />
      <main className="flex-1">
        {/* Hero Carousel */}
        <HeroCarousel />
        
        {/* Features Section */}
        <FeaturesSection />

        {/* About Section */}
        <AboutSection />

        {/* Products Section */}
        <ProductsSection />

        {/* Manufacturing Section */}
        <ManufacturingSection />

        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Trust Section */}
        <section className="py-16 bg-amber-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Trusted by Industries Across Pakistan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              With over 50 years of experience in chemical manufacturing, we serve diverse industries with high-quality products and reliable service.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="p-4">
                <div className="text-4xl font-bold text-amber-700 mb-2">500+</div>
                <div className="text-gray-600">Active Clients</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-amber-700 mb-2">50+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-amber-700 mb-2">99%</div>
                <div className="text-gray-600">Quality Rate</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-amber-700 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section for Improved SEO */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              {faqItems.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
