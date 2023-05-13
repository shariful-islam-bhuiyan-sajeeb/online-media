import React from "react";
import TopMenu from "./TopMenu";
import HomeCard from "./HomeCard";
import LocationSearch from "./LocationSearch";

const Home = () => {
  return (
    <div className="lg:w-3/4 w-full lg:px-0 px-4 mx-auto">
      <div className="sticky z-50 top-0">
        <TopMenu />
      </div>
      <div className="flex items-start xl:gap-x-10 lg:gap-x-8 md:gap-x-6  ">
        <div className="md:w-3/4 w-full mx-auto ">
          <HomeCard />
          {/* <HomeCardTwo /> */}
        </div>
        <div className="md:w-1/4 w-full mx-auto lg:mt-14 sm:mt-10 text-left hidden md:block ">
          <LocationSearch />
        </div>
      </div>
    </div>
  );
};

export default Home;
