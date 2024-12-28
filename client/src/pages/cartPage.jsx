import React from "react";
import Header from "../components/Header";
import { links } from "../data/header";
import PathIllustrator from "../components/PathIllustrator";
import CartComp from "../components/CartComp";
import ButtonFunc from "../components/ButtonFunc";
import OrderSumary from "../components/OrderSummary";

const Cart = () => {
  return (
    <div>
      <Header links={links} />
      <PathIllustrator />
      <div className="flex items-center">
        <CartComp />
        <OrderSumary />
      </div>
    </div>
  );
};

export default Cart;
