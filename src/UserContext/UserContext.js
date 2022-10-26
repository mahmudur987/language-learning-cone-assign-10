import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, signInWithPopup } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import { useEffect } from 'react';

export const authContext = createContext()

const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, SetUser] = useState('');
    const [loading, Setloading] = useState(true)
    const [cart, SetCart] = useState({})
    const signUp = (email, password) => {
        Setloading(true)

        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        Setloading(true)

        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogIn = (provider) => {
        Setloading(true)

        return signInWithPopup(auth, provider);
    };
    const githubLogIn = (provider) => {
        Setloading(true)

        return signInWithPopup(auth, provider)
    }

    const updateUserProfile = (profile) => {
        Setloading(true)

        return updateProfile(auth.currentUser, profile)
    }

    const logout = () => {
        Setloading(true)

        return signOut(auth);
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {


            SetUser(currentUser);
            Setloading(false)
            console.log('currentuser', currentUser)
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authinfo = { user, SetUser, signUp, login, updateUserProfile, logout, googleLogIn, githubLogIn, loading, SetCart, cart }
    return (
        <authContext.Provider value={authinfo}>
            {children}
        </authContext.Provider>
    );
};

export default UserContext;