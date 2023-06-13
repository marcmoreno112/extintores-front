import { useDispatch } from "react-redux";
import useExtinguishers from "../../hooks/useExtinguishers/useExtinguishers";
import DetailPageStyled from "./DetailPageStyled";
import { useAppSelector } from "../../store";
import { loadSelectedExtinguisherActionCreator } from "../../store/extinguishers/extinguishersSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const DetailPage = (): React.ReactElement => {
  const dispatch = useDispatch();

  const { id: selectedId } = useParams();

  const { getSelectedExtinguisher } = useExtinguishers();

  useEffect(() => {
    (async () => {
      const extinguisherFromApi = await getSelectedExtinguisher(
        selectedId as string
      );

      if (!extinguisherFromApi) {
        return;
      }

      const loadSelectedExtinguisherAction =
        loadSelectedExtinguisherActionCreator(extinguisherFromApi.extinguisher);

      dispatch(loadSelectedExtinguisherAction);
    })();
  }, [dispatch, getSelectedExtinguisher, selectedId]);

  const { selectedExtinguisher } = useAppSelector(
    (state) => state.extinguishersState
  );

  const {
    brand,
    model,
    img,
    class: fireClasses,
    description,
    disadvantages,
    fireExtinguishingAgent,
    strengths,
    usefulLife,
  } = selectedExtinguisher;

  if (selectedExtinguisher.brand === "") {
    return <NotFoundPage />;
  }

  return (
    <DetailPageStyled>
      <h2 className="page-title">Detalle</h2>
      <img
        alt={`${brand} ${model} extinguisher`}
        src={img}
        width={150}
        height={300}
        className="image"
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
      <div className="info">
        <span className="info-title">Description:</span>
        <span>{description}</span>
      </div>
      <div className="info">
        <span className="info-title">Desventajas:</span>
        <span>{disadvantages}</span>
      </div>
      <div className="info">
        <span className="info-title">Fortalezas:</span>
        <span>{strengths}</span>
      </div>
      <div className="info">
        <span className="info-title">Agente extintor:</span>
        <span>{fireExtinguishingAgent}</span>
      </div>
      <div className="info">
        <span className="info-title">Vida útil:</span>
        <span>{usefulLife}</span>
      </div>
    </DetailPageStyled>
  );
};

export default DetailPage;
