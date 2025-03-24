import { useState,useEffect } from "react";
import { generateMenuURL } from "../constants/config";

const useRestaurantMenu = (id)=>{
    const MENU_APL_URL = generateMenuURL(id);
    const [menu,setMenu] = useState("");
    const [resInfo,setresInfo] = useState("");
    const [dealInfo,setdealInfo] = useState("");
    //console.log(MENU_APL_URL)

    useEffect(()=>{

        const getMenuData = async () =>{
            const response = await fetch(MENU_APL_URL);
            try{
                if(response.ok){
                    const data = await response.json();
                    console.log("Data:",data?.data)
                    console.log("Title:",data?.data?.cards[2]?.card?.card?.info?.name);
                    console.log("res info:",data?.data?.cards[2]?.card?.card?.info);
                    setresInfo(data?.data?.cards[2]?.card?.card?.info);
                    console.log("Deals Info:",data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers)
                    setdealInfo(data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers)
                    console.log("raw menu data:",data?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
                    console.log("recommended data:",data?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
                    //setMenu(data?.data?.cards?.card[2]?.card?.card?.info);

                    const rawMenuData = data?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

                    const filteredItemCategoryData = rawMenuData.filter(rawData => rawData?.card?.card?.['@type']==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory') ;
                    const filteredNestedItemCategoryData = rawMenuData.filter(rawData => rawData?.card?.card?.['@type']==='type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory');
                    
                    console.log("filteredItemCategoryData:",filteredItemCategoryData);
                    console.log("filteredNestedItemCategoryData:",filteredNestedItemCategoryData);

                }
            }
            catch(error){
                console.log("Error:",error)

            }
        }

        getMenuData();

    },[])

    const menuObj = {
        resInfo : resInfo,
        dealInfo: dealInfo
    }
    return menuObj;

}

export default useRestaurantMenu;