import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ImageCard: React.FC<{
  src: string;
  size: string;
  variants: any;
  initial: string;
  animate: string;
  exit: string;
  transition: any;
}> = ({ src, size, variants, initial, animate, exit, transition }) => {
  return (
    <CardWrapper
      variants={variants}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
    >
      <Image src={src} size={size} />
    </CardWrapper>
  );
};

export default ImageCard;

const CardWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: white;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 5px;
`;
