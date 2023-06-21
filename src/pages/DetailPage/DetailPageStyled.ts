import styled from "styled-components";

const DetailPageStyled = styled.main`
  width: 100%;
  padding-top: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-size: 2rem;

  .page-title {
    font-size: 1.8rem;
  }

  .image {
    object-fit: contain;
  }

  .info {
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;

    &-title {
      font-family: ${(props) => props.theme.fonts.secondary};
    }
  }

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
`;

export default DetailPageStyled;
