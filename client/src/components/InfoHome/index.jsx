import React from "react";

const InfoHome = ({ info }) => {
  return (
    <div className="p-32">
      <div className="flex items-center justify-between">
        {info.map((item) => (
          <div className="w-[300px] flex flex-col gap-3">
            <div className="bg-neutral-100 rounded-full w-fit p-2">
              <img className="w-[28px] " src={item.icon} />
            </div>
            <h4 className="font-bold font-sans">{item.title}</h4>
            <p className="text-neutral-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoHome;
