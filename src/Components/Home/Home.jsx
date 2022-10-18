import React, { Fragment } from "react";
import FeaturedSection from "../Featured/FeaturedSection";
import Navbar from "../Navbar";
import SearchBar from "./SearchBar";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <SearchBar />
      <FeaturedSection />
    </Fragment>
  );
};

export default Home;
