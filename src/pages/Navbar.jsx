import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <header className="bg-black z-50 flex justify-between md:justify-around p-4 px-6 relative  items-center">
      <img className="w-14" src="./images/gamecolsole.png " alt="" />

      <i
        onClick={toggleMenu}
        className={`bx ${
          isMenuVisible ? "bx-x" : "bx-menu"
        } text-3xl cursor-pointer md:hidden text-white`}
      ></i>

      <nav
        className={`items-center absolute top-full  -left-full w-[100%] grid gap-4 px-2 text-xl  ${
          isMenuVisible ? "left-0" : "-top-full"
        }  duration-700 md:static md:flex md:w-auto p-6  place-content-center place-items-center rounded-sm  text-white bg-black`}
      >
        <ul className="flex flex-col items-center md:flex md:flex-row gap-8">
          <li>
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className=" hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="md:mr-12  hover:text-blue-500">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/news" className="hover:text-blue-500">
              News
            </Link>
          </li>
          <li className="bg-colorCnt hover:animate-pulse w-[115px] h-8 flex justify-center items-center rounded-md">
            <Link to="/contact" className="text-white">
              Contact us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
