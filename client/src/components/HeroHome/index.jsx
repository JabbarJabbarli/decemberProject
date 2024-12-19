import React from "react";
import arrowRight from "../../assets/global/Arrow Right.svg";
import heroImg from "../../assets/global/Hero Image.svg";
const HomeHero = () => {
  return (
    <div className="bg-[#f6f6f6] ">
      <div className="flex items-center justify-between px-32 py-10">
        <div className="flex flex-col gap-5">
          <h1 className="font-sans font-bold text-5xl">
            Fresh Arrivals Online
          </h1>
          <p className="font-sans text-lg">
            Discover Our Newest Collection Today.
          </p>
          <div className="flex items-center gap-3 mt-5 bg-black text-white w-[250px] px-10 py-3 rounded">
            <button>View Collection</button>
            <img className="w-[32px]" src={arrowRight} />
          </div>
        </div>
        <div className="">
          <img src={heroImg} />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
