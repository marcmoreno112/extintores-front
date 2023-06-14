export interface ModalStructure {
  img: string;
  text: string;
  color: "ok" | "fail";
}

interface ModalsObject {
  wrongCredentials: ModalStructure;
  getItemsError: ModalStructure;
  deleteItemSuccess: ModalStructure;
  deleteItemError: ModalStructure;
  createItemSuccess: ModalStructure;
  createItemError: ModalStructure;
  updateItemSuccess: ModalStructure;
  updateItemError: ModalStructure;
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

  deleteItemSuccess: {
    text: "Extintor eliminado",
    color: "ok",
    img: "images/successModal.svg",
  },

  deleteItemError: {
    text: "No se pudo eliminar",
    color: "fail",
    img: "images/errorModal.svg",
  },

  createItemSuccess: {
    text: "¡Extintor creado!",
    color: "ok",
    img: "images/successModal.svg",
  },

  createItemError: {
    text: "No se puede crear",
    color: "fail",
    img: "images/errorModal.svg",
  },

  updateItemSuccess: {
    text: "¡Extintor actualizado!",
    color: "ok",
    img: "images/successModal.svg",
  },

  updateItemError: {
    text: "No se puede actualizar",
    color: "fail",
    img: "images/errorModal.svg",
  },
};

export default modals;
