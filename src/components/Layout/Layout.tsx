import { Outlet } from "react-router-dom";
import LayoutStyled from "./LayoutStyled";
import Navigation from "../../Navigation/Navigation";

const Layout = (): React.ReactElement => {
  return (
    <LayoutStyled>
      <h1>Extintores</h1>
      <Navigation />
      <Outlet />
    </LayoutStyled>
  );
};

export default Layout;
