import type { Metadata } from "next";
import { ServiceDetail } from "@/components/ServiceDetail";
export const metadata: Metadata = {
  title: "Generative AI Solutions | Emerssive",
  description:
    "AI agents, workflow automation and language model integrations. Explore Emerssive's foundational work on Qodex.ai.",
  alternates: { canonical: "https://emerssive.com/services/generative-ai" },
};
export default function GenerativeAIPage() {
  return (
    <ServiceDetail
      label="Generative AI"
      title="Connect AI to a useful workflow."
      description="Build an AI-enabled product or connect language models to an existing process. Start with the task, the available data and how you will evaluate the result."
      capabilities={[
        {
          title: "Agents and workflow integration",
          detail:
            "Connect model outputs to application logic, APIs and background tasks. Define where the system can act and where a person needs to review its work.",
        },
        {
          title: "Knowledge and document workflows",
          detail:
            "Make relevant information available to a model through retrieval and integrations. Evaluate answers against representative examples and the underlying sources.",
        },
        {
          title: "AI-enabled product development",
          detail:
            "Build the application around the model: interfaces, storage, job processing and deployment. Our Qodex engagement combined AI agents with those product foundations.",
        },
      ]}
      projectSlugs={["qodex"]}
    />
  );
}
