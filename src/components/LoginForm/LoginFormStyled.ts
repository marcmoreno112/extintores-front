import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;

  .form {
    &__text-field {
      padding: 18px;
      background-color: ${(props) => props.theme.colors.tertiaryDark};
      border-radius: 8px;
      color: white;
      font-size: 1.2rem;
    }

    &__control {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    &__send-button {
      background-color: ${(props) => props.theme.colors.tertiary};
      font-size: 1.2rem;
      font-weight: 700;
      padding: 18px;
      border-radius: 8px;
      width: 120px;
    }

    &__send-button-container {
      display: flex;
      justify-content: right;
    }

    &__label {
      font-size: 1.3rem;
    }
  }

  *:disabled {
    background-color: grey;
    color: white;
  }
`;

export default LoginFormStyled;
