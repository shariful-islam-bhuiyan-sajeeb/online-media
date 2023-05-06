import React from "react";
import { HiUsers } from "react-icons/hi";
import { BsArrowLeft } from "react-icons/bs";

const TopMenu = () => {
  return (
    <div className="flex items-center justify-around md:mt-10 ">
      <div>
        <ul className="flex items-center font-medium  lg:text-2xl md:text-lg sm:text-lg md:gap-x-4 gap-x-0">
          <li className="text-[#000000] ">All Posts(32)</li>
          <div className="hidden md:inline">
            <div className="flex flex-row items-center lg:text-2xl md:text-lg sm:text-lg md:gap-x-4 gap-x-0  ">
              <li className="text-[#8A8A8A]">Article</li>
              <li className="text-[#8A8A8A]">Event</li>
              <li className="text-[#8A8A8A]">Education</li>
              <li className="text-[#8A8A8A]">Job</li>
            </div>
          </div>
        </ul>
      </div>
      <div className="md:static absolute top-10  right-3">
        <div className="flex items-center lg:gap-x-4 md:gap-x-2">
          <div className="hidden md:block">
            <select className="select bg-[#EDEEF0] w-full  py-2 xl:px-10 lg:px-6 md:px-8 px-0 lg:text-lg md:text-md font-semibold ">
              <option disabled selected>
                Write a Post
              </option>
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
            </select>
          </div>
          {/* <div className=" absolute left-1 ">
            <BsArrowLeft className="text-white md:text-3xl sm:text-2xl text-xl" />
          </div> */}

          <div className="flex items-center py-2 lg:px-10 md:px-6 px-4 rounded-md lg:text-xl sm:text-lg font-semibold lg:gap-x-4 gap-x-2 border md:border-transparent border-white  md:text-black text-white md:bg-[#2F6CE5] bg-transparent">
            <HiUsers />
            <button> Join Group </button>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <select className="select  w-full mx-auto px-2 py-1 lg:mt-4 sm:mt-2 ">
          <option disabled selected>
            Filter: All
          </option>
          <option>One</option>
          <option>Two</option>
          <option>Breaking Bad</option>
          <option>Walking Dead</option>
        </select>
      </div>
    </div>
  );
};

export default TopMenu;
