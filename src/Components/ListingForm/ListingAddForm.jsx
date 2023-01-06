import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUnsubmittedImageKeys } from "../../features/listingImages/listingImagesSlice";
import DataForm from "./DataForm";
import UploadCarousel from "./UploadCarousel";

const ListingForm = () => {
  // console.log("ListingForm.jsx RENDER");

  // const handleSubmit = async (event, formData) => {
  //   event.preventDefault();
  // };

  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  const listingImagesStatus = useSelector(
    (state) => state.listingImages.status
  );

  useEffect(() => {
    if (user) {
      if (listingImagesStatus === "idle") {
        //if status is idle, dispatch the async thunk
        dispatch(fetchUnsubmittedImageKeys());
      }
    } else {
      return;
    }
  });

  const uploadedImageKeys = useSelector(
    (state) => state.listingImages.listingImages
  );

  // const handleFormChange = (boolean) => {
  //   if (boolean === isFormChanged) return;
  //   setIsFormChanged(boolean);
  //   console.log({ isFormChanged: boolean });
  // };

  //This code causes to delete all images when one of the images is deleted
  //That's because the component rerenders onDelete and the useEffect is called
  // useEffect(() => {
  //   return async () => {
  //     console.log("component will unmount");
  //     if (isFormChanged && uploadedImageKeys.length > 0) {
  //       console.log("Form changed and images uploaded");
  //       const response = await deleteImages(uploadedImageKeys);
  //       if (response === 200) {
  //         console.log("images deleted from S3");
  //         dispatch(clearListingImages());
  //       } else {
  //         console.log("there was en error deleting images from S3");
  //       }
  //     }
  //   };
  // }, [dispatch, isFormChanged, uploadedImageKeys]);

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
