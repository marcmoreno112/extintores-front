import styled from "styled-components";

const LoaderStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;

  .loader {
    font-size: 48px;
    display: inline-block;
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
