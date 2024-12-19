import React from "react";

const ShopHomeSecond = ({ shop }) => {
  return (
    <div className="px-32 py-20">
      <div className="flex items-center justify-center pb-20 gap-10">
        <div className="hover:border p-2 rounded-3xl cursor-pointer">
          <h1>Featured</h1>
        </div>
        <div className="hover:border p-2 rounded-3xl cursor-pointer">
          <h1>Latest</h1>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between ">
          {shop.map((item) => (
            <div className="flex flex-col items-center justify-center gap-3 border px-2 py-3 rounded-md">
              <div className="">
                <img className="w-[250px]" src={item.img} />
              </div>
              <h5 className="font-sans">{item.title}</h5>
              <div className="flex items-center  gap-5">
                <div className="rounded-3xl px-3  border">
                  <p className="text-sm text-neutral-800 font-sans">
                    {item.stock == true ? "IN STOCK" : "SOLD OUT"}
                  </p>
                </div>
                <div className="rounded-2xl px-4 border">
                  <span className="text-neutral-400 font-sans text-sm">
                    ${item.price}.00
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopHomeSecond;
