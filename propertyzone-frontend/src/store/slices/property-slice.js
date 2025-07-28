import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  propertyData: null,
};

export const PropertiesSlice = createSlice({
  name: "PropertiesSlice",
  initialState,
  reducers: {
    setProperties: (state, action) => {
      state.propertyData = action.payload;
    },
  },
});

export const { setProperties } = PropertiesSlice.actions;
export default PropertiesSlice.reducer;