import React from "react";
import ListingDetailContainer from "./ListingDetailContainer";
import FeaturedSection from "../Featured/FeaturedSection";

const ListingDetail = () => {
  const scrollToPosition = (top = 0) => {
    try {
      /**
       * Latest API
       */
      window.scroll({
        top: top,
        left: 0,
        behavior: "smooth",
      });
    } catch (_) {
      /**
       * Fallback
       */
      window.scrollTo(0, top);
    }
  };

  React.useEffect(() => {
    scrollToPosition();
  }, []);

  return (
    <div className="flex flex-col justify-between">
      <ListingDetailContainer scroll={scrollToPosition} />
      <FeaturedSection similar={true} />
    </div>
  );
};

export default ListingDetail;
