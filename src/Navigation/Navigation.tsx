import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): React.ReactElement => {
  return (
    <NavigationStyled>
      <NavLink to={"/"} className={"navigation_outside-link"}>
        Lista
      </NavLink>
      <NavLink to={"/"}>
        <img src="/+.svg" alt="Create element" />
      </NavLink>
      <NavLink
        to={"/user/login"}
        className={"navigation_outside-link navigation_right-link"}
      >
        Login
      </NavLink>
    </NavigationStyled>
  );
};

export default Navigation;
