'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'What industries do you cater to?',
    answer: 'We cater to various industries such as finance, education, e-commerce, logistics, and startups.'
  },
  {
    question: 'How do you manage projects?',
    answer: 'We follow agile methodologies with regular updates and iterations to ensure transparency and flexibility throughout the development process.'
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'Our expertise includes Python/Django, JavaScript/React, React Native, Docker/Kubernetes, LangChain, and Shopify.'
  },
  {
    question: 'How do you ensure quality?',
    answer: 'We implement thorough testing phases including manual and automated QA to ensure bug-free and high-quality software.'
  },
  {
    question: 'What services do you offer?',
    answer: 'We specialize in Generative AI, Mobile and Web Development, and AI-powered Automation solutions to drive innovation and efficiency for your business.'
  },
  {
    question: 'What scale of projects do you work on?',
    answer: 'The minimum project cost we accept starts at $2,000.'
  }
]

export function FAQ() {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set())

  const toggleFAQ = (index: number) => {
    const newOpenIndexes = new Set(openIndexes)
    if (newOpenIndexes.has(index)) {
      newOpenIndexes.delete(index)
    } else {
      newOpenIndexes.add(index)
    }
    setOpenIndexes(newOpenIndexes)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-lg transition-colors duration-300 hover:bg-gray-100 ${
                openIndexes.has(index) ? 'bg-gray-100' : ''
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between transition-colors duration-300 focus:outline-none"
                aria-expanded={openIndexes.has(index)}
                aria-controls={`faq-content-${index}`}
              >
                <h3 className="text-lg pr-4 text-gray-800">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndexes.has(index) ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                id={`faq-content-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndexes.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Still have questions? Let's talk about your project.
          </p>
          <a
            href="https://calendar.app.google/U3z2GqSza9Fhch8e9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-full text-base font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2"
          >
            Book a Call →
          </a>
        </div> */}
      </div>
    </section>
  )
}
