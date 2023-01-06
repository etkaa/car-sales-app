import React, { useState, Fragment } from "react";
import { CloseIcon, LeftPointArrow, RightPointArrow } from "../UI/Icons";

const defaultFormData = {
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
    "px-2 py-2 outline-none w-[90%] mx-auto my-auto rounded-xl text-center bg-slate-200 placeholder:text-slate-400";

  const [formData, setFormData] = useState(defaultFormData);
  const [pageNumber, setPageNumber] = useState(1);
  const [edited, setEdited] = useState(false);

  const {
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
      className="mx-auto items-center text-center min-w-[16rem] max-w-[24rem] w-[90%] lg:[35%] min-h-[28rem] h-[28rem]"
      onSubmit={formSubmitHandler}
    >
      <div className="flex flex-col justify-between max-w-[25rem] xl:max-w-[40rem] min-h-[90%] mx-auto py-4">
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
      <div className="flex min-h-[10%] items-center">
        {pageNumber > 1 && (
          <button
            type="button"
            className="flex space-x-2 bg-gray-200 px-3 py-1 text-blue-600 mx-auto my-auto rounded-xl"
            onClick={() => setPageNumber(pageNumber - 1)}
          >
            <LeftPointArrow />
            Back
          </button>
        )}
        {edited && (
          <button
            type="button"
            className="flex space-x-2 bg-red-500 px-3 py-1 text-slate-50 mx-auto my-auto rounded-xl"
            onClick={handleClearForm}
          >
            <CloseIcon size={`w-6 h-6`} />
            Clear
          </button>
        )}
        {pageNumber < 3 && (
          <button
            type="button"
            className="flex space-x-2 bg-gray-200 px-3 py-1 text-blue-600 mx-auto my-auto rounded-xl"
            onClick={() => setPageNumber(pageNumber + 1)}
          >
            Next
            <RightPointArrow />
          </button>
        )}
        {pageNumber === 3 && (
          <button
            type="submit"
            className="text-md mx-auto px-5 py-1 bg-blue-500 text-slate-100 rounded-2xl 
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
