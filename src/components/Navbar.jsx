import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="text-md px-12 p-8 h-full w-full">
      <ul className="flex gap-12 justify-end items-center text-white text-sm">
       
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li className="mr-8">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li className=" bg-colorCnt w-[95px] h-7 flex justify-center items-center  rounded-md ">
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
