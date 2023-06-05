import {
  initialUiState,
  showLoadingActionCreator,
  uiReducer,
} from "../uiSlice";

describe("Given a showLoading reducer", () => {
  describe("When it receives an initialUiState", () => {
    test("Then it should return a new state with isLoading true", () => {
      const initialState = initialUiState;
      const expectedUiNewState = true;

      const showLoadingAction = showLoadingActionCreator();
      const newUiState = uiReducer(initialState, showLoadingAction);

      const isLoading = newUiState.isLoading;

      expect(isLoading).toBe(expectedUiNewState);
    });
  });
});
