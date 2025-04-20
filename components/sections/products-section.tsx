import { Button } from "@/components/ui/button"
import ProductCard from "@/components/ui/product-card"

export default function ProductsSection() {
  const products = [
    {
      title: "Copper Oxide Powder",
      description: "Fine copper oxide powder with high purity levels, suitable for various industrial applications.",
      specs: [
        { name: "Purity", value: "99.5%+" },
        { name: "Particle Size", value: "5-10 μm" },
        { name: "Color", value: "Black" },
      ],
      image: "/copper-oxide-in-plate.jpeg",
    },
    {
      title: "Copper Oxide Granules",
      description: "Uniform copper oxide granules for applications requiring controlled dissolution rates.",
      specs: [
        { name: "Purity", value: "98%+" },
        { name: "Granule Size", value: "1-3 mm" },
        { name: "Bulk Density", value: "2.5-3.0 g/cm³" },
      ],
      image: "/black-powder.jpeg",
    },
    {
      title: "Specialized Compounds",
      description: "Custom copper oxide compounds formulated for specific industrial applications.",
      specs: [
        { name: "Formulations", value: "Custom" },
        { name: "Applications", value: "Multiple" },
        { name: "Packaging", value: "As required" },
      ],
      image: "/copper-oxide-in-plate.jpeg",
    },
  ]

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Copper Oxide Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We manufacture high-quality copper oxide in various grades and specifications to meet diverse industrial
            requirements.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              specs={product.specs}
              image={product.image}
            />
          ))}
        </div>
        <div className="text-center mt-10">
          <Button className="bg-amber-700 hover:bg-amber-800">View All Products</Button>
        </div>
      </div>
    </section>
  )
}
