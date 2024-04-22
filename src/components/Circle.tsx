import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Circle.css";

interface CircleProps {
  isSelected?: boolean;
  text?: string;
  onClick?: () => void;
}

const circleVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { type: "spring", stiffness: 120 } },
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300 },
  },
  hover_selected: {
    scale: 1.3,
    transition: { type: "spring", stiffness: 300 },
  },
  selected: {
    scale: 1.4,
    backgroundColor: "#070750",
    transition: { type: "spring", stiffness: 120 },
  },
};

const Circle: React.FC<CircleProps> = ({
  isSelected = false,
  text = "",
  onClick,
}) => {
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
      animate={isSelected ? "selected" : "visible"}
      whileHover={isSelected ? "hover_selected" : "hover"}
      variants={circleVariants}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: position.x, y: position.y, position: "relative" }}
      onClick={onClick}
    >
      <div className={isSelected ? "selected_glow" : "circle_glow"}></div>
      {text && <div className="circle_text">{text}</div>}{" "}
    </motion.div>
  );
};

export default Circle;
