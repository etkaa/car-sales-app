import React from "react";
import Navbar from "../UI/Navbar/Navbar";
import ListingAddForm from "./ListingAddForm";
import Footer from "../UI/Footer";

const AddListing = () => {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <Navbar />
      <ListingAddForm />
      <Footer />
    </div>
  );
};

export default AddListing;
