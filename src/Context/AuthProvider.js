import app from '../Firebase/Firebase.config';
import React, { createContext, useEffect, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword ,onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup} from 'firebase/auth';


export const authContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Sign Up with email & password
    const createUser = (email , password, displayName) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password, displayName)

    }

    // Sign In with Email & password
    const signin = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword (auth, email, password)
    }

    // Sign Out
    const logOut = () =>{
        setLoading(true);
        return signOut(auth); 
    }

    // Google Sign In
    const googleSignIn = (provider) =>{
        return signInWithPopup(auth, provider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
        })

        return () =>{
            return unsubscribe;
        }
    },[])

    const authInfo ={
        user,
        loading,
        createUser,
        signin,
        logOut,
        googleSignIn
    }

    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;