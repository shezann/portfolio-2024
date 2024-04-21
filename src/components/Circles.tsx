import Circle from "./Circle";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Circles = () => {
  return (
    <motion.div
      className="circle_container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Circle isSelected={true} />
      <Circle />
      <Circle />
      <Circle />
    </motion.div>
  );
};

export default Circles;
