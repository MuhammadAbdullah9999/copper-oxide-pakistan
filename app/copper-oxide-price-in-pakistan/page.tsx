import ProductPriceGuide from "@/components/sections/product-price-guide";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Copper Oxide Price in Pakistan | PKR 3,500/kg | Sulman Traders",
  description:
    "Copper Oxide price in Pakistan: PKR 3,500 per kg. 25 kg standard packaging, 10 kg MOQ, and 25 kg recommended for better value. Supplier in Lahore.",
  alternates: {
    canonical: "https://www.sulmantraders.com/copper-oxide-price-in-pakistan",
  },
};

export default function CopperOxidePricePage() {
  return (
    <ProductPriceGuide
      productId="copper-oxide"
      title="Copper Oxide Price in Pakistan"
      subtitle="Current Copper Oxide (CuO) price is PKR 3,500 per kg. Standard packaging is 25 kg, minimum order is 10 kg, and 25 kg is recommended for better value."
      productName="Copper Oxide"
      productUrl="/copper-oxide"
      useCases={[
        "Ceramic glazes and tile colour systems",
        "Glass colouring and pigment manufacturing",
        "Catalysts, coatings, and technical industrial use",
        "Battery, electronics, and research applications where CuO grade is suitable",
      ]}
      buyerNotes={[
        "Confirm the required purity, particle size, and appearance before ordering.",
        "Ask for product specifications, MSDS support, and batch documents where available if your process requires documentation.",
        "Run a sample trial for colour-critical ceramic, glass, and pigment work.",
        "Confirm delivery charges by city before finalizing the order.",
      ]}
    />
  );
}
