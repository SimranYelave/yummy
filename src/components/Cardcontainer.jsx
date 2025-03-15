import React, { useEffect } from "react";
import Restaurantcard from "./Restaurantcard";
import { useState } from "react";
import ShimmerCard from "./ShimmerCard";
import error_img from "../assets/error_img.png";
import useRestaurant from "../utils/useRestaurant";
import SearchBar from "./SearchBar";

const Cardcontainer = () => {
  const [searchText, setSearchText] = useState("");
  const restaurantData =  useRestaurant();
  const {errorMessage,restaurantList,masterList,updateRestaurants} = restaurantData
  console.log("Restaurant List from custom hook;",restaurantData)


  const handleRating = () => {
    const filteredData = masterList.filter((restaurant) => {
      return restaurant?.info?.avgRating >= 4;
    });
    updateRestaurants(filteredData);
    console.log("FilterData:", restaurantList);
  };

  const handlePureVeg = () => {
    const filteredData = masterList.filter((restaurant) => {
      return restaurant?.info?.veg == true;
    });
    updateRestaurants(filteredData);
    console.log("FilterData:", filteredData);
  };

  const handleCostLowToHigh = () => {
    
    const filteredData = [...masterList]
      .map((restaurant) => ({
        ...restaurant,
        extractedCost: Number(restaurant?.info?.costForTwo?.match(/\d+/)?.[0] || 0),
      }))
      .sort((a, b) => a.extractedCost - b.extractedCost);
  
    updateRestaurants(filteredData);
    console.log("Sorted Data:", filteredData); 
  };

  const handleCostHighToLow = () => {
    
    const filteredData = [...masterList]
      .map((restaurant) => ({
        ...restaurant,
        extractedCost: Number(restaurant?.info?.costForTwo?.match(/\d+/)?.[0] || 0),
      }))
      .sort((a, b) => b.extractedCost - a.extractedCost);
  
      restaurantData?.updateRestaurants(filteredData);
    console.log("Sorted Data:", filteredData); 
  };


  if (restaurantData.errorMessage) {
    return (
      <div className=" my-32">
        <div className="flex justify-center align-middle">
          <img className="hover:-scale-x-100 w-56" src={error_img} />
        </div>
        <div className="">
          <h1 className="text-center font-semibold  text-[20px] pt-5 w-100 ">
            {errorMessage}
          </h1>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex mt-10 gap-[350px]">

        <SearchBar masterCollection = {masterList} 
        updater={updateRestaurants}
        text = {searchText}
        updateText={setSearchText} />
        <div className="flex gap-2 ">
          <button
            className=" text-sm text-gray-700 font-semibold border p-2 rounded-full shadow-md hover:bg-gray-200"
            onClick={handleRating}
          >
            Ratings 4.0+
          </button>
          <button
            className=" text-sm text-gray-700 font-semibold border p-2 rounded-full shadow-md hover:bg-gray-200"
            onClick={handlePureVeg}
          >
            Pure Veg
          </button>
          <button
            className="text-sm text-gray-700 font-semibold border p-2 rounded-full shadow-md hover:bg-gray-200"
            onClick={handleCostLowToHigh}
          >
            Cost: Low to High
          </button>
          <button
            className="text-sm text-gray-700 font-semibold border p-2 rounded-full shadow-md hover:bg-gray-200"
            onClick={handleCostHighToLow}
          >
            Cost: High to Low
          </button>
        </div>
      </div>

      <div className="flex shadow-md gap-4 px-4 py-4 w-full flex-wrap justify-center">
        {restaurantList.length === 0 ? (
          masterList.length == 0 ? (
            <ShimmerCard />
          ) : (
            <div>
              No match found for{" "}
              <span className="text-red-600">'{searchText}'</span>
            </div>
          )
        ) : (
          restaurantList.map((restaurant) => {
            return <Restaurantcard {...restaurant?.info} key={restaurant?.info?.id} />;
          })
        )}
      </div>
    </>
  );
};

export default Cardcontainer;
