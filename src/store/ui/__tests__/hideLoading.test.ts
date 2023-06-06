import { UiState } from "../types";
import { hideLoadingActionCreator, uiReducer } from "../uiSlice";

describe("Given a hideLoading reducer", () => {
  describe("When it receives the currentUiState and a hideLoading action", () => {
    test("Then it should return a new state with isLoading false", () => {
      const currentUiStateMock: UiState = { isLoading: true, hasModal: false };
      const expectedUiNewState = false;

      const hideLoadingAction = hideLoadingActionCreator();
      const newUiState = uiReducer(currentUiStateMock, hideLoadingAction);

      const isLoading = newUiState.isLoading;

      expect(isLoading).toBe(expectedUiNewState);
    });
  });
});
