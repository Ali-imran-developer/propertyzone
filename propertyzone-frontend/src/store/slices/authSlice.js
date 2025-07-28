import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  session: null,
};

export const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    setSession: (state, action) => {
      state.session = action.payload;
    },
  },
});

export const {  setSession } = AuthSlice.actions;
export default AuthSlice.reducer;