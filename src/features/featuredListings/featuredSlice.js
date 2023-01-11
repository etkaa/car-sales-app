import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//###############THUNK TO GET FEATURED LISTINGS###################

const initialState = {
  listings: [],
  status: "idle",
  error: null,
};

export const featuredSlice = createSlice({
  name: "featured",
  initialState,
  reducers: {
    setFeaturedListings: (state, action) => {
      state.featuredListings = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchListings.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchListings.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Set listings to the data we got back
        state.listings = action.payload;
      })
      .addCase(fetchListings.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const fetchListings = createAsyncThunk(
  "listings/fetchFeaturedListings",
  async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/listing/getFeaturedListings`
    );
    return response.data.listings;
  }
);

export const { setFeaturedListings } = featuredSlice.actions;

export default featuredSlice.reducer;
