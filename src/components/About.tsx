import React from "react";
import styled from "styled-components";
import { PERSONAL_STATEMENT } from "../utils/constants";

const About: React.FC = () => {
  return (
    <div>
      <Name>shezan mahmud</Name>
      <p>{PERSONAL_STATEMENT}</p>
    </div>
  );
};

export default About;

const Name = styled.h1`
  mix-blend-mode: normal;
  font-size: 96px;
`;
