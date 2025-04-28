import React, { useState, useEffect, ReactNode } from "react";
import { MotionValue, motion } from "framer-motion";
import styled from "styled-components";
import Circle from "./components/Circle";
import { circleTitles } from "./utils/constants";
import About from "./components/About";
import Project from "./components/Project";
import Work from "./components/Work";
import Background from "./components/Background";
import Contact from "./components/Contact";
import { projects } from "./utils/projects";
import { Analytics } from "@vercel/analytics/react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const contentVariants = {
  hidden: {
    y: 50,
    opacity: 0,
    filter: "blur(10px)",
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      y: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
      opacity: {
        duration: 0.5,
        ease: "easeIn",
      },
      filter: {
        duration: 0.5,
      },
    },
  },
};

const App: React.FC = () => {
  const [selected, setSelected] = useState<string>(circleTitles[0]);
  const [preloadedImages, setPreloadedImages] = useState<
    Record<string, string[]>
  >({});

  useEffect(() => {
    const preloadImages = () => {
      const allImages: Record<string, string[]> = {};

      projects.forEach((project) => {
        // Build image URLs for this project
        const images = project.images.map(
          (image) => `/assets/${project.projectTitle.toLowerCase()}/${image}`,
        );
        // Store URLs for later rendering
        allImages[project.projectTitle] = images;
        // Preload each image so it's cached before display
        images.forEach((src) => {
          const img = new Image();
          img.src = src;
        });
      });

      setPreloadedImages(allImages);
    };

    preloadImages();
  }, []);

  const handleCircleClick = (title: string) => {
    setSelected(title);
  };

  const renderContent = () => {
    const content = (
      component: ReactNode | MotionValue<number> | MotionValue<string>,
    ) => (
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        key={selected} // Key change triggers animation
      >
        {component}
      </motion.div>
    );

    switch (selected) {
      case "about":
        return content(<About />);
      case "projects":
        return content(<Project preloadedImages={preloadedImages} />);
      case "work experiences":
        return content(<Work />);
      case "contact":
        return content(<Contact />);
      default:
        return content(<div>Select an option</div>);
    }
  };

  return (
    <Container>
      <Analytics />
      <Background />
      <TextSide>{renderContent()}</TextSide>
      <CircleSide>
        <StyledCircleContainer
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {circleTitles.map((title: string, index) => (
            <Circle
              key={title}
              text={title}
              isSelected={selected === title}
              onClick={() => handleCircleClick(title)}
              index={index}
            />
          ))}
        </StyledCircleContainer>
      </CircleSide>
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  width: 1280px;
  height: 832px;
  align-items: center;
  padding: 2rem;
  text-align: left;
`;

const TextSide = styled.div`
  flex: 1;
  color: black;
  width: 1000px;
`;

const CircleSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCircleContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;
