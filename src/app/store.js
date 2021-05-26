import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from "../features/topics/topicsSlice.js";

export default configureStore({
  reducer: {
    topics: topicsReducer,
  },
});
