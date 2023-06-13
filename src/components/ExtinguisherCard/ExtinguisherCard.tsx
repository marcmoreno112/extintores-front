import { Link } from "react-router-dom";
import useExtinguishers from "../../hooks/useExtinguishers/useExtinguishers";
import { useAppDispatch } from "../../store";
import {
  deleteExtinguisherActionCreator,
  loadExtinguishersActionCreator,
  updateNumberOfExtinguishersActionCreator,
} from "../../store/extinguishers/extinguishersSlice";
import { ExtinguisherStructure } from "../../types";
import Button from "../Button/Button";
import ExtinguisherCardStyled from "./ExtinguisherCardStyled";
import paths from "../../router/paths";

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

  const { deleteExtinguisher, getExtinguishers } = useExtinguishers();

  const deleteAction = async () => {
    await deleteExtinguisher(id);

    dispatch(deleteExtinguisherActionCreator(id));

    const extinguishers = await getExtinguishers();

    if (extinguishers) {
      const updateNumberOfExtinguishersAction =
        updateNumberOfExtinguishersActionCreator(
          extinguishers.numberOfExtinguishers
        );

      dispatch(updateNumberOfExtinguishersAction);

      dispatch(loadExtinguishersActionCreator(extinguishers.extinguishers));
    }
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
      <Link to={`${paths.detail}/${id}`}>
        <img
          alt={`${brand} ${model} extinguisher`}
          src={img}
          width={150}
          height={300}
          loading={isLazy}
          className="card-image"
        />
      </Link>

      <Link to={`${paths.detail}/${id}`} className="card-title-container">
        <h3 className="card-title">{brand}</h3>
      </Link>
      <Link to={`${paths.detail}/${id}`} className="card-title-container">
        <h4 className="card-title">{model}</h4>
      </Link>
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
