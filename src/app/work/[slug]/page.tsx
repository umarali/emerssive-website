import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { projects } from "@/lib/projects";

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project
    ? {
        title: `${project.name}: ${project.title} | Emerssive`,
        description: project.summary,
        alternates: { canonical: `https://emerssive.com/work/${slug}` },
      }
    : {};
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return (
    <>
      <Navigation />
      <main id="main-content" className="px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-4xl">
          <Link
            href="/#case-studies"
            className="text-sm font-semibold text-primary-dark underline underline-offset-4"
          >
            Back to selected work
          </Link>
          <p className="mt-10 text-sm text-primary-dark">
            {project.category} · {project.name}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-text sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-light">
            {project.summary}
          </p>
          <div className="mt-12 grid gap-10 border-t border-secondary-dark pt-10 md:grid-cols-[1fr_220px]">
            <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-bold">The challenge</h2>
                <p className="mt-4 leading-8 text-text-light">
                  {project.challenge}
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold">Our contribution</h2>
                <p className="mt-4 leading-8 text-text-light">
                  {project.contribution}
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold">What we delivered</h2>
                <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-text-light">
                  {project.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
              <p className="border-l-2 border-primary pl-5 text-sm leading-7 text-text-light">
                {project.boundary}
              </p>
            </div>
            <aside>
              <h2 className="text-base font-bold">Systems involved</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-text-light">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a
                href={project.href}
                className="mt-8 inline-block text-sm font-semibold text-primary-dark underline underline-offset-4"
              >
                Current product site <span aria-hidden="true">↗</span>
              </a>
            </aside>
          </div>
          <section className="mt-16 rounded-2xl bg-white p-7 sm:p-10">
            <h2 className="text-2xl font-bold">
              Working through a similar challenge?
            </h2>
            <p className="mt-3 leading-7 text-text-light">
              Tell us what needs to change and what you already have in place.
            </p>
            <Link
              href="/consultation"
              className="mt-6 inline-flex rounded-full bg-primary-dark px-6 py-3 text-sm font-semibold text-white hover:bg-primary"
            >
              Talk about your project
            </Link>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
