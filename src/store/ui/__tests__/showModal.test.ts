import modals from "../../../components/Modal/modals";
import { initialUiState, showModalActionCreator, uiReducer } from "../uiSlice";

describe("Given a showModal reducer", () => {
  describe("When it receives the currentUiState and a showModal action", () => {
    test("Then it should return a new state with hasModal true", () => {
      const currentUiState = initialUiState;
      const expectedUiNewState = true;

      const showErrorAction = showModalActionCreator(modals.wrongCredentials);
      const newUiState = uiReducer(currentUiState, showErrorAction);

      const hasModal = newUiState.hasModal;

      expect(hasModal).toBe(expectedUiNewState);
    });
  });
});
