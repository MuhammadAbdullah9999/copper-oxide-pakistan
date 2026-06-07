import ProductPriceGuide from "@/components/sections/product-price-guide";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Silver Nitrate Price in Pakistan | 25 g Pack | Sulman Traders",
  description:
    "Silver Nitrate price in Pakistan: 99.9% grade PKR 12,000 per 25 g and 70% grade PKR 8,000 per 25 g. Prices may vary with silver rates.",
  alternates: {
    canonical: "https://www.sulmantraders.com/silver-nitrate-price-in-pakistan",
  },
};

export default function SilverNitratePricePage() {
  return (
    <ProductPriceGuide
      productId="silver-nitrate"
      title="Silver Nitrate Price in Pakistan"
      subtitle="Silver Nitrate is available in 25 g packaging. Current listed prices are PKR 12,000 per 25 g for 99.9% grade and PKR 8,000 per 25 g for 70% grade."
      productName="Silver Nitrate"
      productUrl="/silver-nitrate"
      useCases={[
        "Laboratory reagent and analytical chemistry",
        "Medical, healthcare, and antimicrobial applications where suitable",
        "Photography, mirror production, and silver-based chemical work",
        "Industrial and research use where the selected grade is approved",
      ]}
      buyerNotes={[
        "Silver nitrate prices may vary according to current silver market rates.",
        "Choose 99.9% grade for high-purity laboratory or technical requirements.",
        "Choose 70% grade where the application allows a lower grade.",
        "Store in light-protected packaging and handle with proper safety controls.",
      ]}
    />
  );
}
