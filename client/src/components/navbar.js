import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { auth } from './firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link as ScrollLink, Element } from 'react-scroll';
import Link from 'next/link';

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

  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    setIsMobileView(window.innerWidth <= 768);
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <nav className="fixed top-0 left-0 w-full py-4 bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <p className="cursor-pointer font-bold text-2xl">SpectoClava</p>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile menu popup */}
        {isMobileView && isMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-40 flex  place-items-center justify-center items-center">
            <div className="w-4/5 bg-gray-900 bg-opacity-60 font-bold rounded-lg p-4">
              <div className="flex justify-end">
                <button className="text-white focus:outline-none" onClick={toggleMenu}>
                  <FiX size={24} />
                </button>
              </div>
              <ul className="mt-8 space-y-4 ml-[85px]">
                <li>
                  <Link
                    href="/"
                    onClick={() => setIsMenuOpen(false)} // Close menu on click
                  >
                    <p className="cursor-pointer hover:text-white text-gray-300 py-2 px-3 hover:bg-gray-700 transition-colors duration-300 rounded"
                    >
                      Home
                    </p>
                  </Link>
                </li>

                {user ? (
                  <li>
                    <button
                      className="cursor-pointer hover:text-white text-gray-300 py-2 px-3 hover:bg-gray-700 transition-colors duration-300 rounded"
                      onClick={() => {
                        setIsMenuOpen(false);
                        auth.signOut();
                      }}
                    >
                      Sign out
                    </button>
                  </li>
                ) : (
                  <li>
                    <button
                      className="cursor-pointer hover:text-white text-gray-300 py-2 px-3 hover:bg-gray-700 transition-colors duration-300 rounded"
                      onClick={() => {
                        setIsMenuOpen(false);
                        login();
                      }}
                    >
                      Sign in
                    </button>
                  </li>
                )}
                {user && (
                  <li>
                    <Link href="/tools">
                      <p className="cursor-pointer hover:text-white text-gray-300 py-2 px-3 hover:bg-gray-700 transition-colors duration-300 rounded">
                        Tools
                      </p>
                    </Link>
                  </li>
                )}


              </ul>
            </div>
          </div>
        )}

        {/* Desktop menu */}
        {!isMobileView && (
          <div className={`md:flex space-x-4 md:space-x-8 mt-4 md:mt-0 ${isMenuOpen ? 'hidden' : 'flex'}`}>
            <Link
              href="/"
            >
              <p className="cursor-pointer hover:text-white text-gray-300 py-2 px-3 hover:bg-gray-700 transition-colors duration-300 rounded"
              >
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
