'use client'

import Image from 'next/image'

const services = [
  {
    id: 1,
    title: 'Generative AI',
    description: 'Falling behind in the AI race? We help you move from confusion to execution. Discover what GenAI can do for your business.',
    image: '/assets/services/gen_ai_service.svg'
  },
  {
    id: 2,
    title: 'Web/Mobile Development',
    description: 'Need a site that\'s fast, secure, and built to convert? We handle design, code, and performance end-to-end. Let\'s bring your website to life.',
    image: '/assets/services/web_mobile_service.svg'
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary-light">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Services
          </span>
          <h2 className="text-3xl text-text mb-6">
            What we can do for you
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            We help entrepreneurs and business leaders build and launch innovative software solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Icons Section with Hover Gradient */}
              <div className="bg-gray-100 group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-primary-dark/20 p-12 transition-all duration-300">
                <div className="transition-transform duration-300 group-hover:scale-105 flex justify-center">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={250}
                    height={150}
                    className="h-auto object-contain"
                  />
                </div>
              </div>

              {/* Text Section - White Background */}
              <div className="p-6">
                {/* Service Title */}
                <h3 className="text-lg text-gray-900 mb-4">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-base text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
