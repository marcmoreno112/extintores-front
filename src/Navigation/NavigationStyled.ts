import styled from "styled-components";

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.secondary};
  width: 100%;

  .outside {
    width: 90px;
  }

  .right {
    text-align: right;
  }

  .active {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export default NavigationStyled;
