import styled from "styled-components";

const FilterStyled = styled.form`
  text-align: left;
  margin-bottom: 30px;

  .filter {
    width: 100%;
    font-family: inherit;
    background-color: ${(props) => props.theme.colors.primary};
    padding: 10px;
    color: white;
    border-radius: 8px;
    border-right: 16px solid transparent;
    font-size: 1rem;
  }
`;

export default FilterStyled;
