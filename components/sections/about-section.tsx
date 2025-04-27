import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  const features = [
    "Experienced team of chemical engineers",
    "Serving clients across multiple industries",
    "Commitment to environmental responsibility",
  ]

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <Image
              src="/copper-oxide-bags.jpeg"
              alt="Our Facility"
              width={800}
              height={600}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">About Our Company</h2>
            <p className="text-gray-700 mb-4">
              Established in Lahore, Pakistan, we are a leading manufacturer of high-quality copper oxide products
              serving various industries across Pakistan and internationally.
            </p>
            <p className="text-gray-700 mb-6">
              With 50+ years of experience and expertise in copper oxide production, our state-of-the-art facility employs
              advanced manufacturing techniques to ensure consistent quality and purity in all our products.
            </p>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
            <Button className="mt-6 bg-amber-700 hover:bg-amber-800">Learn More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
