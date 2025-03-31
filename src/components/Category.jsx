import CategoryContainer from "./CategoryContainer";
import ShimmerCard from "./ShimmerCard";

const Category = (({itemCategory})=>{
    console.log("itemCategory:",itemCategory);
    return(
        <div className="relative mt-[24px] mx-[16px] mb-[16px]">
      {itemCategory.length === 0 ? (
        <ShimmerCard />
      ) : (
        itemCategory.map((dishinfo, index) => {
          const categoryTitle = dishinfo?.card?.card?.title || "Untitled Category";
          const itemCards = dishinfo?.card?.card?.itemCards || [];
          const count = itemCards.length; // Use .length instead of .size()

          return (
            <CategoryContainer
              key={index}
              categoryTitle={categoryTitle}
              count={count}
              itemCards= {itemCards}
            />
          );
        })
      )}
    </div>
    )
});

export default Category;