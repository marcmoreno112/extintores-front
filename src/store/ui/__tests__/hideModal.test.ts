import { UiState } from "../types";
import { hideModalActionCreator, uiReducer } from "../uiSlice";

describe("Given a hideModal reducer", () => {
  describe("When it receives the currentUiState and a hideModal action", () => {
    test("Then it should return a new state with hasModal false", () => {
      const currentUiStateMock: UiState = {
        isLoading: false,
        hasModal: true,
        modal: { color: "fail", img: "", text: "" },
      };
      const expectedUiNewState = false;

      const hideErrorAction = hideModalActionCreator();
      const newUiState = uiReducer(currentUiStateMock, hideErrorAction);

      const hasModal = newUiState.hasModal;

      expect(hasModal).toBe(expectedUiNewState);
    });
  });
});
