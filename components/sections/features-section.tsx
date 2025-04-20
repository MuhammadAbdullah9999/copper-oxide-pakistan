import { Award, Factory, Truck, Shield } from "lucide-react"
import FeatureCard from "@/components/ui/feature-card"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Award className="h-6 w-6 text-amber-700" />,
      title: "Premium Quality",
      description: "Our copper oxide meets international quality standards",
    },
    {
      icon: <Factory className="h-6 w-6 text-amber-700" />,
      title: "Modern Facility",
      description: "State-of-the-art manufacturing facility in Lahore",
    },
    {
      icon: <Truck className="h-6 w-6 text-amber-700" />,
      title: "Nationwide Delivery",
      description: "Reliable delivery across Pakistan and international shipping",
    },
    {
      icon: <Shield className="h-6 w-6 text-amber-700" />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes",
    },
  ]

  return (
    <section className="bg-amber-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
