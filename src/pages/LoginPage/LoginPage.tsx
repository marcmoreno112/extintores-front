import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import useToken from "../../hooks/useToken/useToken";
import useUser from "../../hooks/useUser/useUser";
import { useAppDispatch, useAppSelector } from "../../store";
import { loginUserActionCreator } from "../../store/user/userSlice";
import { UserStructure } from "../../types";
import LoginPageStyled from "./LoginPageStyled";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import Loader from "../../components/Loader/Loader";

const LoginPage = (): React.ReactElement => {
  const { getToken } = useUser();
  const dispatch = useAppDispatch();
  const { decodeToken } = useToken();
  const navigate = useNavigate();
  const { addToLocalStorage } = useLocalStorage();
  const { isLoading } = useAppSelector((state) => state.uiState);

  const onSubmitLoginUser = async (userCredentials: UserStructure) => {
    const token = await getToken(userCredentials);

    if (!token) {
      return;
    }

    const userData = decodeToken(token);

    addToLocalStorage("token", token);

    dispatch(loginUserActionCreator({ ...userData, token }));

    navigate("/");
  };

  return (
    <LoginPageStyled>
      {isLoading ? <Loader /> : ""}
      <h2 className="page-title">Login</h2>
      <LoginForm submitFunction={onSubmitLoginUser} />
    </LoginPageStyled>
  );
};

export default LoginPage;
