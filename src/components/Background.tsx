import styled, { keyframes } from "styled-components";
import bigSmoke from "../assets/bigSmoke.png";

const Background = () => {
  return (
    <BackgroundStyled>
      {/* <BigSmokeSVG /> */}
      <StyledImage src={bigSmoke} alt="smoke" />
    </BackgroundStyled>
  );
};

export default Background;

const moveAnimation = keyframes`
  0% {
    transform: translate(200px, 0px);
  }
  25% {
    transform: translate(230px, -10px); // Smaller vertical movement
  }
  50% {
    transform: translate(250px, 0px);
  }
  75% {
    transform: translate(270px, -5px); // Smaller vertical movement
  }
  100% {
    transform: translate(200px, 0px);
  }
`;

const StyledImage = styled.img`
  width: 900px !important;
  height: 600px !important;
  object-fit: cover;
  position: absolute;
  transform: translateX(-50%);
  animation: ${moveAnimation} 10s infinite ease-in-out;
`;

const BackgroundStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

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

const BigSmokeSVG = () => {
  return (
    <svg
      width="882"
      height="592"
      viewBox="-270 0 1200 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_58_8)">
        <path
          d="M76.1576 354.795C2.1576 232.795 -11.842 104.795 258.158 150.795C640.158 124.795 722.158 -53.205 820.158 10.795C918.158 74.795 766.158 218.795 684.158 298.795C602.158 378.795 548.158 486.795 418.158 546.795C288.158 606.795 150.158 476.795 76.1576 354.795Z"
          fill="url(#paint0_angular_58_8)"
          fill-opacity="0.7"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_58_8"
          x="0"
          y="-33"
          width="881.996"
          height="624.901"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="15"
            result="effect1_foregroundBlur_58_8"
          />
        </filter>
        <radialGradient
          id="paint0_angular_58_8"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(306.158 332.795) rotate(-141.65) scale(467.88 680.82)"
        >
          <stop stop-color="white" />
          <stop offset="0.31" stop-color="#D9D9D9" />
          <stop offset="0.55" stop-color="#737373" />
        </radialGradient>
      </defs>
    </svg>
  );
};
