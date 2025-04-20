import { Factory } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProcessStep from "@/components/ui/process-step"

export default function ManufacturingSection() {
  const steps = [
    {
      number: 1,
      title: "Raw Material Selection",
      description: "Careful selection and testing of high-quality copper raw materials.",
    },
    {
      number: 2,
      title: "Chemical Processing",
      description: "Controlled chemical reactions to produce copper oxide compounds.",
    },
    {
      number: 3,
      title: "Quality Testing",
      description: "Rigorous quality control and testing at every production stage.",
    },
    {
      number: 4,
      title: "Packaging & Delivery",
      description: "Secure packaging and reliable delivery to customers nationwide.",
    },
  ]

  return (
    <section id="manufacturing" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Manufacturing Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We employ advanced manufacturing techniques to ensure high-quality copper oxide production.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <ProcessStep key={step.number} number={step.number} title={step.title} description={step.description} />
          ))}
        </div>
        <div className="mt-12 bg-gray-50 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/4 flex justify-center">
              <Factory className="h-24 w-24 text-amber-700" />
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-semibold mb-3">State-of-the-Art Manufacturing Facility</h3>
              <p className="text-gray-700 mb-4">
                Our manufacturing facility in Lahore is equipped with the latest technology and follows strict quality
                control procedures. We maintain international standards in our production process to ensure consistent
                quality in all our copper oxide products.
              </p>
              <Button variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-50">
                Schedule a Facility Tour
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
