import { UiState } from "../types";
import { hideErrorActionCreator, uiReducer } from "../uiSlice";

describe("Given a hideError reducer", () => {
  describe("When it receives the currentUiState and a hideError action", () => {
    test("Then it should return a new state with isError false", () => {
      const currentUiStateMock: UiState = { isLoading: false, isError: true };
      const expectedUiNewState = false;

      const hideErrorAction = hideErrorActionCreator();
      const newUiState = uiReducer(currentUiStateMock, hideErrorAction);

      const isError = newUiState.isError;

      expect(isError).toBe(expectedUiNewState);
    });
  });
});
