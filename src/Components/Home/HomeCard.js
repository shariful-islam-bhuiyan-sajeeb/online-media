import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { BsFillShareFill } from "react-icons/bs";

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
      location: "India",
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
    <div className="gap-y-6">
      {onlineCards?.map((onlineCard) => (
        <div className="card w-2/4 mx-auto border-2  shadow-xl">
          <div className="w-full">
            <figure>
              <img className="w-full" src={onlineCard?.picture} alt="" />
            </figure>
            <div className=" text-left md:px-8 py-4 space-y-3 ">
              <h2 className="card-title md:text-2xl">{onlineCard?.category}</h2>
              <div className="flex items-center justify-between">
                <p className="md:text-3xl font-semibold font-serif ">
                  {onlineCard?.category?.length > 60
                    ? onlineCard?.title?.slice(0, 60) + "..."
                    : onlineCard?.title}
                </p>
                <div className="md:text-4xl font-bold text-black">
                  {/* <BsThreeDots /> */}
                  <div className="dropdown">
                    <label tabIndex={0} className="m-28  ">
                      <BsThreeDots className=" absolute right-2 xl:top-4 lg:top-10 md:top-18 cursor-pointer  hover:bg-[#BFBFC0] text-right  xl:text-6xl lg:text-2xl text-2xl font-bold text-black" />
                    </label>
                    <ul
                      tabIndex={0}
                      className="menu menu-compact dropdown-content mt-20 p-2 border-2 shadow bg-gray-200 rounded-box w-40"
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
              <p
                className={
                  onlineCard?.description ? "text-2xl text-[#5C5C5C]" : "p-0"
                }
              >
                {onlineCard?.description}
              </p>
              {/* <p className={}></p> */}
              {/*================== "date" & location section is here */}
              <div className="flex items-center justify-start md:gap-x-8 ">
                <div className="flex items-center md:text-2xl font-semibold gap-x-2 ">
                  <img className="w-5" src={onlineCard?.calenderLogo} alt="" />
                  <p className="">{onlineCard?.date}</p>
                </div>
                <div className="flex items-center  gap-x-2">
                  <img
                    className="md:w-4"
                    src={onlineCard?.locationLogo}
                    alt=""
                  />
                  <p className="md:text-xl font-serif font-semibold">
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
                    className="md:w-20 sm:w-16 w-12 rounded-full"
                    src={onlineCard?.userImg}
                    alt=""
                  />
                  <p className="md:text-2xl text-xl font-bold ">
                    {onlineCard?.userName}
                  </p>
                </div>
                <div className="flex items-center md:text-xl text-lg md:gap-x-3 gap-x-2">
                  <AiOutlineEye />
                  <p>{onlineCard?.userViews}</p>
                  <div className="md:p-3 p-2 md:mx-4 mx-2 bg-[#EDEEF0]">
                    <BsFillShareFill />
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
