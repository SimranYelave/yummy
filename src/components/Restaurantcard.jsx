import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { IMG_URL } from "../constants/config";
import { Link } from "react-router";

const Restaurantcard = ({id,name,avgRating,sla,cuisines,locality,cloudinaryImageId}) =>{
    //const {name,rating,deliveryTime,cuisines,location} = props;
    return(
        <Link to={`/menu/${id}`} className=" w-full shadow-md md:max-w-[250px] rounded-[15px]  md:mx-5 md:m-auto transition-transform transform hover:scale-105">
        <div className="  w-full  h-[150px] overflow-hidden" >
            <img className="w-full h-full object-cover rounded-[15px]" src={IMG_URL + cloudinaryImageId} alt="" />
        </div>
        <div className="  py-2 px-2 ">
            <h1 className="font-bold text-xl space-x-1 text-[18px] text-gray-900 truncate ">{name}</h1>
            <h2><FontAwesomeIcon icon={faStar} className="text-yellow-400 text-[18px]" />{avgRating} • {sla?.deliveryTime} mins</h2>
            <p className="text-gray-700 text-[15px] truncate" >{cuisines.join(", ")}</p>
            <p className="text-gray-700 text-[15px] truncate " >{locality}</p>

        </div>
        </Link>
    )
}

export default Restaurantcard;