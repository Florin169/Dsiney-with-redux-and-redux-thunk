import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlinePlus,
  AiFillStar,
} from "react-icons/ai";
import { BiCameraMovie, BiMoviePlay } from "react-icons/bi";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="h-[70px] w-full bg-black text-white flex items-center justify-between px-10 ">
      <div className="flex items-center">
        <Link to="/">
          <Logo className="w-20 h-20 mr-36" />
        </Link>
        <ul className=" hidden md:hidden lg:flex md:space-x-10 ">
          <li className="flex items-center cursor-pointer ">
            <AiFillHome className="mr-3 " />
            HOME
          </li>
          <li className="flex items-center cursor-pointer">
            <AiOutlineSearch className="mr-3" /> SEARCH
          </li>
          <Link to="/watchlist">
            <li className="flex items-center cursor-pointer">
              <AiOutlinePlus className="mr-3" /> WATCHLIST
            </li>
          </Link>
          <li className="flex items-center cursor-pointer">
            <AiFillStar className="mr-3" /> ORIGINAL
          </li>
          <li className="flex items-center cursor-pointer">
            <BiCameraMovie className="mr-3" /> MOVIES
          </li>
          <li className="flex items-center cursor-pointer">
            <BiMoviePlay className="mr-3" /> SERIES
          </li>
        </ul>
        <div className="lg:hidden fixed bottom-0 left-0 right-0 flex justify-between items-center z-[999] bg-black p-5 text-xl">
          <Link to="/">
            <AiFillHome />
          </Link>
          <AiOutlineSearch />
          <Link to="/watchlist">
            <AiOutlinePlus />
          </Link>
          <AiFillStar />
          <BiMoviePlay />
          <BiCameraMovie />
        </div>
      </div>
      <div>Profile</div>
    </div>
  );
};

export default NavBar;
