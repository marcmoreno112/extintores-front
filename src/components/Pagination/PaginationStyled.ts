import styled from "styled-components";

const PaginationStyled = styled.div`
  padding-top: 30px;

  .button {
    background-color: ${(props) => props.theme.colors.tertiary};
    font-size: 1.2rem;
    font-weight: 700;
    padding: 18px;
    border-radius: 8px;
    width: 100%;
  }
`;

export default PaginationStyled;
