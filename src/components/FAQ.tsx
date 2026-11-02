import Link from "next/link";

const faqs = [
  {
    question: "Do I need a detailed specification?",
    answer:
      "No. Start with the problem, who experiences it and what you want to change. Bring any existing systems or constraints so we can discuss a useful scope.",
  },
  {
    question: "Can you work with an existing product or team?",
    answer:
      "Yes. Our project work includes frontend modernization, API integration and shared mobile codebases. We can discuss a focused contribution alongside your team or a separately scoped build.",
  },
  {
    question: "How do you estimate cost and timeline?",
    answer:
      "They depend on scope, integrations and the state of the existing system. We discuss those constraints before proposing a project estimate and milestones. A consultation does not commit you to a development project.",
  },
  {
    question: "Does every project need AI?",
    answer:
      "No. We consider whether a conventional application, integration or workflow change would solve the problem. AI work should have a clear use case and a way to evaluate its output.",
  },
  {
    question: "What should I share before the call?",
    answer:
      "A short description of the problem, the people affected and any important constraints. Share only material you are authorized to disclose. Avoid passwords, personal customer records and confidential documents in the initial enquiry.",
  },
];
export function FAQ() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-white px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
          Before we talk
        </h2>
        <div className="divide-y divide-secondary-dark border-y border-secondary-dark">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="cursor-pointer text-base font-semibold leading-7 text-text">
                {faq.question}
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-text-light">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start gap-5 rounded-2xl bg-secondary p-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-bold">Have a project in mind?</h3>
            <p className="mt-2 text-sm leading-6 text-text-light">
              Start with what needs to work better.
            </p>
          </div>
          <Link
            href="/consultation"
            className="inline-flex flex-none rounded-full bg-primary-dark px-6 py-3 text-sm font-semibold text-white hover:bg-primary"
          >
            Talk about your project
          </Link>
        </div>
      </div>
    </section>
  );
}
