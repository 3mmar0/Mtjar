import React from "react";
import Logo from "../assets/mainLogo.png";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 w-full z-10 shadow-xl">
      <div className="max-w-[1740px] m-auto flex justify-between items-center p-4 bg-green-200">
        <img src={Logo} alt="Logo" className="w-[80px]"/>
        <ul className="flex px">
          <li>Dashboard</li>
          <li>Home</li>
          <li>Products</li>
          <li>cart</li>
          <li>
            <AiOutlineShoppingCart  className="text-3xl border p-1 rounded-full border-black"/>
          </li>
        </ul>
        <div>
          <ul>
            <li className="text-3xl border-2 rounded-full border-black p-1">
              <AiOutlineSearch />
            </li>
            <li className="text-3xl border-2 rounded-full border-black p-1">
              <AiOutlineUser />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
