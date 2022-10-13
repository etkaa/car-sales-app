import React, { Fragment } from "react";
import Navbar from "../Navbar";
import SearchBar from "../SearchBar";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <div>
        <SearchBar></SearchBar>
      </div>
    </Fragment>
  );
};

export default Home;
