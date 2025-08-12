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
    bgColor: 'bg-gradient-to-b from-gray-200 to-amber-700',
    borderColor: 'border-gray-300'
  },
  {
    name: 'Adi Chirilov',
    role: 'CTO',
    company: 'AppSeed',
    image: '/assets/testimonials/Adi Chirilov - CTO - AppSeed.png',
    quote: 'Umar helped our team with many projects, from average to high complexity. Besides his excellent technical skills, Umar is a good communicator and a proactive team member, positively influencing the whole team\'s performance. Highly recommended for React, Javascript tasks, and Tech Lead jobs',
    bgColor: 'bg-gradient-to-b from-gray-200 to-purple-700',
    borderColor: 'border-gray-300'
  },
  {
    name: 'Lindsey Holmes',
    role: 'Chief of Product',
    company: 'Code3Apps',
    image: '/assets/testimonials/Lindsey Holmes - Chief of Product - Code3Apps.png',
    quote: 'Umar and Code3Apps worked together for a couple years and Umar demonstrated a great work ethic, good technical knowledge (our project was a web based platform with an app interface), and was overall a pleasure to interact with.',
    bgColor: 'bg-gradient-to-b from-gray-200 to-red-700',
    borderColor: 'border-gray-300'
  },
  {
    name: 'Justus Luttig',
    role: 'Investment Associate',
    company: 'Authentic Ventures',
    image: '/assets/testimonials/Justus Luttig - Investment Associate - Authentic Ventures.png',
    quote: 'We hired Umar to help with a complex problem on our website back end. He has a great understanding and proficiency in Vue, Node.js, MongoDB, and Heroku. Highly recommend Umar!',
    bgColor: 'bg-gradient-to-b from-gray-200 to-blue-700',
    borderColor: 'border-gray-300'
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
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text mb-6">
            Success, Powered by Emerssive
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="flex overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-full transition-transform duration-500 ease-in-out ${
                  index === currentIndex ? 'translate-x-0' : 'translate-x-full'
                }`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <div className="max-w-4xl mx-auto">
                  <div className={`rounded-lg overflow-hidden shadow-xl border-2 ${testimonial.borderColor}`}>
                    <div className="flex flex-col lg:flex-row">
                                             {/* Left Side - Image */}
                       <div className={`lg:w-1/3 ${testimonial.bgColor} p-8 flex items-center justify-center relative overflow-hidden`}>
                         <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg z-10">
                           <Image
                             src={testimonial.image}
                             alt={testimonial.name}
                             width={160}
                             height={160}
                             className="object-cover w-full h-full"
                           />
                         </div>
                         {/* Background blur effect for better blending */}
                         <div className="absolute inset-0 bg-black/10"></div>
                       </div>

                      {/* Right Side - Text */}
                      <div className="lg:w-2/3 bg-white p-8 border-l-2 border-purple-300">
                        <div className="mb-6">
                          <svg className="w-8 h-8 text-gray-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                          </svg>
                          <p className="text-lg leading-relaxed text-gray-800">
                            &ldquo;{testimonial.quote}&rdquo;
                          </p>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold mb-1 text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 shadow-sm"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 shadow-sm"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          {/* <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div> */}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <a
            href="https://calendar.app.google/U3z2GqSza9Fhch8e9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-primary to-primary-dark text-secondary-light px-8 py-4 rounded-full text-base font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Book a Call →
          </a>
        </div> */}
      </div>
    </section>
  )
}
