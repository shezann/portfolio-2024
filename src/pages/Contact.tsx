import React from "react";
import styled from "styled-components";
import SocialLink from "../components/SocialLink";

const Contact: React.FC = () => {
  return (
    <Container>
      <StyledH1>get in touch</StyledH1>
      <ContactInfo>
        <InfoItem>
          <Label>email:</Label>
          <Value>s23mahmu@uwaterloo.ca</Value>
        </InfoItem>
        <InfoItem>
          <Label>location:</Label>
          <Value>toronto, ontario</Value>
        </InfoItem>
      </ContactInfo>
      <SocialLinksWrapper>
        <SocialLink />
      </SocialLinksWrapper>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  width: 100%;
  padding: 20px;
`;

const StyledH1 = styled.h1`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const ContactInfo = styled.div`
  margin-bottom: 30px;
`;

const InfoItem = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.span`
  font-weight: 600;
  margin-right: 10px;
`;

const Value = styled.span`
  color: #333;
`;

const SocialLinksWrapper = styled.div`
  margin-bottom: 30px;
`;
