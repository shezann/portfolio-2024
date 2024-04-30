import React from "react";
import styled from "styled-components";
import { works } from "../utils/works";
import type { Work } from "../utils/works";

const Work: React.FC = () => {
  return (
    <div>
      {works.map((work: Work, index: number) => (
        <div key={index}>
          <StyledH1>
            {work.position} - {work.companyName}
          </StyledH1>
          <p>{work.location}</p>
          <p>{`${work.startDate} - ${work.endDate}`}</p>
          <ul>
            {work.bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Work;

const StyledH1 = styled.h1`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 8px;
`;
