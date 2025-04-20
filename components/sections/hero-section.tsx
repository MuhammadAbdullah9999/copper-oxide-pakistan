import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner.png"
          alt="Copper Oxide Manufacturing"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Premium Copper Oxide Manufacturer in Pakistan
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            High-quality copper oxide products for industrial applications, manufactured in Lahore, Pakistan with
            international standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-amber-700 hover:bg-amber-800 text-white">Our Products</Button>
            <Button variant="outline" className="bg-black text-white">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
