import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserDataStructure, UserStateStructure } from "./types";

const initialUserState: UserStateStructure = {
  name: "",
  id: "",
  token: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loginUser: (
      _currentUserState: UserStateStructure,
      action: PayloadAction<UserDataStructure>
    ) => ({
      ...action.payload,
      isLogged: true,
    }),
    logoutUser: () => ({
      ...initialUserState,
    }),
  },
});

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
