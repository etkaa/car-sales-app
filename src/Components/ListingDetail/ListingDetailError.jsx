import React from "react";

const ListingDetailError = () => {
  return (
    <div className="flex flex-col justify-between space-y-4 bg-red-500 rounded-xl px-4 py-4 max-w-2xl mx-auto my-auto text-center items-center">
      <h1 className="text-2xl font-thin text-slate-50">
        Something went wrong while getting details.
      </h1>
      <h2 className="text-xl font-semibold text-slate-50">Please try again.</h2>
    </div>
  );
};

export default ListingDetailError;
