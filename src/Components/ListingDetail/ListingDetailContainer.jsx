import React, { useState } from "react";
import { useParams } from "react-router";
import LeftScrollArrow from "../Featured/LeftScrollArrow";
import RightScrollArrow from "../Featured/RightScrollArrow";
import { DUMMY_CARS } from "../AdvancedSearch/data";

const ListingDetailContainer = () => {
  const params = useParams();

  const listingId = params.listingID;

  const item = DUMMY_CARS.find((el) => el.listing.listingId === listingId);

  const name = `${item.year} ${item.make} ${item.model} ${item.trim}`;
  const price = Number(item.price.original).toLocaleString();

  const [index, setIndex] = useState(0);
  const [hideLeft, setHideLeft] = useState(true);
  const [hideRight, setHideRight] = useState(false);

  const handleLeftClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
    if (index === 1) {
      setHideLeft(true);
    }
    setHideRight(false);
  };

  const handleRightClick = () => {
    if (index < item.pictures.otherPictures.length - 1) {
      setIndex(index + 1);
    }
    if (index === item.pictures.otherPictures.length - 2) {
      setHideRight(true);
    }
    setHideLeft(false);
  };

  return (
    <main className="my-auto">
      <div
        name="top-container"
        className="flex flex-col space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row 
          max-w-7xl mx-auto my-8 shadow-lg px-0 md:px-6 md:py-4
        bg-slate-50 md:w-[90%] lg:max-h-[42rem]"
      >
        <div
          className="flex mx-auto my-auto justify-center items-center w-[100%] lg:w-[65%] 
          h-[22rem] lg:h-[40rem] rounded-lg"
        >
          <button className="hidden lg:flex w-16 mr-1" onClick={handleLeftClick}>
            {!hideLeft && <LeftScrollArrow />}
          </button>
          <div className="lg:h-[90%] h-[100%] w-[100%] flex">
            <img
              src={item.pictures.otherPictures[index]}
              className="my-auto mx-auto max-h-[100%] h-[100%] w-[100%] object-cover"
              alt={item.make}
            />
          </div>
          <button className="hidden lg:flex w-16 ml-1" onClick={handleRightClick}>
            {!hideRight && <RightScrollArrow />}
          </button>
        </div>
        <div className="lg:hidden h-[3rem] w-[100%] flex space-x-16 justify-center">
          <button
            className={`flex w-10 items-center rounded-lg ${
                !hideLeft && `bg-slate-100`
              }`}
            onClick={handleLeftClick}
          >
            {!hideLeft && <LeftScrollArrow />}
          </button>
          <button
            className={`flex w-10 items-center rounded-lg ${
              !hideRight && `bg-slate-100`
            }`}
            onClick={handleRightClick}
          >
            {!hideRight && <RightScrollArrow />}
          </button>
        </div>
        <div
          name="listing-details"
          className="lg:w-[35%] w-[100%] flex flex-col space-y-2 justify-center py-1 
          border-slate-100 border-4 rounded-lg mx-auto my-auto px-3
          overflow-auto scrollbar-hide"
        >
          <h2 className="text-xl font-semibold text-center px-2">{name}</h2>

          <div className="w-[100%] px-3">
            <ul>
              <li className="flex w-full border-b-2 py-2">
                <h2 className="font-medium px-2 w-[50%]">Price</h2>
                <h3 className="px-2 w-[50%] font-semibold">{`$${price}`}</h3>
              </li>
              <li className="flex w-full border-b-2 py-2">
                <h2 className="font-medium px-2 w-[50%]">Condition</h2>
                <h3 className="px-2 w-[50%]">{item.condition}</h3>
              </li>
              <li className="flex w-full border-b-2 py-2">
                <h2 className="font-medium px-2 w-[50%]">Mileage</h2>
                <h3 className="px-2 w-[50%]">{`${item.miles} miles`}</h3>
              </li>
              <li className="flex w-full border-b-2 py-2">
                <h2 className="font-medium px-2 w-[50%]">Exterior Color</h2>
                <h3 className="px-2 w-[50%]">{item.extColor}</h3>
              </li>
              <li className="flex w-full border-b-2 py-2">
                <h2 className="font-medium px-2 w-[50%]">Interior Color</h2>
                <h3 className="px-2 w-[50%]">{item.intColor}</h3>
              </li>
              <li className="flex w-full border-b-2 py-2">
                <h2 className="font-medium px-2 w-[50%]">Engine Capacity</h2>
                <h3 className="px-2 w-[50%]">{item.engine.capacity}</h3>
              </li>
              <li className="flex w-full border-b-2 py-2">
                <h2 className="font-medium px-2 w-[50%]">Cylinders</h2>
                <h3 className="px-2 w-[50%]">{item.engine.cylinders}</h3>
              </li>
              <li className="flex w-full border-b-2 py-2">
                <h2 className="font-medium px-2 w-[50%]">Horsepower</h2>
                <h3 className="px-2 w-[50%]">{`${item.engine.horsepower} hp`}</h3>
              </li>
              <li className="flex w-full border-b-2 py-2">
                <h2 className="font-medium px-2 w-[50%]">Torque</h2>
                <h3 className="px-2 w-[50%]">{`${item.engine.torque} lb-ft`}</h3>
              </li>
              <li className="flex w-full border-b-2 py-2">
                <h2 className="font-medium px-2 w-[50%]">Location</h2>
                <h3 className="px-2 w-[50%]">{`${item.location.city}, ${item.location.state}, ${item.location.zip}`}</h3>
              </li>
              <li className="flex w-full border-b-2 py-2">
                <h2 className="font-medium px-2 w-[50%]">Listing Date</h2>
                <h3 className="px-2 w-[50%]">
                  {item.listing.createdAt.toLocaleDateString()}
                </h3>
              </li>
              <li className="flex w-full py-2">
                <h2 className="font-medium px-2 w-[50%]">Listing Owner</h2>
                <h3 className="px-2 w-[50%]">{item.listing.listingOwnerId}</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div></div>
    </main>
  );
};

export default ListingDetailContainer;
