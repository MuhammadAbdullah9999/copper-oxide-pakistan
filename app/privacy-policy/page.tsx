import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Sulman Traders',
  description: 'Read Sulman Traders\' Privacy Policy to understand how we collect, use, and protect your personal information.',
  alternates: {
    canonical: 'https://www.sulmantraders.com/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            <p className="text-gray-700 mb-4">Last updated: {new Date().getFullYear()}</p>

            <p className="text-gray-700 mb-6">
              At Sulman Traders, we value your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-3">Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We may collect personal information that you voluntarily provide to us, such as your name, email address, phone number, and any details submitted through contact or inquiry forms. We also collect non-personal information automatically, such as browser type, device information, and pages visited.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-3">How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Respond to inquiries and provide customer support</li>
              <li>Process requests for quotes or product information</li>
              <li>Improve website functionality and user experience</li>
              <li>Send updates where consented (e.g., newsletter)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-3">Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to analyze website traffic and improve our services. You can control cookies through your browser settings.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-3">Data Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell your personal information. We may share data with trusted service providers who assist in operating our website and business, under confidentiality obligations, or where required by law.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-3">Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement reasonable technical and organizational measures to protect your information; however, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-3">Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You may request access to, correction of, or deletion of your personal information, subject to applicable laws. To exercise your rights, please contact us using the information below.
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