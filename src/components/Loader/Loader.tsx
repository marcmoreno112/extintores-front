import LoaderStyled from "./LoaderStyled";

const Loader = (): React.ReactElement => {
  return (
    <LoaderStyled>
      <span className="loader">Cargando</span>
    </LoaderStyled>
  );
};

export default Loader;
