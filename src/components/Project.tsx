import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { projects } from "../utils/projects";
import ProjectImages from "./ProjectImages";

const Project: React.FC = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [projectImages, setProjectImages] = useState<string[]>([]);

  useEffect(() => {
    loadProjectImages(projects[currentProjectIndex].projectName);
  }, [currentProjectIndex]);

  const loadProjectImages = async (projectName: string) => {
    try {
      const images = await import(
        `../assets/${projectName.toLowerCase()}/index.js`
      );
      setProjectImages(images.default);
    } catch (error) {
      console.error("Failed to load project images", error);
      setProjectImages([]);
    }
  };

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
      <ArrowButton onClick={prevProject}>&lt;</ArrowButton>
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
        <ProjectImages images={projectImages} />
        <p>{project.description}</p>
      </ProjectContainer>
      <ArrowButton onClick={nextProject}>&gt;</ArrowButton>
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

const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  &:hover {
    background-color: #f0f0f0;
  }
`;
