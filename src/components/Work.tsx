import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { works } from "../utils/works";

import leftArrow from "../../public/assets/buttons/left.png";
import rightArrow from "../../public/assets/buttons/right.png";

const Work: React.FC = () => {
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0);

  const nextWork = () => {
    setCurrentWorkIndex((prevIndex) =>
      prevIndex === works.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevWork = () => {
    setCurrentWorkIndex((prevIndex) =>
      prevIndex === 0 ? works.length - 1 : prevIndex - 1,
    );
  };

  const work = works[currentWorkIndex];

  return (
    <Container>
      <ButtonImage src={leftArrow} alt="Previous" onClick={prevWork} />
      <WorkContainer>
        <StyledH1>
          <StyledH1Colored>{work.companyName}</StyledH1Colored> -{" "}
          {work.position}
        </StyledH1>
        <TechnologiesList>
          {work.technologies.map((tech, idx, arr) => (
            <TechItem key={idx}>
              {tech}
              {idx < arr.length - 1 && <Separator>•</Separator>}
            </TechItem>
          ))}
        </TechnologiesList>
        <WorkDescriptionWrapper>
          <WorkDescription>{work.description}</WorkDescription>
        </WorkDescriptionWrapper>
      </WorkContainer>
      <ButtonImage src={rightArrow} alt="Next" onClick={nextWork} />
    </Container>
  );
};

export default Work;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const WorkContainer = styled.div`
  width: 100%;
  padding: 20px;
  margin: 0 20px;
`;

const StyledH1 = styled.h1`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const StyledH1Colored = styled.span`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #0500f0;
`;

const TechnologiesList = styled.div`
  display: flex;
  width: 120%;
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

const WorkDescriptionWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const WorkDescription = styled.p`
  font-size: 16px;
  color: #333;
  margin: 8px 0;
  width: 120%;
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
