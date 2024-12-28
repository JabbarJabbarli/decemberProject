import React from "react";

const ProductShop = ({ shop }) => {
  return (
    <div className="px-32">
      <div className="pb-20">
        <div className="flex flex-col gap-2 items-start">
          <h1 className="text-4xl font-bold">You might also like</h1>
          <p className="text-left pb-3 text-neutral-300">SIMILAR PRODUCTS</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        {shop.map((item) => (
          <div className="flex flex-col gap-3 rounded-md">
            <div className=" bg-[#f6f6f6]">
              <img className="w-[250px]" src={item.img} />
            </div>
            <div className="flex flex-col bg-white px-2 py-3 gap-5">
              <h5 className="font-sans">{item.title}</h5>
              <div className="flex gap-3 items-center">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShop;
