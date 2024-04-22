import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Circle from "./components/Circle";
import { PERSONAL_STATEMENT, circleTitles } from "./utils/constants";

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

  return (
    <Container>
      <TextSide>
        <h1>shezan mahmud</h1>
        <p>{PERSONAL_STATEMENT}</p>
        {/* Other text and links */}
      </TextSide>
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
              index={index} // Pass index for position
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