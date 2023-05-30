import LoginFormStyled from "./LoginFormStyled";

const LoginForm = () => {
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
        />
      </div>
      <div className="form_send-button-container">
        <button className="form_send-button">Enviar</button>
      </div>
    </LoginFormStyled>
  );
};

export default LoginForm;
