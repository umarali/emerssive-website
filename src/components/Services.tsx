import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Generative AI",
    description:
      "Your business has data sitting in documents, emails, and systems — unused. We build AI that reads it, learns from it, and puts it to work.",
    image: "/assets/services/gen_ai_service.svg",
    href: "/services/generative-ai",
  },
  {
    id: 2,
    title: "Web/Mobile Development",
    description:
      "Your current platform can't keep up. We build web and mobile products that can — fast, secure, and built for where you're going.",
    image: "/assets/services/web_mobile_service.svg",
    href: "/services/web-mobile",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary-light"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl text-text mb-6">What we can do for you</h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            We build what your business actually needs — not what sounds
            good in a pitch deck.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
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
                <h3 className="text-lg text-gray-900 mb-4">{service.title}</h3>

                {/* Service Description */}
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <span className="inline-flex items-center text-sm text-primary font-medium group-hover:text-primary-dark transition-colors">
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
