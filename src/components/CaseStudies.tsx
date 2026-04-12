import Image from "next/image";

const caseStudies = [
  {
    id: 1,
    title: "Frontline Education",
    subtitle: "Educational Technology Platform",
    description:
      "Modernized a nationwide K-12 platform serving 1.2M+ monthly visitors. Migrated from legacy ExtJS to responsive HTML5/CSS3 and redesigned the API integration layer, achieving ~60% faster page loads and ~25% more concurrent users during peak school hours.",
    logo: "/assets/customers/frontline-education-removebg-preview.png",
    keyMetric: "1.2M+",
    metricLabel: "monthly visitors supported",
    notableClients: "Schools, Districts, Educational Institutions",
    bgColor: "bg-primary/8",
    hoverBgColor: "group-hover:bg-primary/15",
  },
  {
    id: 2,
    title: "Alcemi",
    subtitle: "AI Shopping Agent for Shopify",
    description:
      "Built a conversational AI agent powered by Claude and Gemini, embedded directly in Shopify stores. Handles product discovery through natural language, support queries, and voice input — guiding customers to checkout. Live on the Shopify App Store.",
    logo: "/assets/customers/alcemi-removebg-preview.png",
    keyMetric: "30%",
    metricLabel: "Shopify conversion boost",
    bgColor: "bg-primary/8",
    hoverBgColor: "group-hover:bg-primary/15",
  },
  {
    id: 3,
    title: "Puffbar",
    subtitle: "DTC E-Commerce Platform",
    description:
      "Built and optimized a high-traffic e-commerce platform with role-based management, sales tracking dashboards, and order processing systems. The platform scaled with explosive growth without performance degradation.",
    logo: "/assets/customers/puffbar-removebg-preview.png",
    keyMetric: "5M+",
    metricLabel: "monthly visitors",
    bgColor: "bg-primary/8",
    hoverBgColor: "group-hover:bg-primary/15",
  },
  {
    id: 4,
    title: "Qodex.ai",
    subtitle: "API Testing & Security Platform",
    description:
      "Built complete AI-powered API testing platform from concept to enterprise-scale solution. Enables 80% faster testing with natural language processing for development teams.",
    logo: "/assets/customers/qodexai-removebg-preview.png",
    keyMetric: "78K+",
    metricLabel: "APIs secured globally",
    bgColor: "bg-primary/8",
    hoverBgColor: "group-hover:bg-primary/15",
  },
];

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
            Our Success Stories
          </p>
          <h2 className="text-3xl font-bold text-text mb-6">
            Delivering exceptional results through innovative development
            solutions
          </h2>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="group bg-white rounded-xl shadow-sm transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Logo Section at Top with Theme Background */}
              <div
                className={`h-24 ${caseStudy.bgColor} ${caseStudy.hoverBgColor} flex items-center justify-center transition-all duration-300 relative`}
              >
                {caseStudy.logo ? (
                  <Image
                    src={caseStudy.logo}
                    alt={caseStudy.title}
                    width={120}
                    height={120}
                    className={`object-contain ${caseStudy.id === 3 ? "w-24 h-24" : "w-28 h-28"} drop-shadow-sm`}
                  />
                ) : (
                  <span className="text-xl font-bold text-gray-700">
                    {caseStudy.title}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6 relative">
                {/* Title and Subtitle */}
                <h3 className="text-xl font-bold text-text mb-1">
                  {caseStudy.title}
                </h3>
                <p className="text-sm text-text-light mb-4">
                  {caseStudy.subtitle}
                </p>

                {/* Key Metric with accent color */}
                <div className="mb-4">
                  <div className="text-2xl font-bold text-accent">
                    {caseStudy.keyMetric}
                  </div>
                  <div className="text-sm text-text-light">
                    {caseStudy.metricLabel}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-text-light mb-4 leading-relaxed">
                  {caseStudy.description}
                </p>

                {/* Notable Clients */}
                <div>
                  <p className="text-xs text-text-light uppercase tracking-wide mb-1">
                    {caseStudy.notableClients ? "Notable Clients" : ""}
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
  );
}
