import React from "react";
import { Link } from "react-router-dom";
import { OpenLinkIcon, EditIcon, DeleteIcon } from "../UI/Icons";

const MyListingCard = ({ item }) => {
  //capitalize the first letter of a string
//   const capitalize = (str) => {
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   };

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
        rounded-xl shadow-md py-1 px-1"
    >
      <div className="flex justify-between mx-auto w-[65%] px-1 py-2">
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
              <h1 className="text-lg font-medium">246</h1>
              <h1 className="text-lg">Views</h1>
            </div>
            <div name="likes" className="flex flex-col justify-around ">
              <h1 className="text-lg font-medium">17</h1>
              <h1 className="text-lg">Likes</h1>
            </div>
            <div name="message" className="flex flex-col justify-around">
              <h1 className="text-lg font-medium">4</h1>
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
      </Link>
    </div>
  );
};

export default MyListingCard;
