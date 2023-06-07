import { useAppSelector } from "../../store";
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

  return (
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
  );
};

export default ExtinguishersList;
