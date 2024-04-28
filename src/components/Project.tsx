import React from "react";
import styled from "styled-components";
import { projects } from "../utils/projects";
import type { Project } from "../utils/projects";

const Project: React.FC = () => {
  return (
    <div>
      {projects.map((project: Project, index: number) => (
        <ProjectContainer key={index}>
          <StyledH1>{project.projectName.toLowerCase()}</StyledH1>
          <TechnologiesList>
            {project.technologies.map((tech, idx, arr) => (
              <TechItem key={idx}>
                {tech}
                {idx < arr.length - 1 && <Separator>•</Separator>}
              </TechItem>
            ))}
          </TechnologiesList>
          <p>{project.description}</p>
        </ProjectContainer>
      ))}
    </div>
  );
};

export default Project;

const ProjectContainer = styled.div`
  margin-bottom: 2em;
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
