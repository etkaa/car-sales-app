import { useState, useRef, Fragment, useEffect, useCallback } from "react";
import axios from "axios";
import { UploadIcon } from "../UI/Icons";
import { useDispatch, useSelector } from "react-redux";
import { addListingImage } from "../../features/listingImages/listingImagesSlice";

async function postImage({ images }) {
  const formData = new FormData();
  images.forEach((image) => {
    formData.append("images", image);
  });

  const result = await axios.post(
    `${process.env.REACT_APP_API_URL}/images/upload`,
    formData,
    {
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
  console.log({ "uploaded s3 object details": result.data.image });
  return result.data;
}

function UploadImage() {
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);

  const fileInputField = useRef(null);
  const submitButton = useRef(null);

  const dispatch = useDispatch();
  const listingImages = useSelector(
    (state) => state.listingImages.listingImages
  );
  console.log({ listingImages });
  //wrap submit in useCallback to prevent infinite loop
  const submit = useCallback(
    async (event) => {
      // event.preventDefault();
      const result = await postImage({ images: files });
      console.log(result);
      setImages(result.image); //result.image is an array of objects
    },
    [files]
  );

  console.log({ images });

  useEffect(() => {
    if (files.length > 0) {
      // Make API call with the most up-to-date state object
      submit();
      setFiles([]);
    }
  }, [files, submit]);

  //whenever images changes, dispatch the images to the store
  useEffect(() => {
    console.log("effect fired!");
    if (images.length > 0 && files.length > 0) { //#@## THIS NEEDS TO DISPATCH ONLY ONCE
      console.log("images dispatch effect fired!");
      images.forEach((image) => {
        console.log({ key: image.key });
        dispatch(addListingImage(image.key));
      });
    }
  }, [images, dispatch, files]);

  const filesSelected = (event) => {
    const files = event.target.files;
    setFiles([files, ...files]);
  };

  /////////////////////////// STATUS ///////////////////////////
  const status = `We are able to upload multiple files and get them back 
  through the API. We are able to display the images in the browser. Now 
  what we need to do is, store these image objects returning from S3 in the
  redux store by dispatching an action. We will add a useSelector to ListingAddForm
  component and get the images when they are dispatched to the store. We will then
  display it to user with a carousel. @@@ But we also need to get these keys and save
  them to the listing's images array in the database. @@@
  
  Create a listingImages slice and save the images to the store.`;
  /////////////////////////// STATUS ///////////////////////////

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input
          onChange={filesSelected}
          ref={fileInputField}
          type="file"
          accept="image/*"
          className="hidden"
          multiple
        ></input>
        <label
          onClick={() => fileInputField.current.click()}
          className="w-[5rem] h-[5rem] flex flex-col cursor-pointer
            items-center justify-center px-2 py-2 border-2
            rounded-md bg-slate-100 hover:scale-105 hover:bg-slate-50 transition duration-150"
        >
          <Fragment>
            <UploadIcon />
            <h1 className="text-blue-500">Upload</h1>
          </Fragment>
        </label>
        {/* <button
          type="submit"
          ref={submitButton}
          className="text-sm text-center bg-slate-200 px-1 py-1 mx-auto"
        >
          Submit
        </button> */}
      </form>

      {/* {images &&
        images.map((image) => (
          <div key={image.key}>
            <img
              src={`${process.env.REACT_APP_API_URL}/images/${image.key}`}
              key={image.key}
              alt={image}
            ></img>
          </div>
        ))} */}
    </div>
  );
}

export default UploadImage;
