import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <h1 className="app-title">Extintores</h1>
      <Navigation />
    </HeaderStyled>
  );
};

export default Header;
