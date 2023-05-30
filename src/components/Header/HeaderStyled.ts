import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background-color: white;
  top: 0;
  padding: 20px;
  position: fixed;
  width: 100%;

  .title {
    color: ${(props) => props.theme.colors.primary};
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: 2rem;
    font-weight: 800;
    text-transform: uppercase;
  }
`;

export default HeaderStyled;
