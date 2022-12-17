import React, { useRef } from "react";
import ListingCard from "../UI/ListingCard";
import LeftScrollArrow from "./LeftScrollArrow";
import RightScrollArrow from "./RightScrollArrow";
import { DUMMY_CARS } from "../AdvancedSearch/data";

const Carousel = () => {
  const carousel = useRef();

  const leftScrollHandler = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const rightScrollHandler = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <div
      name="wrapper"
      className="flex mx-auto justify-center items-center my-3 max-w-7xl"
    >
      <button
        onClick={leftScrollHandler}
        className="hidden md:flex w-16 opacity-5 hover:opacity-100 transition duration-150"
      >
        <LeftScrollArrow />
      </button>
      <div
        ref={carousel}
        className="flex scrollbar-hide snap-x snap-mandatory scroll-smooth
           space-x-4 px-4 min-w-[22rem] overflow-x-auto w-[100%] my-auto 
           md:mx-auto place-items-center h-96"
      >
        {DUMMY_CARS.map((item) => {
          return <ListingCard key={item.id} item={item} />;
        })}
      </div>
      <button
        onClick={rightScrollHandler}
        className="hidden md:flex w-16 opacity-5 hover:opacity-100 transition duration-150"
      >
        <RightScrollArrow />
      </button>
    </div>
  );
};

export default Carousel;
