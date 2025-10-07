import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ProductDetails from "@/components/sections/product-detail";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Copper Oxide (CuO) Manufacturer Pakistan | High Purity Black Powder - Sulman Traders',
  description: 'Leading manufacturer of high-purity Copper Oxide (CuO) in Pakistan. Premium black copper oxide powder for ceramics, batteries, catalysts, and industrial applications. 99.5%+ purity. Lahore-based manufacturer since 1974.',
  keywords: [
    'copper oxide Pakistan',
    'copper oxide manufacturer Pakistan',
    'CuO Pakistan',
    'black copper oxide',
    'copper oxide powder Pakistan',
    'copper oxide Lahore',
    'copper oxide supplier Pakistan',
    'high purity copper oxide',
    'industrial copper oxide Pakistan',
    'copper oxide CuO manufacturer',
    'copper oxide ceramics Pakistan',
    'copper oxide batteries',
    'copper oxide catalyst Pakistan',
    'buy copper oxide Pakistan',
    'copper oxide price Pakistan',
    'copper oxide chemical Pakistan'
  ],
  alternates: {
    canonical: 'https://www.sulmantraders.com/copper-oxide',
  },
  openGraph: {
    title: 'Copper Oxide (CuO) Manufacturer Pakistan | High Purity - Sulman Traders',
    description: 'Premium high-purity Copper Oxide (CuO) manufactured in Pakistan. 99.5%+ purity black copper oxide powder for industrial applications.',
    url: 'https://www.sulmantraders.com/copper-oxide',
    images: [
      {
        url: 'https://www.sulmantraders.com/black-powder.jpeg',
        width: 1200,
        height: 630,
        alt: 'High purity copper oxide black powder manufactured by Sulman Traders Pakistan'
      }
    ],
    type: 'website',
    siteName: 'Sulman Traders',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Copper Oxide (CuO) Manufacturer Pakistan | Sulman Traders',
    description: 'Leading manufacturer of high-purity Copper Oxide (CuO) in Pakistan. 99.5%+ purity for industrial applications.',
    images: ['https://www.sulmantraders.com/black-powder.jpeg'],
  },
};

export default function Main(){
    return(
        <div>
            <Header></Header>
            <ProductDetails></ProductDetails>
            <Footer></Footer>
        </div>
    )
}