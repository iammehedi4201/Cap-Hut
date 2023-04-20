import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayouts from "../Layouts/Main/MainLayouts";

export const routers =createBrowserRouter([

    {
       path:'',
       element:<MainLayouts></MainLayouts>,
       children:[
         {
            path:"/",
            element:<Home></Home>
         }
       ]
    },

])