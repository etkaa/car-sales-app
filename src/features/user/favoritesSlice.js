import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  isLoading: true,
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (favorite) => favorite !== action.payload
      );
    },
    clearFavorites: (state) => {
      state.favorites = [];
    },
  },
});

export const { setFavorites, addFavorite, removeFavorite, clearFavorites } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
