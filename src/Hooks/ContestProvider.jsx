/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Config/firebase.config";
import toast from "react-hot-toast";

export const AllContext = createContext(null);

const ContestProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [path, setPath] = useState(null);
    const [err, setErr] = useState(null);

    const googleProvider = new GoogleAuthProvider();

    const registerAccount = (email, password) => {
        setLoading(true)

        return createUserWithEmailAndPassword(auth, email, password);
    }

    const socialSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const loginAccount = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateProfile = (displayName, photoURL) => {

        updateProfile(auth.currentUser, {
            displayName: displayName,
            photoURL: photoURL
        }).then(() => {
            console.log("profile updated");
        }).catch(err => {
            console.log(err);
        })
    }

    const logout = () => {

        signOut(auth).then(() => {
            setUser(null);
            toast.success("Logout success. Login now!!!");
        }).catch(err => {
            toast.error(err.message);
            console.error(err);
        })
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setLoading(false)
            }
        })

        return () => unsubscribe();
    }, [])

    const contestValue = {
        loading,
        setLoading,
        registerAccount,
        socialSignIn,
        logout,
        user,
        path,
        setPath,
        setErr,
        loginAccount,
        updateProfile,
    }

    return (
        <AllContext.Provider value={contestValue}>
            {children}
        </AllContext.Provider>
    );
};

export default ContestProvider;