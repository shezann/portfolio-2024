import React from "react";
import styled from "styled-components";
import { Github, Layers, Linkedin } from "lucide-react";

type LinkWithIconProps = {
  icon: JSX.Element;
  href: string;
  children: React.ReactNode;
};

const LinkWithIcon: React.FC<LinkWithIconProps> = ({
  icon,
  href,
  children,
}) => (
  <LinkItem href={href} target="_blank" rel="noopener noreferrer">
    <IconStyleWrapper>{icon}</IconStyleWrapper>
    {children}
  </LinkItem>
);

const SocialLink: React.FC = () => {
  return (
    <LinksContainer>
      <LinkWithIcon icon={<Layers size={20} />} href="/resume">
        <LinkText
          href="../../public/shezan_m_resume.pdf"
          download="shezan_m_resume.pdf"
        >
          Resume
        </LinkText>
      </LinkWithIcon>
      <LinkWithIcon
        icon={<Linkedin size={20} />}
        href="https://www.linkedin.com/in/shezan-m/"
      >
        <LinkText>LinkedIn</LinkText>
      </LinkWithIcon>
      <LinkWithIcon
        icon={<Github size={20} />}
        href="https://github.com/shezann"
      >
        <LinkText>GitHub</LinkText>
      </LinkWithIcon>
    </LinksContainer>
  );
};

export default SocialLink;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  color: #333;
`;

const IconStyleWrapper = styled.span`
  display: flex;
  align-items: center;
  font-weight: 400;
  margin-right: 8px;
`;

const LinkItem = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  margin-right: 20px;

  &:hover {
    color: #646cff;
  }
`;

const LinkText = styled.a`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  color: #333; // Set the default color to black
  text-decoration: none; // Remove the default underline

  &:hover {
    color: #646cff; // Keep the hover color as it was
  }
`;
