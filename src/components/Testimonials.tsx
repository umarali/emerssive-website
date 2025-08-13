'use client'

import Image from 'next/image'
import { useState } from 'react'

const testimonials = [
  {
    name: 'Jerry Shu',
    role: 'Co-Founder',
    company: 'Lendica',
    image: '/assets/testimonials/Jerry Shu - Co-Founder - Lendica.png',
    quote: 'Working with Umar was an extremely pleasant experience as he was extremely communicative and flexible, and was able to complete our task of setting up a CI/CD pipeline faster than our expected timeline. Would highly recommend his services to anyone in need!',
    bgGradient: 'from-amber-400 to-orange-500'
  },
  {
    name: 'Adi Chirilov',
    role: 'CTO',
    company: 'AppSeed',
    image: '/assets/testimonials/Adi Chirilov - CTO - AppSeed.png',
    quote: 'Umar helped our team with many projects, from average to high complexity. Besides his excellent technical skills, Umar is a good communicator and a proactive team member, positively influencing the whole team\'s performance. Highly recommended for React, Javascript tasks, and Tech Lead jobs',
    bgGradient: 'from-purple-400 to-purple-600'
  },
  {
    name: 'Lindsey Holmes',
    role: 'Chief of Product',
    company: 'Code3Apps',
    image: '/assets/testimonials/Lindsey Holmes - Chief of Product - Code3Apps.png',
    quote: 'Umar and Code3Apps worked together for a couple years and Umar demonstrated a great work ethic, good technical knowledge (our project was a web based platform with an app interface), and was overall a pleasure to interact with.',
    bgGradient: 'from-red-400 to-rose-500'
  },
  {
    name: 'Justus Luttig',
    role: 'Investment Associate',
    company: 'Authentic Ventures',
    image: '/assets/testimonials/Justus Luttig - Investment Associate - Authentic Ventures.png',
    quote: 'We hired Umar to help with a complex problem on our website back end. He has a great understanding and proficiency in Vue, Node.js, MongoDB, and Heroku. Highly recommend Umar!',
    bgGradient: 'from-blue-400 to-indigo-500'
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text mb-6">
            Success, Powered by Emerssive
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped businesses achieve their goals through innovative solutions and dedicated partnership.
          </p>
        </div>

        {/* Testimonials Slider Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * 40}%)`,
                width: `${testimonials.length * 40}%`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full px-3 flex-shrink-0"
                  style={{ width: '40%' }}
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full">
                    {/* Main Content Layout - Side by side */}
                    <div className="flex h-full">
                      {/* Left Side - Image with Gradient Background */}
                      <div className={`w-2/5 bg-gradient-to-br ${testimonial.bgGradient} p-6 flex items-center justify-center relative overflow-hidden`}>
                        <div className="relative w-32 h-32 rounded-full overflow-hidden border-3 border-white shadow-lg z-10">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={128}
                            height={128}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        {/* Background decorative elements */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                        <div className="absolute top-2 right-2 w-12 h-12 bg-white/20 rounded-full opacity-60 blur-xl"></div>
                        <div className="absolute bottom-2 left-2 w-8 h-8 bg-white/30 rounded-full opacity-40 blur-lg"></div>
                      </div>

                      {/* Right Side - Content */}
                      <div className="w-3/5 p-6 flex flex-col">
                        {/* Quote Mark */}
                        <div className="text-2xl text-gray-300 font-serif leading-none mb-3">"</div>
                        
                        {/* Quote Text */}
                        <div className="relative group mb-4 flex-grow">
                          <p className="text-gray-700 text-sm leading-relaxed line-clamp-4 cursor-help">
                            {testimonial.quote}
                          </p>
                          {/* Tooltip with full text */}
                          <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 text-white text-xs rounded-lg p-3 bottom-full left-0 right-0 mb-2 z-50 shadow-lg">
                            <div className="max-h-40 overflow-y-auto">
                              {testimonial.quote}
                            </div>
                            <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                          </div>
                        </div>

                        {/* Author Info */}
                        <div className="border-t border-gray-100 pt-4 mt-auto">
                          <h4 className="text-gray-900 font-semibold text-sm mb-1">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-500 text-xs">
                            {testimonial.role}
                          </p>
                          <p className="text-gray-400 text-xs">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm hover:shadow-md disabled:opacity-50"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm hover:shadow-md disabled:opacity-50"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Version - Stack Layout */}
        <div className="lg:hidden">
          <div className="space-y-6">
            {testimonials.slice(currentIndex, currentIndex + 1).map((testimonial, index) => (
              <div
                key={`mobile-${currentIndex}-${index}`}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              >
                {/* Mobile Image Section */}
                <div className={`bg-gradient-to-br ${testimonial.bgGradient} p-8 flex items-center justify-center relative overflow-hidden`}>
                  <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg z-10">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={144}
                      height={144}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full opacity-60 blur-xl"></div>
                </div>

                {/* Mobile Content Section */}
                <div className="p-6">
                  <div className="text-3xl text-gray-300 font-serif leading-none mb-4">"</div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    {testimonial.quote}
                  </p>
                  <div className="border-t border-gray-100 pt-4">
                    <h4 className="text-gray-900 font-semibold text-base mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}