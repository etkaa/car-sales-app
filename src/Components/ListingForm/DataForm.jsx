import React, { useState, Fragment } from "react";
import { CloseIcon, LeftPointArrow, RightPointArrow } from "../UI/Icons";

const defaultFormData = {
  description: "",
  condition: "",
  year: "",
  make: "",
  model: "",
  trim: "",
  mileage: "",
  extColor: "",
  intColor: "",
  engineCapacity: "",
  cylinders: "",
  horsepower: "",
  torque: "",
  transmission: "",
  price: "",
  city: "",
  state: "",
  zip: "",
  pictureKeys: [],
};

const DataForm = ({ handleSubmit, uploadedImageKeys }) => {
  const style =
    "focus:bg-slate-100 shadow-sm px-2 py-2 outline-none w-[90%] mx-auto my-auto rounded-xl text-center bg-slate-200 placeholder:text-slate-400";

  const [formData, setFormData] = useState(defaultFormData);
  const [pageNumber, setPageNumber] = useState(0);
  const [edited, setEdited] = useState(false);

  const {
    description,
    condition,
    year,
    make,
    model,
    trim,
    mileage,
    extColor,
    intColor,
    engineCapacity,
    cylinders,
    horsepower,
    torque,
    transmission,
    price,
    city,
    state,
    zip,
  } = formData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setEdited(true);
  };

  const handleClearForm = () => {
    setFormData(defaultFormData);
    setEdited(false);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    ///@@@FORM SUBMITS EVEN THOUGH THERE ARE EMPTY FIELDS, IMPLEMENT A CHECK
    ///@@@FIND A WAY TO PASS THE UPLOADED IMAGE KEYS TO THE SUBMIT HANDLER
    // setFormData(...formData, { pictureKeys: uploadedImageKeys });
    handleSubmit(formData);
  };

  return (
    <form
      className="py-4 flex flex-col justify-around space-y-2 mx-auto items-center text-center min-w-[16rem] max-w-[24rem] w-[100%] lg:[35%] min-h-[30rem] max-h-[36rem]"
      onSubmit={formSubmitHandler}
    >
      <h1 className="text-2xl font-light bg-slate-100 px-3 py-2 rounded-xl">
        Details
      </h1>
      <div className="w-[90%] flex flex-col justify-between space-y-4 max-w-[25rem] xl:max-w-[40rem] mx-auto py-2">
        {pageNumber === 0 && (
          <div name="description" className="flex w-[90%] h-[20rem] mx-auto">
            <textarea
              type="textarea"
              className="text-lg shadow-md mx-auto my-auto rounded-xl bg-slate-100 w-full h-full resize-none outline-none px-2 py-2 text-slate-600"
              placeholder="Tell people about your car."
              name="description"
              value={description}
              onChange={handleChange}
              required
            />
          </div>
        )}

        {pageNumber === 1 && (
          <Fragment>
            <input
              className={style}
              type="text"
              name="condition"
              placeholder="New or Used"
              value={condition}
              onChange={handleChange}
              required
            />
            <input
              className={style}
              type="number"
              name="year"
              min="0"
              placeholder="Year"
              value={year}
              onChange={handleChange}
              required
            />
            <input
              className={style}
              type="text"
              name="make"
              placeholder="Make"
              value={make}
              onChange={handleChange}
              required
            />
            <input
              className={style}
              type="text"
              name="model"
              placeholder="Model"
              value={model}
              onChange={handleChange}
              required
            />
            <input
              className={style}
              type="text"
              name="trim"
              placeholder="Trim"
              value={trim}
              onChange={handleChange}
              required
            />
            <input
              className={style}
              type="number"
              name="mileage"
              placeholder="Mileage"
              value={mileage}
              onChange={handleChange}
              required
            />
          </Fragment>
        )}
        {pageNumber === 2 && (
          <Fragment>
            <input
              className={style}
              type="text"
              name="extColor"
              placeholder="Exterior Color"
              value={extColor}
              onChange={handleChange}
              required
            />
            <input
              className={style}
              type="text"
              name="intColor"
              placeholder="Interior Color"
              value={intColor}
              onChange={handleChange}
              required
            />
            <input
              className={style}
              type="text"
              name="engineCapacity"
              placeholder="Engine Capacity"
              value={engineCapacity}
              onChange={handleChange}
              required
            />
            <input
              className={style}
              type="number"
              name="cylinders"
              placeholder="Cyclinders"
              value={cylinders}
              onChange={handleChange}
              required
            />
            <input
              className={style}
              type="number"
              name="horsepower"
              placeholder="Horsepower"
              value={horsepower}
              onChange={handleChange}
              required
            />
            <input
              className={style}
              type="number"
              name="torque"
              placeholder="Torque"
              value={torque}
              onChange={handleChange}
              required
            />
          </Fragment>
        )}
        {pageNumber === 3 && (
          <Fragment>
            <input
              className={style}
              name="transmission"
              type="text"
              placeholder="Transmission"
              value={transmission}
              onChange={handleChange}
              required
            />
            <input
              className={style}
              type="number"
              name="price"
              placeholder="Price"
              value={price}
              onChange={handleChange}
              required
            />
            <input
              className={style}
              type="text"
              name="city"
              placeholder="City"
              value={city}
              onChange={handleChange}
              required
            />
            <input
              className={style}
              type="text"
              name="state"
              placeholder="State"
              value={state}
              onChange={handleChange}
              required
            />
            <input
              className={style}
              type="number"
              name="zip"
              placeholder="Zip Code"
              value={zip}
              onChange={handleChange}
              required
            />
          </Fragment>
        )}
      </div>
      <div className="flex items-center w-full">
        {pageNumber > 0 && (
          <button
            type="button"
            className="shadow-sm flex space-x-2 bg-gray-100 px-3 py-2 text-blue-600 mx-auto my-auto rounded-xl active:opacity-50"
            onClick={() => setPageNumber(pageNumber - 1)}
          >
            <LeftPointArrow />
            Back
          </button>
        )}
        {edited && (
          <button
            type="button"
            className="shadow-sm flex space-x-2 bg-red-500 px-3 py-1 text-slate-50 mx-auto my-auto rounded-xl active:opacity-50"
            onClick={handleClearForm}
          >
            <CloseIcon size={`w-6 h-6`} />
            Clear
          </button>
        )}
        {pageNumber < 3 && (
          <button
            type="button"
            className="shadow-sm flex space-x-2 bg-gray-100 px-3 py-2 text-blue-600 mx-auto my-auto rounded-xl active:opacity-50"
            onClick={() => setPageNumber(pageNumber + 1)}
          >
            Next
            <RightPointArrow />
          </button>
        )}
        {pageNumber === 3 && (
          <button
            type="submit"
            className="shadow-sm text-md mx-auto px-5 py-2 bg-blue-500 text-slate-100 rounded-2xl 
          hover:bg-yellow-500 hover:text-white hover:scale-110 tranition duration-150 "
          >
            Submit
          </button>
        )}
      </div>
    </form>
  );
};

export default DataForm;
