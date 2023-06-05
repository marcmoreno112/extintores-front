import LoaderStyled from "./LoaderStyled";

const Loader = (): React.ReactElement => {
  return (
    <LoaderStyled>
      <span className="loader">Loading</span>
    </LoaderStyled>
  );
};

export default Loader;
