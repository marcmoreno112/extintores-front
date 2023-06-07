import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  return (
    <NotFoundPageStyled>
      <h2 className="page-title">No se encuentra la página</h2>
      <img
        src="/images/errorModal.svg"
        alt="Not found"
        width={280}
        height={175}
      />
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
