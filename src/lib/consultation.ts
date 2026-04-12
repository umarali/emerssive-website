export const CONSULTATION_ENTRY_PATH = "/consultation";
export const DEFAULT_GOOGLE_CALENDAR_URL =
  "https://calendar.app.google/U3z2GqSza9Fhch8e9";

export const MAX_ATTACHMENT_SIZE_BYTES = 10 * 1024 * 1024; // 10 MB

export const SOLUTION_TYPE_OPTIONS = [
  "AI agents and automation",
  "Web app development",
  "Mobile app development",
  "Existing product improvements",
  "Not sure yet",
] as const;

export const HEADCOUNT_OPTIONS = [
  "1–10",
  "11–50",
  "51–200",
  "201–500",
  "500+",
] as const;

export const ANNUAL_REVENUE_OPTIONS = [
  "Pre-revenue",
  "Under $500K",
  "$500K–$2M",
  "$2M–$10M",
  "$10M+",
] as const;

export const PROJECT_STAGE_OPTIONS = [
  "Just an idea",
  "Validated concept",
  "MVP / early product",
  "Scaling an existing product",
  "Replacing / improving existing system",
] as const;

export const BUDGET_OPTIONS = [
  "Under $10K",
  "$10K–$25K",
  "$25K–$50K",
  "$50K–$100K",
  "$100K+",
  "Not sure yet",
] as const;

export const TIMELINE_OPTIONS = [
  "ASAP (within 4 weeks)",
  "1–3 months",
  "3–6 months",
  "6+ months",
  "Flexible",
] as const;

export type ConsultationFormValues = {
  firstName: string;
  lastName: string;
  companyName: string;
  role: string;
  businessEmail: string;
  phoneNumber: string;
  solutionType: string;
  headcount: string;
  annualRevenue: string;
  projectStage: string;
  budget: string;
  timeline: string;
  problemSummary: string;
};

export type ConsultationRoute = "ai" | "product" | "discovery" | "general";

export type ConsultationFormErrors = Partial<
  Record<keyof ConsultationFormValues | "attachment", string>
>;

export const EMPTY_CONSULTATION_FORM_VALUES: ConsultationFormValues = {
  firstName: "",
  lastName: "",
  companyName: "",
  role: "",
  businessEmail: "",
  phoneNumber: "",
  solutionType: "",
  headcount: "",
  annualRevenue: "",
  projectStage: "",
  budget: "",
  timeline: "",
  problemSummary: "",
};

export const ROUTE_DETAILS: Record<
  ConsultationRoute,
  { label: string; description: string }
> = {
  ai: {
    label: "AI strategy calendar",
    description: "Best for automation, agents, and AI-enabled workflows.",
  },
  product: {
    label: "product consultation calendar",
    description: "Best for web, mobile, and existing product improvement work.",
  },
  discovery: {
    label: "discovery review queue",
    description: "Best for early-stage ideas that need scope shaping first.",
  },
  general: {
    label: "general consultation calendar",
    description: "Best for anything that needs a broader first conversation.",
  },
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isBlank(value: string) {
  return value.trim().length === 0;
}

export function validateConsultationFormValues(
  values: ConsultationFormValues,
  attachment?: File | null,
): ConsultationFormErrors {
  const errors: ConsultationFormErrors = {};

  if (isBlank(values.firstName)) {
    errors.firstName = "First name is required.";
  }
  if (isBlank(values.lastName)) {
    errors.lastName = "Last name is required.";
  }
  if (isBlank(values.companyName)) {
    errors.companyName = "Company name is required.";
  }
  if (isBlank(values.role)) {
    errors.role = "Your role is required.";
  }
  if (isBlank(values.businessEmail)) {
    errors.businessEmail = "Business email is required.";
  } else if (!EMAIL_PATTERN.test(values.businessEmail.trim())) {
    errors.businessEmail = "Enter a valid business email.";
  }
  if (!(SOLUTION_TYPE_OPTIONS as readonly string[]).includes(values.solutionType)) {
    errors.solutionType = "Select what you need help with.";
  }
  if (isBlank(values.headcount)) {
    errors.headcount = "Select your headcount.";
  }
  if (isBlank(values.annualRevenue)) {
    errors.annualRevenue = "Select your annual revenue.";
  }
  if (isBlank(values.projectStage)) {
    errors.projectStage = "Select your project stage.";
  }
  if (isBlank(values.budget)) {
    errors.budget = "Select your estimated budget.";
  }
  if (isBlank(values.timeline)) {
    errors.timeline = "Select your ideal timeline.";
  }
  if (isBlank(values.problemSummary)) {
    errors.problemSummary = "Tell us a bit about what you're trying to solve.";
  } else if (values.problemSummary.trim().length < 20) {
    errors.problemSummary = "A little more detail will help us prepare well.";
  }
  if (attachment && attachment.size > MAX_ATTACHMENT_SIZE_BYTES) {
    errors.attachment = "Please upload a file smaller than 10 MB.";
  }

  return errors;
}

export function deriveConsultationRoute(
  values: ConsultationFormValues,
): ConsultationRoute {
  if (values.solutionType === "AI agents and automation") {
    return "ai";
  }
  if (
    values.solutionType === "Web app development" ||
    values.solutionType === "Mobile app development" ||
    values.solutionType === "Existing product improvements"
  ) {
    return "product";
  }
  if (values.solutionType === "Not sure yet") {
    return "discovery";
  }
  return "general";
}
