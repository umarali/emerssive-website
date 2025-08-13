'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide header
        setIsVisible(false)
      } else {
        // Scrolling up - show header
        setIsVisible(true)
      }
      
      setIsScrolled(currentScrollY > 10)
      setLastScrollY(currentScrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
    } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-40 h-20">
              <Image
                src="/assets/logo2.png"
                alt="Emerssive Logo"
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-text hover:text-primary transition-colors duration-200 text-base">
              Services
            </Link>
            <Link href="#case-studies" className="text-text hover:text-primary transition-colors duration-200 text-base">
              Case Studies
            </Link>
            {/* <Link href="#about" className="text-text hover:text-primary transition-colors duration-200 text-base">
              About
            </Link> */}
            {/* <Link href="#contact" className="text-text hover:text-primary transition-colors duration-200 text-base">
              Contact
            </Link> */}
            <a 
              href="https://calendar.app.google/U3z2GqSza9Fhch8e9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary to-primary-dark text-secondary-light px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 text-base font-medium"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-text hover:text-primary focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-effect rounded-lg mt-2 mb-4">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="#services" 
                className="block px-3 py-2 text-text hover:text-primary transition-colors duration-200 text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="#case-studies" 
                className="block px-3 py-2 text-text hover:text-primary transition-colors duration-200 text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Case Studies
              </Link>
              {/* <Link 
                href="#about" 
                className="block px-3 py-2 text-text hover:text-primary transition-colors duration-200 text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link> */}
              {/* <Link 
                href="#contact" 
                className="block px-3 py-2 text-text hover:text-primary transition-colors duration-200 text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link> */}
              <a 
                href="https://calendar.app.google/U3z2GqSza9Fhch8e9"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 bg-gradient-to-r from-primary to-primary-dark text-secondary-light rounded-md text-center text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Call
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
