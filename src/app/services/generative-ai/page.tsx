import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CONSULTATION_ENTRY_PATH } from "@/lib/consultation";

export const metadata: Metadata = {
  title: "Generative AI Solutions | Emerssive",
  description:
    "We learn how your business works, find where AI creates real impact, and build it — agents, RAG systems, and custom LLM integrations that ship to production.",
};

const metrics = [
  { value: "78K+", label: "APIs secured — Qodex.ai" },
  { value: "60%", label: "no-show reduction — BookBiteAI" },
  { value: "80%", label: "reduction in manual QA time — Qodex.ai" },
];

const capabilities = [
  {
    title: "AI Agents & Workflows",
    description:
      "Autonomous systems that handle customer queries, process documents, and run multi-step tasks without human involvement. Built on LangChain, LangGraph, and OpenAI function calling — we've shipped both single-agent and multi-agent systems in production, and know where each one actually makes sense.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      </svg>
    ),
  },
  {
    title: "RAG & Knowledge Systems",
    description:
      "Connect your documents, databases, and internal tools to an LLM. Your team gets accurate, cited answers from your actual data — not guesses from a model that's never seen it. We use Pinecone for vector search and build fast backends that hold up in production.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
        />
      </svg>
    ),
  },
  {
    title: "Fine-tuned Models",
    description:
      "When a general model gives you generic output, fine-tuning fixes it. We train the latest foundation models on your data — from OpenAI and Anthropic to Google's newest releases — so responses reflect your actual domain, not just general knowledge.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.43.992a6.759 6.759 0 010 .255c-.008.378.137.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

const process = [
  {
    phase: "Phase 1",
    title: "Understand the Problem",
    description:
      "AI isn't the answer to everything. We dig into your workflows, talk to your team, and figure out where AI actually moves the needle — and where it doesn't. No solution before the problem is clear.",
  },
  {
    phase: "Phase 2",
    title: "Prototype with Real Data",
    description:
      "We build a working prototype against your actual data and workflows. You see real outputs, test assumptions, and we iterate based on what works — not what sounds good in a pitch deck.",
  },
  {
    phase: "Phase 3",
    title: "Deploy & Measure",
    description:
      "We deploy, add monitoring, and track the metrics we agreed on in Phase 1. If the numbers don't move the way we expected, we figure out why — and fix it.",
  },
];

const caseStudies = [
  {
    company: "BookBiteAI",
    subtitle: "AI Restaurant Operations",
    problem:
      "Restaurant staff drowning in reservation calls, texts, and DMs across multiple channels. Missed messages meant lost bookings.",
    solution:
      "Built a multi-tenant AI chatbot platform across WhatsApp, Instagram, and Messenger. Responds in under 3 seconds, auto-detects 15+ languages, tracks guest profiles cross-platform, and sends smart reminders that cut no-shows by 60%. Human handoff whenever the AI is uncertain.",
    metrics: [
      { value: "60%", label: "no-show reduction" },
      { value: "15+", label: "languages supported" },
      { value: "3", label: "messaging channels" },
    ],
  },
  {
    company: "Alcemi",
    subtitle: "AI Shopping Agent for Shopify",
    problem:
      "Shopify stores with large catalogs lose customers to friction — too many options, no guidance, and support teams buried in repetitive queries.",
    solution:
      "We built Alcemi end-to-end: a conversational AI agent powered by Claude and Gemini, embedded directly in any Shopify store. It finds products through natural language, handles support queries, understands voice input, and guides customers to checkout. Full admin dashboard, analytics tracking, deployed on GCP — now live on the Shopify App Store.",
    metrics: [
      { value: "40+", label: "languages supported" },
      { value: "30%", label: "Shopify conversion boost" },
    ],
  },
  {
    company: "Qodex.ai",
    subtitle: "AI-Powered API Testing",
    problem:
      "API testing is manual, tedious, and can't keep pace with rapid development cycles.",
    solution:
      "We built two AI agents from scratch: one that discovers your APIs automatically from schemas and live endpoints, another that turns plain English into multi-step test scenarios. The whole thing runs without touching your test suite manually — and scales as your API surface grows.",
    metrics: [
      { value: "~80%", label: "reduction in test time" },
      { value: "78K+", label: "APIs secured" },
    ],
  },
];

export default function GenerativeAIPage() {
  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-900 to-primary-dark/30">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/#services"
            className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Services
          </Link>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Your AI isn&apos;t<br />
            <span className="text-accent">someone else&apos;s use case</span>
          </h1>

          <p className="text-xl text-gray-300 mb-10 max-w-2xl">
            Before we write a line of code, we learn how your business actually
            works. Then we build the AI that belongs in it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href={CONSULTATION_ENTRY_PATH}
              className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Book a Strategy Call
            </Link>
            <a
              href="#process"
              className="inline-flex items-center justify-center border border-gray-600 text-white px-8 py-4 rounded-full text-base hover:bg-white/5 transition-all duration-300"
            >
              See How It Works
            </a>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700/50">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-sm text-primary font-medium uppercase tracking-wide mb-3">
              What We Build
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
              AI solutions that run your business
            </h2>
            <p className="text-lg text-text-light max-w-2xl">
              Not chatbots that frustrate users. Real AI systems that understand
              context, take action, and get better over time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability) => (
              <div key={capability.title} className="group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-text mb-3">
                  {capability.title}
                </h3>
                <p className="text-text-light leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-sm text-primary font-medium uppercase tracking-wide mb-3">
              Our Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
              Problem first, AI second
            </h2>
            <p className="text-lg text-text-light max-w-2xl">
              We don&apos;t start with a solution looking for a problem. We start by
              understanding what&apos;s actually costing you time and money — then
              figure out if AI is the right tool.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={item.phase} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gray-300 -translate-x-1/2" />
                )}
                <div className="bg-white rounded-2xl p-8 border border-gray-100 h-full">
                  <div className="text-sm font-semibold text-primary mb-3">
                    {item.phase}
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-sm text-primary font-medium uppercase tracking-wide mb-3">
              Real Results
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
              AI that shipped — and delivered
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.company}
                className="bg-secondary rounded-2xl p-8 border border-gray-100"
              >
                <div className="text-sm font-medium text-primary mb-1">
                  {study.subtitle}
                </div>
                <h3 className="text-xl font-semibold text-text mb-3">
                  {study.company}
                </h3>
                <p className="text-sm text-text-light mb-3 italic">
                  {study.problem}
                </p>
                <p className="text-text-light leading-relaxed mb-5">
                  {study.solution}
                </p>
                <div className="flex gap-6 pt-4 border-t border-gray-200">
                  {study.metrics.map((m) => (
                    <div key={m.label}>
                      <span className="text-2xl font-bold text-accent">
                        {m.value}
                      </span>
                      <p className="text-xs text-text-light">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-8">
            What our clients say
          </p>
          <div className="text-4xl text-gray-300 font-serif leading-none mb-6">
            &ldquo;
          </div>
          <p className="text-lg text-text leading-relaxed mb-6">
            Umar helped our team with many projects, from average to high
            complexity. Besides his excellent technical skills, Umar is a good
            communicator and a proactive team member, positively influencing the
            whole team&apos;s performance.
          </p>
          <div>
            <p className="font-semibold text-text">Adi Chirilov</p>
            <p className="text-sm text-text-light">CTO, AppSeed</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-900 to-primary-dark/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to put AI to work?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Book a free 30-minute AI audit. We&apos;ll look at how your business
            actually works, find the spots AI can help most, and tell you what
            to build first.
          </p>
          <Link
            href={CONSULTATION_ENTRY_PATH}
            className="inline-flex items-center justify-center bg-white text-gray-900 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Book a Strategy Call →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
