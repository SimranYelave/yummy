import React from "react";
import Restaurantcard from "./Restaurantcard";

const Cardcontainer = () =>{
    return(
        <>
        <div className="flex  px-4 py-4 w-full flex-wrap justify-center">
            <Restaurantcard/>
            <Restaurantcard/>
            <Restaurantcard/>
            <Restaurantcard/>
            <Restaurantcard/>
        </div>
        </>
    )
}

export default Cardcontainer;