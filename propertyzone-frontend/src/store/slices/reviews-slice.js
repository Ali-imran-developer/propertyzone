import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviewsData: null,
};

export const ReviewSlice = createSlice({
  name: "ReviewSlice",
  initialState,
  reducers: {
    setReviews: (state, action) => {
      state.reviewsData = action.payload;
    },
  },
});

export const { setReviews } = ReviewSlice.actions;
export default ReviewSlice.reducer;