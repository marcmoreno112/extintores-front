import styled from "styled-components";

const ModalStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  opacity: 0.95;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 250px;
    min-height: 200px;
    padding-top: 20px;

    &__button {
      &-container {
        display: flex;
        justify-content: right;
        padding-right: 20px;
        width: 100%;
      }
    }

    &--ok {
      border: solid ${(props) => props.theme.colors.feedbackOk} 4px;
    }

    &--fail {
      border: solid ${(props) => props.theme.colors.primary} 4px;
    }

    &__title {
      font-size: 2rem;
      font-weight: bold;
      text-align: center;

      &--ok {
        color: ${(props) => props.theme.colors.primary};
      }

      &--fail {
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }
`;

export default ModalStyled;
