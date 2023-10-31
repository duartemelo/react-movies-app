import { createSlice } from "@reduxjs/toolkit";

const initialSearchState = {
  search: '',
};

const searchSlice = createSlice({
  name: "searchState",
  initialState: initialSearchState,
  reducers: {
    search(state, action) {
      state.search = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice;