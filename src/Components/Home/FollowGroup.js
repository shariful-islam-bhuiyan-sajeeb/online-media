import React from "react";
import { HiHandThumbUp } from "react-icons/hi2";

const FollowGroup = () => {
  const Follow = [
    {
      id: 1,
      picture: "https://i.ibb.co/LhYBTPS/Leisure.png",
      name: "Leisure",
      follow: "follow",
      color: "text-[#E5E5E5]",
      bg: "bg-[#000000]",
    },
    {
      id: 2,
      picture: "https://i.ibb.co/LnxYQN8/activism.png",
      name: "Activism",
      follow: "follow",
      color: "text-[#000000]",
      bg: "bg-[#EDEEF0]",
    },
    {
      id: 3,
      picture: "https://i.ibb.co/zRd2jLr/mba.png",
      name: "MBA",
      follow: "follow",
      color: "text-[#000000]",
      bg: "bg-[#EDEEF0]",
    },
    {
      id: 3,
      picture: "https://i.ibb.co/cbMnYrw/philosopy.png",
      name: "Philosophy",
      follow: "follow",
      color: "text-[#000000]",
      bg: "bg-[#EDEEF0]",
    },
  ];
  return (
    <div className="xl:px-6 lg:px-4 px-2 lg:mt-8 mt-6">
      <div className="flex items-center lg:gap-x-2 gap-x-1">
        <HiHandThumbUp className="lg:text-lg text-md " />
        <p className="2xl:text-lg md:text-md text-xs uppercase">
          Recommended Groups
        </p>
      </div>
      <div className="lg:mt-4 mt-2">
        <div>
          {Follow?.map((flw) => (
            <div className=" flex items-center justify-between">
              <div className="flex items-center lg:mt-6 mt-4 lg:gap-x-3 md:gap-x-2 gap-x-1">
                <img
                  className="lg:w-14 md:w-10 sm:w-8 w-6"
                  src={flw?.picture}
                  alt=""
                />
                <p className="font-medium font-serif">{flw?.name}</p>
              </div>
              <div>
                <p
                  className={
                    flw?.follow
                      ? `xl:px-4 lg:px-2 px-1  lg:mt-6 mt-4 rounded-xl xl:text-lg md:text-sm text-xs ${flw?.color} ${flw?.bg}`
                      : `${flw?.color} ${flw?.bg}`
                  }
                >
                  {flw?.follow}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="xl:mt-16 lg:mt-12 md:mt-10 mt-8 text-right">
        <p className="text-[#2F6CE5]">See More...</p>
      </div>
    </div>
  );
};

export default FollowGroup;
