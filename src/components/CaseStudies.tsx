import Image from "next/image";

const caseStudies = [
  {
    id: 1,
    title: "Frontline Education",
    subtitle: "Legacy platform failing at K-12 scale",
    problem:
      "Legacy ExtJS choking a platform serving 1.2M students and districts.",
    built:
      "Migrated to HTML5/CSS3. Redesigned the API integration layer end to end.",
    result: "60% faster page loads. 25% more peak concurrency.",
    logo: "/assets/customers/frontline-education-removebg-preview.png",
    keyMetric: "1.2M+",
    metricLabel: "monthly visitors",
    bgColor: "bg-primary/8",
    hoverBgColor: "group-hover:bg-primary/15",
  },
  {
    id: 2,
    title: "Alcemi",
    subtitle: "Shopify stores losing buyers before checkout",
    problem:
      "No way to guide shoppers, answer questions, or keep them engaged before they left.",
    built:
      "Claude + Gemini AI shopping agent embedded in Shopify. Voice input, product discovery, support.",
    result: "Live on the Shopify App Store.",
    logo: "/assets/customers/alcemi-removebg-preview.png",
    keyMetric: "30%",
    metricLabel: "Shopify conversion boost",
    bgColor: "bg-primary/8",
    hoverBgColor: "group-hover:bg-primary/15",
  },
  {
    id: 3,
    title: "Puffbar",
    subtitle: "High-traffic DTC with no operational control",
    problem:
      "Explosive growth, no role controls, no dashboards, no order visibility.",
    built:
      "Role-based management, sales dashboards, and order processing rebuilt for scale.",
    result: "Zero performance degradation at peak.",
    logo: "/assets/customers/puffbar-removebg-preview.png",
    keyMetric: "5M+",
    metricLabel: "monthly visitors",
    bgColor: "bg-primary/8",
    hoverBgColor: "group-hover:bg-primary/15",
  },
  {
    id: 4,
    title: "Qodex.ai",
    subtitle: "API testing slow, manual, and broken",
    problem:
      "Engineers spending hours on manual, reactive API testing with no systematic security coverage.",
    built:
      "AI-powered testing and security platform from concept to enterprise. Natural language test generation.",
    result: "80% faster testing. Hours of manual work automated.",
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
          <p className="text-sm text-primary font-medium uppercase tracking-wide mb-2">
            Our Work
          </p>
          <h2 className="text-3xl font-bold text-text mb-6">
            Real problems. Working solutions.
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
                {/* Title and Problem Subtitle */}
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

                {/* Problem / Built / Result labeled rows */}
                <div className="space-y-2.5">
                  <div className="flex gap-3">
                    <span className="font-semibold text-text uppercase tracking-wide text-xs w-14 flex-shrink-0 pt-0.5">
                      Problem
                    </span>
                    <span className="text-sm text-text-light leading-relaxed">
                      {caseStudy.problem}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-semibold text-text uppercase tracking-wide text-xs w-14 flex-shrink-0 pt-0.5">
                      Built
                    </span>
                    <span className="text-sm text-text-light leading-relaxed">
                      {caseStudy.built}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-semibold text-text uppercase tracking-wide text-xs w-14 flex-shrink-0 pt-0.5">
                      Result
                    </span>
                    <span className="text-sm text-text-light leading-relaxed">
                      {caseStudy.result}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
