import React, { useState, useEffect } from "react";
import Link from "next/link";
import { auth } from './firebase'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
import Dropdown from 'react-bootstrap/Dropdown';


const Navbar = () => {
    const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);

    const toggleToolsDropdown = () => {
        setIsToolsDropdownOpen((prev) => !prev);
    };

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
        <nav className="p-5 rounded-sm shadow text-l bg-gray-900 border-white relative">
            <div className="flex justify-end"> {/* Updated this line */}


                <Link href="/">
                    <p className="px-4 py-2 mr-4 text-white font-bold rounded cursor-pointer ease-in-out hover:scale-110 hover:text-white hover:bg-gray-700 font-sans">
                        Home
                    </p>
                </Link>

                {user &&
                    <Link href="/dashboard">
                        <p className="px-4 py-2 mr-4 text-white font-bold rounded cursor-pointer ease-in-out hover:scale-110 hover:text-white hover:bg-gray-700 font-sans">
                            Dashboard
                        </p>
                    </Link>}

                {user &&
                    <div className="hidden sm:block ">
                        <div className="flex space-x-4">
                            <button className="px-4 py-2 mr-4 text-white font-bold rounded cursor-pointer ease-in-out hover:scale-110 hover:text-white hover:bg-gray-700 font-sans" onClick={() => auth.signOut()}>
                                Sign out
                            </button>
                        </div>
                    </div>
                }

                {user &&
                    <Link href="/profile">
                        <p className="px-4 py-2 mr-4 text-white font-bold rounded cursor-pointer ease-in-out hover:scale-110 hover:text-white hover:bg-gray-700 font-sans">
                            Profile
                        </p>
                    </Link>}

                {!user &&
                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                            <button className="px-4 py-2 mr-4 text-white font-bold rounded cursor-pointer ease-in-out hover:scale-110 hover:text-white hover:bg-gray-700 font-sans" onClick={login}>
                                Sign in
                            </button>
                        </div>
                    </div>
                }



            </div>
        </nav >
    );
};

export default Navbar;
