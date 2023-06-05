import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "./types";

export const initialUiState: UiState = { isLoading: false };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showLoader: (currentUiState: UiState) => ({
      ...currentUiState,
      isLoading: true,
    }),
  },
});

export const { showLoader: showLoaderActionCreator } = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
