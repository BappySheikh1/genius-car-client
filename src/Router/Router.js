import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Checkout from "../Pages/Checkout/Checkout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/Login/SingUp";
import Orders from "../Pages/Orders/Orders";
import PrivateRoute from '../Router/PrivateRoutes'


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
                loader: ({params})=>fetch(`https://genius-car-server-topaz.vercel.app/services/${params.id}`),
                element: <PrivateRoute><Checkout /></PrivateRoute>
            },
            {
                path:'/orders',
                element: <PrivateRoute><Orders /></PrivateRoute>
            }
        ]
    }
])
export default router