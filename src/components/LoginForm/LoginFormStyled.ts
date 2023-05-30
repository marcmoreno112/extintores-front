import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;

  .form_text-field {
    padding: 18px;
    background-color: ${(props) => props.theme.colors["tertiary-dark"]};
    border-radius: 8px;
    color: white;
    font-size: 1.2rem;
  }

  label {
    font-size: 1.3rem;
  }

  .form-control {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export default LoginFormStyled;
