import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  email: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.token = action.payload.token;
      state.email = action.payload.email;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logoutUser: (state) => {
      state.token = null;
      state.email = null;
      localStorage.removeItem("user");
    },
    loadUserFromStorage: (state) => {
      const data = JSON.parse(localStorage.getItem("user"));
      if (data) {
        state.token = data.token;
        state.email = data.email;
      }
    },
  },
});

export const { loginUser, logoutUser, loadUserFromStorage } = userSlice.actions;
export default userSlice.reducer;
