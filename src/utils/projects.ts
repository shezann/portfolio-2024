export const projects: Project[] = [
  {
    projectTitle: "anitracker",
    projectName: "AniTracker",
    technologies: ["React", "GraphQL", "MongoDB", "Apollo Server", "NodeJS"],
    description:
      "A social media website where users can post reviews and find details about their favourite anime. Created a responsive frontend using React and GraphQL backend and deployed to Netlify and Heroku.",
    images: ["image1.jpg", "image2.jpg", "image3.jpg"],
  },
  {
    projectTitle: "truthordrink",
    projectName: "Truth or Dare",
    technologies: ["React Native", "Expo"],
    description:
      "A mobile app that allows users to play the popular game Truth or Drink. Created using React Native and Expo.",
    images: ["image1.jpg", "image2.jpg", "image3.jpg"],
  },
  {
    projectTitle: "leetcode",
    projectName: "Leetcode",
    technologies: ["React Native", "Expo", "Supabase"],
    description:
      "A mobile app that allows users to practice Leetcode problems. Created using React Native, Expo, and Supabase.",
    images: ["image1.jpg", "image2.jpg", "image3.jpg"],
  },
];

export interface Project {
  projectTitle: string;
  projectName: string;
  technologies: string[];
  description: string;
  images: string[];
}
