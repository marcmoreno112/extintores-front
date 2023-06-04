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
        <h3 key={extinguisher.id}>{extinguisher.model}</h3>
      ))}
    </ExtinguishersListStyled>
  );
};

export default ExtinguishersList;
