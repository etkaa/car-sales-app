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
import { setUser } from "../../features/user/userSlice";

const ListingCard = ({ item, isScrolling }) => {
  const price = Number(item.price).toLocaleString();
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

  const handleUnauthorized = () => {
    dispatch(setUser(null));
    navigate("/authenticate/login");
  };

  const handleFavorite = async (event) => {
    event.stopPropagation();
    if (user !== null) {
      if (isListingFavorite) {
        const resp = await removeFromFavorites(item._id);
        if (resp === "success") {
          dispatch(removeFavorite(item._id));
        } else if (resp === "unauthorized") {
          handleUnauthorized();
        }
      } else {
        const resp = await addToFavorites(item._id);
        if (resp === "success") {
          dispatch(addFavorite(item));
        } else if (resp === "unauthorized") {
          handleUnauthorized();
        }
      }
    } else {
      navigate("/authenticate/login");
    }
  };

  var imageSource;
  const isStock = item.isStock;
  if (isStock === "true") {
    imageSource = item.pictures[0];
  } else {
    imageSource = `${process.env.REACT_APP_API_URL}/images/getImage/${item.pictures[0]}`;
  }

  var listingOwner;
  if (isStock === "true") {
    listingOwner = item.listing.listingOwnerId;
  } else {
    listingOwner = item.listing.listingOwnerNickname;
  }

  return (
    <div
      onClick={() => navigate(`/listing/${item._id}`)}
      key={item._id}
      className={`${
        !isScrolling && "lg:hover:scale-105"
      } cursor-pointer transition duration-200 
      snap-center min-w-[20rem] rounded-lg shadow-md h-[22rem] 
      bg-slate-50 lg:hover:bg-white mx-auto my-auto z-0`}
    >
      <div className="h-[65%] w-full rounded-t-lg relative z-2 ">
        <img
          // src={`${process.env.REACT_APP_API_URL}/images/${item.coverImage}`}
          //this needs to point to the S3 bucket key of the image
          src={imageSource}
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
        <h3 className="h-[8%] font-md text-sm px-4 py-1">{listingOwner}</h3>
      </div>
    </div>
  );
};

export default ListingCard;
