import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  uid: null,
  isLoading: false,
  loggedIn: false,
  error: null,
  email: null,
  name: null,
  photo: null,
};

const authSlice = createSlice({
  name: "profile",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.uid = action.payload;
      state.loggedIn = true;
    },
    logout() {
      return initialAuthState;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setLoggedIn(state, action) {
      state.loggedIn = action.payload;
    },
    setUid(state, action) {
      state.uid = action.payload;
    },
    setAuthInfo(state, action) {
      // state = {...action.payload}; (?)

      state.email = action.payload.email;
      state.name = action.payload.name;
      state.photo = action.payload.photo;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
