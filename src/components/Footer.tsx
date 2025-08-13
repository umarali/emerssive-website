'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Company Information */}
          <div className="space-y-4">
            {/* Logo */}
            <div className="flex items-center h-8">
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
            </div>
            
            {/* Company Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              Emerssive is a young, full-service software development company specializing in Generative AI, Web and Mobile.
              <br />
              Our experienced team transforms concepts into impactful applications for startups to enterprise companies.
            </p>
          </div>

          {/* Center Column - Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#case-studies" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column - Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <div className="space-y-2 text-gray-400">
              <div>
                <a href="tel:+923314739747" className="hover:text-gray-300 transition-colors duration-200">
                  +923314739747
                </a>
              </div>
              <div>
                <a href="mailto:contact@emerssive.com" className="hover:text-gray-300 transition-colors duration-200">
                  contact@emerssive.com
                </a>
              </div>
              <div>
                <p>
                  124L, Johar Town, Lahore. 54700.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Social Media */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm">
              Copyright © 2025 Emerssive Solutions | All Rights Reserved
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a 
                href="https://pk.linkedin.com/company/emerssive" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/emerssive" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
