import { CAROUSEL_IMG_URL } from "../constants/config";
const CarouselCard = (({imageId})=>{
    return(
        <>
        <div  className="w-36 h-44 flex-shrink-0   ">
            <img className="w-full h-full object-cover" src={CAROUSEL_IMG_URL+imageId} alt="" />
        </div>
        </>
    )

})

export default CarouselCard;