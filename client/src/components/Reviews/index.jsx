import React from "react";

const Reviews = ({ reviewsData }) => {
  return (
    <div className="px-32 py-40">
      {reviewsData.map((item) => (
        <div className="flex flex-col gap-10 w-[900px]">
          <h1 className="text-xl font-bold">{item.title}</h1>
          <p className="text-neutral-500 ">{item.data}</p>
          <div className="flex gap-3 flex-col">
            {item.info.map((list) => (
              <li className="text-neutral-500">{list}</li>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
