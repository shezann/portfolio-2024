import styled, { keyframes } from "styled-components";

const Background = () => {
  return (
    <BackgroundStyled>
      <BigSmoke src="/assets/bigSmoke.webp" alt="smoke" />
      <MediumSmoke src="/assets/midSmoke.webp" alt="smoke" />
      <TinySmoke
        className="smallSmoke"
        src="/assets/tinySmoke.webp"
        alt="smoke"
      />
    </BackgroundStyled>
  );
};

export default Background;

const moveAnimation = keyframes`
  0% {
    transform: translate(180px,-75px);
  }
  25% {
    transform: translate(170px, -95px);
  }
  50% {
    transform: translate(190px,-85px);
  }
  75% {
    transform: translate(180px, -65px);
  }
  100% {
    transform: translate(170px,-75px);
  }
`;

const moveAnimation2 = keyframes`
  0% {
    transform: translate(820px, 300px);
  }
  25% {
    transform: translate(810px, 325px);
  }
  50% {
    transform: translate(820px, 300px);
  }
  75% {
    transform: translate(810px, 325px);
  }
  100% {
    transform: translate(820px, 300px);
  }
`;

const moveAnimation3 = keyframes`
  0% {
    transform: translate(1000px, 285px);
  }
  25% {
    transform: translate(1020px, 300px);
  }
  50% {
    transform: translate(1000px, 285px);
  }
  75% {
    transform: translate(1020px, 300px);
  }
  100% {
    transform: translate(1000px, 285px);
  }
`;

const BigSmoke = styled.img`
  width: 900px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  animation: ${moveAnimation} 20s infinite ease-in-out;
`;

const MediumSmoke = styled.img`
  width: 408px;
  height: 414px;
  object-fit: contain;
  position: absolute;
  animation: ${moveAnimation2} 15s infinite ease-in-out;
`;

const TinySmoke = styled.img`
  width: 135px;
  height: 133px;
  object-fit: contain;
  position: absolute;
  animation: ${moveAnimation3} 20s infinite ease-in-out;
`;

const BackgroundStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  h1 {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
  }

  svg {
    animation: ${moveAnimation} 20s infinite;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
