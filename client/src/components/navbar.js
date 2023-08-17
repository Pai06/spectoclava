import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { auth } from './firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link as ScrollLink, Element } from 'react-scroll';
import Link from 'next/link';
import Modal from 'react-modal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useAuthState(auth);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const googleAuth = new GoogleAuthProvider();
  const login = async () => {
    const results = await signInWithPopup(auth, googleAuth);
    const { user } = results;
    const userInfo = {
      name: user.displayName,
      email: user.email,
      image: user.photoURL
    };
    // Do something with userInfo, if needed
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <nav className="fixed top-0 left-0 w-full py-4 bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <p className="cursor-pointer font-bold ml-3 text-2xl">SpectoClava</p>
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white text-xl focus:outline-none"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <Modal
          isOpen={isMenuOpen}
          onRequestClose={toggleMenu}
          overlayClassName="fixed inset-0 bg-black bg-opacity-70 z-50" // Overlay styles
          className={`bg-gray-900 bg-opacity-80 p-4 rounded-md max-w-sm mx-auto mt-10 shadow-md ${isMenuOpen ? 'block' : 'hidden' // Show when menu is open, hide when closed
            }`}
        >
          {/* Your mobile menu content */}
          <Link href="/" className="hover:bg-gray-800">
            <p className="cursor-pointer hover:text-white text-white py-2 px-3 hover:bg-gray-700 transition-colors duration-300 rounded">
              Home
            </p>
          </Link>
          {user && (
            <Link href="/tools">
              <p className="cursor-pointer hover:text-white text-white py-2 px-3 hover:bg-gray-700 transition-colors duration-300 rounded">
                Tools
              </p>
            </Link>
          )}
          {user ? (
            <div
              className="cursor-pointer hover:text-white text-white py-2 px-3 hover:bg-gray-700 transition-colors duration-300 rounded"
              onClick={() => auth.signOut()}
            >
              Sign out
            </div>
          ) : (
            <div
              className="cursor-pointer hover:text-white text-white py-2 px-3 hover:bg-gray-700 transition-colors duration-300 rounded"
              onClick={login}
            >
              Sign in
            </div>
          )}
        </Modal>

        {/* Regular Navbar (Hidden) */}
        <div className="hidden md:flex space-x-4 md:space-x-8 mt-4 md:mt-0">
          <Link href="/">
            <p className="cursor-pointer hover:text-white text-gray-300 py-2 px-3 hover:bg-gray-700 transition-colors duration-300 rounded">
              Home
            </p>
          </Link>

          {user && (
            <Link href="/tools">
              <p className="cursor-pointer hover:text-white text-gray-300 py-2 px-3 hover:bg-gray-700 transition-colors duration-300 rounded">
                Tools
              </p>
            </Link>
          )}

          {user ? (
            <button
              className="cursor-pointer hover:text-white text-gray-300 py-2 px-3 hover:bg-gray-700 transition-colors duration-300 rounded"
              onClick={() => auth.signOut()}
            >
              Sign out
            </button>
          ) : (
            <button
              className="cursor-pointer hover:text-white text-gray-300 py-2 px-3 hover:bg-gray-700 transition-colors duration-300 rounded"
              onClick={login}
            >
              Sign in
            </button>
          )}

          {user && (
            <div className="flex items-center">
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-8 h-8 mr-5 rounded-full ml-4 cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
