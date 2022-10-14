import React, { Fragment } from "react";

const Carousel = () => {
  return (
    <Fragment>
      <h2 className="text-center text-2xl block px-4 mt-7 mb-4">
        F E A T U R E D <b>C A R S</b>
      </h2>
      <div name="wrapper" className="flex justify-center items-center px-4">
        <div className="overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 w-screen mt-4 mx-auto place-items-center">
          <div className="aspect-square rounded-lg max-w-xs shadow-md h-80 bg-gray-100 mx-auto my-2">
            <img
              src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              className="h-4/6 w-full rounded-t-lg"
              alt="car1"
            />
            <h2 className="h-1/6 font-semibold text-xl px-4 py-2">
              2018 Ford Mustang GT
            </h2>
            <h2 className="h-1/6 font-md text-xl px-4">$27,654</h2>
          </div>
          <div className="aspect-square rounded-lg max-w-xs shadow-md h-80 bg-gray-100 mx-auto my-2">
            <img
              src="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
              className="h-4/6 rounded-t-lg mx-auto w-full"
              alt="car2"
            />
            <h2 className="h-1/6 font-semibold text-xl px-4 py-2">
              2016 BMW 4.28i xDrive
            </h2>
            <h2 className="h-1/6 font-md text-xl px-4">$27,654</h2>
          </div>{" "}
          <div className="aspect-square rounded-lg max-w-xs shadow-md h-80 bg-gray-100 mx-auto my-2">
            <img
              src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              className="h-4/6 w-full rounded-t-lg"
              alt="car3"
            />
            <h2 className="h-1/6 font-semibold text-xl px-4 py-2">
              2018 Ford Mustang GT
            </h2>
            <h2 className="h-1/6 font-md text-xl px-4">$27,654</h2>
          </div>
          <div className="aspect-square rounded-lg max-w-xs shadow-md h-80 bg-gray-100 mx-auto my-2">
            <img
              src="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
              className="h-4/6 rounded-t-lg"
              alt="car4"
            />
            <h2 className="h-1/6 font-semibold text-xl px-4 py-2">
              2016 BMW 4.28i xDrive
            </h2>
            <h2 className="h-1/6 font-md text-xl px-4">$27,654</h2>
          </div>
          <div className="aspect-square rounded-lg max-w-xs shadow-md h-80 bg-gray-100 mx-auto my-2">
            <img
              src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              className="h-4/6 w-full rounded-t-lg"
              alt="car3"
            />
            <h2 className="h-1/6 font-semibold text-xl px-4 py-2">
              2018 Ford Mustang GT
            </h2>
            <h2 className="h-1/6 font-md text-xl px-4">$27,654</h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Carousel;
