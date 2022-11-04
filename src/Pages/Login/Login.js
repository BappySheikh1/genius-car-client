import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import image from '../../assets/images/login/login.svg'
import { AuthContext } from '../../useContexts/AuthProvider';



const Login = () => {
  const [userEmail,setUserEmail]=useState('')
    const [error,setError]=useState('')
    const {userLogIn,forgetPassword}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()
    let from = location.state?.from?.pathname || "/";

    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value
        const password=form.password.value
        
        userLogIn(email,password)
        .then(result =>{
          const user =result.user
             const currentUser={
              email: user.email
             }
          console.log(user);
      //  JWT tokem
       fetch('https://genius-car-server-topaz.vercel.app/jwt',{
        method: "POST",
        headers:{
          'Content-type':"application/json"
        },
          body: JSON.stringify(currentUser)
       })
       .then(res => res.json())
       .then(data => {
        console.log(data);
        // local storage is not the best place to store jwt token
        localStorage.setItem('geniusToken',data.token)

        navigate(from, { replace: true })
       })
      

       
        })
        .catch(error =>{
          console.log(error);
        })
    }

    const handleUserEmail=(event)=>{
     setUserEmail(event.target.value)
    }

    const handleForgetPassword=()=>{
      forgetPassword(userEmail)
      .then(()=>{
        toast.success('Forgeted Password Please Check your email')
      })
      .catch(err =>{
        console.log(err);
      })
    }
    
    const handleGoogleLogin=()=>{

    }
    const handleFaceBookLogin=()=>{

    }
     
    return (
        <div className="hero w-full my-20">
  <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
     <img src={image} className='w-3/4' alt="" />
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-5xl font-bold text-center">Login!</h1>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
           </label>
          <input type="text" onBlur={handleUserEmail} placeholder="email" name='email' className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required/>
          <label className="label">
            <a onClick={handleForgetPassword} className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <p className='text-red-600'>{error}</p>
        <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value='Login' />
        </div>
      </form>
      <div className='text-center my-5'>
               <p className='text-xl mb-3'>Or Sign Up with</p>
                 <button onClick={handleGoogleLogin} className='btn btn-outline btn-info mr-2'>Google</button>
                 <button onClick={handleFaceBookLogin} className='btn btn-outline btn-info '>FaceBook</button>
                 <p className='p-5'>New to Genius Car <Link className='text-orange-600 font-bold text-center ' to='/singup'>Sign Up</Link></p>
            </div>
      
    </div>
  </div>
        </div>
    );
};

export default Login;