import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import AboutSection from '@/components/sections/about-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Sulman Traders',
  description: 'Learn about Sulman Traders, a leading manufacturer of Copper Oxide, Silver Nitrate, and other industrial chemicals in Pakistan.',
  alternates: {
    canonical: 'https://www.sulmantraders.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
} 