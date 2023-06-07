export interface ModalStructure {
  img: string;
  text: string;
  color: "ok" | "fail";
}

interface ModalsObject {
  wrongCredentials: ModalStructure;
  getItemsError: ModalStructure;
}

const modals: ModalsObject = {
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

export default modals;
