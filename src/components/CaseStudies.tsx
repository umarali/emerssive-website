'use client'

import Image from 'next/image'

const caseStudies = [
  {
    id: 1,
    title: 'Fluxx',
    subtitle: 'Grant Management Platform',
    description: 'Enhanced grant management platform with advanced system architecture and financial integrations. Automated financial integration eliminated manual processes and saved 500+ hours annually.',
    logo: '/assets/customers/fluxx-removebg-preview.png',
    bgColor: 'bg-gradient-to-r from-blue-600 to-blue-700',
    hoverColor: 'hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700',
    keyMetric: '35%',
    metricLabel: 'reduction in manual errors',
    notableClients: 'Citi Foundation, USAID, Leukemia & Lymphoma Society'
  },
  {
    id: 2,
    title: 'Qodex.ai',
    subtitle: 'API Testing & Security Platform',
    description: 'Built complete AI-powered API testing platform from concept to enterprise-scale solution. Enables 80% faster testing with natural language processing for development teams.',
    logo: '/assets/customers/qodexai-removebg-preview.png',
    bgColor: 'bg-gradient-to-r from-indigo-500 to-purple-600',
    hoverColor: 'hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600',
    keyMetric: '78K+',
    metricLabel: 'APIs secured globally'
  },
  {
    id: 3,
    title: 'BookBiteAI',
    subtitle: 'Restaurant Management System',
    description: 'Built an AI-powered restaurant management platform that streamlines operations and enhances customer experience.',
    logo: '/assets/customers/bookbite-removebg-preview.png',
    bgColor: 'bg-gradient-to-r from-orange-500 to-orange-600',
    hoverColor: 'hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600',
    keyMetric: '30s',
    metricLabel: 'average reservation time'
  },
  {
    id: 4,
    title: 'Frontline Education',
    subtitle: 'Educational Technology Platform',
    description: 'Updated their outdated design with a new website that supports 1.2M+ visitors and provides enhanced user experience for educational institutions.',
    logo: '/assets/customers/frontline-education-removebg-preview.png',
    bgColor: 'bg-gradient-to-r from-purple-600 to-purple-700',
    hoverColor: 'hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-700',
    keyMetric: '1.2M+',
    metricLabel: 'monthly visitors supported',
    notableClients: 'Schools, Districts, Educational Institutions'
  }
]

export function CaseStudies() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
            Our Success Stories
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            Delivering exceptional results through innovative development solutions
          </h2>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100"
            >
              {/* Logo Section at Top */}
              <div className={`h-24 bg-gray-100 group-hover:${caseStudy.bgColor} flex items-center justify-center transition-all duration-300`}>
                <Image
                  src={caseStudy.logo}
                  alt={caseStudy.title}
                  width={100}
                  height={100}
                  className={`object-contain ${caseStudy.id === 3 ? 'w-18 h-18' : 'w-20 h-20'}`}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title and Subtitle */}
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors duration-300">{caseStudy.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{caseStudy.subtitle}</p>

                {/* Key Metric */}
                <div className="mb-4">
                  <div className="text-2xl font-bold text-gray-900">{caseStudy.keyMetric}</div>
                  <div className="text-sm text-gray-700">{caseStudy.metricLabel}</div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {caseStudy.description}
                </p>

                {/* Notable Clients */}
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    {caseStudy.notableClients ? 'Notable Clients' : ''}
                  </p>
                  <p className="text-sm text-gray-900">
                    {caseStudy.notableClients}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
