import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
export const metadata: Metadata = {
  title: "Privacy Policy | Emerssive",
  description:
    "How Emerssive Solutions handles website visits, enquiries and consultation bookings.",
  alternates: { canonical: "https://emerssive.com/privacy" },
};
export default function PrivacyPage() {
  return (
    <LegalDocument
      title="Privacy policy"
      intro="This policy explains how Emerssive Solutions handles personal information connected with emerssive.com, enquiries and consultation bookings."
      sections={[
        {
          id: "operator",
          title: "Who we are",
          content: (
            <>
              <p>
                Emerssive Solutions is based in Pakistan and operates this
                website. For the activities described here, we decide why and
                how your information is used.
              </p>
              <p>
                Contact:{" "}
                <a href="mailto:contact@emerssive.com">contact@emerssive.com</a>
                <br />
                124L, Johar Town, Lahore 54700, Pakistan.
              </p>
            </>
          ),
        },
        {
          id: "information",
          title: "Information we receive",
          content: (
            <>
              <ul>
                <li>
                  Enquiries: your name, email address, business details and any
                  information you choose to send us by email.
                </li>
                <li>
                  Bookings: the name, contact details, appointment time and
                  other information you provide through our Google Calendar
                  booking page.
                </li>
                <li>
                  Website operation: technical information such as IP address,
                  requested pages, browser information and request times can be
                  processed by our hosting provider when it delivers and
                  protects the website.
                </li>
              </ul>
              <p>
                Information from earlier enquiries, including consultation
                details or files you previously supplied, is also covered by
                this notice.
              </p>
              <p>
                The consultation page links to booking and email. It does not
                ask you to upload files or submit an intake form to a website
                database. Please avoid sending sensitive personal information,
                passwords or confidential customer records in an initial
                enquiry.
              </p>
            </>
          ),
        },
        {
          id: "purposes",
          title: "Why we use information",
          content: (
            <>
              <p>
                We use enquiry and booking information to respond to you,
                arrange meetings, discuss possible work and manage the resulting
                business relationship. Technical information is used to deliver,
                maintain and protect the website.
              </p>
              <p>
                Where UK or European data protection law applies, the relevant
                bases are our legitimate interests in responding to business
                enquiries and operating a secure website, steps requested before
                entering a contract or performing a contract with you, and legal
                obligations where applicable. If a particular optional activity
                requires consent, it must be obtained separately. An enquiry or
                booking is not a newsletter subscription.
              </p>
            </>
          ),
        },
        {
          id: "providers",
          title: "Providers and disclosures",
          content: (
            <>
              <p>
                The website is hosted on Vercel. Consultation scheduling uses
                Google Calendar. Email and communications providers process the
                messages you send and our replies. Relevant personnel use the
                information to handle your enquiry or appointment.
              </p>
              <p>
                Information about these providers is available in the{" "}
                <a href="https://vercel.com/legal/privacy-policy">
                  Vercel privacy policy
                </a>{" "}
                and{" "}
                <a href="https://policies.google.com/privacy">
                  Google privacy policy
                </a>
                . Following a link to a client site, social network or other
                third-party service subjects your interaction there to that
                service&apos;s policies.
              </p>
              <p>
                Information may also be disclosed where legally required, or
                where necessary to establish, exercise or defend legal claims.
                This policy does not authorize use of your enquiry for unrelated
                advertising.
              </p>
            </>
          ),
        },
        {
          id: "cookies",
          title: "Cookies and tracking",
          content: (
            <>
              <p>
                This website&apos;s current application does not include
                advertising pixels or an analytics tracking service. Hosting and
                third-party services can process technical request information.
                When you open Google Calendar or another external service, that
                service may use its own cookies and similar technologies.
              </p>
              <p>
                If we introduce tracking that requires consent, we will update
                this notice and provide the necessary choices before enabling
                it. Browser settings can restrict cookies, though this may
                affect external services.
              </p>
            </>
          ),
        },
        {
          id: "retention",
          title: "Retention",
          content: (
            <>
              <p>
                We do not currently operate a website enquiry database. Emails
                and booking records are held in the communications and
                scheduling services used for those interactions.
              </p>
              <p>
                Earlier form submissions may also remain in hosting logs or a
                delivery service used at the time. We have not established
                whether any such historical records exist.
              </p>
              <p>
                No fixed retention period has been set for enquiry
                correspondence. Retention must be limited to what is needed to
                handle the enquiry, manage an agreed engagement, meet applicable
                record-keeping obligations or deal with a legal claim. Hosting
                logs follow the provider&apos;s applicable settings and
                retention terms. Contact us to ask about or request deletion of
                records relating to you.
              </p>
            </>
          ),
        },
        {
          id: "international",
          title: "International processing",
          content: (
            <>
              <p>
                Emerssive Solutions operates from Pakistan. Vercel, Google and
                communications providers may process information in other
                countries. The location depends on the service and its
                configuration.
              </p>
              <p>
                International transfer requirements depend on the laws that
                apply to the information. Contact us for details relevant to
                your enquiry. This policy does not represent that any particular
                transfer agreement, certification or data residency arrangement
                is in place.
              </p>
            </>
          ),
        },
        {
          id: "rights",
          title: "Your choices and rights",
          content: (
            <>
              <p>
                You can contact{" "}
                <a href="mailto:contact@emerssive.com">contact@emerssive.com</a>{" "}
                to ask about the information we hold, correct it, request
                deletion or raise a privacy concern. We may need proportionate
                information to verify your identity.
              </p>
              <p>
                Depending on applicable law, you may also have rights to access,
                restriction, objection and portability, and to withdraw consent
                for processing based on consent. Rights can be subject to legal
                exceptions. Where applicable, you can complain to the relevant
                data protection authority. We will handle requests within the
                time required by the law that applies.
              </p>
            </>
          ),
        },
        {
          id: "scope",
          title: "Scope and updates",
          content: (
            <>
              <p>
                This policy covers the website and related enquiries and
                bookings. Processing carried out for a client project is
                governed by the relevant project agreement and any required data
                processing terms.
              </p>
              <p>
                The site is intended for business enquiries, not services
                directed at children. Please contact us if a child has supplied
                personal information. We may update this policy as the website
                or our practices change, with the revision date shown above.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
