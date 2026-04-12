"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { CONSULTATION_ENTRY_PATH } from "@/lib/consultation";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
        setIsServicesOpen(false);
      } else {
        setIsVisible(true);
      }

      setIsScrolled(currentScrollY > 10);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-lg" : "bg-transparent"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logo2.png"
              alt="Emerssive Logo"
              width={160}
              height={80}
              className="object-contain w-40 h-20"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services with dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 text-text hover:text-primary transition-colors duration-200 text-base"
                aria-haspopup="true"
                aria-expanded={isServicesOpen}
              >
                Services
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 relative -top-1.5" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-44 z-50 pt-2">
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-1.5">
                    <Link
                      href="/services/generative-ai"
                      className="block px-4 py-2.5 text-sm text-text hover:text-primary hover:bg-gray-50 transition-colors"
                    >
                      Generative AI
                    </Link>
                    <Link
                      href="/services/web-mobile"
                      className="block px-4 py-2.5 text-sm text-text hover:text-primary hover:bg-gray-50 transition-colors"
                    >
                      Web / Mobile
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/#case-studies"
              className="text-text hover:text-primary transition-colors duration-200 text-base"
            >
              Case Studies
            </Link>
            <Link
              href="/#faq"
              className="text-text hover:text-primary transition-colors duration-200 text-base"
            >
              FAQ
            </Link>

            <Link
              href={CONSULTATION_ENTRY_PATH}
              className="bg-gradient-to-r from-primary to-primary-dark text-secondary-light px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 text-base font-medium"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => {
              if (isMobileMenuOpen) {
                closeMobileMenu();
              } else {
                setIsMobileMenuOpen(true);
              }
            }}
            className="md:hidden p-2 rounded-md text-text hover:text-primary focus:outline-none"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="md:hidden glass-effect rounded-lg mt-2 mb-4"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Services with expandable sub-items */}
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-text hover:text-primary transition-colors duration-200 text-base"
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isMobileServicesOpen && (
                <div className="pl-4 space-y-1">
                  <Link
                    href="/services/generative-ai"
                    className="block px-3 py-2 text-sm text-text-light hover:text-primary transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    Generative AI
                  </Link>
                  <Link
                    href="/services/web-mobile"
                    className="block px-3 py-2 text-sm text-text-light hover:text-primary transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    Web / Mobile
                  </Link>
                </div>
              )}
              <Link
                href="/#case-studies"
                className="block px-3 py-2 text-text hover:text-primary transition-colors duration-200 text-base"
                onClick={closeMobileMenu}
              >
                Case Studies
              </Link>
              <Link
                href="/#faq"
                className="block px-3 py-2 text-text hover:text-primary transition-colors duration-200 text-base"
                onClick={closeMobileMenu}
              >
                FAQ
              </Link>

              <Link
                href={CONSULTATION_ENTRY_PATH}
                className="block px-3 py-2 bg-gradient-to-r from-primary to-primary-dark text-secondary-light rounded-md text-center text-base font-medium"
                onClick={closeMobileMenu}
              >
                Book a Call
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
