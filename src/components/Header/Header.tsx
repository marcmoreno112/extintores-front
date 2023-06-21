import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img
        alt="extintores logo"
        src="/images/extintores-logo.svg"
        width={280}
        height={140}
      />
      <Navigation />
    </HeaderStyled>
  );
};

export default Header;
