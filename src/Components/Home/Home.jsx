import React, { Fragment } from "react";
import Carousel from "../Featured/Carousel";
import Navbar from "../Navbar";
import SearchBar from "../SearchBar";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <SearchBar />
      <Carousel />
    </Fragment>
  );
};

export default Home;
