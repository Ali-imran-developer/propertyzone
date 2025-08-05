import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  propertyData: null,
  addressData: null,
  propertyId: "",
  singleProperty: null
};

export const PropertiesSlice = createSlice({
  name: "PropertiesSlice",
  initialState,
  reducers: {
    setProperties: (state, action) => {
      state.propertyData = action.payload;
    },
    setAddress: (state, action) => {
      state.addressData = action.payload;
    },
    setPropertyId: (state, action) => {
      state.propertyId = action.payload;
    },
    setSingleProperty: (state, action) => {
      state.singleProperty = action.payload;
    },
  },
});

export const { setProperties, setAddress, setPropertyId, setSingleProperty } = PropertiesSlice.actions;
export default PropertiesSlice.reducer;