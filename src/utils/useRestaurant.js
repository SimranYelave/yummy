import { useState,useEffect } from "react";
import { API_URL } from "../constants/config";

const useRestaurant = () => {
    const [restaurantList, setRestaurantList] = useState([]);
      const [masterList, setMasterList] = useState([]);
       const [errorMessage, setErrorMessage] = useState("");
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

    const resObject = {
        restaurantList : restaurantList,
        masterList : masterList,
        errorMessage : errorMessage,
        updateRestaurants : setRestaurantList,
    }
    return resObject;
}

export default useRestaurant