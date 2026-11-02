export const projects = [
  {
    slug: "qodex",
    name: "Qodex.ai",
    category: "AI / developer tools",
    title: "Making API testing a conversation",
    summary:
      "AI agents for discovering APIs and turning plain-language requests into test scenarios.",
    logo: "/assets/customers/qodexai-removebg-preview.png",
    href: "https://qodex.ai",
    challenge:
      "Qodex needed API discovery and test generation at the core of its product. The work involved understanding API schemas, maintaining context between requests, and executing multi-step test scenarios.",
    contribution:
      "We built foundational platform architecture and two AI agents: an API Discovery Agent and a Test Scenario Creation Agent. The work connected a conversational React interface to a FastAPI backend, persistent storage and background workers.",
    deliverables: [
      "API discovery from schemas and endpoints",
      "Plain-language test scenario generation",
      "React and TypeScript frontend with real-time results",
      "Containerized deployment and CI/CD on Google Cloud",
    ],
    stack: [
      "Python / FastAPI",
      "React / TypeScript",
      "PostgreSQL / Redis",
      "Google Cloud / Kubernetes",
    ],
    boundary:
      "Our engagement covered the platform's foundations. Qodex's team continued developing the product after that engagement.",
  },
  {
    slug: "frontline-education",
    name: "Frontline Education",
    category: "Education / platform modernization",
    title: "Modernizing an established education platform",
    summary:
      "Responsive frontend work and API integration for a legacy K-12 software platform.",
    logo: "/assets/customers/frontline-education-removebg-preview.png",
    href: "https://www.frontlineeducation.com",
    challenge:
      "A legacy ExtJS frontend limited responsiveness across screen sizes. The platform also needed work on asset delivery and the integrations connecting its modules.",
    contribution:
      "Our work focused on frontend modernization using HTML5 and CSS3, responsive layouts, asset loading and API integration between platform modules.",
    deliverables: [
      "Responsive frontend modernization",
      "CSS, JavaScript and asset delivery improvements",
      "API integration between system modules",
    ],
    stack: ["HTML5 / CSS3", "Responsive design", "API integration"],
    boundary:
      "This summary describes our frontend and integration contribution. It does not imply that we built Frontline's entire product portfolio.",
  },
  {
    slug: "code3apps",
    name: "Code3Apps",
    category: "Mobile / exam preparation",
    title: "One codebase, multiple exam-prep apps",
    summary:
      "A shared React Native codebase and a central CMS for first-responder study content.",
    logo: null,
    href: "https://code3apps.com",
    challenge:
      "Separate mobile codebases and content packaged into app binaries made updates difficult to maintain. New study material depended on app rebuilds and releases.",
    contribution:
      "We built C3Suite, a Rails content management system, and a unified React Native codebase that produces multiple branded app builds. Content management moved into the CMS, separate from the app code.",
    deliverables: [
      "Central management for quizzes, flashcards and study content",
      "Shared React Native codebase with branded build variants",
      "Offline study support",
      "Build and submission automation with Fastlane and GitHub Actions",
    ],
    stack: [
      "React Native",
      "Ruby on Rails",
      "PostgreSQL",
      "Fastlane / GitHub Actions",
    ],
    boundary:
      "The shared codebase produces multiple apps. It is not a claim that the products became a single app or app-store listing.",
  },
];
