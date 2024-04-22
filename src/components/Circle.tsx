import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

interface CircleProps {
  isSelected?: boolean;
  text?: string;
  onClick?: () => void;
  index: number;
}

const circleVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { type: "spring", stiffness: 120 } },
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300 },
  },
  selected: {
    scale: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

const Circle: React.FC<CircleProps> = ({
  isSelected = false,
  text = "",
  onClick,
  index,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const { clientX, clientY } = e;
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
    }
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <StyledCircle
      isSelected={isSelected}
      initial="hidden"
      animate={isSelected ? "selected" : "visible"}
      whileHover={isSelected ? "selected" : "hover"}
      variants={circleVariants}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: position.x, y: position.y, position: "relative" }}
      onClick={onClick}
      index={index}
    >
      <CircleGlow />
      {text && <CircleText>{text}</CircleText>}
    </StyledCircle>
  );
};

export default Circle;

const getPositionStyles = (index: number) => {
  switch (index) {
    case 0:
      return "top: 0; left: 0%; transform: translate(-50%, -100%);";
    case 1:
      return "top: -35px; right: 70%; transform: translate(100%, -50%);";
    case 2:
      return "bottom: 70px; left: -40%; transform: translate(-50%, 100%);";
    case 3:
      return "top: -140px; left: 25%; transform: translate(-100%, -50%);";
    default:
      return "";
  }
};

const StyledCircle = styled(motion.div)<{ isSelected: boolean; index: number }>`
  width: ${({ isSelected }) => (isSelected ? "250px" : "190px")};
  height: ${({ isSelected }) => (isSelected ? "250px" : "190px")};
  border-radius: 50%;
  background: ${({ isSelected }) => (isSelected ? "#070750" : "#2F2CD1")};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  overflow: hidden;
  cursor: pointer;
  transition:
    background-color 0.3s,
    width 0.3s,
    height 0.3s,
    transform 0.3s;
  ${({ index }) => getPositionStyles(index)};
`;

const CircleText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 0 1rem;
  transition: color 0.3s;
`;

const CircleGlow = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(to bottom right, transparent, white);
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.3s;
`;