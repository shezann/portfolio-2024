import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProjectImages from "./ProjectImages";
import { projects } from "../utils/projects";
import leftArrow from "../../public/assets/buttons/left.png";
import rightArrow from "../../public/assets/buttons/right.png";

interface ProjectProps {
  preloadedImages: Record<string, string[]>;
}

const Project: React.FC<ProjectProps> = ({ preloadedImages }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [projectImages, setProjectImages] = useState<string[]>([]);

  useEffect(() => {
    const project = projects[currentProjectIndex];
    const images = preloadedImages[project.projectTitle];
    console.log(`Loading images for ${project.projectTitle}:`, images);
    setProjectImages(images || []);
  }, [currentProjectIndex, preloadedImages]);

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1,
    );
  };

  const project = projects[currentProjectIndex];

  return (
    <Container>
      <ButtonImage src={leftArrow} alt="Previous" onClick={prevProject} />
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
      <ButtonImage src={rightArrow} alt="Next" onClick={nextProject} />
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
  margin: 0 20px; /* Spacing around project for better visibility */
`;

const StyledH1 = styled.h1`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const TechnologiesList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap; /* Ensures wrapping on small screens */
  margin: 8px 0;
`;

const TechItem = styled.span`
  font-size: 16px;
  color: #333; /* Change the color to fit your design */
  padding-right: 10px;
  line-height: 1.5;
`;

const Separator = styled.span`
  padding: 0 5px;
  color: #333; /* Change the color to fit your design */
`;

const ButtonImage = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
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
