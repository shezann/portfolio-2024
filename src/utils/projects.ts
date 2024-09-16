export const projects: Project[] = [
  {
    projectTitle: "payo",
    projectName: "Payo",
    technologies: ["React Native", "Expo", "Express", "Supabase"],
    description:
      "peer-to-peer money transfer app that allows people without Canadian bank accounts to send money to friends and family in Canada",
    images: ["image1.webp", "image2.webp", "image3.webp"],
  },
  {
    projectTitle: "anitracker",
    projectName: "AniTracker",
    technologies: ["React", "GraphQL", "MongoDB", "Apollo Server", "NodeJS"],
    description:
      "social media website where users can post reviews and find details about their favourite anime",
    images: ["image1.webp"],
  },
  {
    projectTitle: "sheba",
    projectName: "Sheba",
    technologies: ["React Native", "Expo", "OpenAI", "Express"],
    description:
      "mobile app that allows rural Bangladeshis get basic health advice and find certified healthcare providers",
    images: ["image1.webp"],
  },
  {
    projectTitle: "truthordrink",
    projectName: "Truth or Dare",
    technologies: ["React Native", "Expo"],
    description:
      "created the popular mobile game truth or drink because the ones in the app stores were unreasonably expensive",
    images: ["image1.webp", "image2.webp", "image3.webp"],
  },
  // {
  //   projectTitle: "leetcode",
  //   projectName: "Leetcode",
  //   technologies: ["React Native", "Expo", "Supabase"],
  //   description:
  //     "A mobile app that allows users to practice Leetcode problems. Created using React Native, Expo, and Supabase.",
  //   images: ["image1.jpg", "image2.jpg", "image3.jpg"],
  // },
];

export interface Project {
  projectTitle: string;
  projectName: string;
  technologies: string[];
  description: string;
  images: string[];
}
