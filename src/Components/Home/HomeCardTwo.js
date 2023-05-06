import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { BsFillShareFill } from "react-icons/bs";

const HomeCardTwo = () => {
  return (
    <div className="md:px-0 px-4">
      {/* ============card one is here  */}
      <div className="card lg:w-2/5 md:w-3/5 sm:w-4/5 w-full mx-auto my-10 border-2 border-black shadow-xl">
        <figure>
          <img
            className="w-full"
            src="https://i.ibb.co/M6MDKjh/Rectangle-5.png"
            alt="Shoes"
          />
        </figure>
        <div className=" md:px-4 px-2 lg:py-6 sm:py-4 py-2 text-start relative">
          <h2 className="card-title md:text-2xl sm:text-xl text-lg">
            ✍️ Article
          </h2>
          <div className="flex lg:items-center items-start justify-between md:py-1 py-4">
            <div>
              <p className="w-11/12  xl:text-2xl lg:text-xl sm:text-lg text-md lg:font-semibold font-semibold">
                Tax Benefits for Investment under National Pension Scheme
                launched by Government
              </p>
            </div>
            <BsThreeDots className=" absolute right-2 xl:top-6 lg:top-10 md:top-18  text-right  xl:text-6xl lg:text-2xl text-2xl font-bold text-black" />
          </div>
          <p className="lg:text-xl sm:text-lg text-md text-[#5C5C5C]">
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </p>
          {/* ================ user photo section  */}
          <div className="flex items-center card-actions justify-between py-4">
            <div className="flex items-center md:gap-x-3 gap-x-2">
              <img
                className="md:w-16 w-10"
                src="https://i.ibb.co/8KPqdJG/Sarthak-Kamra.png"
                alt=""
              />
              <div className="flex flex-col">
                <h2 className="lg:text-2xl md:text-lg sm:text-md text-sm font-semibold ">
                  Sarthak Kamra
                </h2>
                <p className="md:hidden">1.4k views</p>
              </div>
            </div>
            <div className="flex items-center md:text-xl text-lg md:gap-x-3 gap-x-2">
              <AiOutlineEye className="hidden md:block" />
              <p className="hidden md:block">1.4k views</p>
              <div className=" flex items-center  border-2 md:gap-x-0 sm:gap-x-2  md:p-3 sm:p-2 p-1 md:mx-4 sm:mx-2 mx-1 bg-[#EDEEF0]">
                <BsFillShareFill className="lg:text-xl md:text-lg sm:text-md text-sm" />
                <p className="md:hidden font-semibold">Shere</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================ card one is end  */}
      {/* ------------------------------------------------------------------------------------------------- */}
      {/* ================ card two is  here  */}
      <div className="card lg:w-2/5 md:w-3/5 sm:w-4/5 w-full mx-auto lg:my-10 md:my-8 sm:my-6 my-4 border-2 border-black shadow-xl">
        <figure>
          <img
            className="w-full"
            src="https://i.ibb.co/BttwFR1/Education.png"
            alt="Shoes"
          />
        </figure>
        <div className="lg:px-4 px-2 md:my-6 py-4 text-start relative">
          <h2 className="card-title md:text-2xl sm:text-xl text-lg">
            🔬️ Education
          </h2>
          <div className="flex lg:items-center items-start justify-between md:py-1 py-4">
            <div>
              <p className="w-11/12  xl:text-2xl lg:text-xl sm:text-lg text-md lg:font-semibold font-semibold">
                Tax Benefits for Investment under National Pension Scheme
                launched by Government
              </p>
            </div>
            <BsThreeDots className=" absolute right-2 xl:top-6 lg:top-10 md:top-18  text-right  xl:text-6xl lg:text-2xl text-2xl font-bold text-black" />
          </div>
          <p className="xl:text-2xl lg:text-xl sm:text-lg text-md text-[#5C5C5C]">
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </p>
          {/* ================ user photo section  */}
          <div className="flex items-center card-actions justify-between py-4">
            <div className="flex items-center md:gap-x-3 gap-x-2">
              <img
                className="md:w-16 w-10"
                src="https://i.ibb.co/xSjwSVY/Sarah-West.png"
                alt=""
              />
              <div className="flex flex-col">
                <h2 className="lg:text-2xl md:text-lg sm:text-md text-sm font-semibold ">
                  Sarah West
                </h2>
                <p className="md:hidden">1.4k views</p>
              </div>
            </div>
            <div className="flex items-center md:text-xl text-lg md:gap-x-3 gap-x-2">
              <AiOutlineEye className="hidden md:block" />
              <p className="hidden md:block">1.4k views</p>
              <div className=" flex items-center  border-2 md:gap-x-0 sm:gap-x-2  md:p-3 sm:p-2 p-1 md:mx-4 sm:mx-2 mx-1 bg-[#EDEEF0]">
                <BsFillShareFill className="lg:text-xl md:text-lg sm:text-md text-sm" />
                <p className="md:hidden font-semibold">Shere</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================ card two is  end ===================  */}

      {/* ================ card three is  here  */}
      <div className="card lg:w-2/5 md:w-3/5 sm:w-4/5 w-full mx-auto lg:my-10 md:my-8 sm:my-6 my-4 border-2 border-black shadow-xl">
        <figure>
          <img
            className="w-full"
            src="https://i.ibb.co/MDYcVBw/Meetup.png"
            alt="Shoes"
          />
        </figure>
        <div className="lg:px-4 px-2 md:my-6 py-4 text-start relative">
          <h2 className="card-title md:text-2xl sm:text-xl text-lg">
            🗓️ Meetup
          </h2>
          <div className="flex lg:items-center items-start justify-between md:py-1 py-4">
            <div className="sm:py-2 py-0">
              <p className="w-full xl:text-2xl lg:text-xl sm:text-lg text-md lg:font-bold font-semibold">
                Finance & Investment Elite Social Mixer @Lujiazui
              </p>
            </div>
            <BsThreeDots className=" absolute right-2 xl:top-6 lg:top-10 md:top-18  text-right  xl:text-6xl lg:text-2xl text-2xl font-bold text-black" />
          </div>
          <div className=" flex items-center xl:gap-x-20 lg:gap-x-16 md:gap-x-12 sm:gap-x-10 gap-x-8">
            <div className="flex items-center md:gap-x-3 gap-x-2">
              <img
                className="md:w-4 w-3"
                src="https://i.ibb.co/RTGvR34/celender.png"
                alt=""
              />
              <p className="lg:text-xl md:text-lg  sm:text-md text-xs font-semibold">
                Fri, 12 Oct, 2018
              </p>
            </div>
            <div className="flex items-center md:gap-x-3 gap-x-2">
              <img
                className="md:w-4 w-3"
                src="https://i.ibb.co/DzBB6nJ/location-logo.png"
                alt=""
              />
              <p className="lg:text-xl md:text-lg  sm:text-md text-xs font-semibold">
                Ahmedabad, India
              </p>
            </div>
          </div>
          <div className="w-full text-center border border-[#A9AEB8] md:my-4 my-2 py-2 px-1 rounded-lg">
            <p className="lg:text-xl md:text-lg sm:text-md text-sm font-medium text-[#E56135]">
              Visit Website
            </p>
          </div>
          {/* ================ user photo section  */}
          <div className="flex items-center card-actions justify-between py-4">
            <div className="flex items-center md:gap-x-3 gap-x-2">
              <img
                className="md:w-16 w-10"
                src="https://i.ibb.co/xSjwSVY/Sarah-West.png"
                alt=""
              />
              <div className="flex flex-col">
                <h2 className="lg:text-2xl md:text-lg sm:text-md text-sm font-semibold ">
                  Sarah West
                </h2>
                <p className="md:hidden">1.4k views</p>
              </div>
            </div>
            <div className="flex items-center md:text-xl text-lg md:gap-x-3 gap-x-2">
              <AiOutlineEye className="hidden md:block" />
              <p className="hidden md:block">1.4k views</p>
              <div className=" flex items-center  border-2 md:gap-x-0 sm:gap-x-2 gap-x-1 md:p-3 sm:p-2 p-1 md:mx-4 sm:mx-2 mx-1 bg-[#EDEEF0]">
                <BsFillShareFill className="lg:text-xl md:text-lg sm:text-md text-xs" />
                <p className="sm:text-sm text-xs md:hidden font-semibold">
                  Shere
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================ card three is  end  */}
      {/* , */}
      {/* ================ card Four is  here  */}

      <div className="card lg:w-2/5 md:w-3/5 sm:w-4/5 w-full mx-auto lg:my-10 md:my-8 sm:my-6 my-4 border-2 border-black shadow-xl">
        <div className="lg:px-4 px-2 md:my-6 py-4 text-start relative">
          <h2 className="card-title md:text-2xl sm:text-xl text-lg">💼️ Job</h2>
          <div className="flex lg:items-center items-start justify-between md:py-1 py-4">
            <div className="sm:py-2 py-0">
              <p className="w-full xl:text-2xl lg:text-xl sm:text-lg text-md lg:font-bold font-semibold">
                Software Developer
              </p>
            </div>
            {/* <BsThreeDots className=" absolute right-2 xl:top-6 lg:top-10 md:top-18  text-right  xl:text-6xl lg:text-2xl text-2xl font-bold text-black" /> */}
            <div className="">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg> */}
                  <BsThreeDots className=" absolute right-2 xl:top-6 lg:top-10 md:top-18  text-right  xl:text-6xl lg:text-2xl text-2xl font-bold text-black" />
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Homepage</a>
                  </li>
                  <li>
                    <a>Portfolio</a>
                  </li>
                  <li>
                    <a>About</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" flex items-center xl:gap-x-20 lg:gap-x-16 md:gap-x-12 sm:gap-x-10 gap-x-8">
            <div className="flex items-center md:gap-x-3 gap-x-2">
              <img
                className="md:w-5 w-3"
                src="https://i.ibb.co/n635hmM/job-bag.png"
                alt=""
              />
              <p className="lg:text-xl md:text-lg  sm:text-md text-xs font-medium">
                Innovaccer Analytics Private Ltd.
              </p>
            </div>
            <div className="flex items-center md:gap-x-3 gap-x-2">
              <img
                className="md:w-4 w-3"
                src="https://i.ibb.co/DzBB6nJ/location-logo.png"
                alt=""
              />
              <p className="lg:text-xl md:text-lg  sm:text-md text-xs font-semibold">
                Noida, India
              </p>
            </div>
          </div>
          <div className="w-full text-center border border-[#A9AEB8] md:my-4 my-2 py-2 px-1 rounded-lg">
            <p className="lg:text-xl md:text-lg sm:text-md text-sm font-medium text-[#E56135]">
              Visit Website
            </p>
          </div>
          {/* ================ user photo section  */}
          <div className="flex items-center card-actions justify-between py-4">
            <div className="flex items-center md:gap-x-3 gap-x-2">
              <img
                className="md:w-16 w-10"
                src="https://i.ibb.co/xSjwSVY/Sarah-West.png"
                alt=""
              />
              <div className="flex flex-col">
                <h2 className="lg:text-2xl md:text-lg sm:text-md text-sm font-semibold ">
                  Sarah West
                </h2>
                <p className="md:hidden">1.4k views</p>
              </div>
            </div>
            <div className="flex items-center md:text-xl text-lg md:gap-x-3 gap-x-2">
              <AiOutlineEye className="hidden md:block" />
              <p className="hidden md:block">1.4k views</p>
              <div className=" flex items-center  border-2 md:gap-x-0 sm:gap-x-2 gap-x-1 md:p-3 sm:p-2 p-1 md:mx-4 sm:mx-2 mx-1 bg-[#EDEEF0]">
                <BsFillShareFill className="lg:text-xl md:text-lg sm:text-md text-xs" />
                <p className="sm:text-sm text-xs md:hidden font-semibold">
                  Shere
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCardTwo;
