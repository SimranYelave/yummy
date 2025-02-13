import React from "react";
import Logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faShoppingCart, faPhone, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <div className="flex justify-between px-6 py-1 bg-amber-400 bg-opacity-90 shadow-lg   text-black  font-semibold  ">
        <div className="flex flex-col items-center">
          <img className="h-12 w-28" src={Logo} alt="Logo" />
          <a href="#" className=" font-extrabold text-black font-cursive hover:text-white transition duration-300 group relative">Yummy
          </a>
        </div>
        <div className="flex gap-8 items-center">
          <a href="" className="hover:text-white transition duration-300 group relative">
            <FontAwesomeIcon icon={faHome} className="mr-2"/> Home
          <span className="absolute left-7 bottom-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-12"></span>
          </a>
          <a href="" className="hover:text-white transition duration-300 group relative">
          <FontAwesomeIcon icon={faInfoCircle} className="mr-2" /> About us
          <span className="absolute left-7 bottom-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-16"></span>
          </a>
          <a href="" className="hover:text-white transition duration-300 group relative" >
          <FontAwesomeIcon icon={faPhone} className="mr-2" /> Contact us
          <span className="absolute left-7 bottom-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-20"></span>
          </a>
          <a href="" className="hover:text-white transition duration-300 group relative" >
          <FontAwesomeIcon icon={faShoppingCart} className="mr-2" /> Cart
          <span className="absolute left-7 bottom-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-9"></span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
