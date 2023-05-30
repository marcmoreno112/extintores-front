import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";
import paths from "../../router/paths";

const Navigation = (): React.ReactElement => {
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
        <img src="/+.svg" alt="Sum symbol for the create element page link" />
      </NavLink>
      <NavLink to={`${paths.login}`} className="navigation right">
        Login
      </NavLink>
    </NavigationStyled>
  );
};

export default Navigation;
