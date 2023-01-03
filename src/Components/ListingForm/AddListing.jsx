import React from "react";
import ListingAddForm from "./ListingAddForm";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SignInIcon } from "../UI/Icons";

const AddListing = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <div className="flex flex-col justify-between items-center py-5">
      {user ? (
        <ListingAddForm />
      ) : (
        <div
          className="flex flex-col justify-around items-center min-h-[10rem] max-w-[30rem]
       bg-slate-50 rounded-xl shadow-md text-center px-4 py-4"
        >
          <h2 className="font-medium text-2xl px-3">
            Please sign in to create a listing.
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
  );
};

export default AddListing;
