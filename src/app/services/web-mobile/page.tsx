import type { Metadata } from "next";
import { ServiceDetail } from "@/components/ServiceDetail";
export const metadata: Metadata = {
  title: "Web & Mobile Development | Emerssive",
  description:
    "Web and mobile product development, frontend modernization and API integration. Explore Emerssive's Frontline Education and Code3Apps work.",
  alternates: { canonical: "https://emerssive.com/services/web-mobile" },
};
export default function WebMobilePage() {
  return (
    <ServiceDetail
      label="Web / Mobile"
      title="Build the product. Improve the foundation."
      description="Develop a web or mobile application, modernize an existing interface, or consolidate the systems behind multiple products."
      capabilities={[
        {
          title: "Frontend modernization",
          detail:
            "Improve an existing application's interface, responsive layouts and API integration. Our Frontline Education work focused on the frontend and the connections between platform modules.",
        },
        {
          title: "Mobile applications",
          detail:
            "Build cross-platform applications with React Native. Our Code3Apps work used a shared codebase to produce multiple branded apps, with support for offline study.",
        },
        {
          title: "Content and product systems",
          detail:
            "Connect customer-facing applications to the tools used to manage them. Work can include content management, integrations and build automation, depending on the agreed scope.",
        },
      ]}
      projectSlugs={["frontline-education", "code3apps"]}
    />
  );
}
