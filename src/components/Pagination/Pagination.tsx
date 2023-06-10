import { useAppDispatch } from "../../store";
import { loadMoreExtinguishersActionCreator } from "../../store/extinguishers/extinguishersSlice";
import Button from "../Button/Button";
import PaginationStyled from "./PaginationStyled";

const Pagination = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const loadMoreAction = () => {
    dispatch(loadMoreExtinguishersActionCreator());
  };

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
