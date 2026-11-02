import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { DEFAULT_GOOGLE_CALENDAR_URL } from "@/lib/consultation";
export const metadata: Metadata = {
  title: "Talk About Your Project | Emerssive",
  description:
    "Book a conversation with Emerssive Solutions through Google Calendar, or email a short project brief.",
  alternates: { canonical: "https://emerssive.com/consultation" },
};
export default function ConsultationPage() {
  const calendarUrl =
    process.env.CONSULTATION_CALENDAR_URL_GENERAL ||
    DEFAULT_GOOGLE_CALENDAR_URL;
  return (
    <>
      <Navigation />
      <main id="main-content" className="px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_1fr]">
          <section>
            <p className="text-sm font-semibold text-primary-dark">
              Let&apos;s talk
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              What needs to work better?
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-text-light">
              Tell us about the workflow, product idea or platform you want to
              improve. Start with the problem and the constraints that matter.
            </p>
            <div className="mt-8 rounded-2xl border border-secondary-dark bg-white p-7">
              <h2 className="text-xl font-bold">Choose a time to talk</h2>
              <p className="mt-3 text-sm leading-7 text-text-light">
                Booking opens Google Calendar. You can review the available
                times and provide your booking details there.
              </p>
              <a
                href={calendarUrl}
                className="mt-6 inline-flex rounded-full bg-primary-dark px-6 py-3 text-sm font-semibold text-white hover:bg-primary"
              >
                Open booking calendar{" "}
                <span aria-hidden="true" className="ml-2">
                  ↗
                </span>
              </a>
              <p className="mt-5 text-sm leading-7 text-text-light">
                Prefer email? Send a short brief to{" "}
                <a
                  href="mailto:contact@emerssive.com"
                  className="text-primary-dark underline underline-offset-4"
                >
                  contact@emerssive.com
                </a>
                .
              </p>
            </div>
            <p className="mt-5 text-sm leading-7 text-text-light">
              Read our{" "}
              <Link
                href="/privacy"
                className="text-primary-dark underline underline-offset-4"
              >
                privacy policy
              </Link>{" "}
              and{" "}
              <Link
                href="/terms"
                className="text-primary-dark underline underline-offset-4"
              >
                website terms
              </Link>
              . Booking a call does not commit you to a development project.
            </p>
          </section>
          <aside className="self-start rounded-2xl border border-secondary-dark bg-white p-7 sm:p-9">
            <h2 className="text-xl font-bold">
              Useful context for the conversation
            </h2>
            <ul className="mt-5 list-disc space-y-4 pl-5 text-sm leading-7 text-text-light">
              <li>What happens today, and where it gets difficult.</li>
              <li>Who will use the software and what they need to do.</li>
              <li>
                Your existing tools, integrations and technical constraints.
              </li>
              <li>Any target date or budget you want us to consider.</li>
            </ul>
            <p className="mt-8 border-t border-secondary-dark pt-6 text-sm leading-7 text-text-light">
              Keep the initial brief non-confidential. Do not send passwords,
              customer records or material you are not authorized to share. We
              can discuss confidentiality arrangements before reviewing
              sensitive information.
            </p>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
