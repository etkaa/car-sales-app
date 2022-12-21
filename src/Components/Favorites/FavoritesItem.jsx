import React from "react";
import { LikeIcon, MessageIcon } from "../UI/Icons";

const FavoritesItem = ({ item }) => {

  return (
    <div
      className="flex min-h-[5rem] max-h-[10rem] min-w-[38rem] w-full bg-slate-50 
    rounded-xl shadow-md"
    >
      <div className="left-0 w-[30%] h-[10rem]">
        <img
          src={item.pictures.cover}
          alt={item.make}
          className="h-full w-full object-cover rounded-l-xl "
        />
      </div>
      <div className="flex justify-between mx-auto w-[70%] py-3 px-2">
        <div
          name="listing_details"
          className="flex flex-col mx-auto space-y-2 w-[70%]"
        >
          <div className="flex flex-col space-y-2" name="primary details">
            <h1 className="text-xl font-normal">{`${
              item.year + " " + item.make + " " + item.model
            }`}</h1>
            <h1 className="text-lg">{`${(
              item.trim +
              " - " +
              item.engine.capacity
            ).substring(0, 30)}`}</h1>
            <h1 className="text-lg">{`${Number(
              item.miles
            ).toLocaleString()} miles - ${item.condition}`}</h1>
          </div>
          <div className="flex flex-col my-auto">
            <h1 className="text-lg font-bold my-auto">{`$${Number(
              item.price.original
            ).toLocaleString()}`}</h1>
            {/* <h1 className="text-md font-normal">{`Listed at ${item.listing.createdAt.toLocaleString(
              "en",
              options
            )}`}</h1> */}
          </div>
        </div>
        <div
          name="contact_details"
          className="flex flex-col justify-between w-[20%] text-center items-center"
        >
          <LikeIcon fill={"red"} />
          <MessageIcon />
          <h1>{item.listing.listingOwnerId}</h1>
        </div>
      </div>
    </div>
  );
};

export default FavoritesItem;
