import { ExtinguisherStructure } from "../../types";
import Button from "../Button/Button";
import ExtinguisherCardStyled from "./ExtinguisherCardStyled";

interface ExtinguisherCardProps {
  extinguisher: ExtinguisherStructure;
  isLazy: "lazy" | "eager";
  isOwner: boolean;
  deleteAction: (id: string) => void;
}

const ExtinguisherCard = ({
  extinguisher: { brand, class: fireClasses, img, model, id },
  isLazy,
  isOwner,
  deleteAction,
}: ExtinguisherCardProps): React.ReactElement => {
  return (
    <ExtinguisherCardStyled>
      {isOwner && (
        <div className="card-button-container">
          <Button
            actionOnClick={() => deleteAction(id)}
            className="card-button"
          >
            <img src="/images/close-button.svg" alt="close button" />
          </Button>
        </div>
      )}

      <img
        alt={`${brand} ${model} extinguisher`}
        src={img}
        width={150}
        height={300}
        loading={isLazy}
      />
      <h3>{brand}</h3>
      <h3>{model}</h3>
      <div className="fire-class-container">
        {fireClasses.map((fireClass) => (
          <span key={fireClass} className="fire-class">
            {fireClass}
          </span>
        ))}
      </div>
    </ExtinguisherCardStyled>
  );
};

export default ExtinguisherCard;
