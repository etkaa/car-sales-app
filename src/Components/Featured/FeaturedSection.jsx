import React, { Fragment } from "react";
import Carousel from "./Carousel";

const FeaturedSection = () => {
  return (
    <Fragment>
      <h2 className="text-center text-2xl block px-4 mt-8 ">
        F E A T U R E D <b>C A R S</b>
      </h2>
      <Carousel />
    </Fragment>
  );
};

export default FeaturedSection;
