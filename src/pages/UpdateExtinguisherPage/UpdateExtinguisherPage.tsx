import { useNavigate, useParams } from "react-router-dom";
import UpdateExtinguisherPageStyled from "./UpdateExtinguisherPageStyled";
import { useAppSelector } from "../../store";
import { ExtinguisherData, ExtinguisherStructure } from "../../types";
import Form from "../../components/Form/Form";
import useExtinguishers from "../../hooks/useExtinguishers/useExtinguishers";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadUpdatingExtinguisherActionCreator } from "../../store/extinguishers/extinguishersSlice";

const UpdateExtinguisherPage = (): React.ReactElement => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id: selectedId } = useParams();

  const { getSelectedExtinguisher, updateExtinguisher } = useExtinguishers();

  const [isLoaded, setIsLoaded] = useState(false);

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

      setIsLoaded(true);
    })();
  }, [dispatch, getSelectedExtinguisher, selectedId]);

  const { updatingExtinguisher } = useAppSelector(
    (state) => state.extinguishersState
  );

  const onSubmitUpdateExtinguisher = async (formData: ExtinguisherData) => {
    await updateExtinguisher({ ...formData, id: selectedId });

    navigate("/");
  };

  const initialFormState: ExtinguisherStructure = { ...updatingExtinguisher };

  delete initialFormState.id;

  return (
    <UpdateExtinguisherPageStyled>
      <h2 className="page-title">Actualizar extintor</h2>
      {isLoaded && (
        <Form
          submitFunction={onSubmitUpdateExtinguisher}
          buttonText="Actualizar"
          initialFormState={initialFormState}
        />
      )}
    </UpdateExtinguisherPageStyled>
  );
};

export default UpdateExtinguisherPage;
