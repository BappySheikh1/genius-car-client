import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/images/login/login.svg'



const Login = () => {
    const [error,setError]=useState('')
    

    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value
        const password=form.password.value
     
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
          <input type="text" placeholder="email" name='email' className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <p className='text-red-600'>{error}</p>
        <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value='Login' />
        </div>
      </form>
      <p className='p-5'>New to Genius Car <Link className='text-orange-600 font-bold text-center ' to='/singup'>Sign Up</Link></p>
    </div>
  </div>
        </div>
    );
};

export default Login;