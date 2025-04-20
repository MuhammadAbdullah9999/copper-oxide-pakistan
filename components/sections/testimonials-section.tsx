import TestimonialCard from "@/components/ui/testimonial-card"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ahmed Industries",
      role: "Electronics Manufacturer",
      initial: "A",
      content:
        "The copper oxide supplied by this company has consistently met our quality requirements. Their reliable delivery and excellent customer service make them our preferred supplier.",
    },
    {
      name: "Pakistan Chemicals Ltd",
      role: "Chemical Industry",
      initial: "P",
      content:
        "We've been working with this copper oxide manufacturer for over 5 years. Their product quality and technical support have been exceptional throughout our partnership.",
    },
    {
      name: "Sunrise Ceramics",
      role: "Ceramic Manufacturer",
      initial: "S",
      content:
        "The consistent quality of copper oxide has significantly improved our ceramic glazing process. Their technical team has been very helpful in optimizing our formulations.",
    },
  ]

  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We take pride in our products and the satisfaction of our clients across various industries.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              initial={testimonial.initial}
              content={testimonial.content}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
