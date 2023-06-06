import { ModalErrorStructure } from "../../components/Modal/modalErrors";

export interface UiState {
  isLoading: boolean;
  hasModal: boolean;
  modal: ModalErrorStructure;
}
