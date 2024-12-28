import React from "react";
import cover from "../../assets/global/productCardImg.png";
import ButtonFunc from "../ButtonFunc";

const CartComp = () => {
  return (
    <div className="px-32 py-20">
      <div className="flex flex-col gap-10 ">
        <h3 className="border-b text-2xl font-semibold pb-5">Your Cart</h3>
        <div className="flex items-center justify-between gap-10">
          <div className="bg-[#f6f6f6] rounded-md">
            <img className="w-[120px] h-[140px]" src={cover} />
          </div>
          <div className="flex flex-col gap-3">
            <h3>Raw black t0shirt</h3>
            <div className="flex items-center gap-2">
              <p className="text-slate-500">Color:</p>
              <span>green</span>
              <p className="text-slate-500">Size:</p>
              <span className="text-slate-500">M</span>
            </div>
          </div>
          <div>
            <p>$75.00</p>
          </div>
          <ButtonFunc />
        </div>
      </div>
    </div>
  );
};

export default CartComp;
