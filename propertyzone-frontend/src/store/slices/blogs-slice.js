import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogsData: null,
};

export const BlogSlice = createSlice({
  name: "BlogSlice",
  initialState,
  reducers: {
    setBlogs: (state, action) => {
      state.blogsData = action.payload;
    },
  },
});

export const { setBlogs } = BlogSlice.actions;
export default BlogSlice.reducer;