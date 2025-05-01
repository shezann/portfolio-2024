import React from "react";
import styled from "styled-components";
import SocialLink from "../components/SocialLink";
import { PERSONAL_STATEMENT } from "../utils/constants";

const About: React.FC = () => {
  return (
    <div>
      <Name>shezan mahmud</Name>
      <PersonalStatement>{PERSONAL_STATEMENT}</PersonalStatement>
      <SocialLink />
    </div>
  );
};

export default About;

const Name = styled.h1`
  font-size: 96px;
  font-weight: 600;
  margin-bottom: 0;
`;

const PersonalStatement = styled.p`
  margin-bottom: 50px;
`;
