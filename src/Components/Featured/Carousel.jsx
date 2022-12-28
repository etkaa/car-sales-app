import React, { useRef, useEffect } from "react";
import ListingCard from "../UI/ListingCard";
import LeftScrollArrow from "./LeftScrollArrow";
import RightScrollArrow from "./RightScrollArrow";

import { fetchListings } from "../../features/listings/featuredSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Loading from "../UI/Loading";

const Carousel = () => {
  const carousel = useRef();

  /////////////////////////// Redux ///////////////////////////

  const dispatch = useDispatch();
  //get the status of async thunk
  const status = useSelector((state) => state.featured.status);
  //get the array of listings
  const featuredListings = useSelector((state) => state.featured.listings);
  //look if there is any error
  const error = useSelector((state) => state.featured.error);

  useEffect(() => {
    if (status === "idle") {
      //if status is idle, dispatch the async thunk
      dispatch(fetchListings());
    }
  }, [status, dispatch]);

  /////////////////////////// Redux ///////////////////////////

  ////////////////Wait for content to load////////////////////

  let content;

  if (status === "loading") {
    content = <Loading />;
  } else if (status === "succeeded") {
    content = featuredListings?.map((item) => {
      return <ListingCard key={item._id} item={item} />;
    });
  } else if (status === "failed") {
    content = <div>{error}</div>;
  }

  ////////////////Wait for content to load////////////////////

  const leftScrollHandler = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth * 0.95;
  };

  const rightScrollHandler = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth * 0.95;
  };

  return (
    <div
      name="wrapper"
      className="flex mx-auto justify-center items-center my-3 max-w-7xl"
    >
      <button
        onClick={leftScrollHandler}
        className="hidden md:flex w-16 opacity-20 hover:opacity-100 transition duration-150"
      >
        <LeftScrollArrow />
      </button>
      <div
        ref={carousel}
        className="flex scrollbar-hide snap-x snap-mandatory scroll-smooth
           space-x-4 px-4 min-w-[22rem] overflow-x-auto w-[100%] my-auto 
           md:mx-auto place-items-center h-96"
      >
        {content}
      </div>
      <button
        onClick={rightScrollHandler}
        className="hidden md:flex w-16 opacity-20 hover:opacity-100 transition duration-150"
      >
        <RightScrollArrow />
      </button>
    </div>
  );
};

export default Carousel;