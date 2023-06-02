import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { useAppDispatch } from "../../store";
import { logoutUserActionCreator } from "../../store/user/userSlice";
import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { removeFromLocalStorage } = useLocalStorage();

  const onClickLogoutUser = () => {
    dispatch(logoutUserActionCreator());

    removeFromLocalStorage("token");

    return;
  };

  return (
    <HeaderStyled>
      <h1 className="app-title">Extintores</h1>
      <Navigation onClickFunction={onClickLogoutUser} />
    </HeaderStyled>
  );
};

export default Header;
