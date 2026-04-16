import Image from "next/image";

const caseStudies = [
  {
    id: 1,
    title: "Frontline Education",
    subtitle: "Legacy platform failing at K-12 scale",
    problem:
      "Legacy ExtJS choking a platform serving 1.2M students and districts.",
    result: "60% faster page loads. 25% more peak concurrency.",
    logo: "/assets/customers/frontline-education-removebg-preview.png",
    keyMetric: "1.2M+",
    metricLabel: "monthly visitors",
  },
  {
    id: 2,
    title: "Alcemi",
    subtitle: "Shopify stores losing buyers before checkout",
    problem:
      "No way to guide shoppers, answer questions, or keep them engaged before they left.",
    result: "Live on the Shopify App Store.",
    logo: "/assets/customers/alcemi-removebg-preview.png",
    keyMetric: "30%",
    metricLabel: "Shopify conversion boost",
  },
  {
    id: 3,
    title: "PuffBar",
    subtitle: "$150M brand with no way to track who was selling what",
    problem:
      "Orders flowed through Shopify but nothing connected a sale to the rep, team, or commission owed. The entire sales layer lived in spreadsheets.",
    result:
      "Eliminated manual commission calculations entirely. ~60–70% reduction in retailer onboarding time.",
    logo: "/assets/customers/puffbar-removebg-preview.png",
    keyMetric: "$150M+",
    metricLabel: "annual retail volume tracked",
  },
  {
    id: 4,
    title: "Blind Barber",
    subtitle: "4-city lifestyle brand with no digital presence",
    problem:
      "No booking, payments, or loyalty system across any location. Customers calling the shop to check availability.",
    result:
      "Zero to digital: first-ever booking, payments, and loyalty across all locations. 300K+ app customers.",
    logo: "/assets/customers/blind-barber-removebg-preview.png",
    keyMetric: "300K+",
    metricLabel: "app customers",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="group bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden"
            >
              {/* Logo zone */}
              <div className="flex items-center justify-center px-6 border-b border-gray-100">
                <Image
                  src={cs.logo}
                  alt={cs.title}
                  width={200}
                  height={96}
                  className="h-24 w-auto object-contain"
                />
              </div>

              {/* Metric + title + subtitle */}
              <div className="px-6 pt-5 pb-4">
                <div className="mb-3">
                  <p className="text-3xl font-bold text-accent leading-none">
                    {cs.keyMetric}
                  </p>
                  <p className="text-xs text-text-light mt-1">{cs.metricLabel}</p>
                </div>
                <h3 className="text-base font-bold text-text">{cs.title}</h3>
                <p className="text-xs text-text-light mt-0.5 leading-relaxed">
                  {cs.subtitle}
                </p>
              </div>

              <div className="border-t border-gray-100 mx-6" />

              {/* Problem */}
              <div className="px-6 py-4 flex-1">
                <p className="text-sm text-text-light leading-relaxed">
                  {cs.problem}
                </p>
              </div>

              {/* Result */}
              <div className="px-6 pb-6">
                <div className="bg-accent/10 rounded-xl px-4 py-3">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-1">
                    Result
                  </p>
                  <p className="text-sm text-text leading-snug">{cs.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
