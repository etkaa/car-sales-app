import React from "react";
import ListingAddForm from "./ListingAddForm";
import ImageUploadTest from "./ImageUploadTest";

const AddListing = () => {
  return (
    <div className="flex flex-col justify-between items-center py-5">
      <ListingAddForm />
      <ImageUploadTest />
    </div>
  );
};

export default AddListing;
