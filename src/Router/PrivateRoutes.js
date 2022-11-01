import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../useContexts/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user,loadding}=useContext(AuthContext)

    if(loadding){

     return <p>Loadding.......</p>

    }

   if(!user){

    return <Navigate to='/login' ></Navigate>
   }
   
    return children;
};

export default PrivateRoutes;