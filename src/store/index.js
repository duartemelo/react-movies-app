import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./slices/search-slice";

const store = configureStore({
  reducer: { searchState: searchSlice.reducer },
});

export default store;