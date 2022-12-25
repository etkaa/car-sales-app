import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  featuredListings: [],
  isLoading: false,
};

export const featuredListingsSlice = createSlice({
  name: "featuredListings",
  initialState,
  reducers: {
    setFeaturedListings: (state, action) => {
      state.featuredListings = action.payload;
    },
  },
});

export const { setFeaturedListings } = featuredListingsSlice.actions;

export default featuredListingsSlice.reducer;
