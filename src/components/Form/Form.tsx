import FormStyled from "./FormStyled";

interface FormProps {
  buttonText: string;
}

const Form = ({ buttonText }: FormProps): React.ReactElement => {
  return (
    <FormStyled className="form">
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
        />
      </div>

      <div className="form__control">
        <label htmlFor="imgUrl" className="form__label">
          URL de la imagen
        </label>
        <input
          type="text"
          name="imgUrl"
          id="imgUrl"
          autoComplete="off"
          className="form__text-field"
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
        />
      </div>

      <span className="form__label">Clase</span>

      <div className="form__checkbox-control">
        <div>
          <input className="form__checkbox" type="checkbox" id="class-a" />
          <label className="form__checkbox-label" htmlFor="class-a">
            Clase A
          </label>
        </div>

        <div>
          <input className="form__checkbox" type="checkbox" id="class-b" />
          <label className="form__checkbox-label" htmlFor="class-b">
            Clase B
          </label>
        </div>

        <div>
          <input className="form__checkbox" type="checkbox" id="class-c" />
          <label className="form__checkbox-label" htmlFor="class-c">
            Clase C
          </label>
        </div>

        <div>
          <input className="form__checkbox" type="checkbox" id="class-d" />
          <label className="form__checkbox-label" htmlFor="class-d">
            Clase D
          </label>
        </div>

        <div>
          <input className="form__checkbox" type="checkbox" id="class-k" />
          <label className="form__checkbox-label" htmlFor="class-k">
            Clase K
          </label>
        </div>
      </div>

      <div className="form__send-button-container">
        <button className="form__send-button" type="submit">
          {buttonText}
        </button>
      </div>
    </FormStyled>
  );
};

export default Form;
