import React from "react";
import styled from "styled-components";
import SocialLink from "./SocialLink";
import { PERSONAL_STATEMENT } from "../utils/constants";

const About: React.FC = () => {
  return (
    <div>
      <Name>shezan mahmud</Name>
      <p>{PERSONAL_STATEMENT}</p>
      <SocialLink />
    </div>
  );
};

export default About;

const Name = styled.h1`
  mix-blend-mode: difference;
  font-size: 96px;
  font-weight: 600;
`;
