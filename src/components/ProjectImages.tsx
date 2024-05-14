import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectImages: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentIndices, setCurrentIndices] = useState([0, 1, 2]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndices((prevIndices) =>
        prevIndices.map((index) => (index + 1) % images.length),
      );
    }, 5000); // Rotate images every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  const imageVariants = {
    enter: (direction: number) => ({
      x: direction * 200, // Enter from left/right based on direction
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: -direction * 200, // Exit to left/right based on direction
      opacity: 0,
    }),
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
      {currentIndices.map((index, i) => (
        <StyledImage
          key={index}
          src={images[index]}
          variants={imageVariants}
          custom={i - 1} // Direction based on position in the array (-1, 0, 1)
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          size={getImageSize(i)}
        />
      ))}
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
  width: 100%;
  overflow: hidden;
`;

const StyledImage = styled(motion.img)`
  max-width: ${(props) => props.size};
  max-height: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;
