import Image from "next/image";
import Link from "next/link";

export function Services() {
  const services = [
    {
      title: "AI agents and automation",
      description:
        "Connect language models to the work: API testing, document workflows, internal tools and customer-facing assistants.",
      detail: "For teams with a workflow to improve or an AI product to build.",
      image: "/assets/services/gen_ai_service.svg",
      href: "/services/generative-ai",
    },
    {
      title: "Web and mobile products",
      description:
        "Build a new application, modernize a legacy frontend, or bring separate products onto a shared foundation.",
      detail:
        "For founders and teams building or improving an existing platform.",
      image: "/assets/services/web_mobile_service.svg",
      href: "/services/web-mobile",
    },
  ];
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-white px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold text-primary-dark">
            Where we can help
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What are you trying to build?
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group grid gap-6 rounded-2xl border border-secondary-dark p-7 hover:border-primary sm:grid-cols-[1fr_100px] sm:p-9"
            >
              <div>
                <h3 className="text-2xl font-bold group-hover:text-primary-dark">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-text-light">
                  {service.description}
                </p>
                <p className="mt-4 text-sm leading-7 text-text-light">
                  {service.detail}
                </p>
                <span className="mt-6 inline-block text-sm font-semibold text-primary-dark">
                  Explore this service <span aria-hidden="true">↗</span>
                </span>
              </div>
              <Image
                src={service.image}
                alt=""
                width={100}
                height={100}
                className="hidden self-start sm:block"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
