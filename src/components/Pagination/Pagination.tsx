import Button from "../Button/Button";
import PaginationStyled from "./PaginationStyled";

interface PaginationProps {
  loadMoreAction: () => void;
}

const Pagination = ({
  loadMoreAction,
}: PaginationProps): React.ReactElement => {
  return (
    <PaginationStyled>
      <Button
        actionOnClick={loadMoreAction}
        className="button"
        text="Cargar más..."
      />
    </PaginationStyled>
  );
};

export default Pagination;
