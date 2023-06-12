import NoExtinguishersStyled from "./NoExtinguishersStyled";

const NoExtinguishers = (): React.ReactElement => {
  return (
    <NoExtinguishersStyled>
      <h2 className="page-title">No hay extintores</h2>
      <img src="/images/errorModal.svg" alt="Error" width={280} height={175} />
    </NoExtinguishersStyled>
  );
};

export default NoExtinguishers;
