import React from "react";
import { motion } from "framer-motion";
import "./Circle.css";

interface CircleProps {
  isSelected?: boolean;
}

const circleVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { type: "spring", stiffness: 120 } },
};

const Circle: React.FC<CircleProps> = ({ isSelected = false }) => {
  return (
    <motion.div
      className={isSelected ? "selected_circle" : "circle"}
      initial="hidden"
      animate="visible"
      variants={circleVariants}
    >
      <div className={isSelected ? "selected_glow" : "circle_glow"}></div>
    </motion.div>
  );
};

export default Circle;
