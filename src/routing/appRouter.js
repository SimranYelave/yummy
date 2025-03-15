import { createBrowserRouter } from "react-router";
import App from "../App";
import About from "../components/About";
import ContactUs from "../components/ContactUs";
import Body from "../components/Body";
import ErrorPage from "../components/ErrorPage";
import Menu from "../components/Menu";

const appRouter = createBrowserRouter([
    {
        path:"/",
        Component: App,
        // errorElement: ErrorPage,
        children:[
            {
                path: "",
                Component: Body,

            },
            {
                path:"about",
                Component: About,

            },
            {
                path: "contact",
                Component: ContactUs,
              
        
            },
            {
                path:"/menu/:id",
                Component: Menu
        
            },
            
        ],
        

    },
   
    
])

export default appRouter;