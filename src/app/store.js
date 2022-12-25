import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "../features/user/userSlice";
import favoritesReducer from "../features/user/favoritesSlice";

const persistConfig = {
  key: "carsnow",
  storage,
};

const reducers = combineReducers({
  user: userReducer,
  favorites: favoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

//create store and configure
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// export const persistor = persistStore(store);
//this is done in the index.js
