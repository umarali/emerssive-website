import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="scroll-mt-24 bg-secondary px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold text-primary-dark">
            Selected work
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
            The problem. Our contribution.
          </h2>
          <p className="mt-4 text-base leading-7 text-text-light">
            A closer look at what we built, the systems involved and where our
            work fits into each product.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-secondary-dark bg-white">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="grid gap-6 border-b border-secondary-dark p-6 last:border-0 sm:p-9 lg:grid-cols-[220px_1fr_auto] lg:items-center lg:gap-10"
            >
              <div>
                <div className="mb-4 flex h-14 items-center">
                  {project.logo ? (
                    <Image
                      src={project.logo}
                      alt={project.name}
                      width={180}
                      height={56}
                      className="max-h-14 w-auto max-w-[180px] object-contain"
                    />
                  ) : (
                    <p className="font-roboto text-2xl font-bold text-primary-dark">
                      Code3Apps
                    </p>
                  )}
                </div>
                <p className="text-xs leading-5 text-text-light">
                  {project.category}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-text">{project.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-text-light">
                  {project.summary}
                </p>
              </div>
              <Link
                href={`/work/${project.slug}`}
                className="inline-flex min-h-11 items-center text-sm font-semibold text-primary-dark underline underline-offset-4"
              >
                Read the {project.name} story{" "}
                <span aria-hidden="true" className="ml-2">
                  ↗
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
