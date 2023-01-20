import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    // create user with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // user login with email and password
    const emailLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Provider login
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    };

    // set current user
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
        })

        return () => unsubcribe();
    }, [currentUser]);

    // update current user
    const upadateUserData = (profile) => {
        return updateProfile(auth.currentUser, profile);
    };

    const logOut = () => {
        return signOut(auth);
    };

    const authData = {
        createUser,
        emailLogin,
        providerLogin,
        currentUser,
        upadateUserData,
        logOut
    };

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;