import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): React.ReactElement => {
  return (
    <NavigationStyled>
      <NavLink to={"/"} className={"outside"}>
        Lista
      </NavLink>
      <NavLink to={"/"}>
        <img src="+.png" alt="Create element" />
      </NavLink>
      <NavLink to={"/"} className={"outside right"}>
        Login
      </NavLink>
    </NavigationStyled>
  );
};

export default Navigation;
