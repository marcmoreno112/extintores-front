import LoginForm from "../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): React.ReactElement => {
  return (
    <LoginPageStyled>
      <h2 className="page-title">Login</h2>
      <LoginForm />
    </LoginPageStyled>
  );
};

export default LoginPage;
