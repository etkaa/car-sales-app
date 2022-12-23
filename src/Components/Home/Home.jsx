import React from "react";
import FeaturedSection from "../Featured/FeaturedSection";
import SearchBar from "./SearchBar";

const Home = () => {
  return (
    //@@@@@@@@@@@ WHEN THIS DIV IS FLEX, CAROUSEL IS NOT SHRINKING PROPERLY @@@@@@@@@
    <div className="flex flex-col">
      <SearchBar />
      <FeaturedSection />
    </div>
  );
};

export default Home;
