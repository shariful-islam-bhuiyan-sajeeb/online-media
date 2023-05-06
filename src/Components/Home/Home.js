import React from "react";
import TopMenu from "./TopMenu";
import HomeCard from "./HomeCard";
import HomeCardTwo from "./HomeCardTwo";

const Home = () => {
  return (
    <div>
      <div className="lg:w-4/5 w-full lg:px-0 px-4 mx-auto">
        <TopMenu />
      </div>
      <div>
        <HomeCard />
        {/* <HomeCardTwo /> */}
      </div>
    </div>
  );
};

export default Home;
