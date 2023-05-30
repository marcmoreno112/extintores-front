import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";
import { UserStructure } from "../../types";

interface LoginFormProps {
  submitFunction: (userCredentials: UserStructure) => void;
}

const LoginForm = ({ submitFunction }: LoginFormProps) => {
  const initialUserState: UserStructure = {
    username: "",
    password: "",
  };

  const [userCredentials, setUserLogin] =
    useState<UserStructure>(initialUserState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserLogin({
      ...userCredentials,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    submitFunction(userCredentials);

    setUserLogin(initialUserState);
  };

  const isDisabled = !userCredentials.username || !userCredentials.password;

  return (
    <LoginFormStyled className="form" onSubmit={handleSubmit}>
      <div className="form_form-control">
        <label htmlFor="username" className="form_label-text">
          Nombre de usuario
        </label>
        <input
          type="text"
          name="username"
          id="username"
          autoComplete="off"
          className="form_text-field"
          value={userCredentials.username}
          onChange={handleChange}
        />
      </div>
      <div className="form_form-control">
        <label htmlFor="password" className="form_label-text">
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          className="form_text-field"
          value={userCredentials.password}
          onChange={handleChange}
        />
      </div>
      <div className="form_send-button-container">
        <button
          className="form_send-button"
          type="submit"
          disabled={isDisabled}
        >
          Enviar
        </button>
      </div>
    </LoginFormStyled>
  );
};

export default LoginForm;
