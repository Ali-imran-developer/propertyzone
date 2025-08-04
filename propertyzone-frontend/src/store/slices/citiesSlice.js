import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cities: null,
};

export const CitySlice = createSlice({
  name: "CitySlice",
  initialState,
  reducers: {
    setCities: (state, action) => {
      state.cities = action.payload;
    },
  },
});

export const { setCities } = CitySlice.actions;
export default CitySlice.reducer;