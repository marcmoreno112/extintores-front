import { ExtinguisherStructure } from "../../types";
import ExtinguishersListStyled from "./ExtinguishersListStyled";

interface ExtinguishersListProps {
  extinguishers: ExtinguisherStructure[];
}

const ExtinguishersList = ({
  extinguishers,
}: ExtinguishersListProps): React.ReactElement => {
  return (
    <ExtinguishersListStyled>
      {extinguishers.map((extinguisher) => (
        <h3 key={extinguisher.id}>{extinguisher.brand}</h3>
      ))}
    </ExtinguishersListStyled>
  );
};

export default ExtinguishersList;
