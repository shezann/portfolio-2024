import React from "react";
import { projects } from "../utils/projects";

const Project: React.FC = () => {
  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.projectName}</h3>
          <p>{project.description}</p>
          <ul>
            {project.technologies.map((tech, idx) => (
              <li key={idx}>{tech}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Project;
