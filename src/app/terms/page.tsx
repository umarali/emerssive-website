import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument } from "@/components/LegalDocument";
export const metadata: Metadata = {
  title: "Terms and Conditions | Emerssive",
  description:
    "Terms for using the Emerssive Solutions website and making an enquiry.",
  alternates: { canonical: "https://emerssive.com/terms" },
};
export default function TermsPage() {
  return (
    <LegalDocument
      title="Terms and conditions"
      intro="These terms concern use of emerssive.com and initial enquiries to Emerssive Solutions. Paid work is governed by a separate agreement."
      sections={[
        {
          id: "operator",
          title: "Website operator",
          content: (
            <>
              <p>
                This website is operated by Emerssive Solutions, based in
                Pakistan. Contact{" "}
                <a href="mailto:contact@emerssive.com">contact@emerssive.com</a>{" "}
                or write to 124L, Johar Town, Lahore 54700, Pakistan.
              </p>
              <p>
                Please read these terms when using the website. If you do not
                accept them, do not use the website.
              </p>
            </>
          ),
        },
        {
          id: "scope",
          title: "Enquiries and services",
          content: (
            <>
              <p>
                The website describes our AI, web and mobile development
                services and selected project experience. Sending an enquiry or
                booking a consultation does not create a development agreement,
                reserve delivery capacity or commit either party to a project.
              </p>
              <p>
                Scope, fees, milestones, acceptance, intellectual property
                ownership, confidentiality and support for paid work must be
                agreed separately in writing. A project agreement governs that
                engagement if it differs from these website terms.
              </p>
            </>
          ),
        },
        {
          id: "use",
          title: "Permitted use",
          content: (
            <>
              <p>
                You may browse this website and use it to make legitimate
                business enquiries. Do not use it unlawfully, impersonate
                another person, attempt unauthorized access, introduce malicious
                code, or interfere with the website or other users.
              </p>
              <p>
                Supply accurate contact information and share only material you
                are entitled to disclose.
              </p>
            </>
          ),
        },
        {
          id: "content",
          title: "Content and intellectual property",
          content: (
            <>
              <p>
                Website text, design and other content belong to Emerssive
                Solutions or the relevant rights holders. You may view the
                content for your own evaluation of our services. Reproduction or
                reuse beyond what applicable law permits requires the relevant
                rights holder&apos;s permission.
              </p>
              <p>
                Client names, logos, products and third-party trademarks belong
                to their respective owners. Project descriptions concern the
                contribution described; they do not imply ownership of a
                client&apos;s business, its entire product, or endorsement by
                every organization it serves.
              </p>
            </>
          ),
        },
        {
          id: "submissions",
          title: "Information you share",
          content: (
            <>
              <p>
                You retain your rights in material you send us. We may use it to
                evaluate and respond to your enquiry and to arrange the
                requested conversation.
              </p>
              <p>
                Do not send passwords, sensitive personal data or confidential
                customer information through an initial enquiry. A website
                enquiry does not by itself create a non-disclosure agreement.
                Agree appropriate confidentiality arrangements before sharing
                sensitive business material. Personal information is handled as
                described in our <Link href="/privacy">privacy policy</Link>.
              </p>
            </>
          ),
        },
        {
          id: "third-parties",
          title: "External services",
          content: (
            <p>
              Scheduling links open Google Calendar. Client sites, social
              networks and other linked services are operated by third parties
              and have their own terms and privacy policies. We do not control
              their content, availability or operation.
            </p>
          ),
        },
        {
          id: "information",
          title: "Information and availability",
          content: (
            <>
              <p>
                Website content provides general information about our services
                and past work. Past projects do not guarantee the same result,
                cost or timeline for another engagement. Any project estimate or
                commitment must be agreed for that project.
              </p>
              <p>
                We may correct content and change or suspend website features.
                We do not guarantee uninterrupted availability or that all
                website information will be free of errors.
              </p>
            </>
          ),
        },
        {
          id: "liability",
          title: "Responsibility and mandatory rights",
          content: (
            <>
              <p>
                To the extent permitted by applicable law, we exclude liability
                for indirect or consequential loss arising from use of this
                informational website or reliance on its general content.
                Liability for paid services is addressed in the relevant project
                agreement.
              </p>
              <p>
                Nothing in these terms excludes liability that cannot lawfully
                be excluded, including liability for fraud, or limits mandatory
                rights and protections under applicable law.
              </p>
            </>
          ),
        },
        {
          id: "law",
          title: "Applicable law and disputes",
          content: (
            <p>
              These website terms are governed by the laws of Pakistan, subject
              to mandatory laws and rights that apply to you. Please contact us
              first about a dispute so we can try to resolve it. These terms do
              not impose mandatory arbitration or remove any right to a court or
              remedy that applicable law protects.
            </p>
          ),
        },
        {
          id: "changes",
          title: "Changes and contact",
          content: (
            <p>
              We may revise these website terms. The date above identifies the
              current version. Changes to these website terms do not by
              themselves amend an existing project agreement. Questions can be
              sent to{" "}
              <a href="mailto:contact@emerssive.com">contact@emerssive.com</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
