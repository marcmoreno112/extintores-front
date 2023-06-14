import { useNavigate, useParams } from "react-router-dom";
import UpdateExtinguisherPageStyled from "./UpdateExtinguisherPageStyled";
import { useAppSelector } from "../../store";
import { ExtinguisherData, ExtinguisherStructure } from "../../types";
import Form from "../../components/Form/Form";
import useExtinguishers from "../../hooks/useExtinguishers/useExtinguishers";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  loadExtinguishersActionCreator,
  loadUpdatingExtinguisherActionCreator,
  updateNumberOfExtinguishersActionCreator,
} from "../../store/extinguishers/extinguishersSlice";

const UpdateExtinguisherPage = (): React.ReactElement => {
  window.scroll(0, 0);

  const dispatch = useDispatch();

  const { updatingExtinguisher } = useAppSelector(
    (state) => state.extinguishersState
  );

  const { id: selectedId } = useParams();

  const { getSelectedExtinguisher, updateExtinguisher, getExtinguishers } =
    useExtinguishers();

  useEffect(() => {
    (async () => {
      const extinguisherFromApi = await getSelectedExtinguisher(
        selectedId as string
      );

      if (!extinguisherFromApi) {
        return;
      }

      const loadUpdatingExtinguisherAction =
        loadUpdatingExtinguisherActionCreator(extinguisherFromApi.extinguisher);

      dispatch(loadUpdatingExtinguisherAction);
    })();
  }, [dispatch, getSelectedExtinguisher, selectedId]);

  const navigate = useNavigate();

  const onSubmitUpdateExtinguisher = async (formdata: ExtinguisherData) => {
    await updateExtinguisher({ ...formdata, id: selectedId });

    const extinguishers = await getExtinguishers();

    if (extinguishers) {
      const updateNumberOfExtinguishersAction =
        updateNumberOfExtinguishersActionCreator(
          extinguishers.numberOfExtinguishers
        );

      dispatch(updateNumberOfExtinguishersAction);

      dispatch(loadExtinguishersActionCreator(extinguishers.extinguishers));
    }

    navigate("/");
  };

  const initialFormState: ExtinguisherStructure = { ...updatingExtinguisher };

  delete initialFormState.id;

  return (
    <UpdateExtinguisherPageStyled>
      <h2 className="page-title">Actualizar extintor</h2>
      <Form
        submitFunction={onSubmitUpdateExtinguisher}
        buttonText="Actualizar"
        initialFormState={initialFormState}
      />
    </UpdateExtinguisherPageStyled>
  );
};

export default UpdateExtinguisherPage;
