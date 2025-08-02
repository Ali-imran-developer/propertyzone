import { combineReducers } from "@reduxjs/toolkit";
import propertyReducer from "./property-slice";
import reviewsReducer from "./reviews-slice";
import authReducer from "./authSlice";

const rootReducer = combineReducers({
  Auth: authReducer,
  Properties: propertyReducer,
  Reviews: reviewsReducer,
});

export default rootReducer;