import { useAppDispatch, useAppSelector } from "../../store";
import { loadMoreExtinguishersActionCreator } from "../../store/extinguishers/extinguishersSlice";
import { ExtinguisherStructure } from "../../types";
import ExtinguisherCard from "../ExtinguisherCard/ExtinguisherCard";
import Pagination from "../Pagination/Pagination";
import ExtinguishersListStyled from "./ExtinguishersListStyled";

interface ExtinguishersListProps {
  extinguishers: ExtinguisherStructure[];
}

const ExtinguishersList = ({
  extinguishers,
}: ExtinguishersListProps): React.ReactElement => {
  const { id: userId } = useAppSelector((state) => state.userState);
  const { numberOfExtinguishersAtDb, extinguishers: shownExtinguishers } =
    useAppSelector((state) => state.extinguishersState);

  const dispatch = useAppDispatch();

  const loadMoreAction = () => {
    dispatch(loadMoreExtinguishersActionCreator());
  };

  const isDisabled =
    numberOfExtinguishersAtDb > shownExtinguishers.length ? "" : "disabled";

  const isEmpty = numberOfExtinguishersAtDb === 0;

  return (
    <>
      <ExtinguishersListStyled>
        {extinguishers.map((extinguisher, index) => (
          <ExtinguisherCard
            isOwner={userId === extinguisher.user}
            extinguisher={extinguisher}
            key={extinguisher.id}
            isLazy={index === 0 ? "eager" : "lazy"}
          />
        ))}
      </ExtinguishersListStyled>
      {!isEmpty && (
        <Pagination isDisabled={isDisabled} loadMoreAction={loadMoreAction} />
      )}
    </>
  );
};

export default ExtinguishersList;
