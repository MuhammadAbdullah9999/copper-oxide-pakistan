import ProductPriceGuide from "@/components/sections/product-price-guide";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Copper Carbonate Price in Pakistan | 55% Grade | Sulman Traders",
  description:
    "Copper Carbonate price in Pakistan: 55% basic copper carbonate at PKR 2,000 per kg for ceramics, pigments, formulations, and copper salts.",
  alternates: {
    canonical: "https://www.sulmantraders.com/copper-carbonate-price-in-pakistan",
  },
};

export default function CopperCarbonatePricePage() {
  return (
    <ProductPriceGuide
      productId="copper-carbonate"
      title="Copper Carbonate Price in Pakistan"
      subtitle="Current Copper Carbonate 55% grade price is PKR 2,000 per kg. Packaging and MOQ are confirmed at quotation."
      productName="Copper Carbonate"
      productUrl="/products/copper-carbonate"
      useCases={[
        "Ceramic glazes and pottery colour systems",
        "Pigment and blue-green colour formulations",
        "Copper salt manufacturing and chemical intermediates",
        "Selected agriculture-related formulations where the grade is approved",
      ]}
      buyerNotes={[
        "Confirm 55% grade suitability for your application before ordering.",
        "Ask for appearance, moisture, and COA/SDS support if needed.",
        "Run a sample trial for ceramic or pigment colour matching.",
        "Confirm packaging, MOQ, and delivery charges at quotation.",
      ]}
    />
  );
}
