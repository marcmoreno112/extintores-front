import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ExtinguisherStructure } from "../../types";
import { ExtinguishersStateStructure } from "./types";

export const initialExtinguishersState: ExtinguishersStateStructure = {
  extinguishers: [],
  loadNumber: 1,
  numberOfExtinguishersAtDb: 0,
  classFilter: "",
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
      numberOfExtinguishersAtDb:
        currentExtinguishersState.numberOfExtinguishersAtDb - 1,
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
      numberOfExtinguishersAtDb:
        currentExtinguishersState.numberOfExtinguishersAtDb + 1,
    }),

    loadMoreExtinguishers: (currentExtinguishersState) => ({
      ...currentExtinguishersState,
      loadNumber:
        currentExtinguishersState.loadNumber +
        (currentExtinguishersState.numberOfExtinguishersAtDb >
        currentExtinguishersState.extinguishers.length
          ? 1
          : 0),
    }),

    updateNumberOfExtinguishers: (
      currentExtinguishersState,
      action: PayloadAction<number>
    ) => ({
      ...currentExtinguishersState,
      numberOfExtinguishersAtDb: action.payload,
    }),

    changeClassFilter: (
      currentExtinguishersState,
      action: PayloadAction<string>
    ) => ({
      ...currentExtinguishersState,
      classFilter: action.payload,
    }),
  },
});

export const {
  loadExtinguishers: loadExtinguishersActionCreator,
  deleteExtinguisher: deleteExtinguisherActionCreator,
  createExtinguisher: createExtinguisherActionCreator,
  loadMoreExtinguishers: loadMoreExtinguishersActionCreator,
  updateNumberOfExtinguishers: updateNumberOfExtinguishersActionCreator,
  changeClassFilter: changeClassFilterActionCreator,
} = extinguishersSlice.actions;

export const extinguishersReducer = extinguishersSlice.reducer;
