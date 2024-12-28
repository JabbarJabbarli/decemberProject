import React from "react";
import { useLoaderData } from "react-router-dom";
const Details = () => {
  const detailsData = useLoaderData();

  return (
    <div className="h-[688px] flex items-center ">
      {detailsData.map((item) => (
        <div className="flex flex-col gap-10 w-[900px]">
          <h1 className="text-xl font-bold">{item.title}</h1>
          <p className="text-neutral-500 ">{item.data}</p>
          <div className="flex gap-3 flex-col">
            {item.info.map((list) => (
              <li className="text-neutral-500">{list}asdddddddddddddd</li>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
