import Button from "../Button/Button";
import PaginationStyled from "./PaginationStyled";

const Pagination = (): React.ReactElement => {
  return (
    <PaginationStyled>
      <Button className="button" text="Cargar más..." />
    </PaginationStyled>
  );
};

export default Pagination;
