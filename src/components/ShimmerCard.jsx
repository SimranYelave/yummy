import React from "react"

const ShimmerCard = (()=>{
    return new Array(20).fill(0).map((card,index) => {
        return (
            <div key={index} className=" w-full shadow-md md:max-w-[250px] rounded-[15px] md:mx-5 md:m-auto ">
            <div className="  w-full  h-[150px] overflow-hidden" >
                <div className="bg-[#f7f7f7] w-full h-full object-cover rounded-[15px]" ></div>
            </div>
            <div className=" flex-col gap-2 px-2 py-2">
                <h1 className="font-bold text-xl text-[18px] bg-[#f7f7f7] mt-2  h-5 w-full"></h1>
                <div className=" flex gap-5 mt-2 ">
                    <p className=" bg-[#f7f7f7] h-2 w-full"></p>
                    <p className=" bg-[#f7f7f7]  h-2 w-full"></p>
                </div>
              
                <p className="text-gray-700 text-[15px] h-2 w-full bg-[#f7f7f7] mt-2 px-2 " ></p>
                <p className="text-gray-700 text-[15px] h-2 w-full bg-[#f7f7f7] mt-2 px-2 " ></p>
                
    
            </div>
            </div>
        )

    })

})

export default ShimmerCard