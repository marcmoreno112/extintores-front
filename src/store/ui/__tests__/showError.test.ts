import { initialUiState, showErrorActionCreator, uiReducer } from "../uiSlice";

describe("Given a showError reducer", () => {
  describe("When it receives the currentUiState and a showError action", () => {
    test("Then it should return a new state with isError true", () => {
      const currentUiState = initialUiState;
      const expectedUiNewState = true;

      const showErrorAction = showErrorActionCreator();
      const newUiState = uiReducer(currentUiState, showErrorAction);

      const isError = newUiState.isError;

      expect(isError).toBe(expectedUiNewState);
    });
  });
});
