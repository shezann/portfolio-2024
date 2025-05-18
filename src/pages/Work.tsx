import React, { useState } from "react";
import styled from "styled-components";
import { works } from "../utils/works";
import { motion, AnimatePresence } from "framer-motion";

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
      <AnimatePresence mode="wait">
        <motion.div
          key={currentWorkIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <WorkContainer>
            <StyledH1>
              <StyledH1Colored>{work.companyName}</StyledH1Colored>
              {" - "}
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
        </motion.div>
      </AnimatePresence>
      <ButtonImage src={rightArrow} alt="Next" onClick={nextWork} />
    </Container>
  );
};

export default Work;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-width: 360px;
  max-width: 600px;
  width: 100%;
  padding: 32px 24px;
  margin: 0 20px;
`;

const StyledH1 = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 12px;
  text-transform: lowercase;
  color: #171722;
  letter-spacing: 0.02em;
`;

const StyledH1Colored = styled.span`
  color: #0500f0;
  text-transform: lowercase;
`;

const TechnologiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 8px 0 0 0;
  gap: 4px;
`;

const TechItem = styled.span`
  font-size: 16px;
  color: #333;
  padding-right: 10px;
  line-height: 1.5;
`;

const Separator = styled.span`
  padding: 0 5px;
  color: #aaa;
`;

const WorkDescriptionWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
`;

const WorkDescription = styled.p`
  font-size: 16px;
  color: #2d2d2d;
  margin: 8px 0;
  text-transform: lowercase;
  line-height: 1.7;
  letter-spacing: 0.015em;
`;

const ButtonImage = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin: 0 8px;
  transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);

  &:hover {
    transform: scale(1.15);
    filter: drop-shadow(0 4px 20px rgba(50, 50, 130, 0.13));
  }
`;
