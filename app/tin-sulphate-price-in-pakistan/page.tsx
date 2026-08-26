import ProductPriceGuide from "@/components/sections/product-price-guide";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tin Sulphate Price in Pakistan | SnSO4 | Sulman Traders",
  description:
    "Tin Sulphate (SnSO4 / stannous sulphate) price in Pakistan for tin electroplating, textile mordanting, and reducing-agent use. Price confirmed at quotation.",
  alternates: {
    canonical: "https://www.sulmantraders.com/tin-sulphate-price-in-pakistan",
  },
};

export default function TinSulphatePricePage() {
  return (
    <ProductPriceGuide
      productId="tin-sulphate"
      title="Tin Sulphate Price in Pakistan"
      subtitle="Tin Sulphate (SnSO4) price depends on current tin market rates and order quantity. Packaging and MOQ are confirmed at quotation."
      productName="Tin Sulphate"
      productUrl="/products/tin-sulphate"
      useCases={[
        "Acid tin electroplating baths for tinplate, connectors, and busbars",
        "Solder and PCB / electronic component tin finishing",
        "Mordant for textile dyeing and colour fixation",
        "Reducing agent in analytical chemistry and tin salt manufacturing",
      ]}
      buyerNotes={[
        "Confirm current tin market rate before ordering, as pricing tracks tin/stannous input cost.",
        "Ask for appearance, assay, and MSDS support if needed.",
        "Run a small plating or mordant trial before committing to bulk quantity.",
        "Confirm packaging, MOQ, and delivery charges at quotation.",
      ]}
    />
  );
}
