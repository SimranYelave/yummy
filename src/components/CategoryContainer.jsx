import React from 'react'
import DishDetails from './DishDetails'
import ShimmerCard from './ShimmerCard';

function CategoryContainer({categoryTitle,count,itemCards}) {
    console.log("itemCards:",itemCards);
  return (
    <div>
      <h1 className="font-extrabold text-[18px] leading-[22px] tracking-[-0.50px] text-[rgba(2,6,12,0.92)]">{categoryTitle } ({count})</h1>
      <div>{itemCards.length === 0 ? (
        <ShimmerCard />
      ) : (
        itemCards.map((iteminfo, index) => {

          return (
            <DishDetails
              key={index}
              {...iteminfo?.card?.info}
            />
          );
        })
      )}
      </div>
    </div>
  )
}

export default CategoryContainer
