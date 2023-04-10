import React from "react";
import ListingDetailContainer from "./ListingDetailContainer";
import FeaturedSection from "../Featured/FeaturedSection";

const ListingDetail = () => {
  return (
    <div className="flex flex-col justify-between">
      <ListingDetailContainer />
      <FeaturedSection similar={true} />
    </div>
  );
};

export default ListingDetail;
