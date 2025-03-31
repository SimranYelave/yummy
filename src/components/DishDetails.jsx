import React from "react";

function DishDetails({ name, price, offerTags, description, imageId, isVeg }) {
  return (
    <div className="">
      <div className="py-[4px]">
        <div className="flex flex-row justify-between">
          <div>
            <div>
              <div className="h-4 w-4 mb-[4px]">{isVeg ? "🟢" : "🔴"}</div>
            </div>
            <div className="break-words font-bold text-[18px] leading-[22px] tracking-[-0.45px] text-[rgba(2,6,12,0.75)]">
              {name}
            </div>
            <div className="flex items-center mt-[4px]">

                {price}
            </div>
          </div>

          <div>
            <img src={imageId} alt="" />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default DishDetails;
