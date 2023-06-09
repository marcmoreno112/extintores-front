import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import { useAppDispatch, useAppSelector } from "../../store";
import AddExtinguisherPageStyled from "./AddExtinguisherPageStyled";
import useExtinguishers from "../../hooks/useExtinguisers/useExtinguishers";
import { ExtinguisherData } from "../../types";
import { createExtinguisherActionCreator } from "../../store/extinguishers/extinguishersSlice";

const AddExtinguisherPage = (): React.ReactElement => {
  const userId = useAppSelector((state) => state.userState.id);
  const { createExtinguisher } = useExtinguishers();
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onSubmitCreateExtinguisher = async (extinguisher: ExtinguisherData) => {
    const newExtinguisher = await createExtinguisher(extinguisher);

    if (!newExtinguisher) {
      return;
    }
    dispatch(createExtinguisherActionCreator(newExtinguisher));

    navigate("/");
  };

  return (
    <AddExtinguisherPageStyled>
      <h2 className="page-title">Add extinguisher</h2>
      <Form
        submitFunction={onSubmitCreateExtinguisher}
        buttonText="Crear"
        userId={userId}
      />
    </AddExtinguisherPageStyled>
  );
};

export default AddExtinguisherPage;
