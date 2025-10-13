import { configureStore, createSlice } from "@reduxjs/toolkit";

// Auth Slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    username: null,
    accessToken: null,
    userId:null,
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.accessToken = action.payload.accessToken;
      state.userId = action.payload.userId;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.username = null;
      state.accessToken = null;
      state.userId = null;
      state.isLoggedIn = false;
    },
  },
});



// Export actions
export const { login, logout } = authSlice.actions;

// Store
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
