import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile}from 'firebase/auth'
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

  const userLogIn=(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }
    
  const userEmailVerification=()=>{
  return sendEmailVerification(auth.currentUser)
  }
 
  const updateUserProfile=(name)=>{
    return updateProfile(auth.currentUser,{
      displayName:name 
    })
  }

  const forgetPassword =(email)=>{
    return sendPasswordResetEmail(auth, email)
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
     userLogIn,
     userEmailVerification,
     updateUserProfile,
     forgetPassword
    }
    return (
        <AuthContext.Provider value={authInfo}>
         {children}
        </AuthContext.Provider>
        
    );
};

export default AuthProvider;