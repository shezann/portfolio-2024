import React, { useState } from "react";
import styled from "styled-components";
import { works } from "../utils/works";
import { motion, AnimatePresence } from "framer-motion";

const slide = {
  enter: (d: number) => ({ opacity: 0, x: 50 * d }),
  center: { opacity: 1, x: 0 },
};

const WorkCarousel: React.FC = () => {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);

  const change = (delta: number) => {
    setDir(delta);
    setIdx((i) => (i + delta + works.length) % works.length);
  };

  return (
    <CarouselContainer>
      <NavButton onClick={() => change(-1)}>‹</NavButton>
      <AnimatePresence initial={false} custom={dir}>
        <motion.div
          key={idx}
          custom={dir}
          variants={slide}
          initial="enter"
          animate="center"
          transition={{ duration: 0.3 }}
        >
          <WorkCard>
            <Title>
              {works[idx].companyName} — {works[idx].position}
            </Title>
            <MetaRow>
              <Pill>
                {works[idx].startDate}–{works[idx].endDate}
              </Pill>
              <Pill>{works[idx].location}</Pill>
            </MetaRow>
            <Tags>
              {works[idx].technologies.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </Tags>
            <Desc>{works[idx].description}</Desc>
            <BulletList>
              {works[idx].bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </BulletList>
          </WorkCard>
        </motion.div>
      </AnimatePresence>
      <NavButton onClick={() => change(1)}>›</NavButton>
    </CarouselContainer>
  );
};

export default WorkCarousel;

// Styled components
const CarouselContainer = styled.div`
  display:flex; align-items:center; justify-content:center;
`;
const NavButton = styled.button`
  background: none;
  border: none;
  font-size: 32px;
  cursor: pointer;
  padding: 16px;
  color: #0500f0;
  &:hover {
    transform: scale(1.2);
  }
`;
const WorkCard = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 24px;
  width: 480px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #0500f0;
`;
const MetaRow = styled.div`
  display: flex;
  gap: 12px;
  font-size: 14px;
  color: #666;
`;
const Pill = styled.span`
  background: #eef4ff;
  color: #0500f0;
  border-radius: 999px;
  padding: 4px 12px;
  font-weight: 500;
`;
const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
const Tag = styled.span`
  background: #f0f0ff;
  color: #3b3f5c;
  border-radius: 6px;
  padding: 4px 8px;
  font-size: 13px;
`;
const Desc = styled.p`
  margin: 0;
  font-size: 16px;
  color: #333;
`;
const BulletList = styled.ul`
  margin: 8px 0 0 16px;
  list-style: disc;
  color: #444;
`;
