import styled from "styled-components";

const ExtinguishersListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 50px;

  .disabled {
    background-color: grey;
    color: white;
  }
`;

export default ExtinguishersListStyled;
