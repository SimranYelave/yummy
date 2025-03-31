import { CAROUSEL_DEALS_IMG_URL } from "../constants/config";

const DealsCarouselCard = ({ header, couponCode , offerLogo }) => {

    //console.log("header:",header)
  return (
    <>
      <div className="w-[350px] h-[85px] flex-shrink-0    ">
        <div className="flex items-center justify-start  pr-3 pt-3 pb-3 border border-gray-300 rounded-[20px] bg-white shadow-md max-w-[350px] ">
          <div className="bg-gradient-to-r  text-white font-bold rounded-full px-3 py-1 text-xs text-center mr-2">
            <img className="w-12 h-12" src={CAROUSEL_DEALS_IMG_URL+offerLogo}/>
          </div>
          <div className="flex-col items-start justify-center  ">
            <div className=" w-full text-[15px] font-extrabold text-black text-lg">{header}</div>
            <div className="text-gray-500 font-bold text-[14px] text-base ">{couponCode}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealsCarouselCard;
