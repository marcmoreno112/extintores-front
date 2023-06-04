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
      {extinguishers.map((extinguisher) => (
        <ExtinguisherCard extinguisher={extinguisher} key={extinguisher.id} />
      ))}
    </ExtinguishersListStyled>
  );
};

export default ExtinguishersList;
