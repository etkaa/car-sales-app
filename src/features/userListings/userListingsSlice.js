import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userListings: [],
  status: "idle",
  error: null,
};

export const userListingsSlice = createSlice({
  name: "userListings",
  initialState,
  reducers: {
    setUserListings: (state, action) => {
      state.userListings = action.payload;
    },
    addUserListing: (state, action) => {
      state.userListings.push(action.payload);
    },
    removeUserListing: (state, action) => {
      state.userListings = state.userListings.filter(
        (listing) => listing._id !== action.payload
      );
    },
    resetUserListings: (state, action) => {
      return initialState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUserListings.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUserListings.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Set listings to the data we got back
        state.userListings = action.payload;
      })
      .addCase(fetchUserListings.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const fetchUserListings = createAsyncThunk(
  "userListings/fetchUserListings",
  async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/getUserListings`,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.userListings;
  }
);

export const { setUserListings, resetUserListings } = userListingsSlice.actions;

export default userListingsSlice.reducer;
