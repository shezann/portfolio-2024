import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface ImageCardProps {
  src: string;
  size: string;
  variants: any;
  initial: string;
  animate: string;
  exit: string;
  transition: any;
}

const ImageCard: React.FC<ImageCardProps> = ({
  src,
  size,
  variants,
  initial,
  animate,
  exit,
  transition,
}) => {
  return (
    <StyledImage
      src={src}
      size={size}
      variants={variants}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
    />
  );
};

export default ImageCard;

const StyledImage = styled(motion.img)<{ size: string }>`
  width: ${(props) => props.size};
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
