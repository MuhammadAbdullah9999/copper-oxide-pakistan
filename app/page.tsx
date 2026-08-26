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
      answer: "Current Copper Sulphate prices are PKR 1,200 per kg for lab grade 25%, PKR 900 per kg for agriculture grade 20%, and PKR 750 per kg for agriculture grade 15%. Standard packaging is 25 kg. Delivery charges and availability are confirmed by city and quantity."
    },
    {
      question: "What is Copper Sulphate (Blue Vitriol) used for in Pakistan?",
      answer: "Copper Sulphate is widely used in Pakistan for agriculture as a fungicide and fertilizer, in mining for ore processing, in water treatment for algae control, and in animal feed as a copper supplement. Pakistani farmers use it extensively for rice, wheat, and fruit crop protection. We supply agricultural-grade copper sulphate throughout Pakistan."
    },
    {
      question: "What chemical products do you manufacture or supply in Pakistan?",
      answer: "We manufacture selected industrial chemicals and also trade/supply requested products such as Black Cobalt Oxide (Co₃O₄) and Tin Sulphate (SnSO₄). Our range includes Copper Sulphate (CuSO₄), Copper Oxide (CuO), Black Cobalt Oxide, Silver Nitrate (AgNO₃), Silver Chloride (AgCl), Copper Carbonate, and Tin Sulphate for agriculture, ceramics, glass, pigments, electroplating, textiles, laboratories, and industrial use. Copper Sulphate is our most popular product for agricultural use."
    },
    {
      question: "Do you supply Silver Nitrate for medical and laboratory use?",
      answer: "Yes, we supply Silver Nitrate in 25 g packaging. The 99.9% grade is currently PKR 12,000 per 25 g, and the 70% grade is PKR 8,000 per 25 g. Silver nitrate prices may vary according to current silver market rates."
    },
    {
      question: "What are the applications of your Copper Oxide?",
      answer: "Our Copper Oxide is widely used in ceramics manufacturing for coloring and glazing, battery production, catalysts, and electronic components. Current price is PKR 3,500 per kg, standard packaging is 25 kg, minimum order is 10 kg, and 25 kg is recommended for better value."
    },
    {
      question: "What is Black Cobalt Oxide (Co3O4) used for?",
      answer: "Black Cobalt Oxide is mainly used by ceramic glaze manufacturers, tile factories, pottery suppliers, glass manufacturers, and pigment producers. It creates strong cobalt blue colour in ceramics and glass and is also relevant to cobalt pigments, catalysts, sensors, electronics, and high-spec battery material supply chains where the correct grade is required."
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
