import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ExtinguisherStructure } from "../../types";
import { ExtinguishersStateStructure } from "./types";

export const initialExtinguishersState: ExtinguishersStateStructure = {
  extinguishers: [],
  loadNumber: 1,
};

const extinguishersSlice = createSlice({
  name: "extinguishers",
  initialState: initialExtinguishersState,
  reducers: {
    loadExtinguishers: (
      currentExtinguishersState,
      action: PayloadAction<ExtinguisherStructure[]>
    ) => {
      currentExtinguishersState.extinguishers = [...action.payload];
    },

    deleteExtinguisher: (
      currentExtinguishersState,
      action: PayloadAction<string>
    ): ExtinguishersStateStructure => ({
      ...currentExtinguishersState,
      extinguishers: currentExtinguishersState.extinguishers.filter(
        (extinguisher) => extinguisher.id !== action.payload
      ),
    }),

    createExtinguisher: (
      currentExtinguishersState,
      action: PayloadAction<ExtinguisherStructure>
    ) => ({
      ...currentExtinguishersState,
      extinguishers: [
        ...currentExtinguishersState.extinguishers,
        action.payload,
      ],
    }),

    loadMoreExtinguishers: (currentExtinguishersState) => ({
      ...currentExtinguishersState,
      loadNumber: currentExtinguishersState.loadNumber + 1,
    }),
  },
});

export const {
  loadExtinguishers: loadExtinguishersActionCreator,
  deleteExtinguisher: deleteExtinguisherActionCreator,
  createExtinguisher: createExtinguisherActionCreator,
  loadMoreExtinguishers: loadMoreExtinguishersActionCreator,
} = extinguishersSlice.actions;

export const extinguishersReducer = extinguishersSlice.reducer;
