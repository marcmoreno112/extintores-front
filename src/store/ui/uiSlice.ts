import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "./types";

export const initialUiState: UiState = {
  isLoading: false,
  hasModal: false,
  modal: { color: "fail", img: "", text: "" },
};

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
    showModal: (currentUiState: UiState, { payload: modalError }) => ({
      ...currentUiState,
      hasModal: true,
      modal: modalError,
    }),
    hideModal: (currentUiState: UiState) => ({
      ...currentUiState,
      hasModal: false,
      modal: initialUiState.modal,
    }),
  },
});

export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
  showModal: showModalActionCreator,
  hideModal: hideModalActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
