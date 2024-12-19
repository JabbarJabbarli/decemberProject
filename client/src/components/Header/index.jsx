import React from "react";
import { NavLink } from "react-router-dom";
import headerImg from "../../assets/headerIcon/Logomark.svg";
import addToCart from "../../assets/global/AddToCart.svg";
import searchIcon from "../../assets/global/Search.svg";
import accountIcon from "../../assets/global/User-1.svg";
const Header = ({ links }) => {
  return (
    <div className="px-32 py-10">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <img src={headerImg} />
          <h1>Ecommerce</h1>
        </div>
        <nav className="flex items-center gap-10">
          {links.map((item) => (
            <NavLink to={item.location}>{item.name}</NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3 border border-gray rounded p-2">
          <img className="w-[24px]" src={searchIcon} />
          <input placeholder="Search products" />
        </div>
        <div className="flex items-center gap-5">
          <NavLink to="/cart">
            <img src={addToCart} className="w-[32px]" />
          </NavLink>
          <NavLink to="/account">
            <img src={accountIcon} className="w-[32px]" />
          </NavLink>
        </div>
      </header>
    </div>
  );
};

export default Header;
