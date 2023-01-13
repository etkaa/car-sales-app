import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserListings } from "../../features/userListings/userListingsSlice";
import MyListingCard from "./MyListingCard";
import NoListingCard from "./NoListingCard";
import CreateCard from "./CreateCard";

import { Link } from "react-router-dom";
import { SignInIcon } from "../UI/Icons";

const MyListings = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const status = useSelector((state) => state.userListings.status);
  const userListings = useSelector((state) => state.userListings.userListings);

  //   const error = useSelector((state) => state.userListings.error);
  // Need to set up error and loading states ##

  useEffect(() => {
    if (status === "idle") {
      //if status is idle, dispatch the async thunk
      dispatch(fetchUserListings());
    }
  }, [status, dispatch]);

  let content;

  if (user) {
    content = <NoListingCard />;
  } else {
    content = (
      <div
        className="flex flex-col justify-around items-center min-h-[10rem] max-w-[30rem]
   bg-slate-50 rounded-xl shadow-md text-center px-4 py-4"
      >
        <h2 className="font-medium text-2xl">
          Please sign in to see your listings.
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
    );
  }

  return (
    <main className="flex flex-col justify-between space-y-6 items-center text-center py-6">
      <h1 className="text-2xl bg-slate-100 px-4 py-2 rounded-xl text-slate-700">
        My Listings
      </h1>
      {userListings.length > 0 && user ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl md:px-4 py-4 mx-auto my-auto">
          {userListings.map((item) => {
            return <MyListingCard item={item} key={item._id} />;
          })}
          <CreateCard />
        </div>
      ) : (
        content
      )}
    </main>
  );
};

export default MyListings;
