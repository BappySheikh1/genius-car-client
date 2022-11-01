import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Checkout from "../Pages/Checkout/Checkout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/Login/SingUp";


const router=createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        children:[
            {
                path:'/',
                element: <Home />
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/singup',
                element:<SingUp />
            },
            {
                path:'/checkout/:id',
                loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`),
                element: <Checkout />
            }
        ]
    }
])
export default router