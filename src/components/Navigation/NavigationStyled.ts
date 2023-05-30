import styled from "styled-components";

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.secondary};
  width: 100%;

  .navigation {
    flex: 4;

    &__center-link {
      text-align: center;
      flex: 1;
    }
  }
  .right {
    text-align: right;
  }

  .active {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export default NavigationStyled;
