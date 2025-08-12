'use client'

import { useState, useEffect } from 'react'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Pre-heading */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
            WE ARE EMERSSIVE SOLUTIONS
          </span>
        </div>

        {/* Main Heading */}
        <h1 className={`text-5xl sm:text-6xl lg:text-7xl text-text mb-6 transition-all duration-1000 animation-delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          Lead the Way in{' '}
          <span className="gradient-text">Digital Innovation</span>
        </h1>

        {/* Description */}
        <p className={`text-xl text-text-light max-w-4xl mx-auto mb-8 transition-all duration-1000 animation-delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          Partner with seasoned developers and solution providers to immerse your business in innovative web, mobile, and e-commerce solutions tailored to your goals.
        </p>

        {/* CTA Button */}
        <div className={`transition-all duration-1000 animation-delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <a
            href="https://calendar.app.google/U3z2GqSza9Fhch8e9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-primary to-primary-dark text-secondary-light px-8 py-4 rounded-full text-base font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1 mb-8 hover:scale-105"
          >
            Book a Call →
          </a>
        </div>

        {/* Trust Indicators */}
        <div className={`transition-all duration-1000 animation-delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-primary font-medium mb-6 text-base">
            Trusted by 100+ happy clients including affiliates and acquisitions of Fortune 500 companies
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30"></div>
      </div>
    </section>
  )
}
