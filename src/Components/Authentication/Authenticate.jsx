import React from "react";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Authenticate = ({ returningUser }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-w-[18rem] w-[22rem] mx-auto my-10 h-[36rem] rounded-sm shadow-xl">
        {returningUser ? <SignIn /> : <SignUp />}
      </div>
      <Footer />
    </div>
  );
};

export default Authenticate;
