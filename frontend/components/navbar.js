import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-900 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <h1 className=" text-lg font-bold text-pink-500"><Link href="/">Cricket Website</Link></h1>
          </div>
          <div className="flex items-center">
            <Link href="/">
              <p className="text-gray-300 hover:text-pink-500 animate-fadeIn mx-4">Home</p>
            </Link>
            <Link href="/dashboard">
              <p className="text-gray-300 hover:text-pink-500 animate-fadeIn mx-4">Dashboard</p>
            </Link>
            <Link href="/faq">
              <p className="text-gray-300 hover:text-pink-500 animate-fadeIn mx-4">FAQ</p>
            </Link>
            <Link href="/contact">
              <p className="text-gray-300 hover:text-pink-500 animate-fadeIn mx-4">Contact us</p>
            </Link>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default Navbar;
