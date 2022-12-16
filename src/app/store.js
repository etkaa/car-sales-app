import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";

//create store and configure
export default configureStore({
  reducer: {
    user: userReducer,
  },
});
