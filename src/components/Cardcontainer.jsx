import React, { useEffect } from "react";
import Restaurantcard from "./Restaurantcard";
import { useState } from "react";
import { API_URL } from "../constants/config";
import ShimmerCard from "./ShimmerCard";
import error_img from "../assets/error_img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Cardcontainer = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [masterList, setMasterList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearchText = (val) => {
    setSearchText(val);
  };

  const handleSearch = () => {
    const newData = masterList.filter((restaurant) => {
      return restaurant?.info?.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
    console.log("newData:", newData);
    setRestaurantList(newData);
  };

  useEffect(() => {
    const getRestaurantData = async () => {
      const response = await fetch(API_URL);
      try {
        console.log("response", response);
        if (response.ok) {
          const data = await response.json();
          console.log("json:", data.data);
          
          console.log(
            "restaurant data:",
            data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          );
          setRestaurantList(
            data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          );
          setMasterList(
            data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          );
        } else {
          console.log("error code:", response.status);
          if (response.status === 404) {
            throw new Error("The server cannot find the requested resources.");
          }
          if (response.status === 403) {
            throw new Error("The requested content is forbidden");
          }

          if (response.status === 401) {
            throw new Error(
              "Unauthorized  request, kindly provude credentials"
            );
          }
          if (response.status === 400) {
            throw new Error("Bad request, get in touch with support team");
          } else {
            throw new Error("Something went wrong");
          }
        }
      } catch (error) {
        setErrorMessage(error.message);

        console.log("error:", error);
      }
    };
    getRestaurantData();
  }, []);

  const handleRating = () => {
    const filteredData = masterList.filter((restaurant) => {
      return restaurant?.info?.avgRating >= 4;
    });
    setRestaurantList(filteredData);
    console.log("FilterData:", restaurantList);
  };

  const handlePureVeg = () => {
    const filteredData = masterList.filter((restaurant) => {
      return restaurant?.info?.veg == true;
    });
    setRestaurantList(filteredData);
    console.log("FilterData:", filteredData);
  };

  const handleCostLowToHigh = () => {
    const filteredData = [...masterList]
      .map((restaurant) => ({
        ...restaurant,
        extractedCost: Number(restaurant?.info?.costForTwo?.match(/\d+/)?.[0] || 0),
      }))
      .sort((a, b) => a.extractedCost - b.extractedCost);
  
    setRestaurantList(filteredData);
    console.log("Sorted Data:", filteredData); 
  };

  const handleCostHighToLow = () => {
    const filteredData = [...masterList]
      .map((restaurant) => ({
        ...restaurant,
        extractedCost: Number(restaurant?.info?.costForTwo?.match(/\d+/)?.[0] || 0),
      }))
      .sort((a, b) => b.extractedCost - a.extractedCost);
  
    setRestaurantList(filteredData);
    console.log("Sorted Data:", filteredData); 
  };

  
  
  
 


  if (errorMessage) {
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
        <div className=" mx-12  relative w-full max-w-xs">
          <input
            className=" px-2  border bg-gray-100 rounded-lg h-10 w-full font-semibold "
            type="text"
            value={searchText}
            onChange={(e) => handleSearchText(e.target.value)}
            placeholder="Search for restaurant "
          />
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2 text-gray-500"
            onClick={handleSearch}
          >
            {" "}
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
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
