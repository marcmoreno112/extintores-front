import { Outlet } from "react-router-dom";
import LayoutStyled from "./LayoutStyled";
import Header from "../Header/Header";

const Layout = (): React.ReactElement => {
  return (
    <LayoutStyled>
      <Header />
      <Outlet />
    </LayoutStyled>
  );
};

export default Layout;
