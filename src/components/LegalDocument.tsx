import type { ReactNode } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

type LegalSection = { id: string; title: string; content: ReactNode };
export function LegalDocument({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <Navigation />
      <main id="main-content" className="px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-5xl">
          <p className="text-sm text-text-light">
            Last updated: 2 November 2026
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-text-light">
            {intro}
          </p>
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-[220px_1fr]">
            <nav
              aria-label={`${title} sections`}
              className="rounded-xl border border-secondary-dark bg-white p-5"
            >
              <p className="mb-3 text-sm font-semibold">On this page</p>
              <ul className="space-y-3">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-sm leading-6 text-primary-dark underline underline-offset-4"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="space-y-10 rounded-2xl border border-secondary-dark bg-white p-6 sm:p-9">
              {sections.map((section) => (
                <section
                  id={section.id}
                  key={section.id}
                  className="scroll-mt-24"
                >
                  <h2 className="text-xl font-bold">{section.title}</h2>
                  <div className="mt-4 space-y-4 text-sm leading-7 text-text-light [&_a]:text-primary-dark [&_a]:underline [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
