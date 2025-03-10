import { useState } from "react";
import { useEffect } from "react";
import CarouselCard from "./CarouselCard";
import { API_URL } from "../constants/config";
import ShimmerCard from "./ShimmerCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Carousel = (()=>{
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
    return (
        <>
        <div className="mx-12 m-auto mt-8">
            <div className="flex justify-between items-center ">
                <h1 className="font-bold text-2xl ">What's on your mind?</h1>
                <div>
                <button className=" m-2 bg-gray-200 rounded-full w-8 h-8 justify-between items-center"><FontAwesomeIcon icon={faArrowRight} /></button>
                <button className="bg-gray-200 rounded-full w-8 h-8 justify-between items-center"><FontAwesomeIcon icon={faArrowLeft} /></button>
                </div>
            </div>
        <div className="flex gap-2 mx-12 mt-8 overflow-x-scroll scrollbar-hide scroll-smooth">
        
        {carouselList.length === 0 ? (
          <ShimmerCard />
        ) : (
          carouselList.map((carousel) => {
            return <CarouselCard {...carousel} key={carousel.id} />;
          })
        )}
        
      </div>
      <hr className="my-14 "/>
        </div>

        </>

    )
})

export default Carousel ;