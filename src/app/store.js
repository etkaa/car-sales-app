import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import favoritesReducer from "../features/user/favoritesSlice";

//create store and configure
export default configureStore({
  reducer: {
    user: userReducer,
    favorites: favoritesReducer,
  },
});
