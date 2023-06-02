import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";
import paths from "../../router/paths";
import { useAppSelector } from "../../store";

interface NavigationProps {
  onClickFunction: () => void;
}

const Navigation = ({
  onClickFunction,
}: NavigationProps): React.ReactElement => {
  const isLogged = useAppSelector((state) => state.userState.isLogged);

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
          src="/+.svg"
          alt="Sum symbol for the create element page link"
          width={25}
          height={25}
        />
      </NavLink>
      {isLogged ? (
        <button className="navigation right" onClick={onClickFunction}>
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
