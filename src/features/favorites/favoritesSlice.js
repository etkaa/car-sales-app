import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  favoriteObjects: [],
  status: "idle",
  error: null,
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favoriteObjects.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favoriteObjects = state.favoriteObjects.filter(
        (favorite) => favorite._id !== action.payload
      );
    },
    clearFavorites: (state) => {
      state.favoriteObjects = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteListingDetails.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchFavoriteListingDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Set listings to the data we got back
        state.favoriteObjects = action.payload;
      })
      .addCase(fetchFavoriteListingDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const fetchFavoriteListingDetails = createAsyncThunk(
  "favorites/fetchFavoriteListingDetails",
  async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/listing/getFavoritedListings`,
      {
        withCredentials: true,
        headers: {
          "content-type": "application/json",
        },
      }
    );
    return response.data.favorites;
  }
);

export const { addFavorite, removeFavorite, clearFavorites } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
