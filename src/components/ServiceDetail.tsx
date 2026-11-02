import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { projects } from "@/lib/projects";

type ServiceDetailProps = {
  label: string;
  title: string;
  description: string;
  capabilities: { title: string; detail: string }[];
  projectSlugs: string[];
};
export function ServiceDetail({
  label,
  title,
  description,
  capabilities,
  projectSlugs,
}: ServiceDetailProps) {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <section className="border-b border-secondary-dark bg-white px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/#services"
              className="text-sm font-semibold text-primary-dark underline underline-offset-4"
            >
              Back to services
            </Link>
            <p className="mt-10 text-sm font-semibold text-primary-dark">
              {label}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-text-light">
              {description}
            </p>
            <Link
              href="/consultation"
              className="mt-8 inline-flex rounded-full bg-primary-dark px-6 py-3 text-sm font-semibold text-white hover:bg-primary"
            >
              Talk about your project
            </Link>
          </div>
        </section>
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.5fr]">
            <h2 className="text-3xl font-bold tracking-tight">
              Where we can contribute
            </h2>
            <div className="divide-y divide-secondary-dark">
              {capabilities.map((item) => (
                <div key={item.title} className="py-6 first:pt-0">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-base leading-8 text-text-light">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-8 text-3xl font-bold tracking-tight">
              Related project work
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {projects
                .filter((p) => projectSlugs.includes(p.slug))
                .map((p) => (
                  <article
                    key={p.slug}
                    className="rounded-2xl border border-secondary-dark p-7"
                  >
                    <p className="text-sm text-primary-dark">{p.name}</p>
                    <h3 className="mt-3 text-xl font-bold">{p.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-text-light">
                      {p.summary}
                    </p>
                    <Link
                      href={`/work/${p.slug}`}
                      className="mt-6 inline-block text-sm font-semibold text-primary-dark underline underline-offset-4"
                    >
                      Read the {p.name} story
                    </Link>
                  </article>
                ))}
            </div>
          </div>
        </section>
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-bold">
              Start with a focused conversation
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-text-light">
              Bring your goal, the systems already in use and the constraints
              that matter. Scope, timeline and cost depend on what we agree to
              build.
            </p>
            <Link
              href="/consultation"
              className="mt-6 inline-block text-sm font-semibold text-primary-dark underline underline-offset-4"
            >
              Choose a time to talk
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
