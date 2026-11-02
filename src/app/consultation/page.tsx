import type { Metadata } from "next";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Book a Consultation | Emerssive",
  description:
    "Share your project details, get routed to the right consultation, and book time with the Emerssive team.",
  alternates: {
    canonical: "https://emerssive.com/consultation",
  },
};

const nextSteps = [
  "Fill in the form — it takes about two minutes.",
  "We review your details and route you to the right consultation.",
  "Pick a time in Google Calendar that works for you.",
];

export default function ConsultationPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#e8f2ff_0%,#f4f7fb_48%,#ffffff_100%)]">
      <Navigation />

      <section className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_top_left,rgba(26,115,232,0.2),transparent_42%),radial-gradient(circle_at_top_right,rgba(255,165,0,0.12),transparent_35%)]" />

        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[32px] border border-white/70 bg-white/90 shadow-[0_35px_90px_-45px_rgba(26,115,232,0.5)] backdrop-blur">
            <div className="grid gap-8 border-b border-slate-100 px-6 py-8 sm:px-10 sm:py-10 lg:grid-cols-[minmax(0,1.45fr)_320px] lg:px-12">
              <div>
                <div className="mb-6 inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Consultation Intake
                  </span>
                </div>

                <h1 className="max-w-2xl text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-[3.2rem]">
                  Get started with a consultation that actually comes
                  prepared.
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
                  This intake helps us understand your business, challenges, and
                  timeline before we ever get on the call. That way we can show
                  up with sharper recommendations instead of asking basic
                  questions you&apos;ve already answered once.
                </p>
                <div className="mt-6 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2">
                  <p className="rounded-2xl bg-slate-50 px-4 py-3">
                    If we&apos;re a fit, we&apos;ll walk into the meeting with a
                    clear path forward.
                  </p>
                  <p className="rounded-2xl bg-slate-50 px-4 py-3">
                    If we&apos;re not, we&apos;ll tell you plainly and point you
                    to a better next step.
                  </p>
                </div>
              </div>

              <aside className="rounded-[28px] border border-slate-200 bg-slate-50/85 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  What Happens Next
                </p>
                <ul className="mt-4 space-y-4">
                  {nextSteps.map((step) => (
                    <li key={step} className="flex gap-3">
                      <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                        ✓
                      </span>
                      <span className="text-sm leading-6 text-slate-600">
                        {step}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-2xl bg-white px-4 py-4 shadow-sm">
                  <p className="text-sm font-semibold text-slate-800">
                    Typical completion time
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Most teams finish the intake in about two minutes, then go
                    straight to scheduling.
                  </p>
                </div>
              </aside>
            </div>

            <div className="px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
