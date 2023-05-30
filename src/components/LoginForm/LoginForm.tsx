import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";
import { UserStructure } from "../../types";

const LoginForm = () => {
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

  const isDisabled = !userCredentials.username || !userCredentials.password;

  return (
    <LoginFormStyled className="form">
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
