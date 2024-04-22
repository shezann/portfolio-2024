import React, { useState } from "react";
import Circle from "./components/Circle";
import { motion } from "framer-motion";
import { PERSONAL_STATEMENT, circleTitles } from "./utils/constants";
import "./App.css";

// Assuming circleTitles is an array of strings
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
    <div className="container">
      <div className="text-side">
        <h1>shezan mahmud</h1>
        <p>{PERSONAL_STATEMENT}</p>
        {/* ...Other text and links */}
      </div>
      <div className="circle-side">
        <motion.div
          className="circle-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {circleTitles.map((title: string) => (
            <Circle
              key={title}
              text={title}
              isSelected={selected === title}
              onClick={() => handleCircleClick(title)}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default App;
