import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/gtm";
import WhatsAppFloat from "@/components/layout/whatsapp-float";
import { Analytics } from '@vercel/analytics/next';
import { defaultMetadata, viewport } from "@/lib/metadata";
import Script from "next/script";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  ...defaultMetadata,
  icons: {
    icon: [
      { url: '/favicon-1.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon-1.png',
    apple: '/favicon-1.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/favicon-1.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/favicon-1.png',
      },
    ],
  },
};

export { viewport };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#b45309" />
        {/* Structured data for organization */}
        <Script id="organization-schema" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Sulman Traders',
            url: 'https://www.sulmantraders.com',
            logo: 'https://www.sulmantraders.com/logo.png',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+92-321-4248968',
              contactType: 'customer service',
              areaServed: 'PK',
              availableLanguage: ['en', 'ur']
            },
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Industrial Area',
              addressLocality: 'Lahore',
              addressRegion: 'Punjab',
              postalCode: '54000',
              addressCountry: 'PK'
            },
            sameAs: [
              'https://facebook.com/sulmantraders',
              'https://twitter.com/sulmantraders',
              'https://linkedin.com/company/sulmantraders'
            ]
          })}
        </Script>
      </head>
      <body className={inter.className}>
        <GoogleTagManagerNoScript />
        <GoogleTagManager />
        <GoogleAnalytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <WhatsAppFloat />
          <CookieConsent />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
