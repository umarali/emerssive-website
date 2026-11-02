import Image from "next/image";
import Link from "next/link";
import { CONSULTATION_ENTRY_PATH } from "@/lib/consultation";

export function Hero() {
  return (
    <section className="border-b border-secondary-dark bg-white px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24 lg:pt-40">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-20">
        <div>
          <p className="mb-5 text-sm font-semibold tracking-wide text-primary-dark">
            AI, web and mobile development
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-text sm:text-5xl lg:text-6xl">
            Software that moves
            <br className="hidden sm:block" />{" "}
            <span className="text-primary-dark">your business forward.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-text-light">
            Automate a workflow, build a product, or improve the platform you
            already run. Emerssive helps you turn the problem into working
            software.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={CONSULTATION_ENTRY_PATH}
              className="inline-flex items-center justify-center rounded-full bg-primary-dark px-7 py-3.5 text-sm font-semibold text-white hover:bg-primary"
            >
              Talk about your project
            </Link>
            <Link
              href="#case-studies"
              className="inline-flex items-center justify-center rounded-full border border-secondary-dark px-7 py-3.5 text-sm font-semibold text-text hover:bg-secondary"
            >
              Explore our work{" "}
              <span aria-hidden="true" className="ml-2">
                ↓
              </span>
            </Link>
          </div>
          <p className="mt-4 text-sm leading-6 text-text-light">
            Start with your goals, existing systems and constraints.
          </p>
        </div>
        <aside
          aria-label="Selected project experience"
          className="rounded-2xl border border-secondary-dark bg-secondary p-6 sm:p-8"
        >
          <p className="mb-6 text-sm font-semibold text-text">
            Built for real operating challenges
          </p>
          <ul className="divide-y divide-secondary-dark">
            {[
              {
                name: "Qodex.ai",
                logo: "qodexai",
                detail: "AI agents for API discovery and test generation",
                href: "/work/qodex",
              },
              {
                name: "Frontline Education",
                logo: "frontline-education",
                detail: "Frontend modernization and API integration",
                href: "/work/frontline-education",
              },
              {
                name: "Code3Apps",
                logo: null,
                detail: "A shared mobile codebase and content platform",
                href: "/work/code3apps",
              },
            ].map((project) => (
              <li key={project.name} className="py-5 first:pt-0 last:pb-0">
                <Link
                  href={project.href}
                  className="group flex items-start gap-4 rounded-md"
                >
                  <div className="flex h-12 w-20 flex-none items-center justify-center rounded-lg border border-secondary-dark bg-white p-2">
                    {project.logo ? (
                      <Image
                        src={`/assets/customers/${project.logo}-removebg-preview.png`}
                        alt=""
                        width={80}
                        height={40}
                        className="max-h-9 w-auto object-contain"
                      />
                    ) : (
                      <span className="font-roboto text-sm font-bold text-primary-dark">
                        Code3
                      </span>
                    )}
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-text group-hover:text-primary-dark">
                      {project.name} <span aria-hidden="true">↗</span>
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-text-light">
                      {project.detail}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
