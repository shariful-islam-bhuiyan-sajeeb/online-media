import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { BsFillShareFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const HomeCard = () => {
  const onlineCards = [
    {
      id: 1,
      picture: "https://i.ibb.co/M6MDKjh/Rectangle-5.png",
      category: "✍️ Article",
      title: "What if famous brands had regular fonts? Meet RegulaBrands!",
      description:
        "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      " userImg": "https://i.ibb.co/8KPqdJG/Sarthak-Kamra.png",
      userImg: "https://i.ibb.co/8KPqdJG/Sarthak-Kamra.png",
      userName: "Sarthak Kamra",
      userViews: "1.4k views",
    },
    {
      id: 2,
      picture: "https://i.ibb.co/BttwFR1/Education.png",
      category: "🔬️ Education",
      title:
        "Tax Benefits for Investment under National Pension Scheme launched by Government",
      description:
        "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      " userImg": "https://i.ibb.co/xSjwSVY/Sarah-West.png",
      userName: "Sarah West",
      userViews: "1.4k views",
    },
    {
      id: 3,
      picture: "https://i.ibb.co/MDYcVBw/Meetup.png",
      category: "🗓️ Meetup",
      title: "Finance & Investment Elite Social Mixer @Lujiazui",
      calenderLogo: "https://i.ibb.co/RTGvR34/celender.png",
      date: "Fri, 12 Oct, 2018",
      locationLogo: "https://i.ibb.co/DzBB6nJ/location-logo.png",
      location: "Ahmedabad, India",
      visit: "Visit Website",
      color: "text-[#E56135]",
      userImg: "https://i.ibb.co/QM6t8pY/Ronal-Jones.png",
      userName: "Ronal Jones",
      userViews: "1.4k views",
    },
    {
      id: 4,
      category: "💼️ Job",
      title: "Software Developer",
      calenderLogo: "https://i.ibb.co/n635hmM/job-bag.png",
      date: "Innovaccer Analytics Private Ltd.",
      locationLogo: "https://i.ibb.co/DzBB6nJ/location-logo.png",
      location: "Noida, India",
      visit: "Apply on Timesjobs",
      color: "text-[#02B875]",
      userImg: "https://i.ibb.co/9vm6Rx4/Joseph-Gray.png",
      userName: "Joseph Gray",
      userViews: "1.4k views",
    },
  ];

  // useEffect(() => {
  //   fetch("onlinePost.json")
  //     .then((res) => res.json())
  //     .then((data) => setOnlineCards(data));
  // }, []);

  return (
    <div className="">
      {onlineCards?.map((onlineCard) => (
        <div className="  w-full mx-auto   relative">
          <div className="w-full mt-10 border-2 ">
            <figure>
              <img className="w-full " src={onlineCard?.picture} alt="" />
            </figure>
            <div className=" text-left sm:px-3 px-2 md:py-4 py-2 xl:space-y-3 md:space-y-2 space-y-1 ">
              <h2 className="card-title md:text-2xl text-xl">
                {onlineCard?.category}
              </h2>
              <div className="flex items-center justify-between">
                <p className="w-10/12  xl:text-2xl lg:text-xl sm:text-lg text-md  md:py-2 py-0 overflow-hidden  font-semibold font-serif ">
                  {onlineCard?.title?.length > 60
                    ? onlineCard?.title?.slice(0, 60) + "..."
                    : onlineCard?.title}
                </p>
                <div className="dropdown  ">
                  <label tabIndex={0} className=" ">
                    <BsThreeDots className="cursor-pointer absolute md:right-2 -right-1 -top-4  rounded-md hover:bg-[#BFBFC0]  xl:text-4xl lg:text-2xl text-2xl font-bold text-black" />
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-compact dropdown-content text-center absolute right-1 top-5 border-2 xl:text-2xl lg:text-xl md:text-lg text-md px-2 mt-0  text-black bg-gray-100 rounded-box xl:w-44 lg:w-36 md:w-32 sm:w-28 w-24 mx-auto"
                  >
                    <li className="">
                      <Link className="">Edit</Link>
                    </li>
                    <li>
                      <Link>Report</Link>
                    </li>
                    <li>
                      <Link>Option</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <p
                className={
                  onlineCard?.description
                    ? "lg:text-2xl sm:text-lg text-md text-[#5C5C5C]"
                    : "p-0"
                }
              >
                {onlineCard?.description}
              </p>
              {/* <p className={}></p> */}
              {/*================== "date" & location section is here */}
              <div className="flex items-center justify-start  py-0 lg:gap-x-16 md:gap-x-8 sm:gap-x-6 gap-x-4 ">
                <div className="flex items-center md:text-2xl font-semibold gap-x-2 ">
                  <img className="w-4" src={onlineCard?.calenderLogo} alt="" />
                  <p className="lg:text-xl md:text-lg text-md">
                    {onlineCard?.date}
                  </p>
                </div>
                <div className="flex items-center  gap-x-2">
                  <img
                    className="md:w-4 w-3"
                    src={onlineCard?.locationLogo}
                    alt=""
                  />
                  <p className="lg:text-xl  sm:text-md text-sm font-serif font-semibold">
                    {onlineCard?.location}
                  </p>
                </div>
              </div>
              {/* =============== visit border  */}
              <div className=" ">
                <p
                  className={
                    onlineCard?.visit
                      ? `text-center w-full rounded-lg border border-[#A9AEB8] py-2 md:my-4 md:text-xl font-medium  ${onlineCard?.color}`
                      : `border-none py-0 my-0 ${onlineCard?.color}`
                  }
                >
                  {onlineCard?.visit}
                </p>
              </div>
              {/*================== "date" & location section is end */}

              {/* ==================== uploader img section is here  */}
              <div className=" flex items-center card-actions justify-between md:pt-2 pt-1 lg:pb-8 md:pb-6 sm:pb-4 pb-2 ">
                <div className="flex items-center md:gap-x-3 gap-x-2">
                  <img
                    className="lg:w-20 md:w-16 sm:w-12 w-10 rounded-full"
                    src={onlineCard?.userImg}
                    alt=""
                  />
                  <div>
                    <p className="lg:text-2xl md:text-xl sm:text-lg text-md font-semibold ">
                      {onlineCard?.userName}
                    </p>
                    <p className="md:hidden">{onlineCard?.userViews}</p>
                  </div>
                </div>
                <div className="flex items-center md:text-xl text-lg gap-x-2">
                  <AiOutlineEye className="hidden md:block" />
                  <p className="hidden md:block">{onlineCard?.userViews}</p>
                  <div className="flex items-center md:gap-x-0 gap-x-2 lg:p-3 md:p-2 p-1 sm:px-2 px-1  lg:mx-4 sm:mx-2 mx-1 rounded-md  bg-[#EDEEF0]">
                    <BsFillShareFill className="" />
                    <p className="md:hidden">share</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeCard;
