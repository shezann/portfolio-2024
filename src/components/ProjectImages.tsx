import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import ImageCard from "./ImageCard"; // Import the ImageCard component

const ProjectImages: React.FC<{ images: string[] }> = ({ images }) => {
  const imageVariants = {
    enter: {
      opacity: 0,
      y: 50, // Enter from below
    },
    center: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -50, // Exit to above
    },
  };

  const getImageSize = (index: number) => {
    // Define different sizes for each image
    switch (index) {
      case 0:
        return "70%";
      case 1:
        return "85%";
      case 2:
        return "100%";
      default:
        return "100%";
    }
  };

  return (
    <ImageContainer>
      <AnimatePresence initial={false}>
        {images.map((image, index) => (
          <ImageCard
            key={index}
            src={image}
            size={getImageSize(index)}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              y: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
          />
        ))}
      </AnimatePresence>
    </ImageContainer>
  );
};

export default ProjectImages;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  height: 300px; // Adjust based on your needs
  width: 600px;
  overflow: hidden;
`;
