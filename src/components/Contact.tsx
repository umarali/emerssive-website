export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary-light">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-text mb-6">
            Ready to start your project?
          </h2>
          <p className="text-xl text-text-light max-w-2xl mx-auto mb-8">
            Book a consultation with our team and let's discuss how we can help bring your vision to life.
          </p>
        </div>

        {/* Book Now Button */}
        <div className="text-center">
          <a
            href="https://calendar.app.google/U3z2GqSza9Fhch8e9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-primary to-primary-dark text-secondary-light px-12 py-6 rounded-full text-xl font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
          >
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book Now
          </a>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-base text-text-light">
            Schedule a 30-minute consultation to discuss your project requirements and get a personalized quote.
          </p>
        </div>
      </div>
    </section>
  )
}
