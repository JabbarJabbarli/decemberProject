import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-[#f6f6f6] px-32 h-[200px] flex items-center justify-between ">
      <div className="flex gap-5 flex-col">
        <h1 className="text-3xl font-bold">Join Our Newsletter</h1>
        <p className="text-neutral-500">
          We love to surprise our subscribers with occasional gifts.
        </p>
      </div>
      <div className="flex items-center">
        <input
          className="px-5 py-3 border bg-transparent"
          placeholder="Your email address"
        />
        <button className="px-7 py-3 bg-black rounded-md text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
