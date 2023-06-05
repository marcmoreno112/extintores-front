import {
  initialUiState,
  showLoadingActionCreator,
  uiReducer,
} from "../uiSlice";

describe("Given a showLoading reducer", () => {
  describe("When it receives the currentUiState and a showLoading action", () => {
    test("Then it should return a new state with isLoading true", () => {
      const currentUiState = initialUiState;
      const expectedUiNewState = true;

      const showLoadingAction = showLoadingActionCreator();
      const newUiState = uiReducer(currentUiState, showLoadingAction);

      const isLoading = newUiState.isLoading;

      expect(isLoading).toBe(expectedUiNewState);
    });
  });
});
