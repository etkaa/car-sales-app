import React from "react";
import Carousel from "./Carousel";

const FeaturedSection = ({ similar }) => {
  return (
    <section className="mb-10">
      {!similar ? (
        <h2
          className="text-center text-2xl block px-4 mt-6 
      bg-slate-100 max-w-xs mx-auto rounded-xl py-2"
        >
          F E A T U R E D <b>C A R S</b>
        </h2>
      ) : (
        <h2
          className="text-center text-2xl block px-4 mt-6 
      bg-slate-100 max-w-xs mx-auto rounded-xl py-2"
        >
          S I M I L A R <b>C A R S</b>
        </h2>
      )}

      <Carousel />
    </section>
  );
};

export default FeaturedSection;
