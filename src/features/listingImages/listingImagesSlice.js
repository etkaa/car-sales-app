import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  listingImages: [],
  status: "idle",
  error: null,
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
  extraReducers(builder) {
    builder
      .addCase(fetchUnsubmittedImageKeys.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUnsubmittedImageKeys.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Set listings to the data we got back
        state.listingImages = action.payload;
      })
      .addCase(fetchUnsubmittedImageKeys.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const fetchUnsubmittedImageKeys = createAsyncThunk(
  "listingImages/fetchUnsubmittedImageKeys",
  async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/images/getImageKeys`,
      {
        withCredentials: true,
        headers: {
          "content-type": "application/json",
        },
      }
    );

    // return response.data.imageKeys;
    return response.data.imageKeys;
  }
);

export const { addListingImage, removeListingImage, clearListingImages } =
  listingImagesSlice.actions;

export default listingImagesSlice.reducer;
