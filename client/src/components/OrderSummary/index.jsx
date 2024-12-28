import React from "react";

const OrderSumary = () => {
  return (
    <div className="border w-fit">
      <div className="">
        <h1>Order Summary</h1>
        <div>
          <p>Subtotal</p>
          <span>$ 90.00</span>
        </div>
        <div>
          <p>Shipping</p>
          <span>Free</span>
        </div>
        <div>
          <p>Tax:</p>
          <span>$3.00</span>
        </div>
        <div className="w-[200px] border-slate-500"></div>
        <button className="bg-black text-white ">Checkout</button>
      </div>
    </div>
  );
};

export default OrderSumary;
