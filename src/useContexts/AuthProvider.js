import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile}from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config'


export const AuthContext=createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
  const [user, setUser]=useState(null);
  const [loadding, setLoadding]=useState(true);

  const createUser=(email,password)=>{
    setLoadding(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const userLogIn=(email,password)=>{
    setLoadding(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  // google log in
  const googleProvider= new GoogleAuthProvider()
  const googleLogIn=()=>{
    return signInWithPopup(auth,googleProvider)
  }
    
  const userEmailVerification=()=>{
  return sendEmailVerification(auth.currentUser)
  }

  const logOutUser=()=>{
    localStorage.removeItem('geniusToken')
    return signOut(auth)
  }
 
  const updateUserProfile=(name)=>{
    return updateProfile(auth.currentUser,{
      displayName:name 
    })
  }

  const forgetPassword =(email)=>{
    setLoadding(true)
    return sendPasswordResetEmail(auth, email)
  }

  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser)
        setLoadding(false)
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
     forgetPassword,
     logOutUser,
     googleLogIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
         {children}
        </AuthContext.Provider>
        
    );
};

export default AuthProvider;