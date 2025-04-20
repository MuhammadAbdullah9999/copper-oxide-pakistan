import Image from "next/image"
import { Button } from "@/components/ui/button"

interface Spec {
  name: string
  value: string
}

interface ProductCardProps {
  title: string
  description: string
  specs: Spec[]
  image: string
}

export default function ProductCard({ title, description, specs, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
      <div className="h-64 relative">
        <Image src={image || "/placeholder.svg"} alt={title} fill />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2 mb-4">
          {specs.map((spec, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <span className="text-gray-500">{spec.name}</span>
              <span className="font-medium">{spec.value}</span>
            </div>
          ))}
        </div>
        <Button variant="outline" className="w-full border-amber-700 text-amber-700 hover:bg-amber-50">
          Product Details
        </Button>
      </div>
    </div>
  )
}
