import { createSlice } from "@reduxjs/toolkit";

const initialSearchState = {
  search: '', // search value
  isDirty: false, // if the input has been "touched" or not
};

const searchSlice = createSlice({
  name: "searchState",
  initialState: initialSearchState,
  reducers: {
    search(state, action) {
      state.search = action.payload;
    },
    setDirty(state, action) {
      state.isDirty = action.payload; // expects a boolean
    }
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice;