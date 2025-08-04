import { combineReducers } from "@reduxjs/toolkit";
import propertyReducer from "./property-slice";
import reviewsReducer from "./reviews-slice";
import blogsReducer from "./blogs-slice";
import cityReducer from "./citiesSlice";
import authReducer from "./authSlice";

const rootReducer = combineReducers({
  Auth: authReducer,
  Properties: propertyReducer,
  Reviews: reviewsReducer,
  Blogs: blogsReducer,
  City: cityReducer,
});

export default rootReducer;