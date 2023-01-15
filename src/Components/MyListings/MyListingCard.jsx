import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUserListing } from "../../utils/utils";
import { removeUserListing } from "../../features/userListings/userListingsSlice";

import { OpenLinkIcon, EditIcon, DeleteIcon } from "../UI/Icons";

const MyListingCard = ({ item }) => {
  //capitalize the first letter of a string
  //   const capitalize = (str) => {
  //     return str.charAt(0).toUpperCase() + str.slice(1);
  //   };

  const [willDelete, setWillDelete] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleDelete = () => {
    setError(false);
    deleteUserListing(item._id).then((response) => {
      if (response === true) {
        dispatch(removeUserListing(item._id));
      } else {
        setError(true);
        console.log("error");
      }
    });
  };

  var imageSource;
  const isStock = item.isStock;
  if (isStock === "true") {
    imageSource = item.pictures[0];
  } else {
    imageSource = `${process.env.REACT_APP_API_URL}/images/getImage/${item.pictures[0]}`;
  }

  return (
    <div
      className="flex min-h-[12rem] max-h-[12rem] min-w-[22rem] max-w-[30rem] bg-slate-50 
        rounded-xl shadow-md px-1"
    >
      {!willDelete ? (
        <>
          <div className="flex justify-between mx-auto w-[65%] px-1 py-3">
            <div
              name="listing_details"
              className="flex flex-col justify-between mx-auto space-y-2 w-[90%]"
            >
              <h1 className="text-xl font-medium">{`${(
                item.year +
                " " +
                item.make +
                " " +
                item.model
              ).substring(0, 30)}`}</h1>
              <div
                name="listing statistics"
                className="flex justify-between lg:px-4 text-slate-700"
              >
                <div name="views" className="flex flex-col justify-around">
                  <h1 className="text-lg font-medium">
                    {item.statistics.viewed}
                  </h1>
                  <h1 className="text-lg">Views</h1>
                </div>
                <div name="likes" className="flex flex-col justify-around ">
                  <h1 className="text-lg font-medium">
                    {item.statistics.favorited}
                  </h1>
                  <h1 className="text-lg">Likes</h1>
                </div>
                <div name="message" className="flex flex-col justify-around">
                  <h1 className="text-lg font-medium">
                    {item.statistics.contacted}
                  </h1>
                  <h1 className="text-lg">Reach</h1>
                </div>
              </div>
              <div
                name="edit-delete-preview"
                className="flex justify-between px-2 mx-auto w-[100%]"
              >
                <Link
                  to={`/listing/${item._id}`}
                  className="hover:text-purple-500 transition duration-150"
                >
                  <OpenLinkIcon />
                </Link>
                <div
                  name="onClick edit"
                  className="hover:text-blue-500 transition duration-150 cursor-pointer"
                >
                  <EditIcon />
                </div>
                <div
                  name="onClick delete"
                  className="hover:text-red-500 transition duration-150 cursor-pointer"
                  onClick={() => {
                    setWillDelete(true);
                  }}
                >
                  <DeleteIcon />
                </div>
              </div>
            </div>
          </div>
          <Link
            to={`/listing/${item._id}`}
            className="left-0 max-w-[35%] max-h-[12rem]"
          >
            <img
              src={imageSource}
              alt={item.make}
              className="h-full w-full object-cover rounded-r-xl "
            />
          </Link>{" "}
        </>
      ) : (
        <div
          className={`flex flex-col justify-center ${
            error ? "space-y-2" : "space-y-5"
          } items-center w-full h-full px-3`}
        >
          <h1 className="text-2xl font-normal px-4">
            Are you sure you want delete this listing?
          </h1>
          {error && (
            <h1 className="text-lg font-medium px-4 bg-red-500 text-slate-50 rounded-xl">
              Something went wrong. Please try again.
            </h1>
          )}
          <div className="flex justify-between space-x-8 mx-auto my-auto">
            <button
              onClick={handleDelete}
              className="text-center px-4 py-2 text-xl text-slate-50 bg-red-500 
              rounded-xl hover:bg-red-700 transition duration-150"
            >
              Delete
            </button>
            <button
              onClick={() => {
                setWillDelete(false);
                setError(false);
              }}
              className="text-center px-4 py-1 text-lg text-black border-2
               border-black rounded-xl hover:bg-black hover:text-slate-50 transition duration-150"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyListingCard;
