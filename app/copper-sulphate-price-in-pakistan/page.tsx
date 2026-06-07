import ProductPriceGuide from "@/components/sections/product-price-guide";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Copper Sulphate Price in Pakistan | 25 kg Bag | Sulman Traders",
  description:
    "Copper Sulphate / Neela Thotha price in Pakistan: lab grade 25% PKR 1,200/kg, agriculture grade 20% PKR 900/kg, agriculture grade 15% PKR 750/kg.",
  alternates: {
    canonical: "https://www.sulmantraders.com/copper-sulphate-price-in-pakistan",
  },
};

export default function CopperSulphatePricePage() {
  return (
    <ProductPriceGuide
      productId="copper-sulphate"
      title="Copper Sulphate Price in Pakistan"
      subtitle="Current Copper Sulphate / Neela Thotha prices range from PKR 750 to PKR 1,200 per kg depending on grade. Standard packaging is 25 kg."
      productName="Copper Sulphate"
      productUrl="/copper-sulphate"
      useCases={[
        "Agriculture and crop-use formulations",
        "Water treatment and algae-control applications",
        "Mining and ore-processing support",
        "General industrial use where the selected grade matches the process",
      ]}
      buyerNotes={[
        "Choose lab grade 25% for stronger technical requirements.",
        "Choose agriculture grade 20% or 15% according to application and budget.",
        "Confirm dosage and safety guidance for agriculture or water treatment use.",
        "Confirm delivery charges and stock before ordering 25 kg bags.",
      ]}
    />
  );
}
