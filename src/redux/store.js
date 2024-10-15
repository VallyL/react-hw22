import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./slicers/quoteSlice";

export const store = configureStore({
  reducer: {
    quote: quoteReducer,
  },
});
