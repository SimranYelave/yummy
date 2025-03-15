import { useParams } from "react-router"
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantBanner from "./RestaurantBanner";

const Menu =  (()=>{
    const params = useParams();
    const menuData = useRestaurantMenu(params?.id);
    console.log("Menu Data:",menuData);
    console.log("params:",params);
    
       return(
        <div>
            <RestaurantBanner title = {menuData?.title?.name}/>
        </div>
       )
    

})

export default Menu