import React from "react";
import { useSelector } from "react-redux";
import DataForm from "./DataForm";
import UploadCarousel from "./UploadCarousel";

const ListingForm = () => {
  console.log("ListingForm.jsx RENDER");

  // const handleSubmit = async (event, formData) => {
  //   event.preventDefault();
  // };

  const uploadedImageKeys = useSelector(
    (state) => state.listingImages.listingImages
  );

  // console.log({ uploadedImageKeys });

  return (
    <div className="flex flex-col space-y-5 my-auto min-w-[50rem] w-[50rem] py-2">
      <h1 className="text-2xl text-center">Create a Listing</h1>
      <div name="inner container" className="flex">
        <div className="w-[65%] flex flex-col border-2 border-slate-200 rounded-xl max-h-[28rem]">
          <UploadCarousel uploadedImageKeys={uploadedImageKeys} />
        </div>
        <DataForm uploadedImageKeys={uploadedImageKeys} />
      </div>
    </div>
  );
};

export default ListingForm;
