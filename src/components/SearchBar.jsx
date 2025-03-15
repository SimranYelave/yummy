import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = (({masterCollection,updater,text,updateText})=>{


    
  const handleSearchText = (val) => {
    updateText(val);
  };

    const handleSearch = () => {
        const newData = masterCollection.filter((restaurant) => {
          return restaurant?.info?.name
            .toLowerCase()
            .includes(text.toLowerCase());
        });
        console.log("newData:", newData);
        updater(newData);
      };

    return(
        <>
        <div className=" mx-12  relative w-full max-w-xs">
                  <input
                    className=" px-2  border bg-gray-100 rounded-lg h-10 w-full font-semibold "
                    type="text"
                    value={text}
                    onChange={(e) => handleSearchText(e.target.value)}
                    placeholder="Search for restaurant "
                  />
                  <button
                    className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2 text-gray-500"
                    onClick={handleSearch}
                  >
                    {" "}
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                </div>
        </>
    )

})

export default SearchBar;