import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import thunk from "redux-thunk";
import { applyMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import userReducer from "../features/user/userSlice";
import favoritesReducer from "../features/favorites/favoritesSlice";
import featuredReducer from "../features/featuredListings/featuredSlice";
import listingImagesReducer from "../features/listingImages/listingImagesSlice";
import userListingsReducer from "../features/userListings/userListingsSlice";

const persistConfig = {
  key: "carsnow",
  storage,
  blacklist: ["featured", "favorites", "listingImages", "userListings"],
};

const reducers = combineReducers({
  user: userReducer,
  favorites: favoritesReducer,
  featured: featuredReducer,
  listingImages: listingImagesReducer,
  userListings: userListingsReducer,
});

const persistedReducer = persistReducer(
  persistConfig,
  reducers,
  applyMiddleware(thunk)
);

//create store and configure
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
