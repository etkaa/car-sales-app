import React, { Fragment, useRef } from "react";
import ListingCard from "../ListingCard";
import LeftScrollArrow from "./LeftScrollArrow";
import RightScrollArrow from "./RightScrollArrow";

const DUMMY_CARS = [
  {
    id: "0",
    status: "available",
    listing: {
      listingId: "0000",
      listingOwnerId: "user0000",
      createdAt: Date(10, 10, 2022, 10, 53),
    },
    condition: "used",
    year: "2018",
    make: "Honda",
    model: "Accord",
    trim: "Sport",
    engine: {
      electric: false,
      capacity: "2.0L",
      cylinders: "4",
      horsepower: "186",
      torque: "175",
    },
    miles: "12508",
    price: {
      original: "32456",
      discounted: "35990",
    },
    location: {
      city: "Boston",
      state: "MA",
      zip: "02108",
    },
    pictures: {
      cover: "https://source.unsplash.com/random/?car/1",
      p1: "url1",
      p2: "url2",
      p3: "url3",
      p4: "url4",
      p5: "url5",
    },
  },
  {
    id: "1",
    status: "available",
    listing: {
      listingId: "0001",
      listingOwnerId: "user0001",
      createdAt: Date(10, 11, 2022, 10, 46),
    },
    condition: "used",
    year: "2019",
    make: "Tesla",
    model: "Model S",
    trim: "Plaid Performante Nationale",
    engine: {
      electric: true,
      capacity: "95Kwh",
      cylinders: "n/A",
      horsepower: "987",
      torque: "1056",
    },
    miles: "7965",
    price: {
      original: "148900",
      discounted: "145600",
    },
    location: {
      city: "Brooklyn",
      state: "NY",
      zip: "15489",
    },
    pictures: {
      cover: "https://source.unsplash.com/random/?car/2",
      p1: "url1",
      p2: "url2",
      p3: "url3",
      p4: "url4",
      p5: "url5",
    },
  },
  {
    id: "2",
    status: "available",
    listing: {
      listingId: "0002",
      listingOwnerId: "user0002",
      createdAt: Date(10, 10, 2022, 10, 53),
    },
    condition: "used",
    year: "2020",
    make: "Mercedes",
    model: "C300",
    trim: "Elegance",
    engine: {
      capacity: "3.0L",
      cylinders: "6",
      horsepower: "245",
      torque: "260",
    },
    miles: "8000",
    price: {
      original: "56500",
      discounted: "52899",
    },
    location: {
      city: "Newton",
      state: "PA",
      zip: "56987",
    },
    pictures: {
      cover: "https://source.unsplash.com/random/?car/3",
      p1: "url1",
      p2: "url2",
      p3: "url3",
      p4: "url4",
      p5: "url5",
    },
  },
  {
    id: "3",
    status: "available",
    listing: {
      listingId: "0003",
      listingOwnerId: "user0003",
      createdAt: Date(10, 10, 2022, 10, 53),
    },
    condition: "used",
    year: "2021",
    make: "Audi",
    model: "A6",
    trim: "Premium",
    engine: {
      capacity: "3.2L",
      cylinders: "6",
      horsepower: "298",
      torque: "315",
    },
    miles: "6458",
    price: {
      original: "75485",
      discounted: "75485",
    },
    location: {
      city: "Fairfax",
      state: "VA",
      zip: "36521",
    },
    pictures: {
      cover: "https://source.unsplash.com/random/?car/4",
      p1: "url1",
      p2: "url2",
      p3: "url3",
      p4: "url4",
      p5: "url5",
    },
  },
  {
    id: "4",
    status: "available",
    listing: {
      listingId: "0004",
      listingOwnerId: "user0004",
      createdAt: Date(10, 10, 2022, 10, 53),
    },
    condition: "new",
    year: "2022",
    make: "Hyundai",
    model: "Sonata",
    trim: "Limited",
    engine: {
      capacity: "1.6L",
      cylinders: "4",
      horsepower: "186",
      torque: "195",
    },
    miles: "0",
    price: {
      original: "39879",
      discounted: "36990",
    },
    location: {
      city: "Farmingville",
      state: "NY",
      zip: "11738",
    },
    pictures: {
      cover: "https://source.unsplash.com/random/?car/5",
      p1: "url1",
      p2: "url2",
      p3: "url3",
      p4: "url4",
      p5: "url5",
    },
  },
  {
    id: "5",
    status: "available",
    listing: {
      listingId: "0005",
      listingOwnerId: "user0005",
      createdAt: Date(10, 10, 2022, 10, 53),
    },
    condition: "used",
    year: "2016",
    make: "Honda",
    model: "HR-V",
    trim: "EX-L",
    engine: {
      capacity: "2.0L",
      cylinders: "4",
      horsepower: "192",
      torque: "198",
    },
    miles: "4256",
    price: {
      original: "42565",
      discounted: "39900",
    },
    location: {
      city: "Syracuse",
      state: "NY",
      zip: "56256",
    },
    pictures: {
      cover: "https://source.unsplash.com/random/?car/6",
      p1: "url1",
      p2: "url2",
      p3: "url3",
      p4: "url4",
      p5: "url5",
    },
  },
  {
    id: "0",
    status: "available",
    listing: {
      listingId: "0000",
      listingOwnerId: "user0000",
      createdAt: Date(10, 10, 2022, 10, 53),
    },
    condition: "used",
    year: "2018",
    make: "Honda",
    model: "Accord",
    trim: "Sport",
    engine: {
      electric: false,
      capacity: "2.0L",
      cylinders: "4",
      horsepower: "186",
      torque: "175",
    },
    miles: "12508",
    price: {
      original: "32456",
      discounted: "35990",
    },
    location: {
      city: "Boston",
      state: "MA",
      zip: "02108",
    },
    pictures: {
      cover: "https://source.unsplash.com/random/?car/1",
      p1: "url1",
      p2: "url2",
      p3: "url3",
      p4: "url4",
      p5: "url5",
    },
  },
  {
    id: "1",
    status: "available",
    listing: {
      listingId: "0001",
      listingOwnerId: "user0001",
      createdAt: Date(10, 11, 2022, 10, 46),
    },
    condition: "used",
    year: "2019",
    make: "Tesla",
    model: "Model S",
    trim: "Plaid Performante Nationale",
    engine: {
      electric: true,
      capacity: "95Kwh",
      cylinders: "n/A",
      horsepower: "987",
      torque: "1056",
    },
    miles: "7965",
    price: {
      original: "148900",
      discounted: "145600",
    },
    location: {
      city: "Brooklyn",
      state: "NY",
      zip: "15489",
    },
    pictures: {
      cover: "https://source.unsplash.com/random/?car/2",
      p1: "url1",
      p2: "url2",
      p3: "url3",
      p4: "url4",
      p5: "url5",
    },
  },
  {
    id: "2",
    status: "available",
    listing: {
      listingId: "0002",
      listingOwnerId: "user0002",
      createdAt: Date(10, 10, 2022, 10, 53),
    },
    condition: "used",
    year: "2020",
    make: "Mercedes",
    model: "C300",
    trim: "Elegance",
    engine: {
      capacity: "3.0L",
      cylinders: "6",
      horsepower: "245",
      torque: "260",
    },
    miles: "8000",
    price: {
      original: "56500",
      discounted: "52899",
    },
    location: {
      city: "Newton",
      state: "PA",
      zip: "56987",
    },
    pictures: {
      cover: "https://source.unsplash.com/random/?car/3",
      p1: "url1",
      p2: "url2",
      p3: "url3",
      p4: "url4",
      p5: "url5",
    },
  },
  {
    id: "3",
    status: "available",
    listing: {
      listingId: "0003",
      listingOwnerId: "user0003",
      createdAt: Date(10, 10, 2022, 10, 53),
    },
    condition: "used",
    year: "2021",
    make: "Audi",
    model: "A6",
    trim: "Premium",
    engine: {
      capacity: "3.2L",
      cylinders: "6",
      horsepower: "298",
      torque: "315",
    },
    miles: "6458",
    price: {
      original: "75485",
      discounted: "75485",
    },
    location: {
      city: "Fairfax",
      state: "VA",
      zip: "36521",
    },
    pictures: {
      cover: "https://source.unsplash.com/random/?car/4",
      p1: "url1",
      p2: "url2",
      p3: "url3",
      p4: "url4",
      p5: "url5",
    },
  },
  {
    id: "4",
    status: "available",
    listing: {
      listingId: "0004",
      listingOwnerId: "user0004",
      createdAt: Date(10, 10, 2022, 10, 53),
    },
    condition: "new",
    year: "2022",
    make: "Hyundai",
    model: "Sonata",
    trim: "Limited",
    engine: {
      capacity: "1.6L",
      cylinders: "4",
      horsepower: "186",
      torque: "195",
    },
    miles: "0",
    price: {
      original: "39879",
      discounted: "36990",
    },
    location: {
      city: "Farmingville",
      state: "NY",
      zip: "11738",
    },
    pictures: {
      cover: "https://source.unsplash.com/random/?car/5",
      p1: "url1",
      p2: "url2",
      p3: "url3",
      p4: "url4",
      p5: "url5",
    },
  },
  {
    id: "5",
    status: "available",
    listing: {
      listingId: "0005",
      listingOwnerId: "user0005",
      createdAt: Date(10, 10, 2022, 10, 53),
    },
    condition: "used",
    year: "2016",
    make: "Honda",
    model: "HR-V",
    trim: "EX-L",
    engine: {
      capacity: "2.0L",
      cylinders: "4",
      horsepower: "192",
      torque: "198",
    },
    miles: "4256",
    price: {
      original: "42565",
      discounted: "39900",
    },
    location: {
      city: "Syracuse",
      state: "NY",
      zip: "56256",
    },
    pictures: {
      cover: "https://source.unsplash.com/random/?car/6",
      p1: "url1",
      p2: "url2",
      p3: "url3",
      p4: "url4",
      p5: "url5",
    },
  },
];

const Carousel = () => {
  const carousel = useRef();

  const leftScrollHandler = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth ;
  };

  const rightScrollHandler = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth ;
  };

  return (
    <Fragment>
      <div
        name="wrapper"
        className="flex mx-auto justify-center items-center max-w-7xl"
      >
        <button onClick={leftScrollHandler} className="hidden md:flex w-16">
          <LeftScrollArrow />
        </button>
        <div
          ref={carousel}
          className="flex scrollbar-hide snap-x snap-mandatory scroll-smooth space-x-4 px-4 min-w-[22rem] overflow-x-auto w-screen my-4 md:mx-auto place-items-center h-96"
        >
          {DUMMY_CARS.map((item) => {
            return <ListingCard key={item.id} item={item} />;
          })}
        </div>
        <button onClick={rightScrollHandler} className="hidden md:flex w-16">
          <RightScrollArrow />
        </button>
      </div>
    </Fragment>
  );
};

export default Carousel;
