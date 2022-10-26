import React from "react";
import FeaturedSection from "../Featured/FeaturedSection";
import Navbar from "../UI/Navbar";
import SearchBar from "./SearchBar";
import Footer from "../UI/Footer";

const Home = () => {
  return (
    //@@@@@@@@@@@ WHEN THIS DIV IS FLEX, CAROUSEL IS NOT SHRINKING PROPERLY @@@@@@@@@
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchBar />
      <FeaturedSection />
      <Footer />
    </div>
  );
};

export default Home;
