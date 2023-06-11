import Button from "../Button/Button";
import PaginationStyled from "./PaginationStyled";

interface PaginationProps {
  loadMoreAction: () => void;
  isDisabled: string;
}

const Pagination = ({
  loadMoreAction,
  isDisabled,
}: PaginationProps): React.ReactElement => {
  return (
    <PaginationStyled>
      <Button
        actionOnClick={loadMoreAction}
        className={`button ${isDisabled}`}
        text="Cargar más..."
      />
    </PaginationStyled>
  );
};

export default Pagination;
