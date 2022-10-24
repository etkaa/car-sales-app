import React, { Fragment} from "react";
// import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Authenticate = ({ returningUser }) => {

  return (
    <Fragment>
      <Navbar />
      <div className="flex flex-col items-center justify-center max-w-[22rem] md:max-w-sm mx-auto my-10 h-[36rem] rounded-sm shadow-xl">
        {returningUser ? <SignIn /> : <SignUp />}
      </div>
    </Fragment>
  );
};

export default Authenticate;
