import Link from "next/link";

export function ProblemFirst() {
  return (
    <section
      id="approach"
      className="scroll-mt-24 border-b border-secondary-dark bg-white px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div>
          <p className="mb-3 text-sm font-semibold text-primary-dark">
            How we work
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Start with the problem.
            <br />
            Define the next step.
          </h2>
          <p className="mt-5 max-w-md leading-7 text-text-light">
            A useful first conversation connects your business goal to the
            systems, people and constraints behind it.
          </p>
          <Link
            href="/consultation"
            className="mt-6 inline-block text-sm font-semibold text-primary-dark underline underline-offset-4"
          >
            Tell us what needs to change
          </Link>
        </div>
        <ol className="divide-y divide-secondary-dark">
          {[
            [
              "Understand the work",
              "Bring the workflow, product idea or platform issue. We discuss what happens today and where it gets stuck.",
            ],
            [
              "Define a useful scope",
              "Identify the users, integrations and constraints. Agree what a first milestone should demonstrate before expanding the build.",
            ],
            [
              "Build, review and refine",
              "Review working software against the agreed scope. Use what we learn to decide the next milestone.",
            ],
          ].map(([title, detail]) => (
            <li key={title} className="py-6 first:pt-0">
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-7 text-text-light">
                {detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
