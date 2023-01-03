import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listingImages: [],
};

export const listingImagesSlice = createSlice({
  name: "listingImages",
  initialState,
  reducers: {
    addListingImage: (state, action) => {
      state.listingImages = [action.payload, ...state.listingImages];
    },
    removeListingImage: (state, action) => {
      state.listingImages = state.listingImages.filter(
        (imageKey) => !action.payload.includes(imageKey)
      );
    },
    clearListingImages: (state, action) => {
      state.listingImages = [];
    },
  },
});

export const { addListingImage, removeListingImage, clearStore } =
  listingImagesSlice.actions;

export default listingImagesSlice.reducer;
