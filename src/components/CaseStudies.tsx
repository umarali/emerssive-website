'use client'

import Image from 'next/image'

const caseStudies = [
  {
    id: 1,
    title: 'Fluxx',
    subtitle: 'Grant Management Platform',
    description: 'Enhanced grant management platform with advanced system architecture and financial integrations. Automated financial integration eliminated manual processes and saved 500+ hours annually.',
    logo: '/assets/customers/fluxx-removebg-preview.png',
    keyMetric: '35%',
    metricLabel: 'reduction in manual errors',
    notableClients: 'Citi Foundation, USAID, Leukemia & Lymphoma Society',
    bgColor: 'bg-primary/8',
    hoverBgColor: 'group-hover:bg-primary/15'
  },
  {
    id: 2,
    title: 'Qodex.ai',
    subtitle: 'API Testing & Security Platform',
    description: 'Built complete AI-powered API testing platform from concept to enterprise-scale solution. Enables 80% faster testing with natural language processing for development teams.',
    logo: '/assets/customers/qodexai-removebg-preview.png',
    keyMetric: '78K+',
    metricLabel: 'APIs secured globally',
    bgColor: 'bg-indigo-500/8',
    hoverBgColor: 'group-hover:bg-indigo-500/15'
  },
  {
    id: 3,
    title: 'BookBiteAI',
    subtitle: 'Restaurant Management System',
    description: 'Built an AI-powered restaurant management platform that streamlines operations and enhances customer experience.',
    logo: '/assets/customers/bookbite-removebg-preview.png',
    keyMetric: '30s',
    metricLabel: 'average reservation time',
    bgColor: 'bg-purple-500/8',
    hoverBgColor: 'group-hover:bg-purple-500/15'
  },
  {
    id: 4,
    title: 'Frontline Education',
    subtitle: 'Educational Technology Platform',
    description: 'Updated their outdated design with a new website that supports 1.2M+ visitors and provides enhanced user experience for educational institutions.',
    logo: '/assets/customers/frontline-education-removebg-preview.png',
    keyMetric: '1.2M+',
    metricLabel: 'monthly visitors supported',
    notableClients: 'Schools, Districts, Educational Institutions',
    bgColor: 'bg-rose-500/8',
    hoverBgColor: 'group-hover:bg-rose-500/15'
  }
]

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
            Our Success Stories
          </p>
          <h2 className="text-3xl font-bold text-text mb-6">
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
              {/* Logo Section at Top with Theme Background */}
              <div className={`h-24 ${caseStudy.bgColor} ${caseStudy.hoverBgColor} flex items-center justify-center transition-all duration-300 relative`}>
                <Image
                  src={caseStudy.logo}
                  alt={caseStudy.title}
                  width={120}
                  height={120}
                  className={`object-contain ${caseStudy.id === 3 ? 'w-24 h-24' : 'w-28 h-28'} drop-shadow-sm`}
                />
                

              </div>

              {/* Content */}
              <div className="p-6 relative">
                {/* Title and Subtitle */}
                <h3 className="text-xl font-bold text-text mb-1">{caseStudy.title}</h3>
                <p className="text-sm text-text-light mb-4">{caseStudy.subtitle}</p>

                {/* Key Metric with accent color */}
                <div className="mb-4">
                  <div className="text-2xl font-bold text-accent">{caseStudy.keyMetric}</div>
                  <div className="text-sm text-text-light">{caseStudy.metricLabel}</div>
                </div>

                {/* Description */}
                <p className="text-sm text-text-light mb-4 leading-relaxed">
                  {caseStudy.description}
                </p>

                {/* Notable Clients */}
                <div>
                  <p className="text-xs text-text-light uppercase tracking-wide mb-1">
                    {caseStudy.notableClients ? 'Notable Clients' : ''}
                  </p>
                  <p className="text-sm text-text">
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
