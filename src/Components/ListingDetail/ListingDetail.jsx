import React from "react";
import Navbar from "../UI/Navbar/Navbar.jsx";
import Footer from "../UI/Footer";
import ListingDetailContainer from "./ListingDetailContainer";

const ListingDetail = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar />
      <ListingDetailContainer />
      <Footer />
    </div>
  );
};

export default ListingDetail;
