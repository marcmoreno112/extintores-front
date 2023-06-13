import styled from "styled-components";

const ExtinguisherCardStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  font-size: 2rem;

  .fire-class {
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: 700;
    color: ${(props) => props.theme.colors.primary};
    border-color: ${(props) => props.theme.colors.primary};
    border: solid;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &-container {
      display: flex;
      justify-content: space-around;
      text-align: center;
      width: 100%;
    }
  }

  .card-button {
    width: 25px;

    &-container {
      text-align: right;
      width: 100%;
      padding-right: 20px;
    }
  }

  .card-image {
    object-fit: contain;
  }

  .card-title {
    word-wrap: break-word;

    &-container {
      max-width: 100%;
    }
  }
`;

export default ExtinguisherCardStyled;
