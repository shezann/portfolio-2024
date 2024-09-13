import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import LazyLoad from "react-lazyload";

interface ProjectImagesProps {
  images: string[];
}

const ProjectImages: React.FC<ProjectImagesProps> = ({ images }) => {
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
          <LazyLoad key={index} height={200} offset={100}>
            <StyledImage
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
              onError={handleImageError}
              onLoad={() => console.log(`Image loaded successfully: ${image}`)}
            />
          </LazyLoad>
        ))}
      </AnimatePresence>
    </ImageContainer>
  );
};

const handleImageError = () => {
  console.error("Failed to load image");
};

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  height: 300px; // Adjust based on your needs
  width: 580px;
  overflow: hidden;
`;

const StyledImage = styled(motion.img)<{ size: string }>`
  width: ${(props) => props.size};
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`;

const FallbackImage = styled.div<{ size: string }>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 14px;
  color: #666;
`;

export default ProjectImages;
