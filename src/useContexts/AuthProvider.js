import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged}from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config'


export const AuthContext=createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
  const [user, setUser]=useState(null);
  const [loadding, setLoadding]=useState(true);

  const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }


    

  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser)
    })
    return ()=> unsubscribe();
  },[])
    const authInfo={
     user,
     loadding,
     createUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
         {children}
        </AuthContext.Provider>
        
    );
};

export default AuthProvider;