import Button from "../Button/Button";
import ModalStyled from "./ModalStyled";
import { ModalStructure } from "./modals";

interface ModalProps {
  modal: ModalStructure;
  action: () => void;
}

const Modal = ({
  modal: { color, img, text },
  action,
}: ModalProps): React.ReactElement => {
  return (
    <ModalStyled>
      <div className={`modal modal--${color}`}>
        <div className="modal__button-container">
          <Button
            altText="close button"
            height="50"
            url="/images/close-button.svg"
            width="50"
            actionOnClick={action}
            className="modal__button"
          />
        </div>
        <span className={`modal__title modal__title--${color}`}>{text}</span>
        <img src={img} alt={text} height={200} width={200} />
      </div>
    </ModalStyled>
  );
};

export default Modal;
