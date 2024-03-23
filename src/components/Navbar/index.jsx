"use client";
import React, { useState, useEffect, useCallback } from "react";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import { IoSearch, IoMenu, IoClose } from "react-icons/io5";
import { BsBag } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onScroll = useCallback(event => {
    setMenuOpen(false)
    
}, []);

useEffect(() => {
  
  window.addEventListener("scroll", onScroll, { passive: true });

  return () => {
     window.removeEventListener("scroll", onScroll, { passive: true });
  }
}, []);
 



  
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <Image src={logo} width={92} height={18} alt="Logo" />
      </div>
      <div className="navbar_left">
        <ul className="navbar_left-list">
          <li className="navbar_items">Home</li>
          <li className="navbar_items">Pages</li>
          <li className="navbar_items">Shop</li>
          <li className="navbar_items">Portfolio</li>
          <li className="navbar_items">Blog</li>
        </ul>
      </div>
      {menuOpen && (
        <div className="navbar_mobile">
          <ul className="navbar_mobile-list">
            <li className="navbar_items">Home</li>
            <li className="navbar_items">Pages</li>
            <li className="navbar_items">Shop</li>
            <li className="navbar_items">Portfolio</li>
            <li className="navbar_items">Blog</li>
          </ul>
        </div>
      )}
      <div className="navbar_right">
        <ul className="navbar_right-list">
          <li className="navbar_items">
            Search &nbsp;
            <IoSearch />
          </li>
          <li className="navbar_items">
            Cart &nbsp;
            <BsBag /> 0
          </li>
          <li className="navbar_items">
            <FaRegBookmark /> 0
          </li>
          <li className="navbar_items">
            <FaRegUser />
          </li>
          <span className="navbar_items-menu">
            {menuOpen ? (
              <li onClick={() => setMenuOpen(false)} className="navbar_items">
                <IoClose size={20} />
              </li>
            ) : (
              <li onClick={() => setMenuOpen(true)} className="navbar_items">
                <IoMenu size={20} />
              </li>
            )}
          </span>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
