import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProjectImages from "../components/ProjectImages";
import { projects } from "../utils/projects";
import { motion, AnimatePresence } from "framer-motion";

const slideVariants = {
  enter: (direction: number) => ({ opacity: 0, x: 50 * direction }),
  center: { opacity: 1, x: 0 },
};

interface ProjectProps {
  preloadedImages: Record<string, string[]>;
}

const Project: React.FC<ProjectProps> = ({ preloadedImages }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [projectImages, setProjectImages] = useState<string[]>([]);

  useEffect(() => {
    const project = projects[currentProjectIndex];
    const images = preloadedImages[project.projectTitle];
    console.log(`Loading images for ${project.projectTitle}:`, images);
    setProjectImages(images || []);
  }, [currentProjectIndex, preloadedImages]);

  const nextProject = () => {
    setDirection(1);
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1,
    );
  };

  const project = projects[currentProjectIndex];

  return (
    <Container>
      <ButtonImage
        src="/assets/buttons/left.png"
        alt="Previous"
        onClick={prevProject}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentProjectIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          transition={{ duration: 0.3 }}
        >
          <ProjectContainer>
            <StyledH1>{project.projectName.toLowerCase()}</StyledH1>
            <TechnologiesList>
              {project.technologies.map((tech, idx, arr) => (
                <TechItem key={idx}>
                  {tech}
                  {idx < arr.length - 1 && <Separator>•</Separator>}
                </TechItem>
              ))}
            </TechnologiesList>
            {projectImages.length > 0 ? (
              <ProjectImages images={projectImages} />
            ) : (
              <p>No images available</p>
            )}
            <ProjectDescriptionWrapper>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectDescriptionWrapper>
          </ProjectContainer>
        </motion.div>
      </AnimatePresence>
      <ButtonImage
        src="/assets/buttons/right.png"
        alt="Next"
        onClick={nextProject}
      />
    </Container>
  );
};

export default Project;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const ProjectContainer = styled.div`
  width: 100%;
  padding: 20px;
  margin: 0 20px;
`;

const StyledH1 = styled.h1`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const TechnologiesList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 8px 0;
`;

const TechItem = styled.span`
  font-size: 16px;
  color: #333;
  padding-right: 10px;
  line-height: 1.5;
`;

const Separator = styled.span`
  padding: 0 5px;
  color: #333;
`;

const ButtonImage = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  position: relative;
  z-index: 10;
  padding: 8px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const ProjectDescriptionWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  color: #333;
  margin: 8px 0;
  width: 120%;
`;
