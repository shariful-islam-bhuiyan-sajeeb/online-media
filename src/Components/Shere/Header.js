import React from "react";
import text from "../Asset/topText.png";
import { BsSearch } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import "./Header.css";
import { Link } from "react-router-dom";
import SignInModal from "../Authentication/SignInModal";

const Header = () => {
  return (
    <div>
      <div className="relative">
        <div className="">
          <div className="flex flex-row   items-center justify-around my-6">
            <div className="lg:text-2xl md:xl sm:text-lg text-md">
              <img className="sm:w-full w-28" src={text} alt="" />
            </div>
            <div className="hidden md:block">
              <div className="flex items-center  md:gap-x-3 gap-x-1 xl:text-xl lg:text-lg  md:text-md text-sm lg:py-4 sm:py-2 py-2 md:px-10 sm:px-6 px-4 rounded-2xl font-medium text-[#5C5C5C] bg-[#F2F2F2]">
                <BsSearch />
                <h2>Search for your favorite groups in ATG</h2>
              </div>
            </div>
            <div>
              <label htmlFor="signInModal">
                <Link
                  to="/signUp"
                  className=" hidden md:block xl:text-2xl lg:text-xl md:text-lg text-md font-semibold"
                >
                  Create account.{" "}
                  <span className="text-[#2F6CE5]"> It’s free!</span>
                </Link>
                {/* <p className="xl:text-2xl lg:text-xl md:text-lg text-md font-semibold">
                  Create account.{" "}
                  <span className="text-[#2F6CE5]"> It’s free!</span>
                </p> */}
              </label>
              <Link to="/signin" className="md:hidden">
                <a
                  href="#_"
                  class="relative inline-flex items-center sm:px-8 px-4 sm:py-2 py-1 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
                >
                  <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span class="relative font-serif">Sign In </span>
                </a>
              </Link>
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
    </div>
  );
};

export default Header;
