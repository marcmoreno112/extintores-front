export interface ModalErrorStructure {
  img: string;
  text: string;
  color: string;
}

interface ModalErrorsObject {
  wrongCredentials: ModalErrorStructure;
}

const modalErrors: ModalErrorsObject = {
  wrongCredentials: {
    text: "Credenciales erróneas",
    img: "/images/errorModal.svg",
    color: "fail",
  },
};

export default modalErrors;
