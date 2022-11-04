import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../API/auth';
import { AuthContext } from '../../useContexts/AuthProvider';

const SocialLogIn = () => {
    const {googleLogIn} =useContext(AuthContext)
    const navigate=useNavigate()
    const location =useLocation()
    let from = location.state?.from?.pathname || "/";

    const handleGoogleLogin =()=>{
        googleLogIn()
        .then(result =>{
            const user =result.user
            console.log(user);
            setAuthToken(user)
          
        })
        .catch(err =>{
            console.log(err);
        })
    }
    return (
        <div>
            <p className='text-center'><small>Social Login</small></p>
            <p className='text-center'><button onClick={handleGoogleLogin} className='btn btn-ghost'>Google</button></p>
        </div>
    );
};

export default SocialLogIn;