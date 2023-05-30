import LoginFormStyled from "./LoginFormStyled";

const LoginForm = () => {
  return (
    <LoginFormStyled className="form">
      <div className="form-control">
        <label htmlFor="username">Nombre de usuario</label>
        <input
          type="text"
          name="username"
          id="username"
          autoComplete="off"
          className="form_text-field"
        />
      </div>
      <div className="form-control">
        <label htmlFor="password">Contraseña</label>
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
