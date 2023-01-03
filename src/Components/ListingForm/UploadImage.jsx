import { useState, useRef, Fragment, useEffect, useCallback } from "react";
import { UploadIcon } from "../UI/Icons";
import { useDispatch } from "react-redux";
import { addListingImage } from "../../features/listingImages/listingImagesSlice";
import { postImage } from "../../utils/utils";

function UploadImage({ setIsLoading, uploadedImageKeys }) {
  // console.log("UploadImage.jsx RENDER");
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);
  const [changed, setChanged] = useState(false);

  const fileInputField = useRef(null);
  const dispatch = useDispatch();

  const maxNumberOfFiles = 8 - uploadedImageKeys.length; //1 extra for fileList object

  //wrap submit in useCallback to prevent infinite loop
  const submit = useCallback(async () => {
    if (files.length <= 1 || files.length > maxNumberOfFiles) {
      alert(`You can only upload ${maxNumberOfFiles - 1} more images.`);
      setFiles([]);
      return;
    }
    setIsLoading(true);
    const result = await postImage({ images: files });
    setImages(result.image); //result.image is an array of objects
    setIsLoading(false);
  }, [files, setIsLoading, maxNumberOfFiles]);

  useEffect(() => {
    if (files.length > 0) {
      // Make API call with the most up-to-date state object
      submit();
      setFiles([]);
      setChanged(true);
    }
  }, [files, submit]);

  //whenever images changes, dispatch the images to the store
  useEffect(() => {
    // console.log("effect fired!");
    if (images.length > 0 && changed) {
      // console.log("images dispatch effect fired!");
      images.forEach((image) => {
        dispatch(addListingImage(image.Key));
      });
      setImages([]);
      setChanged(false);
    }
  }, [images, dispatch, files, changed]);

  const filesSelected = (event) => {
    const files = event.target.files;
    setFiles([files, ...files]);
  };

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input
          onChange={filesSelected}
          ref={fileInputField}
          type="file"
          accept="image/*"
          className="hidden"
          max={maxNumberOfFiles.toString()}
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
      </form>
    </div>
  );
}

export default UploadImage;
