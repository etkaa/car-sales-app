import React, { useState } from "react";
import { LikeIcon, ListingOwnerIcon, MessageIcon } from "../UI/Icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFavorite } from "../../features/favorites/favoritesSlice";
import { removeFromFavorites } from "../../utils/utils";

const FavoritesItem = ({ item }) => {
  const [liked, setLiked] = useState(true);
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = async (event) => {
    event.stopPropagation();
    setLiked(!liked);
    const listingID = item._id;
    // console.log("listing id " + listingID);
    //wait for 2 second before removing from favorites
    setTimeout(async () => {
      const resp = await removeFromFavorites(listingID);
      if (resp === "success") {
        dispatch(removeFavorite(item._id));
      }
    }, 1500);
  };

  //capitalize the first letter of a string
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div
      className="flex min-h-[12rem] max-h-[12rem] min-w-[22rem] max-w-[30rem] bg-slate-50 
    rounded-xl shadow-md"
    >
      <Link
        to={`/listing/${item._id}`}
        className="left-0 max-w-[35%] max-h-[12rem]"
      >
        <img
          src={item.pictures.cover}
          alt={item.make}
          className="h-full w-full object-cover rounded-l-xl "
        />
      </Link>
      {!liked ? (
        <div className="flex flex-col items-center justify-around mx-auto px-4 py-4">
          <h1 className="text-center text-xl md:text-2xl font-normal text-slate-500 animate-pulse">
            Removing from your favorites...
          </h1>
        </div>
      ) : (
        <div className="flex justify-between mx-auto w-[65%] py-2 px-2">
          <div
            name="listing_details"
            className="flex flex-col mx-auto space-y-2 w-[80%]"
          >
            <div
              className="min-h-full flex flex-col space-y-2 justify-between my-auto"
              name="primary details"
            >
              <h1 className="text-xl font-medium">{`${
                item.year + " " + item.make + " " + item.model
              }`}</h1>
              <h1 className="text-lg">{`${(
                item.trim +
                " - " +
                item.engine.capacity
              ).substring(0, 30)}`}</h1>
              <h1 className="text-lg">{`${capitalize(item.condition)} - ${Number(
                item.miles
              ).toLocaleString()} miles  `}</h1>
              <div className="flex flex-col my-auto">
                <h1 className="text-xl font-bold my-auto">{`$${Number(
                  item.price.original
                ).toLocaleString()}`}</h1>
                {/* <h1 className="text-md font-normal">{`Listed at ${item.listing.createdAt.toLocaleString(
                "en",
                options
              )}`}</h1> */}
              </div>
            </div>
          </div>
          <div
            name="contact_details"
            className="flex flex-col justify-between w-[15%] text-center items-center py-1 px-1 mx-auto"
          >
            <div onClick={handleRemoveFromFavorites}>
              <LikeIcon liked={liked} />
            </div>
            <MessageIcon />
            <Link
              to={`/user/profile/${item.listing.listingOwnerId}"`}
              className="hover:text-purple-500 transition duration-200"
            >
              <ListingOwnerIcon />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoritesItem;
