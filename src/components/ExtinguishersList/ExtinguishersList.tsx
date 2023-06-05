import { ExtinguisherStructure } from "../../types";
import ExtinguisherCard from "../ExtinguisherCard/ExtinguisherCard";
import ExtinguishersListStyled from "./ExtinguishersListStyled";

interface ExtinguishersListProps {
  extinguishers: ExtinguisherStructure[];
}

const ExtinguishersList = ({
  extinguishers,
}: ExtinguishersListProps): React.ReactElement => {
  return (
    <ExtinguishersListStyled>
      {extinguishers.map((extinguisher, index) => (
        <ExtinguisherCard
          extinguisher={extinguisher}
          key={extinguisher.id}
          isLazy={index === 0 ? "eager" : "lazy"}
        />
      ))}
    </ExtinguishersListStyled>
  );
};

export default ExtinguishersList;
