import Navigation from "../../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <h1>Extintores</h1>
      <Navigation />
    </HeaderStyled>
  );
};

export default Header;
