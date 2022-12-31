import axios from "axios";

export const addToFavorites = async (listingId) => {
  var result;
  await axios
    .post(
      `${process.env.REACT_APP_API_URL}/user/favorites/add`,
      {
        listingID: listingId,
      },
      {
        withCredentials: true,
        headers: {
          "content-type": "application/json",
        },
      }
    )
    .then((response) => {
      if (response.status === 200) {
        // console.log("Added to favorites! / utils.js");
        result = "success";
      } else {
        console.log("Error adding to favorites! / utils.js");
        result = "failure";
      }
    })
    .catch((error) => {
      console.log({ "this is resp status": error.response.status });

      if (error.response.status === 401) {
        result = "unauthorized";
      }
    });
  return result;
};

export const removeFromFavorites = async (listingId) => {
  var result;
  await axios
    .post(
      `${process.env.REACT_APP_API_URL}/user/favorites/remove`,
      {
        listingID: listingId,
      },
      {
        withCredentials: true,
        headers: {
          "content-type": "application/json",
        },
      }
    )
    .then((response) => {
      if (response.status === 200) {
        // console.log("Removed from favorites! / utils.js");
        result = "success";
      } else {
        console.log("Error removing from favorites! / utils.js");
        result = "failure";
      }
    })
    .catch((error) => {
      console.log({ "this is resp status": error.response.status });

      if (error.response.status === 401) {
        result = "unauthorized";
      }
    });
  return result;
};

export const clearAllFavorites = async () => {
  var result;

  await axios
    .post(
      `${process.env.REACT_APP_API_URL}/user/favorites/clear`,
      {},
      {
        withCredentials: true,
        headers: {
          "content-type": "application/json",
        },
      }
    )
    .then((response) => {
      if (response.status === 200) {
        result = "success";
        // console.log("Cleared favorites! / utils.js");
      } else {
        result = "failure";
        console.log("Error clearing favorites! / utils.js");
      }
    })
    .catch((error) => {
      console.log({ "this is resp status": error.response.status });

      if (error.response.status === 401) {
        result = "unauthorized";
      }
    });
  return result;
};

export const getListingDetails = async (listingId) => {
  var result;
  await axios
    .post(
      `${process.env.REACT_APP_API_URL}/listing/getListingById`,
      {
        listingID: listingId,
      },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    )
    .then((response) => {
      if (response.status === 200) {
        result = response.data.listing;
      } else {
        console.log("Error getting listing details! / utils.js");
      }
    })
    .catch((error) => {
      console.log(error);
      console.log(error.response.data);
    });
  return result;
};