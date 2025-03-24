import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RestaurantDetail = (({avgRating,totalRatingsString,costForTwoMessage,cuisines,areaName, minDeliveryTime,maxDeliveryTime})=>{

    return(
        <div className="bg-gradient-to-b from-white via-[#EBEBF2] to-[#DFDFE7] pb-[16px] px-[16px] border-b-0 rounded-br-[36px] rounded-bl-[36px]">
            <div className="rounded-[20px] border border-[rgba(2,6,12,0.15)] bg-white shadow-[0px_8px_16px_0px_rgba(0,0,0,0.04)]">
                <div className="mt-[20px] mx-5 flex items-center">
                    
                        <FontAwesomeIcon icon={faStar} className="text-yellow-400 w-5 h-5 mr-1 mt-[-2px]" />
                        <div className="font-bold text-[16px] text-[rgba(2,6,12,0.92)] leading-[21px] tracking-[-0.4px]">
                            {avgRating} ({totalRatingsString})
                        </div>
                        <div className="pb-4 px-2 font-bold text-[20px] leading-[21px] tracking-[-0.4px] text-[rgba(2,6,12,0.45)] ">.</div>
                        <div className="font-bold text-[16px] text-[rgba(2,6,12,0.92)] leading-[21px] tracking-[-0.4px]">{costForTwoMessage}</div>
                </div>
                <div className="flex items-center mx-6 mb-2"> 
                    {cuisines}
                </div>
                <div className="flex mx-5 px-1 items-center mb-5">
                    <div className="flex flex-col items-center">
                        <div className="w-2 h-2 rounded-[50%] bg-[#C4C4C4] "></div>
                        <div className="w-[2px] h-6 bg-[#C4C4C4] "></div>
                        <div className="w-2 h-2 rounded-[50%] bg-[#C4C4C4]"></div>
                    </div>
                    <div className="flex flex-col justify-center ml-[12px] pr-[16px] w-full ">
                        <div className="flex mb-[2px] ">
                            <div className="font-bold text-[14px] leading-[18px] tracking-[-0.35px] text-[rgba(2,6,12,0.92)]">Outlet</div>
                            <div className=" font-semibold text-[14px] max-w-[70%] ml-[12px] whitespace-nowrap text-[#5b5a5a] ">{areaName}</div>
                        </div>
                        <div className="flex mt-[8px] whitespace-nowrap font-bold text-[14px] leading-[18px] tracking-[-0.35px] text-[rgba(2,6,12,0.92)] ">{minDeliveryTime}- {maxDeliveryTime} mins</div>

                    </div>

                </div>

            </div>

        </div>
    )

})

export default RestaurantDetail;