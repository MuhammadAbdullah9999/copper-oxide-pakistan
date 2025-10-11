import Image from "next/image"
import { ChevronRight, Award, Users, Leaf, Factory } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  const features = [
    {
      icon: <Award className="h-6 w-6 text-amber-700" />, title: "50+ Years of Excellence", desc: "A legacy of quality and trust in chemical manufacturing." },
    {
      icon: <Users className="h-6 w-6 text-amber-700" />, title: "Expert Team", desc: "Experienced professionals and dedicated staff." },
    {
      icon: <Leaf className="h-6 w-6 text-amber-700" />, title: "Eco-Conscious", desc: "Commitment to sustainable and responsible practices." },
    {
      icon: <Factory className="h-6 w-6 text-amber-700" />, title: "Modern Facility", desc: "State-of-the-art plant in Lahore, Pakistan." },
  ]
  const milestones = [
    { year: "1970s", event: "Sulman Traders founded in Lahore, Pakistan." },
    { year: "1980s", event: "Expanded production to serve national industry." },
    { year: "2000s", event: "Adopted international quality standards." },
    { year: "2010s", event: "Began exporting to international clients." },
    { year: "2020s", event: "Launched advanced R&D and new product lines." },
  ]
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="md:w-1/2">
            <Image
              src="/copper-oxide-bags.jpeg"
              alt="Sulman Traders Facility"
              width={800}
              height={600}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">About Sulman Traders</h2>
            <p className="text-gray-700 mb-4 ">
              <b>Sulman Traders</b> is a leading manufacturer and supplier of high-quality <b>copper oxide</b> <b>silver nitrate</b> ,  <b>silver chloride</b>  and specialty chemicals, proudly based in Lahore, Pakistan. For over five decades, we have been at the forefront of chemical innovation, serving a diverse range of industries both locally and internationally.
            </p>
            <p className="text-gray-700 mb-4">
              Our journey began in the 1970s with a vision to deliver reliable, pure, and consistent chemical products to the Pakistani market. Today, we are recognized for our commitment to quality, customer satisfaction, and sustainable practices. Our modern facility is equipped with advanced technology and operated by a team of experienced professionals.
            </p>
            <p className="text-gray-700 mb-4">
              We believe in continuous improvement, investing in research and development to meet the evolving needs of our clients. Our products are trusted by manufacturers in ceramics, electronics, agriculture, pharmaceuticals, and more.
            </p>
            <Button className="mt-4 bg-amber-700 hover:bg-amber-800">Contact Us</Button>
          </div>
        </div>
        {/* Why Choose Us */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Sulman Traders?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-amber-50 p-6 rounded-lg flex flex-col items-center text-center shadow-sm">
                <div className="mb-3">{f.icon}</div>
                <h4 className="font-semibold text-lg mb-1">{f.title}</h4>
                <p className="text-gray-600 text-sm">{f.desc}</p>
                </div>
              ))}
          </div>
        </div>
        {/* Certifications & Quality */}
        <div className="bg-gray-50 rounded-lg p-8 mt-12 max-w-3xl mx-auto text-center">
  <h3 className="text-xl font-bold mb-4 text-gray-900">Certifications & Quality Assurance</h3>
  <p className="text-gray-700 mb-2">
    We follow stringent quality control practices and align with internationally recognized standards. Our products undergo thorough testing to ensure purity, consistency, and safety.
  </p>
  <p className="text-gray-700">
    Sulman Traders is dedicated to maintaining high quality in every batch, every time.
  </p>
</div>

      </div>
    </section>
  )
}
