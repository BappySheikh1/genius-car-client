import React, { useContext } from 'react';
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from '../../useContexts/AuthProvider';
import { toast } from 'react-toastify';

const Header = () => {
  const {user,logOutUser}=useContext(AuthContext)
  
 const handleLogOut=()=>{
  logOutUser()
  .then(()=> {
    toast.success("LogOut successfully", {autoClose: 500})
   })
   .catch(err=> console.log(err))
 }

    const menuItems=<>
    <li className='font-semibold'><Link to='/'>Home</Link></li>
    {
      user?.uid ? 
      <>
      <li className='font-semibold'><Link to='/orders'>Order</Link></li>
      <li className='font-semibold'><button onClick={handleLogOut}>Log Out</button></li> 
      </>
      :
      <li className='font-semibold'><Link to='/login'>Log in</Link></li>

    }

    </>
    return (
        <div>
           <div  className="navbar bg-base-100 h-20 mb-12 pt-12">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <Link to='/' className='btn btn-ghost normal-case text-xl'> 
    <img src={logo} style={{height:'70px',width:'80px'}}  alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-outline btn-warning">Appoinment</button>
  </div>
</div>
        </div>
    );
};

export default Header;