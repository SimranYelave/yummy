import React from "react";
import Logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faShoppingCart, faPhone, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

const Header = () => {
  return (
    <>
      <div className="flex justify-between px-6 py-1 bg-opacity-90 shadow-lg   text-black  font-semibold  ">
        <div className="flex  items-center">
          <img className="h-20 w-20   bg-amber-400 rounded-full" src={Logo} alt="Logo" />
          <Link to="/" className=" font-extrabold text-4xl text-black font-cursive hover:text-amber-400 transition-all duration-300 group relative pl-2">Yummy
          </Link>
        </div>
        <div className="flex gap-8 items-center">
          <Link to="/" className="hover:text-amber-400  transition duration-300 group relative">
            <FontAwesomeIcon icon={faHome} className="mr-2"/> Home
          <span className="absolute left-7 bottom-0 w-0 h-0.5 bg-amber-400 transition-all duration-500 group-hover:w-12"></span>
          </Link>
          <Link to="/about" className="hover:text-amber-400  transition duration-300 group relative">
          <FontAwesomeIcon icon={faInfoCircle} className="mr-2" /> About us
          <span className="absolute left-7 bottom-0 w-0 h-0.5  bg-amber-400  transition-all duration-500 group-hover:w-16"></span>
          </Link>
          <Link to="/contact" className="hover:text-amber-400  transition duration-300 group relative" >
          <FontAwesomeIcon icon={faPhone} className="mr-2" /> Contact us
          <span className="absolute left-7 bottom-0 w-0 h-0.5  bg-amber-400  transition-all duration-500 group-hover:w-20"></span>
          </Link>
          <Link to="/cart" className="hover:text-amber-400  transition duration-300 group relative" >
          <FontAwesomeIcon icon={faShoppingCart} className="mr-2" /> Cart
          <span className="absolute left-7 bottom-0 w-0 h-0.5  bg-amber-400  transition-all duration-500 group-hover:w-9"></span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
