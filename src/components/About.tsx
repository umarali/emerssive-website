'use client'

const aboutPoints = [
  {
    icon: '👥',
    title: 'Who we are',
    description: 'A team of passionate developers and solution providers dedicated to digital innovation.'
  },
  {
    icon: '💡',
    title: 'What we do',
    description: 'We create cutting-edge web, mobile, and e-commerce solutions that drive business growth.'
  },
  {
    icon: '🎯',
    title: 'Our values',
    description: 'Innovation, quality, and client success are at the core of everything we do.'
  },
  {
    icon: '🏆',
    title: 'Why choose us',
    description: 'Proven track record with 70+ happy clients and Fortune 500 company partnerships.'
  }
]

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            We help our partners grow their business
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Key Points */}
          <div className="space-y-8">
            {aboutPoints.map((point, index) => (
              <div
                key={index}
                className="group flex items-start space-x-4 p-6 rounded-xl bg-white dark:bg-gray-700 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                  {point.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Detailed Description */}
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Emerssive Solutions is a leading software development agency that specializes in creating innovative digital solutions for businesses of all sizes. With years of experience in web development, mobile applications, and e-commerce platforms, we have helped over 70 clients achieve their digital transformation goals.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Our team of seasoned developers and solution providers combines technical expertise with creative problem-solving to deliver solutions that not only meet your current needs but also scale with your business growth. We pride ourselves on our ability to understand complex business requirements and translate them into elegant, user-friendly applications.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                From startups to Fortune 500 companies, we've built lasting partnerships based on trust, transparency, and exceptional results. Our commitment to quality, innovation, and client success has made us a trusted partner for businesses looking to lead the way in digital innovation.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">70+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">100+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
