import React from "react";
import { auth } from "../../components/firebase";
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from "react";
import Navbar from "../../components/navbar";

const Profile = () => {

    const [user, setUser] = useAuthState(auth);
    const googleAuth = new GoogleAuthProvider();
    const login = async () => {
        const results = await signInWithPopup(auth, googleAuth);
        const { user } = results;
        const userInfo = {
            name: user.displayName,
            email: user.email
        }
    }
    useEffect(() => {
        console.log(user);
    }, [user])
    return (

        <><Navbar />
            <div className="min-h-screen text-white bg-gray-900 shadow-lg mx-auto p-4 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex place-items-center justify-center">
                    <img
                        className="rounded-full h-24 w-24 sm:h-16 sm:w-16 mx-auto border cursor-pointer border-white mb-4"
                        src={user.photoURL}
                        alt="Profile picture" />
                    <div className="text-center sm:text-left ">
                        <p className="mb-2  font-bold font-mono text-lg sm:text-3xl">Name: <span className="text-xl">{user.displayName}</span></p>
                        <p className="mb-2  font-bold font-mono text-lg sm:text-3xl">Email:<span className="text-xl"> {user.email}</span></p>
                    </div>
                </div>
            </div></>


    );
}

export default Profile;