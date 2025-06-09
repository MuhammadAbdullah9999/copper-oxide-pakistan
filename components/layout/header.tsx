'use client'
import Link from "next/link"
import { FlaskRoundIcon as Flask, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const products = [
    { name: "Copper Oxide", href: "/products/copper-oxide" },
    { name: "Silver Nitrate", href: "/products/silver-nitrate" },
    { name: "Copper Sulphate", href: "/products/copper-sulphate" },
    { name: "Silver Chloride", href: "/products/silver-chloride" },
    // { name: "Copper Carbonate", href: "/products/copper-carbonate" },
  ]
  const phone = "+92 321 4248968"
  const phoneHref = "tel:+923214248968"

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Flask className="h-6 w-6 text-amber-700" />
          <Link href="/" className="text-xl font-bold">Sulman Traders</Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/" className="text-sm font-medium hover:text-amber-700 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-amber-700 transition-colors">
            About Us
          </Link>
          
          {/* Products Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-amber-700 transition-colors">
              Products <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild>
                <Link href="/products" className="w-full font-medium">
                  All Products
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              {products.map((product) => (
                <DropdownMenuItem key={product.href} asChild>
                  <Link href={product.href} className="w-full">
                    {product.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/#manufacturing" className="text-sm font-medium hover:text-amber-700 transition-colors">
            Manufacturing
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-amber-700 transition-colors">
            Contact
          </Link>
        </nav>
        
        {/* Phone number (desktop) */}
        <a href={phoneHref} className="hidden md:flex items-center gap-2 text-amber-700 font-semibold text-sm ml-4 hover:underline">
          <Phone className="h-4 w-4" />
          {phone}
        </a>
        
        {/* Mobile menu button */}
        <Button 
          variant="outline" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background pb-4 px-4">
          <nav className="flex flex-col gap-4">
            <Link 
              href="/" 
              className="text-sm font-medium hover:text-amber-700 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-medium hover:text-amber-700 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            
            {/* Mobile Products List */}
            <div className="py-2 border-t border-gray-100">
              <div className="text-sm font-medium text-gray-500 mb-2">Products</div>
              <Link
                href="/products"
                className="block text-sm font-medium hover:text-amber-700 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                All Products
              </Link>
              {products.map((product) => (
                <Link
                  key={product.href}
                  href={product.href}
                  className="block text-sm font-medium hover:text-amber-700 transition-colors py-2 pl-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {product.name}
                </Link>
              ))}
            </div>
            
            <Link 
              href="/#manufacturing" 
              className="text-sm font-medium hover:text-amber-700 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Manufacturing
            </Link>
            <Link 
              href="/contact" 
              className="text-sm font-medium hover:text-amber-700 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            {/* Phone number (mobile) */}
            <a href={phoneHref} className="flex items-center gap-2 text-amber-700 font-semibold text-sm py-2">
              <Phone className="h-4 w-4" />
              {phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}