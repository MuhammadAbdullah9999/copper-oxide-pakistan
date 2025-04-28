'use client'
import Link from "next/link"
import { FlaskRoundIcon as Flask } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react" // Import useState

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false) // State to track menu open/close

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Flask className="h-6 w-6 text-amber-700" />
          <span className="text-xl font-bold">Sulman Traders</span>
        </div>
        
        {/* Desktop Navigation (unchanged) */}
        <nav className="hidden md:flex gap-6">
          <Link href="/#home" className="text-sm font-medium hover:text-amber-700 transition-colors">
            Home
          </Link>
          <Link href="/#about" className="text-sm font-medium hover:text-amber-700 transition-colors">
            About Us
          </Link>
          <Link href="/#products" className="text-sm font-medium hover:text-amber-700 transition-colors">
            Products
          </Link>
          <Link href="/#manufacturing" className="text-sm font-medium hover:text-amber-700 transition-colors">
            Manufacturing
          </Link>
          <Link href="/#contact" className="text-sm font-medium hover:text-amber-700 transition-colors">
            Contact
          </Link>
        </nav>
        
        <Link href="/#contact">
          <Button className="hidden md:inline-flex bg-amber-700 hover:bg-amber-800">Request Quote</Button>
        </Link>
        
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
      
      {/* Mobile Navigation (shown when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="md:hidden bg-background pb-4 px-4">
          <nav className="flex flex-col gap-4">
            <Link 
              href="/#home" 
              className="text-sm font-medium hover:text-amber-700 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/#about" 
              className="text-sm font-medium hover:text-amber-700 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/#products" 
              className="text-sm font-medium hover:text-amber-700 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              href="/#manufacturing" 
              className="text-sm font-medium hover:text-amber-700 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Manufacturing
            </Link>
            <Link 
              href="/#contact" 
              className="text-sm font-medium hover:text-amber-700 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/#contact"
              className="w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="w-full bg-amber-700 hover:bg-amber-800">Request Quote</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}