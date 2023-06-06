export interface ModalErrorStructure {
  img: string;
  text: string;
  color: "ok" | "fail";
}

interface ModalErrorsObject {
  wrongCredentials: ModalErrorStructure;
  getItemsError: ModalErrorStructure;
}

const modalErrors: ModalErrorsObject = {
  wrongCredentials: {
    text: "Credenciales erróneas",
    img: "/images/errorModal.svg",
    color: "fail",
  },
  getItemsError: {
    text: "No hay extintores",
    img: "/images/errorModal.svg",
    color: "fail",
  },
};

export default modalErrors;
