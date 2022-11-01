import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/images/login/login.svg'
import { AuthContext } from '../../useContexts/AuthProvider';
import { FcGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';

const SingUp = () => {
    const {createUser,userEmailVerification,updateUserProfile}=useContext(AuthContext)
    
     const handleSubmit=(event)=>{
     event.preventDefault();
     const form=event.target;
     const name=form.name.value
     const email=form.email.value
     const password=form.password.value
     
     createUser(email,password)
     .then((result)=>{
        const user =result.user
        console.log(user);
        form.reset();
        handleUserEmail()
        handleUserName(name)
     })
     .catch(error =>{
        console.log(error);
     })
    }

    const handleUserEmail=()=>{
      userEmailVerification()
      .then(()=>{
      toast.success('Please Check Your Email & Verification your email',{autoClose:500})
      })
      .catch(error =>{
        console.log(error);
      })
    }

    const handleUserName=(name)=>{
      updateUserProfile(name)
      .then(()=>{

      })
      .catch((err)=>{
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
          <h1 className="text-5xl font-bold text-center">Sing Up!</h1>
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input type="text" placeholder="your name" name='name' className="input input-bordered" required/>
              </div>

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
              </div>
              <p className='text-red-600'>{}</p>
              <div className="form-control mt-6">
                  <input className="btn btn-primary" type="submit" value='Sign Up' />
              </div>
            </form>
            <div className='text-center my-5'>
               <p className='text-xl mb-3'>Or Sign Up with</p>
                 <button onClick={handleGoogleLogin} className='btn btn-outline btn-info mr-2'>Google</button>
                 <button onClick={handleFaceBookLogin} className='btn btn-outline btn-info '>FaceBook</button>
                <p className='p-5'>Already have an account? <Link className='text-orange-600 font-bold text-center ' to='/login'>Log In</Link></p>
            </div>
          </div>
        </div>
              </div>
    );
};

export default SingUp;