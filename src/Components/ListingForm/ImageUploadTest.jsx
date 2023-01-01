// import axios from "axios";
// import React, { useState } from "react";
// // import { UploadIcon } from "../UI/Icons";

// const ImageUploadTest = () => {
//   const [file, setFile] = useState({});
//   const [images, setImages] = useState([]);
//   // const fileInputField = useRef(null);

//   const fileSelected = (event) => {
//     const file = event.target.files[0];
//     setFile(file);
//   };

//   async function postImage(image) {
//     const formData = new FormData();
//     formData.append("image", image);
//     const result = await axios.post(
//       `${process.env.REACT_APP_API_URL}/image/upload`,
//       formData,
//       {
//         withCredentials: true,
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     );
//     return result.data;
//   }

//   const submit = async (event) => {
//     event.preventDefault();
//     const result = await postImage({ image: file });
//     setImages([result.image, ...images]);
//   };

//   // const handleFormSubmit = async (e) => {
//   //   e.preventDefault();
//   //   const formData = new FormData();
//   //   console.log(file);
//   //   formData.append("file", file);
//   //   // if (formData !== null) {
//   //   //   console.log({ formData: formData.values() });
//   //   await axios
//   //     .post(
//   //       {
//   //         file: { formData },
//   //       },
//   //       {
//   //         withCredentials: true,
//   //         headers: {
//   //           "content-type": "multipart/form-data",
//   //         },
//   //       }
//   //     )
//   //     .then((response) => {
//   //       if (response.status === 200) {
//   //         console.log({ "response.data ": response.data });
//   //       } else {
//   //         console.log("Error uploading / images, upload");
//   //       }
//   //     })
//   //     .catch((error) => {
//   //       console.log({ "this is resp status": error.response.status });
//   //       console.log(error.response.data);
//   //     });
//   //   // } else {
//   //   //   console.log("No file selected");
//   //   // }
//   // };

//   return (
//     <div className="App">
//       <form onSubmit={submit}>
//         <input
//           onChange={fileSelected}
//           type="file"
//           accept="image/*"
//         />
//         <button type="submit">Submit</button>
//         {/* <label
//           onClick={() => fileInputField.current.click()}
//           className="w-[5rem] h-[5rem] flex flex-col cursor-pointer
//             items-center justify-center px-2 py-2 border-2
//             rounded-md bg-slate-100 hover:scale-110 transition duration-150"
//         >
//           <UploadIcon />
//           <h1 className="text-blue-500">Upload</h1>
//         </label> */}
//         {/* 
//         THIS IS HOW YOU DISPLAY AN IMAGE FROM THE BACKEND
//         <img
//           src={`${process.env.REACT_APP_API_URL}/images/16aafaf62194e01c089404cc98562111`}
//           alt="asdasd"
//         /> */}
//       </form>
//       {images.map((image) => {
//         return (
//           <div key={image}>
//             <img src={image} alt={image} />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default ImageUploadTest;
