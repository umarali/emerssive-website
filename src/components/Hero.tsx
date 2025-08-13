'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const rotatingPhrases = [
    'AI agents',
    'AI powered apps',
    'automations',
    'web apps',
    'mobile apps'
  ]

  useEffect(() => {
    setIsVisible(true)
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingPhrases.length)
    }, 2500)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="w-full" style={{ paddingLeft: 'calc(50vw - 610px)', paddingRight: 'calc(50vw - 610px)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left: Copy - Takes 2 columns */}
          <div className="lg:col-span-2">
            {/* Pre-heading */}
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-xs sm:text-sm font-medium rounded-full mb-6">
                Welcome to Emerssive
              </span>
            </div>

            {/* Main Heading with rotating middle */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl text-text mb-6 leading-tight transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              <span className="block">We build</span>
              <span className="block min-h-[1.2em]">
                <span className="text-accent transition-opacity duration-300">
                  {rotatingPhrases[currentIndex]}
                </span>
              </span>
              <span className="block">that ship in weeks</span>
            </h1>

            {/* Subheadline */}
            <p className={`text-lg text-text-light max-w-2xl mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              We help innovative companies work smarter with custom AI solutions and software development. From generative AI to web and mobile technologies — we build software that drives your success.
            </p>

            {/* CTAs */}
            <div className={`flex flex-col sm:flex-row gap-4 mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              <a
                href="https://calendar.app.google/U3z2GqSza9Fhch8e9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-primary-dark text-secondary-light px-6 py-3 rounded-full text-sm font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
              >
                Book a Free Consultation →
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-300 text-text text-sm hover:bg-gray-50 transition-colors"
              >
                See case studies
              </a>
            </div>

            {/* Trust Indicator */}
            <div className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              <p className="text-primary font-medium text-sm">
                Trusted by 100+ happy clients including affiliates and acquisitions of Fortune 500 companies
              </p>
            </div>
          </div>

          {/* Right: Professional KPI Card - Single KPI */}
          <div className={`relative transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-10 lg:p-12">
              <div className="bg-gray-900 text-white rounded-xl px-8 py-6 text-center">
                <span className="text-6xl font-bold leading-none block">91%</span>
                <span className="opacity-80 text-lg">on time and budget</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30" />
      </div>
    </section>
  )
}
