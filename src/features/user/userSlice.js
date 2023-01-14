import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const initialState = {
  user: null,
  isLoading: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    resetUser: (state, action) => {
      return initialState;
    },
    clearStore: () => {
      storage.removeItem("persist:carsnow");
    },
  },
});

// console.log(userSlice);

export const { setUser, resetUser, clearStore } = userSlice.actions;

export default userSlice.reducer;
