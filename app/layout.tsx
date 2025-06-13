import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/gtm";
import WhatsAppFloat from "@/components/layout/whatsapp-float";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CopperOxide Pakistan - Premium Copper Oxide Manufacturer in Lahore",
  description:
    "Leading manufacturer of high-quality copper oxide products in Pakistan. We provide premium copper oxide for various industrial applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleTagManagerNoScript />
        <GoogleTagManager />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <WhatsAppFloat />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
