import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions - Sulman Traders',
  description: 'Review Sulman Traders\' Terms and Conditions outlining the rules and guidelines for using our website and services.',
  alternates: {
    canonical: 'https://www.sulmantraders.com/terms-of-service',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms and Conditions</h1>
            <p className="text-gray-700 mb-4">Last updated: {new Date().getFullYear()}</p>

            <p className="text-gray-700 mb-6">
              These Terms and Conditions ("Terms") govern your use of the Sulman Traders website and services. By accessing or using our site, you agree to be bound by these Terms.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-3">Use of Website</h2>
            <p className="text-gray-700 mb-4">
              You agree to use the website for lawful purposes only and in a way that does not infringe the rights of, restrict or inhibit the use and enjoyment of the site by any third party.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-3">Product Information</h2>
            <p className="text-gray-700 mb-4">
              Product descriptions and specifications are provided for general informational purposes. We strive for accuracy but do not warrant that the information is error-free. Please contact us for the latest details.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-3">Quotes and Orders</h2>
            <p className="text-gray-700 mb-4">
              All quotes are non-binding until confirmed by Sulman Traders. Orders are subject to availability and our acceptance. Additional terms may apply to specific transactions.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-3">Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All content on this website, including text, images, and graphics, is owned by Sulman Traders or used with permission. You may not reproduce, distribute, or create derivative works without prior written consent.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-3">Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by law, Sulman Traders is not liable for any indirect, incidental, or consequential damages arising from the use of this website or products.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-3">Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms are governed by the laws of Pakistan. Any disputes will be subject to the exclusive jurisdiction of the courts located in Lahore, Punjab.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-3">Contact Us</h2>
            <p className="text-gray-700 mb-2">Phone: <a href="tel:+923214248968" className="text-amber-700 hover:underline">+92-321-4248968</a></p>
            <p className="text-gray-700">Address: Industrial Area, Lahore, Punjab, 54000, PK</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 