"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What does 'problem first' mean in practice?",
    answer:
      "We don't start a project by picking tools or writing code. We start by mapping the actual work slowing your business down — then figure out the simplest thing that fixes it. Sometimes that's an AI agent. Sometimes it's a workflow change and a simple dashboard. We tell you which before we start building.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Usually within a week of an initial call. For scoped projects, we typically ship a working prototype or first milestone in 2–4 weeks. We don't run long discovery phases that delay your real work.",
  },
  {
    question: "Do I need a detailed spec or a clear idea before reaching out?",
    answer:
      "No — and many clients don't have either. Some come with a vague sense that something could work better but can't name exactly what. Others have a rough idea but no spec. That's fine. The strategy call is designed to figure it out together. We ask the right questions, map what's actually slowing things down, and tell you honestly whether we can help and what that looks like.",
  },
  {
    question: "What's the minimum project budget?",
    answer:
      "Our minimum engagement starts at $2,500. Most projects run between $5K and $30K depending on scope. We'll give you a clear estimate before any work begins — no surprises.",
  },
  {
    question: "Do you use off-the-shelf AI tools or build custom?",
    answer:
      "Both. We work across OpenAI, Claude, and Gemini — and we pick based on what fits the job, not what's trendy. Sometimes the right answer is a custom-built agent. Sometimes it's wiring an existing model into your workflow. And sometimes it's a simple no-code tool. We tell you which before we start.",
  },
  {
    question: "Can you work with our existing team or codebase?",
    answer:
      "Yes. We've embedded in existing engineering teams, modernized legacy codebases, and built systems that integrate with what you already have. We adapt to your setup — not the other way around.",
  },
];

export function FAQ() {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  const toggleFAQ = (index: number) => {
    const newOpenIndexes = new Set(openIndexes);
    if (newOpenIndexes.has(index)) {
      newOpenIndexes.delete(index);
    } else {
      newOpenIndexes.add(index);
    }
    setOpenIndexes(newOpenIndexes);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl text-text mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-lg transition-colors duration-300 hover:bg-gray-100 ${
                openIndexes.has(index) ? "bg-gray-100" : ""
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between transition-colors duration-300 focus:outline-none"
                aria-expanded={openIndexes.has(index)}
                aria-controls={`faq-content-${index}`}
              >
                <h3 className="text-lg pr-4 text-gray-800">{faq.question}</h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndexes.has(index) ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                id={`faq-content-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndexes.has(index)
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Still have questions? Let's talk about your project.
          </p>
          <a
            href="https://calendar.app.google/U3z2GqSza9Fhch8e9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-full text-base font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2"
          >
            Book a Call →
          </a>
        </div> */}
      </div>
    </section>
  );
}
