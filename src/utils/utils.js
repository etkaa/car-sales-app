import axios from "axios";
import { setUser } from "../features/user/userSlice";

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
  var result = null;
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

export const uploadImages = async ({ images }) => {
  const formData = new FormData();
  images.forEach((image) => {
    formData.append("images", image);
  });

  const result = await axios.post(
    `${process.env.REACT_APP_API_URL}/images/upload`,
    formData,
    {
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
  // console.log({ "Uploaded S3 Objects Metadata": result.data.image });
  return result.data;
};

export const deleteImages = async (imageKeysToDelete) => {
  var result;
  // console.log({ imageKeysToDelete: imageKeysToDelete });
  await axios
    .post(
      `${process.env.REACT_APP_API_URL}/images/delete`,
      {
        imageKeysToDelete: imageKeysToDelete,
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
        console.log("Deleted images from S3! / utils.js");
        result = 200;
      } else {
        console.log("Error deleting images from S3! / utils.js");
        result = 500;
      }
    });
  return result;
};

export const addUnsubmittedKeys = async (imageKeys) => {
  await axios
    .post(
      `${process.env.REACT_APP_API_URL}/images/addImageKeys`,
      {
        imageKeys: imageKeys,
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
        console.log("Added unsubmitted keys! / utils.js");
      } else {
        console.log("Error saving unsubmitted keys! / utils.js");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteUnsubmittedKeys = async (imageKeys) => {
  await axios
    .post(
      `${process.env.REACT_APP_API_URL}/images/removeImageKeys`,
      {
        imageKeys: imageKeys,
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
        console.log("Deleted unsubmitted keys! / utils.js");
      } else {
        console.log("Error saving unsubmitted keys! / utils.js");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const postListing = async (formData, imageKeys) => {
  let value;
  await axios
    .post(
      `${process.env.REACT_APP_API_URL}/listing/create`,
      {
        formData: formData,
        imageKeys: imageKeys,
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
        console.log("Posted listing! / utils.js");
        value = response.data.listingID;
      } else {
        console.log("Error posting listing! / utils.js");
      }
    })
    .catch((error) => {
      console.log(error);
    });
  return value;
};

export const deleteUserListing = async (listingId) => {
  let value = false;
  await axios
    .post(
      `${process.env.REACT_APP_API_URL}/listing/delete`,
      {
        listingId: listingId,
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
        // console.log("Deleted listing! / utils.js");
        value = true;
      } else {
        console.log("Error deleting listing! / utils.js");
      }
    })
    .catch((error) => {
      console.log(error);
    });
  return value;
};

export const updateProfileFields = async (formData, dispatch) => {
  let value = false;

  await axios
    .put(
      `${process.env.REACT_APP_API_URL}/user/updateProfileFields`,
      {
        formData: formData,
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
        // console.log("Updated profile fields! / utils.js");
        dispatch(setUser(response.data.updatedUser));
        value = true;
      } else {
        console.log("Error updating profile fields! / utils.js");
      }
    })
    .catch((error) => {
      console.log(error);
    });
  return value;
};

export const updateProfileImage = async (imageKey) => {
  let value = false;

  await axios
    .put(
      `${process.env.REACT_APP_API_URL}/user/updateProfileImage`,
      {
        imageKey: imageKey,
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
        value = true;
        console.log("Updated profile image! / utils.js");
      } else {
        console.log("Error updating profile image! / utils.js");
      }
    })
    .catch((error) => {
      console.log(error);
    });
  return value;
};
