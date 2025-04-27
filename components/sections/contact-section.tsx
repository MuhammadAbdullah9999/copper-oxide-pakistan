'use client'
import { Building2, Phone, Mail, MapPin, Loader2 } from "lucide-react"
import { useForm, ValidationError } from '@formspree/react'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import ContactInfo from "@/components/ui/contact-info"

export default function ContactSection() {
  const [state, handleSubmit] = useForm("xldbdaoy");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = (formData: FormData) => {
    const newErrors: { [key: string]: string } = {};
    
    const email = formData.get("email") as string;
  
    if (!formData.get("name")) newErrors.name = "Name is required.";
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.get("message")) newErrors.message = "Message is required.";
  
    return newErrors;
  };
  

  const customSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const validationErrors = validate(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    handleSubmit(e);
  };

  const contactDetails = [
    {
      icon: <Building2 className="h-6 w-6 text-amber-700" />,
      title: "Company Address",
      details: ["Industrial Area, Lahore, Punjab, Pakistan"],
    },
    {
      icon: <Phone className="h-6 w-6 text-amber-700" />,
      title: "Phone Number",
      details: ["+92 3214248968", "+92 3101404487"],
    },
    {
      icon: <Mail className="h-6 w-6 text-amber-700" />,
      title: "Email Address",
      details: ['hafizzabdullah999@gmail.com'],
    },
    {
      icon: <MapPin className="h-6 w-6 text-amber-700" />,
      title: "Working Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 1:00 PM"],
    },
  ];

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
            {state.succeeded ? (
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-amber-700 mb-4">Thank you!</h3>
                <p className="text-gray-700">Your message has been successfully sent. We will contact you soon.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold mb-6 text-gray-900">Send Us a Message</h3>
                <form onSubmit={customSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="Enter your name"
                      />
                      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="Enter your email"
                      />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-gray-700">
                      Company Name
                    </label>
                    <input
                      id="company"
                      type="text"
                      name="company"
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
                      name="subject"
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
                      name="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Enter your message"
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>
                  <Button className="w-full bg-amber-700 hover:bg-amber-800" type="submit" disabled={state.submitting}>
                    {state.submitting ? (
                      <Loader2 className="animate-spin h-5 w-5" />
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
