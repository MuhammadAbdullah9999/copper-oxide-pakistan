import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ContactSection from '@/components/sections/contact-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Sulman Traders',
  description: 'Get in touch with Sulman Traders for inquiries about Copper Oxide, Silver Nitrate, and other chemical products. We deliver across Pakistan.',
  alternates: {
    canonical: 'https://www.sulmantraders.com/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
} 