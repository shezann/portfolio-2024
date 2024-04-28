import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Circle from "./components/Circle";
import { circleTitles } from "./utils/constants";
import About from "./components/About";
import Project from "./components/Project";
import Work from "./components/Work";
import Background from "./components/Background";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const App: React.FC = () => {
  const [selected, setSelected] = useState<string>(circleTitles[0]);

  const handleCircleClick = (title: string) => {
    setSelected(title);
  };

  const renderContent = () => {
    switch (selected) {
      case "about":
        return <About />;
      case "projects":
        return <Project />;
      case "work experiences":
        return <Work />;
      case "contact":
        return <div>Contact Info</div>;
      default:
        return <div>Select an option</div>;
    }
  };

  return (
    <Container>
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
  align-items: center;
  min-height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: left;
`;

const TextSide = styled.div`
  flex: 1;
  padding-right: 2rem;
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
