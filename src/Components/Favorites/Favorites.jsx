import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFavoriteListingDetails } from "../../features/favorites/favoritesSlice";

import { Link } from "react-router-dom";
import { SignInIcon } from "../UI/Icons";
import FavoritesItem from "./FavoritesItem";
import NoFavorite from "./NoFavorite";
import Loading from "../UI/Loading";

const Favorites = () => {
  /////////////////////////// Redux ///////////////////////////
  //get the current user from redux state
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  const favoritesStatus = useSelector((state) => state.favorites.status);
  console.log({ "this is status ": favoritesStatus });
  //get the status of async thunk

  useEffect(() => {
    if (favoritesStatus === "idle") {
      //if status is idle, dispatch the async thunk
      console.log(
        "Dispatching fetchFavoriteListingDetails() from Favorites.jsx"
      );
      dispatch(fetchFavoriteListingDetails());
    }
  });
  //dispatch the async thunk when component mounts

  const favoriteListings = useSelector(
    (state) => state.favorites.favoriteObjects
  );
  console.log({ "this is favorite listings ": favoriteListings });
  //get the array of listings

  const error = useSelector((state) => state.favorites.error);
  //look if there is any error

  /////////////////////////// Redux ///////////////////////////

  ////////////////Wait for content to load////////////////////

  let content;

  if (user !== null) {
    //if user is logged in
    if (favoritesStatus === "loading") {
      content = <Loading />;
    } else if (favoritesStatus === "succeeded") {
      if (favoriteListings.length === 0) {
        content = <NoFavorite />;
      } else {
        content = favoriteListings?.map((item) => {
          return <FavoritesItem key={item._id} item={item} />;
        });
      }
    } else if (favoritesStatus === "failed") {
      content = <div>{"We've got some error over here. " + error}</div>;
    }
  } else {
    <div
      className="flex flex-col justify-around items-center min-h-[10rem] max-w-[30rem]
       bg-slate-50 rounded-xl shadow-md text-center px-4 py-4"
    >
      <h2 className="font-medium text-2xl">
        Please sign in to see your favorites.
      </h2>
      <Link
        to={"/authenticate/login"}
        className="text-xl transition duration-200
text-white bg-purple-500 hover:bg-pink-500 py-2 rounded-xl px-3
max-w-[15rem] flex"
      >
        <SignInIcon />
        Sign In
      </Link>
    </div>;
  }

  return (
    <main className="flex justify-between my-10">
      <div
        className="flex flex-col min-h-[10rem] 
      max-w-7xl my-auto mx-auto"
      >
        <div className="text-center py-3 px-3 h-[20%]">
          <h1 className="text-3xl">
            Favorites {`(${favoriteListings?.length})`}
          </h1>
        </div>
        <div
          className="flex flex-col space-y-4 justify-between items-center 
         min-h-[80%] px-3 py-3 my-auto"
        >
          {content}
        </div>
      </div>
    </main>
  );
};

export default Favorites;
