import { useState,useEffect } from "react";
import { API_URL } from "../constants/config";

const useCarousel = (()=>{

    const [carouselList,setCarouselList] = useState([]);

      useEffect(() => {
            const getCarouselData = async ()=>{
                const response = await fetch(API_URL);
                try{
                    if(response.ok){
                        const data = await response.json();
                        console.log(
                            "carousel data:",
                            data?.data?.cards[0]?.card?.card?.imageGridCards?.info
                          );
                          setCarouselList(data?.data?.cards[0]?.card?.card?.imageGridCards?.info)
                    }
    
                }
                catch (error) {
                    console.log("error:", error);
                  }
    
            }
            getCarouselData();
    
        },[])

    const objCaro = {
        carouselList : carouselList,
        setCarouselList : setCarouselList

    }

    return objCaro ;

})

export default useCarousel;