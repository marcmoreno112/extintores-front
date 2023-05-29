import styled from "styled-components";

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 2rem;

  h1 {
    color: ${(props) => props.theme.colors.primary};
    font-size: 2rem;
    text-transform: uppercase;
  }
`;

export default LayoutStyled;
