import React from "react";

const ListingCard = ({ item }) => {
  const price = Number(item.price.original).toLocaleString();
  const mileage = Number(item.miles).toLocaleString();

  return (
    <div
      key={item.id}
      className="lg:hover:scale-105 cursor-pointer transition duration-200 snap-center min-w-[20rem] max-w-xs rounded-lg shadow-md h-80 bg-slate-100 lg:hover:bg-white mx-auto my-auto"
    >
      <img
        src={item.pictures.cover}
        className="h-4/6 w-full rounded-t-lg object-cover"
        alt={item.make}
      />
      <h2 className="h-[14%] font-semibold text-xl px-4 py-3">
        {`${item.year} ${item.make} ${item.model} ${item.trim}`.substring(
          0,
          29
        )}
      </h2>
      <div className="h-[10%] mt-1 flex justify-between border-b-2">
        <h2 className="font-md text-xl px-4">${price}</h2>
        <h2 className="font-md text-xl px-4">{mileage} mi</h2>
      </div>
      <h3 className="h-[8%] font-md text-sm px-4 py-1">{`${item.location.city}, ${item.location.state}`}</h3>
    </div>
  );
};

export default ListingCard;
