import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  return (
    <NotFoundPageStyled>
      <h2 className="page-title">No se encuentra la página</h2>
      <img src="/images/not-found.svg" alt="Not found" />
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
