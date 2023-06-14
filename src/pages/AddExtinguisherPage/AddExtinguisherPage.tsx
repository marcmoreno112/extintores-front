import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import { useAppDispatch, useAppSelector } from "../../store";
import AddExtinguisherPageStyled from "./AddExtinguisherPageStyled";
import useExtinguishers from "../../hooks/useExtinguishers/useExtinguishers";
import { ExtinguisherData } from "../../types";
import { createExtinguisherActionCreator } from "../../store/extinguishers/extinguishersSlice";

const AddExtinguisherPage = (): React.ReactElement => {
  window.scroll(0, 0);

  const { createExtinguisher } = useExtinguishers();

  const dispatch = useAppDispatch();

  const { id: userId } = useAppSelector((state) => state.userState);

  const navigate = useNavigate();

  const onSubmitCreateExtinguisher = async (extinguisher: ExtinguisherData) => {
    const newExtinguisher = await createExtinguisher(extinguisher);

    if (!newExtinguisher) {
      return;
    }
    dispatch(createExtinguisherActionCreator(newExtinguisher));

    navigate("/");
  };

  const initialFormState: ExtinguisherData = {
    brand: "",
    class: [],
    description: "",
    disadvantages: "",
    fireExtinguishingAgent: "",
    img: "",
    model: "",
    strengths: "",
    usefulLife: "",
    user: userId,
  };

  return (
    <AddExtinguisherPageStyled>
      <h2 className="page-title">Añadir extintor</h2>
      <Form
        submitFunction={onSubmitCreateExtinguisher}
        buttonText="Crear"
        initialFormState={initialFormState}
      />
    </AddExtinguisherPageStyled>
  );
};

export default AddExtinguisherPage;
