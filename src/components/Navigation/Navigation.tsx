import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";
import paths from "../../router/paths";
import { useAppDispatch, useAppSelector } from "../../store";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { logoutUserActionCreator } from "../../store/user/userSlice";

const Navigation = (): React.ReactElement => {
  const isLogged = useAppSelector((state) => state.userState.isLogged);

  const dispatch = useAppDispatch();
  const { removeFromLocalStorage } = useLocalStorage();

  const onClickLogoutUser = () => {
    dispatch(logoutUserActionCreator());

    removeFromLocalStorage("token");

    return;
  };

  return (
    <NavigationStyled>
      <NavLink to="/" className="navigation">
        Lista
      </NavLink>
      <NavLink
        to="/"
        aria-label="Create element"
        className="navigation__center-link"
      >
        <img
          src="/images/+.svg"
          alt="Sum symbol for the create element page link"
          width={25}
          height={25}
        />
      </NavLink>
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
