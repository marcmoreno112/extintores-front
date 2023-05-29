import { Outlet } from "react-router-dom";
import LayoutStyled from "./LayoutStyled";

const Layout = (): React.ReactElement => {
  return (
    <LayoutStyled>
      <h1>Extintores</h1>
      <Outlet />
    </LayoutStyled>
  );
};

export default Layout;
