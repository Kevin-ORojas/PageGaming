import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <nav className="text-md px-12 p-8 h-full w-full">
      <section className="flex justify-between">
        <div className="flex items-center text-2xl uppercase font-bold text-white">Logo</div>
        <ul className="flex gap-12 items-center text-white text-sm">
          <li className="mr-6 hover:border-b-2 hover:border-blue-500 focus:border-b-2 focus:border-blue-500">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-8 hover:border-b-2 hover:border-blue-500 focus:border-b-2 focus:border-blue-500">
            <Link to="/about">About</Link>
          </li>
          <li className="mr-8 hover:border-b-2 hover:border-blue-500 focus:border-b-2 focus:border-blue-500">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="mr-8 hover:border-b-2 hover:border-blue-500 focus:border-b-2 focus:border-blue-500">
            <Link to="/news">News</Link>
          </li>
          <li className=" bg-colorCnt w-[95px] h-7 flex justify-center items-center  rounded-md ">
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
