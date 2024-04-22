import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Circle.css";

interface CircleProps {
  isSelected?: boolean;
  text?: string; // New prop to display text inside the circle
}

const circleVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { type: "spring", stiffness: 120 } },
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300 },
  },
};

const Circle: React.FC<CircleProps> = ({ isSelected = false, text = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const { clientX, clientY } = e;
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
    }
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className={isSelected ? "selected_circle" : "circle"}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={circleVariants}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: position.x, y: position.y, position: "relative" }}
    >
      <div className={isSelected ? "selected_glow" : "circle_glow"}></div>
      {text && <div className="circle_text">{text}</div>}{" "}
      {/* Display the text inside the circle */}
    </motion.div>
  );
};

export default Circle;
