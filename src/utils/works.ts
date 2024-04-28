export const works: Work[] = [
  {
    companyName: "Company",
    position: "Position",
    location: "Toronto, ON",
    technologies: ["React", "GraphQL", "MongoDB", "Apollo Server", "NodeJS"],
    startDate: "2021-01-01",
    endDate: "2021-01-01",
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
  bullets: string[];
}
