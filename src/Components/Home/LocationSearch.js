import React from "react";
import { IoLocationOutline } from "react-icons/io";
// import { HiUsers } from "react-icons/hi";
import { HiOutlineMapPin, IconName } from "react-icons/hi2";
import { HiOutlineExclamationCircle, HiPencil } from "react-icons/hi";
import FollowGroup from "./FollowGroup";

const LocationSearch = () => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-around w-full mx-auto lg:px-4 px-2  text-2xl">
          <div className="flex items-center lg:gap-x-2 gap-x-1 ">
            <HiOutlineMapPin />
            <p className="2xl:text-xl md:text-sm text-xs text-black">
              Noida, India
            </p>
          </div>
          <div className="xl:text-2xl text-lg ">
            <HiPencil />
          </div>
        </div>
        <div className="w-10/12 mx-auto h-[2px] my-2 bg-slate-200"></div>
        <div className="flex xl:mt-10 lg:mt-8 sm:mt-6 mt-4 lg:mb-4 mb-2  lg:gap-x-2 gap-x-1 lg:px-4 px-2 ">
          <HiOutlineExclamationCircle className="text-3xl font-bold text-gray-500" />
          <p className="xl:text-lg  md:text-md text-xs text-gray-400">
            Your location will help us serve better and extend a personalised
            experience.
          </p>
        </div>
      </div>
      <div className="xl:my-8 lg:my-6 my-4">
        <div className="flex items-center justify-around w-full mx-auto lg:px-4 px-2  text-2xl">
          <div className="flex items-center lg:gap-x-2 gap-x-1">
            <HiOutlineMapPin />
            <p className="2xl:text-xl md:text-md text-xs">
              |<span className="text-[#808080]">Enter your location</span>
            </p>
          </div>
          <div className="xl:text-2xl text-lg ">
            <p className="font-semibold">X</p>
          </div>
        </div>
        <div className="w-10/12 mx-auto h-[2px] my-2 bg-slate-200"></div>
      </div>
      <FollowGroup />
    </div>
  );
};

export default LocationSearch;
