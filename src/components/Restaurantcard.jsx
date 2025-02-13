import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Restaurantcard = () =>{
    return(
        <div className="md:mx-5 md:m-auto">
        <div className="  w-full md:max-w-[250px] h-[150px] overflow-hidden" >
            <img className="w-full h-full object-cover rounded-[15px]" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597" alt="" />
        </div>
        <div className="  py-2">
            <h1 className="font-bold text-xl text-[18px]">Chinese Wok</h1>
            <h2><FontAwesomeIcon icon={faStar} className="text-amber-400 text-[18px]" /> 4.3 • 50-55 mins</h2>
            <p className="text-gray-700 text-[15px] " >Chinese, Asian, Tibetan, Desserts</p>
            <p className="text-gray-700 text-[15px] " >Kurla West</p>

        </div>
        </div>
    )
}

export default Restaurantcard;