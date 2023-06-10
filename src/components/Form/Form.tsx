import { useState } from "react";
import { ExtinguisherData } from "../../types";
import FormStyled from "./FormStyled";

interface FormProps {
  buttonText: string;
  userId: string;
  submitFunction: (formData: ExtinguisherData) => void;
}

const Form = ({
  buttonText,
  userId,
  submitFunction,
}: FormProps): React.ReactElement => {
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

  const [formData, setFormData] = useState<ExtinguisherData>(initialFormState);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    const updatedClass = checked
      ? [...formData.class, name]
      : formData.class.filter((c) => c !== name);

    setFormData((prevFormData) => ({
      ...prevFormData,
      class: updatedClass,
    }));
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    submitFunction(formData);
  };

  const isDisabled =
    !formData.brand ||
    formData.class.length === 0 ||
    !formData.description ||
    !formData.disadvantages ||
    !formData.fireExtinguishingAgent ||
    !formData.img ||
    !formData.model ||
    !formData.strengths ||
    !formData.usefulLife;

  return (
    <FormStyled className="form" onSubmit={handleSubmit}>
      <div className="form__control">
        <label htmlFor="brand" className="form__label">
          Marca
        </label>
        <input
          type="text"
          name="brand"
          id="brand"
          autoComplete="off"
          className="form__text-field"
          value={formData.brand}
          onChange={handleInputChange}
        />
      </div>

      <div className="form__control">
        <label htmlFor="model" className="form__label">
          Modelo
        </label>
        <input
          type="text"
          name="model"
          id="model"
          autoComplete="off"
          className="form__text-field"
          value={formData.model}
          onChange={handleInputChange}
        />
      </div>

      <div className="form__control">
        <label htmlFor="img" className="form__label">
          URL de la imagen
        </label>
        <input
          type="text"
          name="img"
          id="img"
          autoComplete="off"
          className="form__text-field"
          value={formData.img}
          onChange={handleInputChange}
        />
      </div>

      <div className="form__control">
        <label htmlFor="description" className="form__label">
          Descripción
        </label>
        <textarea
          name="description"
          id="description"
          autoComplete="off"
          className="form__text-field"
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>

      <div className="form__control">
        <label htmlFor="disadvantages" className="form__label">
          Desventajas
        </label>
        <textarea
          name="disadvantages"
          id="disadvantages"
          autoComplete="off"
          className="form__text-field"
          value={formData.disadvantages}
          onChange={handleInputChange}
        />
      </div>

      <div className="form__control">
        <label htmlFor="strengths" className="form__label">
          Fortalezas
        </label>
        <textarea
          name="strengths"
          id="strengths"
          autoComplete="off"
          className="form__text-field"
          value={formData.strengths}
          onChange={handleInputChange}
        />
      </div>

      <div className="form__control">
        <label htmlFor="fireExtinguishingAgent" className="form__label">
          Agente extintor
        </label>
        <input
          type="text"
          name="fireExtinguishingAgent"
          id="fireExtinguishingAgent"
          autoComplete="off"
          className="form__text-field"
          value={formData.fireExtinguishingAgent}
          onChange={handleInputChange}
        />
      </div>

      <div className="form__control">
        <label htmlFor="usefulLife" className="form__label">
          Vida útil
        </label>
        <input
          type="text"
          name="usefulLife"
          id="usefulLife"
          autoComplete="off"
          className="form__text-field"
          value={formData.usefulLife}
          onChange={handleInputChange}
        />
      </div>

      <span className="form__label">Clase</span>

      <div className="form__checkbox-control">
        <div className="form__checkbox-container">
          <input
            className="form__checkbox"
            type="checkbox"
            name="A"
            id="class-a"
            onChange={handleCheckboxChange}
            value="class-a"
            checked={formData.class.includes("A")}
          />
          <label className="form__checkbox-label" htmlFor="class-a">
            Clase A
          </label>
        </div>

        <div className="form__checkbox-container">
          <input
            className="form__checkbox"
            type="checkbox"
            name="B"
            id="class-b"
            onChange={handleCheckboxChange}
            value="class-b"
            checked={formData.class.includes("B")}
          />
          <label className="form__checkbox-label" htmlFor="class-b">
            Clase B
          </label>
        </div>

        <div className="form__checkbox-container">
          <input
            className="form__checkbox"
            type="checkbox"
            name="C"
            id="class-c"
            onChange={handleCheckboxChange}
            value="class-c"
            checked={formData.class.includes("C")}
          />
          <label className="form__checkbox-label" htmlFor="class-c">
            Clase C
          </label>
        </div>

        <div className="form__checkbox-container">
          <input
            className="form__checkbox"
            type="checkbox"
            name="D"
            id="class-d"
            onChange={handleCheckboxChange}
            value="class-d"
            checked={formData.class.includes("D")}
          />
          <label className="form__checkbox-label" htmlFor="class-d">
            Clase D
          </label>
        </div>

        <div className="form__checkbox-container">
          <input
            className="form__checkbox"
            type="checkbox"
            name="K"
            id="class-k"
            onChange={handleCheckboxChange}
            value="class-k"
            checked={formData.class.includes("K")}
          />
          <label className="form__checkbox-label" htmlFor="class-k">
            Clase K
          </label>
        </div>
      </div>

      <div className="form__send-button-container">
        <button
          className="form__send-button"
          type="submit"
          disabled={isDisabled}
        >
          {buttonText}
        </button>
      </div>
    </FormStyled>
  );
};

export default Form;
