import React from "react";
import { useSelector } from "react-redux";
import FavoritesItem from "./FavoritesItem";
import { SignInIcon } from "../UI/Icons";
// import axios from "axios";
import { DUMMY_CARS } from "../AdvancedSearch/data";
import NoFavorite from "./NoFavorite";
import { Link } from "react-router-dom";

const Favorites = () => {
  const user = useSelector((state) => state.user.user);
  const favorites = useSelector((state) => state.favorites.favorites);

  //find the listings in the DUMMY_CARS array that match the user's favorites array
  const foundUserFavorites = DUMMY_CARS.filter((car) => {
    return favorites.includes(car.listing.listingId);
  });
  //We will need to implement this logic on the backend and get the listings from there.
  //because we can't hold all the listings data here in the frontend.

  //   const favoriteListings = async () => {
  //     axios.get();
  //   };

  //make an api call to get listings from the database that match the favorites array
  //map over the array and return a favorites item for each listing

  return (
    <main className="flex justify-between my-10">
      <div
        className="flex flex-col min-h-[10rem] 
      max-w-7xl my-auto mx-auto"
      >
        <div className="text-center py-3 px-3 h-[20%]">
          <h1 className="text-3xl">Favorites {`(${favorites.length})`}</h1>
        </div>
        <div
          className="flex flex-col space-y-4 justify-between items-center 
         min-h-[80%] px-3 py-3 my-auto"
        >
          {user !== null ? ( //if user is signed in
            foundUserFavorites.length > 0 ? ( //if user has favorites
              foundUserFavorites.map((item) => {
                //map over the favorites array
                return <FavoritesItem key={item.id} item={item} />;
              })
            ) : (
              <NoFavorite /> //if user has no favorites show noFavorites component
            )
          ) : (
            <div
              className="flex flex-col justify-around items-center min-h-[10rem] max-w-[30rem] bg-slate-50 
  rounded-xl shadow-md text-center px-4 py-4"
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
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Favorites;
