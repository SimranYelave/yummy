import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import DealsCarouselCard from "./DealsCarouselCard";
import ShimmerCard from "./ShimmerCard";


const DealsCarousel = (({dealInfo})=>{

    
    console.log('dealInfo:', dealInfo);


    return(
        <>
        <div className="m-[16px] relative">
            <div className="flex absolute mt-[12px] right-0 ">
                <button className="bg-transparent border-none cursor-pointer inline m-0 p-0 opacity-50">
                    <div className="rounded-full mr-[12px] pt-[3px] w-8 h-8 bg-[rgba(2,6,12,0.15)] "><FontAwesomeIcon icon={faArrowRight} /></div>
                </button>
                <button className="bg-transparent border-none cursor-pointer inline m-0 p-0">
                    <div className="rounded-full pt-[3px] w-8 h-8 bg-[rgba(2,6,12,0.15)]"><FontAwesomeIcon icon={faArrowLeft} /></div>
                </button>   
            </div>
            <div>
                <div className="bg-white p-0 overflow-hidden">
                    <div className="bg-white my-4 flex justify-between items-baseline overflow-hidden">
                        <div className="block">
                        <h2 className="mt-0 font-bold text-[20px] tracking-[-0.4px]">Deals for you</h2>
                            <div className="font-extralight text-[16px] leading-[21px] tracking-[-0.4px] text-[rgba(2,6,12,0.92)] overflow-hidden w-full break-words line-clamp-1"></div>
                        </div>
                    </div>
                    <div className="flex gap-2   overflow-x-scroll scrollbar-hide scroll-smooth">
                    {dealInfo.length === 0 ? (
          <ShimmerCard />
        ) : (
          dealInfo.map((dealscarousel) => {
            return <DealsCarouselCard {...dealscarousel?.info} key={dealscarousel.id} />;
          })
        )}
        
                    </div>
                </div>
            </div>

        </div>

        </>
    )

})

export default DealsCarousel ;