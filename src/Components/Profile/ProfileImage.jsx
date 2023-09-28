import React, { useEffect, useRef, useState, useCallback } from "react";
import { DeleteIcon, EditIcon } from "../UI/Icons";

import { uploadImages, updateProfileImage } from "../../utils/utils";

import default_profile_1 from "../../assets/default_profile_1.png";
import Loading from "../UI/Loading";

const ProfileImage = ({ user }) => {
  const [uploadedImage, setUploadedImage] = useState([]);
  const [imageURL, setImageURL] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const inputFile = useRef(null);

  useEffect(() => {
    if (user?.profile?.profilePictureKey) {
      setImageURL(
        `${process.env.REACT_APP_API_URL}/images/getImage/${user.profile.profilePictureKey}`
      );
    }
  }, [user]);

  // This function can be refactored into the one function, 
  // and keep the logic in the backend.
  const submit = useCallback(async () => {
    if (uploadedImage.length === 0 || uploadedImage.length > 1) {
      console.log("Length not satisfied", uploadedImage.length)
      setUploadedImage([]);
      return;
    }
    setIsLoading(true);

    try {
      // Upload the image to S3 bucket
      const result = await uploadImages({ images: uploadedImage });
      setImageURL(
        `${process.env.REACT_APP_API_URL}/images/getImage/${result.image[0].key}`
      ); 
      // Update the profile picture key in the database
      const response = await updateProfileImage(result.image[0].key);
      if (response) {
        setIsLoading(false);
        setUploadedImage([]);
      }
    } catch (error) {
      setIsLoading(false);
    }
  }, [uploadedImage]);

  // When user selects the image and browse 
  // window is closed, submit the image.
  useEffect(() => {
    if (uploadedImage?.length > 0) {
      submit();
    }
  }, [uploadedImage, submit]);

  const filesSelected = (event) => {
    setUploadedImage([event.target.files[0]]);
  };

  return (
    <div className="flex flex-col items-center bg-slate-50 border-slate-100 shadow-lg px-2 py-4 w-full max-w-[12rem]">
      <div className="w-full h-full aspect-square">
        {isLoading ? (
          <Loading />
        ) : (
          <img
            alt="profile"
            className="w-full h-full object-cover rounded-full aspect-square"
            src={imageURL || default_profile_1}
          />
        )}
      </div>
      <div className="flex justify-center space-x-4 mt-2">
        <button
          className="flex items-center justify-center bg-slate-300 hover:bg-blue-500 rounded-full px-2 py-2 text-white
             transition duration-200"
        >
          <input
            onChange={filesSelected}
            ref={inputFile}
            type="file"
            accept="image/*"
            className="hidden"
            multiple
          />
          <label onClick={() => inputFile.current.click()} className=" cursor-pointer">
            <EditIcon styles={"w-6 h-6"} />
          </label>
        </button>
        <button
          className="flex items-center justify-center bg-slate-300 hover:bg-red-500 rounded-full px-2 py-2 text-white
             transition duration-200"
        >
          <DeleteIcon size={"w-6 h-6"} />
        </button>
      </div>
    </div>
  );
};

export default ProfileImage;
