import useExtinguishers from "../../hooks/useExtinguishers/useExtinguishers";
import { useAppDispatch } from "../../store";
import { deleteExtinguisherActionCreator } from "../../store/extinguishers/extinguishersSlice";
import { ExtinguisherStructure } from "../../types";
import Button from "../Button/Button";
import ExtinguisherCardStyled from "./ExtinguisherCardStyled";

interface ExtinguisherCardProps {
  extinguisher: ExtinguisherStructure;
  isLazy: "lazy" | "eager";
  isOwner: boolean;
}

const ExtinguisherCard = ({
  extinguisher: { brand, class: fireClasses, img, model, id },
  isLazy,
  isOwner,
}: ExtinguisherCardProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { deleteExtinguisher } = useExtinguishers();

  const deleteAction = () => {
    deleteExtinguisher(id);
    dispatch(deleteExtinguisherActionCreator(id));
  };

  return (
    <ExtinguisherCardStyled>
      {isOwner && (
        <div className="card-button-container">
          <Button
            altText="close button"
            height="25"
            url="/images/close-button.svg"
            width="25"
            actionOnClick={deleteAction}
            className="card-button"
          />
        </div>
      )}

      <img
        alt={`${brand} ${model} extinguisher`}
        src={img}
        width={150}
        height={300}
        loading={isLazy}
        className="card-image"
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
