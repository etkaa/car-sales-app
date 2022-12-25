import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import FavoritesItem from "./FavoritesItem";
import { SignInIcon } from "../UI/Icons";
// import axios from "axios";
import { DUMMY_CARS } from "../AdvancedSearch/data";

const Favorites = () => {
  const user = useSelector((state) => state.user.user);
  var favCars = DUMMY_CARS.slice(0, 3);

  console.log(user);
  const favorites = useSelector((state) => state.favorites.favorites);
  console.log("favorites " + favorites);

  //find the listings in the DUMMY_CARS array that match the favorites array
  const foundUserFavorites = DUMMY_CARS.filter((car) => {
    return favorites.includes(car.id);
  });

  console.log("foundUserFavorites " + foundUserFavorites);
  //   const favoriteListings = async () => {
  //     axios.get();
  //   };

  //make an api call to get listings from the database that match the favorites array
  //map over the array and return a favorites item for each listing

  return (
    <div className="flex flex-col justify-between">
      <div
        className="flex flex-col min-h-[40rem] 
      max-w-7xl my-auto mx-auto"
      >
        <div className="text-center py-3 px-3 h-[20%]">
          <h1 className="text-3xl">Favorites</h1>
        </div>
        <div
          className="flex flex-col space-y-4 justify-between items-center 
         h-[50%] px-3 py-3 my-auto"
        >
          {user !== null ? (
            favCars.map((item) => {
              return <FavoritesItem key={item.id} item={item} />;
            })
          ) : (
            <Fragment>
              <h1 className="text-3xl font-light">
                Please sign in to view your favorites
              </h1>
              <SignInIcon />
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
