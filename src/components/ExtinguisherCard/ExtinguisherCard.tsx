import { ExtinguisherStructure } from "../../types";
import ExtinguisherCardStyled from "./ExtinguisherCardStyled";

interface ExtinguisherCardProps {
  extinguisher: ExtinguisherStructure;
  isLazy: "lazy" | "eager";
}

const ExtinguisherCard = ({
  extinguisher: { brand, class: fireClasses, img, model },
  isLazy,
}: ExtinguisherCardProps): React.ReactElement => {
  return (
    <ExtinguisherCardStyled>
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
