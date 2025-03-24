import { useParams } from "react-router"
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantBanner from "./RestaurantBanner";
import RestaurantDetail from "./RestaurantDetail";
import DealsCarousel from "./DealsCarousel";

const Menu =  (()=>{
    const params = useParams();
    const menuData = useRestaurantMenu(params?.id);
    const {resInfo,dealInfo} = menuData;
    console.log("Menu Data:",menuData);
    console.log("params:",params);
    
       return(
        <div className="max-w-[800px] min-h-[800px] mt-[20px] mx-auto">
            <RestaurantBanner title = {menuData?.resInfo?.name}/>
            <RestaurantDetail 
            avgRating={menuData?.resInfo?.avgRating}
            totalRatingsString = {menuData?.resInfo.totalRatingsString}
            costForTwoMessage={menuData?.resInfo?.costForTwoMessage}
            cuisines={menuData?.resInfo?.cuisines}
            areaName={menuData?.resInfo?.areaName}
            minDeliveryTime={menuData?.resInfo?.sla?.minDeliveryTime}
            maxDeliveryTime={menuData?.resInfo?.sla?.maxDeliveryTime}/>
            <DealsCarousel dealInfo={dealInfo }/>

        </div>
       )
    

})

export default Menu