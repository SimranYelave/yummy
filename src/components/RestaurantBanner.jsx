const RestaurantBanner = (({title})=>{

    return(
        <div className="flex flex-col justify-center items-start ml-[16px] mb-[8px]">
            <div><h1 className="text-[30px] font-bold ">{title}</h1></div>
        </div>
    )

})

export default RestaurantBanner;