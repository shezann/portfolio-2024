import React, { useState } from "react";
import styled from "styled-components";
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

  return (
    <ImageContainer>
      {images.map((image, index) => (
        <LazyLoad key={index} height={300} offset={100}>
          <StyledImage
            key={index}
            src={image}
            onError={handleImageError}
            onLoad={() => console.log(`Image loaded successfully: ${image}`)}
          />
        </LazyLoad>
      ))}
    </ImageContainer>
  );
};

const handleImageError = () => {
  console.error("Failed to load image");
};

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const StyledImage = styled.img`
  max-width: 75%;
  object-fit: contain;
  border-radius: 12px;
`;

export default ProjectImages;
