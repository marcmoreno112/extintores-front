import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
<<<<<<< Updated upstream
=======
  background-color: white;
  top: 0;
  padding: 20px;
  position: fixed;
  width: 100%;
>>>>>>> Stashed changes

  h1 {
    color: ${(props) => props.theme.colors.primary};
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: 2rem;
    font-weight: 800;
    text-transform: uppercase;
  }
`;

export default HeaderStyled;
