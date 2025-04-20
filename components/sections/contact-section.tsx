import { Building2, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactInfo from "@/components/ui/contact-info"

export default function ContactSection() {
  const contactDetails = [
    {
      icon: <Building2 className="h-6 w-6 text-amber-700" />,
      title: "Company Address",
      details: ["Industrial Area, Lahore, Punjab, Pakistan"],
    },
    {
      icon: <Phone className="h-6 w-6 text-amber-700" />,
      title: "Phone Number",
      details: ["+92 42 1234 5678"],
    },
    {
      icon: <Mail className="h-6 w-6 text-amber-700" />,
      title: "Email Address",
      details: ['info@copperoxidepakistan.com"],pakistan.com'],
    },
    {
      icon: <MapPin className="h-6 w-6 text-amber-700" />,
      title: "Working Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 1:00 PM"],
    },
  ]

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Us</h2>
            <p className="text-gray-700 mb-8">
              Get in touch with our team for inquiries about our copper oxide products, custom formulations, or to
              request a quote.
            </p>
            <div className="space-y-6">
              {contactDetails.map((item, index) => (
                <ContactInfo key={index} icon={item.icon} title={item.title} details={item.details} />
              ))}
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Send Us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <input
                  id="company"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Enter your company name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Enter subject"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <Button className="w-full bg-amber-700 hover:bg-amber-800">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
