import React from "react";
import rightArrow from "../../assets/global/Arrow Right.svg";
import clothing from "../../assets/global/Category Image.svg";
const BrowseHome = () => {
  return (
    <div className="bg-[#f6f6f6] mt-20">
      <div className="px-32 py-14 flex items-center justify-between">
        <div className="flex flex-col gap-10 w-[500px]">
          <h1 className="font-bold text-4xl">Browse Our Fashion Paradise!</h1>
          <p className="text-neutral-300">
            Step into a world of style and explore our diverse collection of
            clothing categories.
          </p>
          <div className="flex items-center gap-5 bg-black w-fit px-8 py-3 rounded text-white">
            <button>Start Browsing </button>
            <img className="w-[32px]" src={rightArrow} />
          </div>
        </div>
        <div>
          <img src={clothing} />
        </div>
      </div>
    </div>
  );
};

export default BrowseHome;
