import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../useContexts/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user,loadding}=useContext(AuthContext)
    const location=useLocation()
    if(loadding){
     return <p className='text-xl'>Loadding.......</p>

    }

   if(!user){

    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
   }
   
    return children;
};

export default PrivateRoutes;