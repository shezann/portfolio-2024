import "./App.css";
import Circle from "./components/Circle";
import { motion } from "framer-motion";
import { PERSONAL_STATEMENT } from "./utils/constants";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function App() {
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
          <Circle isSelected={true} text="about" />
          <Circle text="projects" />
          <Circle text="work experiences" />
          <Circle text="contact" />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
