import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CONSULTATION_ENTRY_PATH } from "@/lib/consultation";

export const metadata: Metadata = {
  title: "Web & Mobile Development | Emerssive",
  description:
    "From e-commerce platforms handling millions of monthly visitors to enterprise systems managing billions in transactions — we build web and mobile products that hold up as your business grows.",
};

const metrics = [
  { value: "5M+", label: "monthly visitors — Puffbar" },
  { value: "300%", label: "YoY revenue growth — Puffbar" },
  { value: "~70%", label: "reduction in dev time — Code3Apps" },
];

const capabilities = [
  {
    title: "Platform Modernization",
    description:
      "Legacy systems that can't scale get in the way of growth. We migrate, rebuild, and integrate — moving from outdated stacks to React, Next.js, and modern APIs without taking your product offline.",
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
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </svg>
    ),
  },
  {
    title: "Mobile Apps",
    description:
      "Cross-platform apps with React Native. One codebase, native performance on iOS and Android. We've consolidated 12+ separate apps into a single maintainable product — shipped to both app stores simultaneously.",
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
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
    ),
  },
  {
    title: "E-Commerce Platforms",
    description:
      "Shopify Plus builds, custom storefronts, and DTC platforms built for scale. Role-based management, order processing dashboards, and the infrastructure to handle traffic spikes without breaking.",
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
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
    ),
  },
];

const process = [
  {
    phase: "Phase 1",
    title: "Scope & Blueprint",
    description:
      "Define core features, tech stack, and architecture. No fluff — just what you need to launch and learn. You leave this phase knowing exactly what gets built and why.",
  },
  {
    phase: "Phase 2",
    title: "Build Sprints",
    description:
      "Two-week cycles with weekly demos. You see progress, give feedback, and course-correct early — before it costs time to undo.",
  },
  {
    phase: "Phase 3",
    title: "Launch & Handoff",
    description:
      "Production deployment, documentation, and knowledge transfer. Your product is live, your team owns it, and we're on call if something comes up.",
  },
];

const caseStudies = [
  {
    company: "Frontline Education",
    subtitle: "K-12 Platform · 80,000+ Schools · Acquired for $3.75B",
    problem:
      "Legacy ExtJS frontend couldn't deliver modern UX. Slow page loads, poor responsiveness, and couldn't handle peak concurrent users during school hours.",
    solution:
      "We modernized the entire frontend — replacing legacy ExtJS with responsive HTML5/CSS3, rebuilding the API integration layer, and reworking how assets load. The platform now handles over a million monthly visitors without slowing down during peak hours.",
    metrics: [
      { value: "1.2M+", label: "monthly visitors" },
      { value: "~60%", label: "faster page loads" },
      { value: "~25%", label: "more concurrent users" },
    ],
  },
  {
    company: "Puffbar",
    subtitle: "DTC E-Commerce · #1 U.S. E-Cigarette Brand · $150M+ Retail Volume",
    problem:
      "A fast-growing brand needed a platform that could handle explosive traffic and sales volume without performance degrading under load.",
    solution:
      "Built and optimized the full e-commerce platform with role-based management, sales tracking dashboards, and order processing systems built for scale. The platform grew with the business — not against it.",
    metrics: [
      { value: "$150M+", label: "annual retail volume" },
      { value: "5M+", label: "monthly visitors" },
      { value: "300%", label: "YoY revenue growth" },
    ],
  },
  {
    company: "Fluxx",
    subtitle: "Grants Management Platform",
    problem:
      "450+ foundations managing $23B+ in grants needed better reporting, compliance tools, and financial system integrations that their platform didn't have.",
    solution:
      "We added what the platform was missing: custom reporting for Citi Foundation, USAID, and LLS, enhanced tagging, risk management tools, financial integration with Intacct, and architectural work that brought system load down.",
    metrics: [
      { value: "$23B+", label: "grants managed annually" },
      { value: "450+", label: "foundations on platform" },
    ],
  },
  {
    company: "Code3Apps",
    subtitle: "Mobile App Consolidation",
    problem:
      "12+ standalone mobile apps had grown into an unmanageable codebase. Updates were slow, inconsistent, and expensive to maintain separately.",
    solution:
      "Consolidated all apps into a single React Native codebase with a custom CMS that feeds content to every app from one place. Ongoing development went from maintaining 12 separate projects to one.",
    metrics: [
      { value: "12+", label: "apps unified into one codebase" },
      { value: "~70%", label: "reduction in ongoing dev time" },
    ],
  },
];

export default function WebMobilePage() {
  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-900 to-indigo-900/40">
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
            Built to ship.
            <br />
            <span className="text-accent">Built to scale.</span>
          </h1>

          <p className="text-xl text-gray-300 mb-10 max-w-2xl">
            From early-stage products to platforms handling millions of monthly
            visitors — we build web and mobile software that holds up as your
            business grows.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href={CONSULTATION_ENTRY_PATH}
              className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Discuss Your Project
            </Link>
            <a
              href="#process"
              className="inline-flex items-center justify-center border border-gray-600 text-white px-8 py-4 rounded-full text-base hover:bg-white/5 transition-all duration-300"
            >
              See Our Process
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
              Products built for growth
            </h2>
            <p className="text-lg text-text-light max-w-2xl">
              Not throwaway prototypes. Production-ready software with clean
              code, solid architecture, and room to scale.
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
              Predictable sprints, visible progress
            </h2>
            <p className="text-lg text-text-light max-w-2xl">
              Weekly demos, real feedback, no surprises at the end.
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
              Platforms we built — and what they delivered
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
            Umar and Code3Apps worked together for a couple years and Umar
            demonstrated a great work ethic, good technical knowledge (our
            project was a web based platform with an app interface), and was
            overall a pleasure to interact with.
          </p>
          <div>
            <p className="font-semibold text-text">Lindsey Holmes</p>
            <p className="text-sm text-text-light">
              Chief of Product, Code3Apps
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-900 to-indigo-900/40">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to build?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Tell us what you&apos;re building. We&apos;ll give you an honest
            assessment, a realistic timeline, and clear next steps — no
            obligations.
          </p>
          <Link
            href={CONSULTATION_ENTRY_PATH}
            className="inline-flex items-center justify-center bg-white text-gray-900 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Start a Conversation →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
