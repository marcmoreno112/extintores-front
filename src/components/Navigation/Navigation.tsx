import { NavLink, useLocation } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";
import paths from "../../router/paths";
import { useAppDispatch, useAppSelector } from "../../store";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { logoutUserActionCreator } from "../../store/user/userSlice";

const Navigation = (): React.ReactElement => {
  const isLogged = useAppSelector((state) => state.userState.isLogged);

  const { pathname } = useLocation();

  const dispatch = useAppDispatch();
  const { removeFromLocalStorage } = useLocalStorage();

  const onClickLogoutUser = () => {
    dispatch(logoutUserActionCreator());

    removeFromLocalStorage("token");
  };

  return (
    <NavigationStyled>
      <NavLink to="/extintores" className="navigation">
        Lista
      </NavLink>

      {isLogged && (
        <NavLink
          to="/add"
          aria-label="Create element"
          className="navigation__center-link"
        >
          <img
            src={
              pathname === "/add" ? "/images/add-red.svg" : "/images/add.svg"
            }
            alt="Sum symbol for the create element page link"
            width={25}
            height={25}
          />
        </NavLink>
      )}

      {isLogged ? (
        <button className="navigation right" onClick={onClickLogoutUser}>
          Logout
        </button>
      ) : (
        <NavLink to={`${paths.login}`} className="navigation right">
          Login
        </NavLink>
      )}
    </NavigationStyled>
  );
};

export default Navigation;
