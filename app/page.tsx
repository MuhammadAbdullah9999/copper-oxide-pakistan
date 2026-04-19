import ModernHero from "@/components/sections/modern-hero"
import ProductsShowcase from "@/components/sections/products-showcase"
import WhyChooseUs from "@/components/sections/why-choose-us"
import SocialProof from "@/components/sections/social-proof"
import CTAModern from "@/components/sections/cta-modern"
import AboutSection from "@/components/sections/about-section"
import ManufacturingSection from "@/components/sections/manufacturing-section"
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
      question: "Where can I buy Copper Sulphate in Pakistan?",
      answer: "You can buy high-quality Copper Sulphate (CuSO₄) directly from Sulman Traders in Lahore, Pakistan. We supply agricultural and industrial grade copper sulphate to Lahore, Karachi, Islamabad, Faisalabad, and all major cities across Pakistan. Contact us at +92-321-4248968 for pricing and bulk orders. We offer same-day delivery in Lahore."
    },
    {
      question: "What is the price of Copper Sulphate in Pakistan?",
      answer: "Copper Sulphate prices in Pakistan vary based on grade (agricultural 98%+ or industrial 99%+), quantity, and delivery location. We offer competitive wholesale rates with bulk discounts for orders over 1000kg. Contact us for current pricing at +92-321-4248968. We manufacture in Lahore and deliver nationwide."
    },
    {
      question: "What is Copper Sulphate (Blue Vitriol) used for in Pakistan?",
      answer: "Copper Sulphate is widely used in Pakistan for agriculture as a fungicide and fertilizer, in mining for ore processing, in water treatment for algae control, and in animal feed as a copper supplement. Pakistani farmers use it extensively for rice, wheat, and fruit crop protection. We supply agricultural-grade copper sulphate throughout Pakistan."
    },
    {
      question: "What chemical products do you manufacture in Pakistan?",
      answer: "We manufacture high-purity Copper Sulphate (CuSO₄) at 98-99% purity, Copper Oxide (CuO) at 99.9% purity, Silver Nitrate (AgNO₃) at 99.9% purity, and Silver Chloride (AgCl) at 99.9%+ purity. All products are manufactured in our Lahore facility and meet international quality standards. Copper Sulphate is our most popular product for agricultural use."
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
        {/* Modern Hero Section */}
        <ModernHero />

        {/* Products — homepage stays balanced; deep CuSO₄ content is on /copper-sulphate */}
        <ProductsShowcase />
        
        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Manufacturing Process */}
        <ManufacturingSection />
        
        {/* Social Proof & Testimonials */}
        <SocialProof />

        {/* About Section */}
        <AboutSection />

        {/* CTA Section */}
        <CTAModern />
        
        {/* FAQ Section for SEO */}
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

