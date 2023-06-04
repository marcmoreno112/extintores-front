import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ExtinguisherStructure } from "../../types";

export const initialExtinguishersState: ExtinguisherStructure[] = [];

const extinguishersSlice = createSlice({
  name: "extinguishers",
  initialState: initialExtinguishersState,
  reducers: {
    loadExtinguishers: (
      _currentExtinguishersState,
      action: PayloadAction<ExtinguisherStructure[]>
    ) => [...action.payload],
  },
});

export const { loadExtinguishers: loadExtinguishersActionCreator } =
  extinguishersSlice.actions;

export const extinguishersReducer = extinguishersSlice.reducer;
