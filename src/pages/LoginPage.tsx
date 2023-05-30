/* eslint-disable @typescript-eslint/no-empty-function */
import LoginForm from "../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): React.ReactElement => {
  return (
    <LoginPageStyled>
      <h2 className="page-title">Login</h2>
      <LoginForm submitFunction={() => {}} />
    </LoginPageStyled>
  );
};

export default LoginPage;
