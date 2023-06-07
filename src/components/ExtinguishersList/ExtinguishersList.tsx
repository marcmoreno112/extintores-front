import { useAppDispatch, useAppSelector } from "../../store";
import { deleteExtinguisherActionCreator } from "../../store/extinguishers/extinguishersSlice";
import { ExtinguisherStructure } from "../../types";
import ExtinguisherCard from "../ExtinguisherCard/ExtinguisherCard";
import ExtinguishersListStyled from "./ExtinguishersListStyled";

interface ExtinguishersListProps {
  extinguishers: ExtinguisherStructure[];
}

const ExtinguishersList = ({
  extinguishers,
}: ExtinguishersListProps): React.ReactElement => {
  const { id: userId } = useAppSelector((state) => state.userState);

  const dispatch = useAppDispatch();

  const deleteAction = (id: string) =>
    dispatch(deleteExtinguisherActionCreator(id));

  return (
    <ExtinguishersListStyled>
      {extinguishers.map((extinguisher, index) => (
        <ExtinguisherCard
          deleteAction={deleteAction}
          isOwner={userId === extinguisher.user}
          extinguisher={extinguisher}
          key={extinguisher.id}
          isLazy={index === 0 ? "eager" : "lazy"}
        />
      ))}
    </ExtinguishersListStyled>
  );
};

export default ExtinguishersList;
