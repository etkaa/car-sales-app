import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { LogoIcon } from "../Icons";

const Logo = () => {
  return (
    <Fragment>
      <Link
        to="/home"
        className="w-full flex items-center text-center justify-start space-x-3 py-4"
      >
        <LogoIcon />
        <h2 className="text-lg sm:text-2xl">
          C A R S <b>N O W</b>
        </h2>
      </Link>
    </Fragment>
  );
};

export default Logo;
