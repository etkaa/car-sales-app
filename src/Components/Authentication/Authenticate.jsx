import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Authenticate = ({ returningUser }) => {
  return (
    <div className="flex flex-col justify-between">
      <div
        className="flex flex-col items-center justify-center 
      min-w-[18rem] w-[22rem] mx-auto my-10 h-[36rem] 
      rounded-sm shadow-xl"
      >
        {returningUser ? <SignIn /> : <SignUp />}
      </div>
    </div>
  );
};

export default Authenticate;
