export const projects: Project[] = [
  {
    projectName: "AniTracker",
    technologies: ["React", "GraphQL", "MongoDB", "Apollo Server", "NodeJS"],
    description:
      "A social media website where users can post review sand find details about their favourite anime. Created responsive frontend using react and  Graph QL backend and deployed to Netlify and Heroku.",
  },
  {
    projectName: "Truth or Drink",
    technologies: ["React Native", "Expo"],
    description:
      "A mobile app that allows users to play the popular game Truth or Drink. Created using React Native and Expo.",
  },
  {
    projectName: "Leetcode",
    technologies: ["React Native", "Expo", "Supabase"],
    description:
      "A mobile app that allows users to practice Leetcode problems. Created using React Native, Expo, and Supabase.",
  },
];
export interface Project {
  projectName: string;
  technologies: string[];
  description: string;
}
