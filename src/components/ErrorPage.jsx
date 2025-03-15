import React from "react";
import { useRouteError } from "react-router";
const ErrorPage = (()=>{
    const error = useRouteError();
    console.log("error:",error)
    return(
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-xl font-bold">Oop... something went wrong.</h1>
            <h1 className="text-xl text-red-500 font-bold">Error {error?.status} : {error.statusText}</h1>
            <h1 className="text-xl font-bold underline">{error.error.message}</h1>
        </div>
        
    )

})

export default ErrorPage;