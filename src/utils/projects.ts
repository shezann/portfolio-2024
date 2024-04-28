export const projects: Project[] = [
  {
    projectName: "AniTracker",
    technologies: ["React", "GraphQL", "MongoDB", "Apollo Server", "NodeJS"],
    description:
      "A social media website where users can post review sand find details about their favourite anime. Created responsive frontend using react and  Graph QL backend and deployed to Netlify and Heroku.",
  },
];
export interface Project {
  projectName: string;
  technologies: string[];
  description: string;
}
