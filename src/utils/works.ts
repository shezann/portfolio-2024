export interface Work {
  companyName: string;
  position: string;
  location: string;
  technologies: string[];
  startDate: string;
  endDate: string;
  description: string;
  bullets: string[];
}

export const works: Work[] = [
  {
    companyName: "NuraLogix",
    position: "Fullstack Software Engineer",
    location: "Toronto, ON",
    technologies: [
      "React Native",
      "Swift",
      "Kotlin",
      "WebSockets (Starscream)",
      "TurboModules",
      "Camera & Vision APIs",
      "GitHub Actions",
    ],
    startDate: "Jan 2025",
    endDate: "Apr 2025",
    description:
      "Architected and shipped a cross‑platform React Native bridge for the Anura Core SDKs, exposing camera control, session orchestration, and realtime biometrics.",
    bullets: [
      "Cut customer integration time from weeks to days by exposing camera control, session orchestration, and realtime biometrics through a React Native bridge.",
      "Authored and published an open‑source UI kit (react‑native‑deepaffex‑ui) for visualizing biometric signals with full localization support.",
      "Automated Android CI/CD in GitHub Actions: spun up cloud VMs for tests, signed AABs on merge, and pushed directly to the Play Store internal track.",
    ],
  },
  {
    companyName: "Microart",
    position: "Mobile Application Developer",
    location: "Toronto, ON",
    technologies: [
      "React Native",
      "TypeScript",
      "react‑native‑ble‑plx",
      "OpenCV",
      "Supabase",
      "GitHub Actions",
    ],
    startDate: "Jan 2024",
    endDate: "Apr 2024",
    description:
      "Led mobile initiatives improving Bluetooth reliability, computer‑vision performance, and developer velocity across multiple React Native apps.",
    bullets: [
      "Implemented a robust react‑native‑ble‑plx layer, fixing disconnect issues and boosting Bluetooth pair success from 65 % to 97 %.",
      "Optimized an OpenCV wine‑recognition pipeline, trimming average inference time by 10 % and adding latency/accuracy telemetry via Supabase.",
      "Unified three React Native apps with a reusable TypeScript design system, added unit tests, and set up a GitHub Actions CI/CD pipeline for production releases.",
    ],
  },
  {
    companyName: "Varicent",
    position: "Fullstack Developer",
    location: "Toronto, ON",
    technologies: [
      "TypeScript",
      "React",
      "Mapbox.js",
      "AWS Lambda",
      "PostgreSQL",
      "GraphQL",
    ],
    startDate: "Sep 2022",
    endDate: "Dec 2022",
    description:
      "Delivered map‑based tooling and automation accelerating sales‑operations workflows.",
    bullets: [
      "Built a geospatial bulk‑edit workflow enabling drag‑selection and batch edits of postal‑code polygons, slashing territory‑editing time.",
      "Automated tenant onboarding by refactoring Postgres schemas and shipping an AWS Lambda cloning service duplicating full workspaces in under 10 s.",
    ],
  },
  {
    companyName: "Residential Development Services",
    position: "Fullstack Developer",
    location: "Toronto, ON",
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "Apollo",
      "RESTful API",
      "MongoDB",
      "Figma",
    ],
    startDate: "Sep 2021",
    endDate: "Dec 2021",
    description:
      "Created a secure, data‑rich dashboard driving realtor productivity.",
    bullets: [
      "Designed and shipped a real‑estate dashboard for 300+ agents, unifying property and client data with realtime updates.",
      "Implemented secure auth and file uploads: JWT SSO, bcrypt passwords, and presigned S3 uploads with least‑privilege IAM.",
    ],
  },
  {
    companyName: "Espresso Capital",
    position: "Sales Analyst",
    location: "Toronto, ON",
    technologies: ["Python", "Salesforce", "Hubspot"],
    startDate: "Feb 2020",
    endDate: "May 2020",
    description: "Streamlined research pipelines for venture‑debt analysis.",
    bullets: [
      "Automated SaaS company research with Python and Selenium, replacing manual Excel workflows and accelerating venture‑debt due‑diligence.",
    ],
  },
];
