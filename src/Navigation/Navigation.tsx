import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): React.ReactElement => {
  return (
    <NavigationStyled>
      <NavLink to={"/"}>Lista</NavLink>
      <NavLink to={"/"}>+</NavLink>
      <NavLink to={"/"}>Login</NavLink>
    </NavigationStyled>
  );
};

export default Navigation;
