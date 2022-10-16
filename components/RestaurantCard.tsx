import Image from "next/image";
import React from "react";

export default function RestaurantCard({ restaurant }: any) {
  const { featureImage, name, priceRange, openTime, closeTime, category, rating, locationBroad } = restaurant;
  //   console.log(restaurant);

  const ratingCounter = (rating: any) => {
    let finalRating: number = 0;
    rating.forEach((rate: any) => {
      finalRating += rate.rate;
    });
    return Number(finalRating / rating.length).toFixed(1);
  };

  const openTimeLogic = (open: any, close: any) => {
    //   const openHours = `${new Date(open).getHours()}${new Date(open).getMinutes()}`
    //   const closeHours = `${new Date(close).getHours()}${new Date(open).getMinutes()}`
    const now = new Date();

    if (now.getHours() < new Date(close).getHours() && now.getMinutes() < new Date(close).getMinutes() && now.getHours() > new Date(open).getHours() && now.getMinutes() > new Date(open).getMinutes()) {
      return "Open now";
    } else {
      return "Closed";
    }
  };

  const priceLogic = (priceRange: String) => {
    const array = priceRange.split("/");
    return `Rp${Number(array[0]).toLocaleString("de-DE")} for two`;
  };

  //   console.log();

  //   console.log(ratingCounter(rating));
  return (
    <div className="border-[1px] rounded-xl">
      <div className="bg-cover w-[274px] h-[190px] relative rounded-t-xl" style={{ backgroundImage: `url(${featureImage[0]?.URL})` }}>
        {/* <Image src={featureImage[0]?.URL} alt={name} layout="fill" objectFit={"fill"} /> */}
        <button className="w-7 h-7 flex items-center justify-center bg-white rounded-full right-4 top-2 absolute">
          <Image src={"/bookmarkIcon.svg"} width={15} height={15} alt="bookmark" />
        </button>
        <div className="flex px-[0.5rem] py-1 font-semibold items-center justify-center text-xs bg-white opacity-75 absolute bottom-2 right-3 rounded-full">
          <p>2.0 Km</p>
        </div>
      </div>
      <div className="px-4 py-2 space-y-0.5">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-darkGray">{name}</p>
          <div className="bg-green w-[47px] h-[26px] rounded flex font-semibold text-white items-center justify-evenly">
            <p className="text-sm">{ratingCounter(rating).includes("a") ? "0" : ratingCounter(rating)}</p>
            <Image src={"/starIcon.svg"} width={10} height={10} alt="star" />
          </div>
        </div>
        {category.map((item: any, i: any) => {
          return (
            <p className="text-darkGray text-opacity-70 text-xs" key={i}>
              {item.categoryName}
            </p>
          );
        })}
        <p className="text-darkGray text-opacity-70 text-xs">{locationBroad}</p>
        <div className="flex items-center justify-between">
          <p className="text-darkRed text-xs">{openTimeLogic(openTime, closeTime)}</p>
          <p className="text-darkGray text-opacity-70 text-xs">{priceLogic(priceRange)}</p>
        </div>
      </div>
    </div>
  );
}