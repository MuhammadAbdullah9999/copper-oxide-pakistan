import Link from "next/link"
import { FlaskRoundIcon as Flask } from "lucide-react"
import { Button } from "@/components/ui/button"
import Script from "next/script"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12" itemScope itemType="https://schema.org/WPFooter">
      {/* Local Business Schema.org markup */}
      <Script id="local-business-schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ChemicalManufacturer',
          name: 'Sulman Traders',
          description: 'Leading manufacturer of high-quality chemical products in Pakistan.',
          url: 'https://www.sulmantraders.com',
          telephone: '+92-321-4248968',
          email: 'info@sulmantraders.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Industrial Area',
            addressLocality: 'Lahore',
            addressRegion: 'Punjab',
            postalCode: '54000',
            addressCountry: 'PK'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 31.5204,
            longitude: 74.3587
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday'
            ],
            opens: '09:00',
            closes: '17:00'
          }
        })}
      </Script>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div itemScope itemType="https://schema.org/Organization">
            <div className="flex items-center gap-2 mb-4">
              <Flask className="h-6 w-6 text-amber-500" />
              <span className="text-xl font-bold text-white" itemProp="name">Sulman Traders</span>
            </div>
            <p className="text-gray-400 mb-4" itemProp="description">
              Leading manufacturer of high-quality chemical products in Pakistan.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/sulmantraders" className="text-gray-400 hover:text-white" aria-label="Facebook" rel="noopener" target="_blank" itemProp="sameAs">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="https://instagram.com/sulmantraders" className="text-gray-400 hover:text-white" aria-label="Instagram" rel="noopener" target="_blank" itemProp="sameAs">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="https://twitter.com/sulmantraders" className="text-gray-400 hover:text-white" aria-label="Twitter" rel="noopener" target="_blank" itemProp="sameAs">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://linkedin.com/company/sulmantraders" className="text-gray-400 hover:text-white" aria-label="LinkedIn" rel="noopener" target="_blank" itemProp="sameAs">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="mt-4 text-gray-400">
              <p itemProp="telephone">Phone: <a href="tel:+923214248968" className="hover:text-white">+92-321-4248968</a></p>
              {/* <p itemProp="email">Email: <a href="mailto:info@sulmantraders.com" className="hover:text-white">info@sulmantraders.com</a></p> */}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-gray-400 hover:text-white">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/#manufacturing" className="text-gray-400 hover:text-white">
                    Manufacturing
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link href="/products/copper-oxide" className="text-gray-400 hover:text-white">
                    Copper Oxide
                  </Link>
                </li>
                <li>
                  <Link href="/products/silver-nitrate" className="text-gray-400 hover:text-white">
                    Silver Nitrate
                  </Link>
                </li>
                <li>
                  <Link href="/products/copper-sulphate" className="text-gray-400 hover:text-white">
                    Copper Sulphate
                  </Link>
                </li>
                <li>
                  <Link href="/products/silver-chloride" className="text-gray-400 hover:text-white">
                    Silver Chloride
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white">
                    Custom Products
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest product updates and industry news.
            </p>
            <form className="space-y-2" action="/api/subscribe" method="post">
              <label htmlFor="email-input" className="sr-only">Email address</label>
              <input
                type="email"
                id="email-input"
                name="email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
                placeholder="Your email address"
                required
                aria-required="true"
              />
              <Button className="w-full bg-amber-700 hover:bg-amber-800" type="submit">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400 text-center">
          <p>&copy; {new Date().getFullYear()} Sulman Traders. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
