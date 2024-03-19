import React from "react";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <Image
          src={logo}
          width={92}
          height={18}
          alt="Logo"
        />
      </div>
      <div className="navbar_left">
        <ul className="navbar_list">
        <li className="navbar_items">Home</li>
        <li className="navbar_items">Pages</li>
        <li className="navbar_items">Shop</li>
        <li className="navbar_items">Portfolio</li>
        <li className="navbar_items">Blog</li>
        </ul>
      </div>
      <div className="navbar_right">
        <ul className="navbar_list">
        <li className="navbar_items">Search &nbsp;<IoSearch /></li>
        <li className="navbar_items">Cart &nbsp;<BsCart /> 0</li>
        <li className="navbar_items"><FaRegBookmark /> 0</li>
        <li className="navbar_items"><FaRegUser /></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
