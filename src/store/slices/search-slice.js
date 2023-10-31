import { createSlice } from "@reduxjs/toolkit";

const initialSearchState = {
  search: '',
  isDirty: false,
};

const searchSlice = createSlice({
  name: "searchState",
  initialState: initialSearchState,
  reducers: {
    search(state, action) {
      state.search = action.payload;
    },
    setDirty(state, action) {
      state.isDirty = action.payload;
    }
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice;