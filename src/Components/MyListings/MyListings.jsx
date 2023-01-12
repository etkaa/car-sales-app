import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserListings } from "../../features/userListings/userListingsSlice";
import MyListingCard from "./MyListingCard";
import NoListingCard from "./NoListingCard";
import CreateCard from "./CreateCard";

const MyListings = () => {
  const dispatch = useDispatch();
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

  return (
    <main className="flex flex-col justify-between space-y-6 items-center text-center py-6">
      <h1 className="text-2xl bg-slate-100 px-4 py-2 rounded-xl text-slate-700">
        My Listings
      </h1>
      {userListings.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl md:px-4 py-4 mx-auto my-auto">
          {userListings.map((item) => {
            return <MyListingCard item={item} key={item._id} />;
          })}
          <CreateCard />
        </div>
      ) : (
        <NoListingCard />
      )}
    </main>
  );
};

export default MyListings;
