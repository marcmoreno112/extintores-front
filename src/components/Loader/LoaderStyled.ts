import styled from "styled-components";

const LoaderStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 1;
  opacity: 0.95;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  .loader {
    font-size: 48px;
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: bold;
    color: ${(props) => props.theme.colors.primary};
    letter-spacing: 2px;
    position: relative;
  }
  .loader::after {
    content: "Cargando";
    position: absolute;
    left: 0;
    top: 0;
    color: black;
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
    animation: animloader 3s ease-in infinite;
  }

  @keyframes animloader {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .loading-container {
      animation: none;
    }
  }
`;

export default LoaderStyled;
