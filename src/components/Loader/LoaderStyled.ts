import styled from "styled-components";

const LoaderStyled = styled.div`
  display: flex;
  justify-content: center;

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
    content: "Loading";
    position: absolute;
    left: 0;
    top: 0;
    color: black;
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
    animation: animloader 10s ease-in infinite;
  }

  @keyframes animloader {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`;

export default LoaderStyled;
