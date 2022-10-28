import React from "react";
import { Link } from "react-router-dom";

const ListingCard = ({ item }) => {
  const price = Number(item.price.original).toLocaleString();
  const mileage = Number(item.miles).toLocaleString();

  return (
    <Link
      key={item.id}
      className="lg:hover:scale-105 cursor-pointer transition duration-200 
      snap-center min-w-[20rem] max-w-xs rounded-lg shadow-md h-[22rem] 
      bg-slate-50 lg:hover:bg-white mx-auto my-auto"
      to={`/listing/${item.listing.listingId}`}
    >
      {/* lg:hover:scale-105 cursor-pointer transition duration-200 
      snap-center min-w-[20rem] max-w-xs rounded-lg shadow-md h-80 
      bg-slate-100 lg:hover:bg-white mx-auto my-auto" */}
      <img
        src={item.pictures.cover}
        className="h-[65%] w-full rounded-t-lg object-cover"
        alt={item.make}
      />
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
    </Link>
  );
};

export default ListingCard;
