export const works: Work[] = [
  {
    companyName: "microart",
    position: "mobile developer",
    location: "Toronto, ON",
    technologies: [
      "React Native",
      "Swift",
      "MongoDB",
      "Apollo Server",
      "NodeJS",
    ],
    startDate: "Jan 2024",
    endDate: "Apr 2024",
    description:
      "worked with the mobile development team to get multiple apps ready to publish on the app stores for multiple devices and platforms",
    bullets: ["Bullet point 1", "Bullet point 2", "Bullet point 3"],
  },
  {
    companyName: "varicent",
    position: "fullstack developer",
    location: "Toronto, ON",
    technologies: ["TypeScript", "React", "MongoDB", "Apollo Server", "NodeJS"],
    startDate: "Sep 2022",
    endDate: "Dec 2022",
    description:
      "worked on a map based web app to manage sales teams. implemented various user facing features to allow sales persons and managers to improve their workflow",
    bullets: ["Bullet point 1", "Bullet point 2", "Bullet point 3"],
  },
  {
    companyName: "rds brokerage",
    position: "fullstack developer",
    location: "Toronto, ON",
    technologies: ["TypeScript", "React", "MongoDB", "Apollo Server", "NodeJS"],
    startDate: "Sep 2021",
    endDate: "Dec 2021",
    description:
      "worked on a dashboard for realtors to manage their clients and units. designed and developed web app from scratch and presented to users",
    bullets: ["Bullet point 1", "Bullet point 2", "Bullet point 3"],
  },
  {
    companyName: "espresso capital",
    position: "sales analyst",
    location: "Toronto, ON",
    technologies: ["TypeScript", "React", "MongoDB", "Apollo Server", "NodeJS"],
    startDate: "Feb 2020",
    endDate: "May 2020",
    description:
      "worked with outreach team to research SaaS companies that could benefit from venture debt. took initiate to automate data collection and various excel tasks",
    bullets: ["Bullet point 1", "Bullet point 2", "Bullet point 3"],
  },
  {
    companyName: "ats automation",
    position: "business analyst",
    location: "Cambridge, ON",
    technologies: ["TypeScript", "React", "MongoDB", "Apollo Server", "NodeJS"],
    startDate: "Jan 2020",
    endDate: "Apr 2020",
    description:
      "worked with business development team to research users and deploy the salesforce mobile app",
    bullets: ["Bullet point 1", "Bullet point 2", "Bullet point 3"],
  },
];

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
