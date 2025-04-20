import { Button } from "@/components/ui/button"

export default function CtaSection() {
  return (
    <section className="py-12 bg-amber-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to Order Copper Oxide?</h2>
            <p className="text-amber-100">Contact us today for pricing and product information.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-white text-amber-700 hover:bg-gray-100">Request a Quote</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
