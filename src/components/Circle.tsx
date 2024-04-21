import React from "react";
import "./Circle.css";

interface CircleProps {
  isSelected?: boolean;
}

const Circle: React.FC<CircleProps> = ({ isSelected = false }) => {
  return (
    <div className={isSelected ? "selected_circle" : "circle"}>
      <div className={isSelected ? "selected_glow" : "circle_glow"}></div>
    </div>
  );
};

export default Circle;
