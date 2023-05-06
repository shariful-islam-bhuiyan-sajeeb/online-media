import React from "react";
import text from "../Asset/topText.png";
import { BsSearch } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import "./Header.css";

const Header = () => {
  return (
    <div className="relative">
      <div className="hidden md:block">
        <div className="flex flex-row   items-center justify-around my-6">
          <div className="md:text-2xl text-xl">
            <img src={text} alt="" />
          </div>
          <div className="flex items-center md:gap-x-3 gap-x-1 xl:text-2xl lg:text-xl md:text-lg sm:text-md text-sm md:py-5 sm:py-3 py-2 md:px-10 sm:px-6 px-4 rounded-2xl font-medium text-[#5C5C5C] bg-[#F2F2F2]">
            <BsSearch />
            <h2>Search for your favorite groups in ATG</h2>
          </div>
          <div>
            <h2 className="lg:text-2xl md:text-lg text-md font-semibold">
              Create account.{" "}
              <span className="text-[#2F6CE5]"> It’s free!</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="w-full md:mt-0 mt-8">
        {/* <div className="md:hidden">
          <div className="flex items-center justify-around ">
            <div className=" absolute md:left-10 sm:left-6 left-3 md:mt-10 sm:mt-14 mt-10  ">
              <BsArrowLeft className="text-white md:text-3xl sm:text-2xl text-xl" />
            </div>
            <div>
              <button className="border border-white text-white  py-1 sm:px-3 px-2 rounded-md   sm:mt-4 mt-2 absolute right-4">
                Join Group{" "}
              </button>
            </div>
          </div>
        </div> */}

        <div className="brightness">
          <img
            className="w-full sm:h-full h-[180px] object-cover  "
            src="https://i.ibb.co/dJnNw05/Rectangle-2.png"
            alt=""
          />
        </div>

        <div className=" absolute 2xl:bottom-40 xl:bottom-32 lg:bottom-24 md:bottom-16 sm:bottom-10 bottom-1 2xl:left-80 xl:left-72 lg:left-60 md:left-52 sm:left-44  sm:ml-4 ml-2 text-left  text-[#ffff]">
          <h2 className="lg:text-6xl md:text-3xl sm:text-xl text-md font-semibold">
            Computer Engineering
          </h2>
          <p className="lg:mt-4 sm:mt-2 mt-0 md:text-2xl sm:text-xl text-md ">
            142,765 Computer Engineers follow this
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
