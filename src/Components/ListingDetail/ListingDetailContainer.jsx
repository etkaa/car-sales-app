import React, { useState, useEffect, Fragment } from "react";
import { useParams, useNavigate } from "react-router";
import LeftScrollArrow from "../Featured/LeftScrollArrow";
import RightScrollArrow from "../Featured/RightScrollArrow";
import { getListingDetails } from "../../utils/utils";
import Loading from "../UI/Loading";
import {
  ListingLikeIcon,
  MessageIcon,
  ListingOwnerIcon,
  LeftPointArrow,
  RightPointArrow,
} from "../UI/Icons";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../features/user/userSlice";
import { Link } from "react-router-dom";
import { removeFromFavorites, addToFavorites } from "../../utils/utils";
import {
  removeFavorite,
  addFavorite,
} from "../../features/favorites/favoritesSlice";

const ListingDetailContainer = () => {
  const defaultItem = {
    id: "0",
    status: "available",
    listing: {
      listingId: "0000",
      listingOwnerId: "0000",
      createdAt: new Date("October 3, 2022, 14:45"),
    },
    condition: "used",
    year: "0000",
    make: "Default",
    model: "Default",
    trim: "Default",
    engine: {
      electric: false,
      capacity: "00L",
      cylinders: "0",
      horsepower: "000",
      torque: "000",
    },
    miles: "0000",
    price: {
      original: "00000",
      discounted: "0000",
    },
    extColor: "Default",
    intColor: "Default",
    location: {
      city: "Default",
      state: "DF",
      zip: "00000",
    },
    pictures: {
      cover: "https://source.unsplash.com/random/?car/32",
      otherPictures: [
        "https://source.unsplash.com/random/?car/123462",
        "https://source.unsplash.com/random/?car/1436",
        "https://source.unsplash.com/random/?car/13446",
        "https://source.unsplash.com/random/?car/1546",
        "https://source.unsplash.com/random/?car/17663",
      ],
    },
  };

  const params = useParams();

  const listingId = params.listingID;

  const [isLoading, setIsLoading] = useState(true);

  const [item, setItem] = useState(defaultItem);

  //fetch data from server when component mounts
  useEffect(() => {
    async function fetchData(id) {
      // You can await here
      try {
        const item = await getListingDetails(id);
        setItem(item);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData(listingId);
  }, [listingId]); // Or [] if effect doesn't need props or state

  // const item = DUMMY_CARS.find((el) => el.listing.listingId === listingId);

  const name = `${item.year} ${item.make} ${item.model} ${item.trim}`;
  const price = Number(item.price.original).toLocaleString();

  const [index, setIndex] = useState(0);
  const [hideLeft, setHideLeft] = useState(true);
  const [hideRight, setHideRight] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleLeftClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
    if (index === 1) {
      setHideLeft(true);
    }
    setHideRight(false);
  };

  const handleRightClick = () => {
    if (index < item.pictures.otherPictures.length - 1) {
      setIndex(index + 1);
    }
    if (index === item.pictures.otherPictures.length - 2) {
      setHideRight(true);
    }
    setHideLeft(false);
  };

  const date = new Date(item.listing.createdAt).toLocaleDateString("en-us");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);
  const favoriteListings = useSelector(
    (state) => state.favorites.favoriteObjects
  );

  const isListingFavorite = favoriteListings.some(
    (listing) => listing._id === item._id
  );

  const handleFavorite = async (event) => {
    event.stopPropagation();
    if (user !== null) {
      if (isListingFavorite) {
        const resp = await removeFromFavorites(item._id);
        if (resp === "success") {
          dispatch(removeFavorite(item._id));
        } else if (resp === "unauthorized") {
          handleUnauthorized();
        }
      } else {
        const resp = await addToFavorites(item._id);
        if (resp === "success") {
          dispatch(addFavorite(item));
        } else if (resp === "unauthorized") {
          handleUnauthorized();
        }
      }
    } else {
      navigate("/authenticate/login");
    }
  };

  const handleUnauthorized = () => {
    dispatch(setUser(null));
    navigate("/authenticate/login");
  };

  return (
    <main className="my-auto">
      <div
        name="top-container"
        className="flex flex-col space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row 
        max-w-7xl mx-auto my-8 shadow-lg px-0 md:px-6 md:py-4
      bg-slate-50 md:w-[90%] lg:max-h-[44rem]"
      >
        {isLoading ? (
          <div className="w-full h-[22rem] lg:h-[44rem] my-auto mx-auto">
            <Loading />
          </div>
        ) : (
          <Fragment>
            <div
              className="flex mx-auto my-auto justify-center items-center w-[100%] lg:w-[65%] 
          h-[22rem] lg:h-[42rem] rounded-lg"
            >
              <button
                className="hidden lg:flex w-16 mr-1"
                onClick={handleLeftClick}
              >
                {!hideLeft && <LeftScrollArrow />}
              </button>
              <div className="lg:h-[90%] h-[100%] w-[100%] flex">
                <img
                  src={item.pictures.otherPictures[index]}
                  className="my-auto mx-auto max-h-[100%] h-[100%] w-[100%] object-cover"
                  alt={item.make}
                />
              </div>
              <button
                className="hidden lg:flex w-16 ml-1"
                onClick={handleRightClick}
              >
                {!hideRight && <RightScrollArrow />}
              </button>
            </div>
            <div className="lg:hidden h-[3rem] w-[100%] flex space-x-16 justify-center">
              <button
                className={`flex w-10 items-center rounded-lg ${
                  !hideLeft && `bg-slate-100`
                }`}
                onClick={handleLeftClick}
              >
                {!hideLeft && <LeftScrollArrow />}
              </button>
              <button
                className={`flex w-10 items-center rounded-lg ${
                  !hideRight && `bg-slate-100`
                }`}
                onClick={handleRightClick}
              >
                {!hideRight && <RightScrollArrow />}
              </button>
            </div>
            <div
              name="listing-details"
              className="lg:w-[35%] w-[100%] flex flex-col space-y-2 justify-center py-1 
          border-slate-100 border-4 rounded-lg mx-auto my-auto px-3
          overflow-auto scrollbar-hide"
            >
              <h2 className="text-xl font-semibold text-center px-2">{name}</h2>
              <div className="flex max-w-[80%] mx-auto justify-between space-x-10 px-3">
                <div onClick={handleFavorite}>
                  <ListingLikeIcon
                    liked={isListingFavorite}
                    color={"stroke-red-500"}
                  />
                </div>
                <MessageIcon />
                <Link
                  to={`/user/profile/${item.listing.listingOwnerId}"`}
                  className="hover:text-purple-500 transition duration-200"
                >
                  <ListingOwnerIcon />
                </Link>
              </div>
              {!showDescription ? (
                <div className="w-[100%] px-3">
                  <ul>
                    <li className="flex w-full border-b-2 py-2 ">
                      <h2 className="font-medium px-2 w-[50%]">Description</h2>
                      <button
                        onClick={toggleDescription}
                        className="flex space-x-2 px-2 text-blue-600 my-auto rounded-xl w-[40%]"
                      >
                        <p>Read</p>
                        <RightPointArrow />
                      </button>
                    </li>
                    <li className="flex w-full border-b-2 py-2">
                      <h2 className="font-medium px-2 w-[50%]">Price</h2>
                      <h3 className="px-2 w-[50%] font-semibold">{`$${price}`}</h3>
                    </li>
                    <li className="flex w-full border-b-2 py-2">
                      <h2 className="font-medium px-2 w-[50%]">Condition</h2>
                      <h3 className="px-2 w-[50%]">{item.condition}</h3>
                    </li>
                    <li className="flex w-full border-b-2 py-2">
                      <h2 className="font-medium px-2 w-[50%]">Mileage</h2>
                      <h3 className="px-2 w-[50%]">{`${item.miles} miles`}</h3>
                    </li>
                    <li className="flex w-full border-b-2 py-2">
                      <h2 className="font-medium px-2 w-[50%]">
                        Exterior Color
                      </h2>
                      <h3 className="px-2 w-[50%]">{item.extColor}</h3>
                    </li>
                    <li className="flex w-full border-b-2 py-2">
                      <h2 className="font-medium px-2 w-[50%]">
                        Interior Color
                      </h2>
                      <h3 className="px-2 w-[50%]">{item.intColor}</h3>
                    </li>
                    <li className="flex w-full border-b-2 py-2">
                      <h2 className="font-medium px-2 w-[50%]">
                        Engine Capacity
                      </h2>
                      <h3 className="px-2 w-[50%]">{item.engine.capacity}</h3>
                    </li>
                    <li className="flex w-full border-b-2 py-2">
                      <h2 className="font-medium px-2 w-[50%]">Cylinders</h2>
                      <h3 className="px-2 w-[50%]">{item.engine.cylinders}</h3>
                    </li>
                    <li className="flex w-full border-b-2 py-2">
                      <h2 className="font-medium px-2 w-[50%]">Horsepower</h2>
                      <h3 className="px-2 w-[50%]">{`${item.engine.horsepower} hp`}</h3>
                    </li>
                    <li className="flex w-full border-b-2 py-2">
                      <h2 className="font-medium px-2 w-[50%]">Torque</h2>
                      <h3 className="px-2 w-[50%]">{`${item.engine.torque} lb-ft`}</h3>
                    </li>
                    <li className="flex w-full border-b-2 py-2">
                      <h2 className="font-medium px-2 w-[50%]">Location</h2>
                      <h3 className="px-2 w-[50%]">{`${item.location.city}, ${item.location.state}, ${item.location.zip}`}</h3>
                    </li>
                    <li className="flex w-full border-b-2 py-2">
                      <h2 className="font-medium px-2 w-[50%]">Listing Date</h2>
                      <h3 className="px-2 w-[50%]">{date}</h3>
                    </li>
                    {/* <li className="flex w-full py-2">
                    <h2 className="font-medium px-2 w-[50%]">Listing Owner</h2>
                    <h3 className="px-2 w-[50%]">
                      {item.listing.listingOwnerId}
                    </h3>
                  </li> */}
                  </ul>
                </div>
              ) : (
                <div className="relative flex flex-col w-[100%] px-3 h-[80%] space-y-3 items-center">
                  <button
                    onClick={toggleDescription}
                    className="flex space-x-2 bg-gray-200 px-2 py-1 text-blue-600 mx-auto my-auto rounded-xl"
                  >
                    <LeftPointArrow />
                    <p>Back</p>
                  </button>
                  <div className="overflow-scroll overflow-x-hidden border-2 border-slate-200 px-2 py-1">
                    <p>
                      Lorem ipsum, or lipsum as it is sometimes known, is dummy
                      text used in laying out print, graphic or web designs. The
                      passage is attributed to an unknown typesetter in the 15th
                      century who is thought to have scrambled parts of Cicero's
                      De Finibus Bonorum et Malorum for use in a type specimen
                      book. It usually begins with: “Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.” The purpose
                      of lorem ipsum is to create a natural looking block of
                      text (sentence, paragraph, page, etc.) that doesn't
                      distract from the layout. A practice not without
                      controversy, laying out pages with meaningless filler text
                      can be very useful when the focus is meant to be on
                      design, not content. The passage experienced a surge in
                      popularity during the 1960s when Letraset used it on their
                      dry-transfer sheets, and again during the 90s as desktop
                      publishers bundled the text with their software. Today
                      it's seen all around the web; on templates, websites, and
                      stock designs. Use our generator to get your own, or read
                      on for the authoritative history of lorem ipsum.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Fragment>
        )}
      </div>
    </main>
  );
};

export default ListingDetailContainer;
