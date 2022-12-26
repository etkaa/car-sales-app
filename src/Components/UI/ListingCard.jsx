import React from "react";
import { LikeIcon } from "./Icons";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToFavorites } from "../../utils/utils";
import { removeFromFavorites } from "../../utils/utils";
import {
  addFavorite,
  removeFavorite,
} from "../../features/favorites/favoritesSlice";

const ListingCard = ({ item }) => {
  const price = Number(item.price.original).toLocaleString();
  const mileage = Number(item.miles).toLocaleString();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  const favoriteListings = useSelector(
    (state) => state.favorites.favoriteObjects
  );
  const isListingFavorite = favoriteListings.some(
    (listing) => listing._id === item._id
  );

  const handleOpenListing = () => {
    navigate(`/listing/${item._id}`);
  };

  const handleFavorite = async (event) => {
    event.stopPropagation();
    if (user !== null) {
      if (isListingFavorite) {
        const resp = await removeFromFavorites(item._id);
        console.log({ "response from removeFromFavorites": resp });
        if (resp === "success") {
          dispatch(removeFavorite(item._id));
        }
      } else {
        const resp = await addToFavorites(item._id);
        console.log({ "response from addToFavorites": resp });
        if (resp === "success") {
          dispatch(addFavorite(item));
        }
      }
    } else {
      navigate("/authenticate/login");
    }
  };

  return (
    <div
      key={item._id}
      className="lg:hover:scale-105 cursor-pointer transition duration-200 
      snap-center min-w-[20rem] max-w-xs rounded-lg shadow-md h-[22rem] 
      bg-slate-50 lg:hover:bg-white mx-auto my-auto z-0"
      onClick={handleOpenListing}
    >
      <div className="h-[65%] w-full rounded-t-lg relative z-2 ">
        <img
          src={item.pictures.cover}
          className="h-full w-full rounded-t-lg object-cover"
          alt={item.make}
        />
        <div
          className="top-0 right-0 absolute z-10 my-1 mx-1"
          onClick={handleFavorite}
          key={item._id}
        >
          <LikeIcon key={item._id} liked={isListingFavorite} />
        </div>
      </div>
      <div className="py-1 flex flex-col justify-between pb-2 h-[17%] font-semibold text-lg px-4">
        {`${item.year} ${item.make} ${item.model}`.substring(0, 29)}
        <h3 className="text-sm">{item.trim}</h3>
      </div>
      <div className="h-[10%] flex justify-between border-b-2">
        <h2 className="font-md text-xl px-4">${price}</h2>
        <h2 className="font-md text-xl px-4">{mileage} mi</h2>
      </div>
      <div className="flex justify-between text-slate-600">
        <h3 className="h-[8%] font-md text-sm px-4 py-1">{`${item.location.city}, ${item.location.state}`}</h3>
        <h3 className="h-[8%] font-md text-sm px-4 py-1">
          {item.listing.listingOwnerId}
        </h3>
      </div>
    </div>
  );
};

export default ListingCard;
