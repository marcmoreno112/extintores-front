import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "./types";

export const initialUiState: UiState = { isLoading: false, isError: false };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showLoading: (currentUiState: UiState) => ({
      ...currentUiState,
      isLoading: true,
    }),
    hideLoading: (currentUiState: UiState) => ({
      ...currentUiState,
      isLoading: false,
    }),
    showError: (currentUiState: UiState) => ({
      ...currentUiState,
      isError: true,
    }),
    hideError: (currentUiState: UiState) => ({
      ...currentUiState,
      isError: false,
    }),
  },
});

export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
  showError: showErrorActionCreator,
  hideError: hideErrorActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
