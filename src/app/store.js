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
import featuredReducer from "../features/listings/featuredSlice";

const persistConfig = {
  key: "carsnow",
  storage,
  blacklist: ["featured", "favorites"],
};

const reducers = combineReducers({
  user: userReducer,
  favorites: favoritesReducer,
  featured: featuredReducer,
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

// export const persistor = persistStore(store);
//this is done in the index.js
