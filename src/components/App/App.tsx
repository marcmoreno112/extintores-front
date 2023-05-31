import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import useToken from "../../hooks/useToken/useToken";
import { useAppDispatch } from "../../store";
import { UserTokenStructure } from "../../store/user/types";
import { loginUserActionCreator } from "../../store/user/userSlice";
import Layout from "../Layout/Layout";
import paths from "../../router/paths";

const App = (): JSX.Element => {
  const { getFromLocalStorage } = useLocalStorage();

  const { decodeToken } = useToken();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const token = getFromLocalStorage("token");

    if (token) {
      const userData: UserTokenStructure = decodeToken(token);

      dispatch(loginUserActionCreator({ ...userData }));
    } else {
      navigate(paths.login);
    }
  }, [decodeToken, dispatch, getFromLocalStorage, navigate]);

  return <Layout />;
};

export default App;
