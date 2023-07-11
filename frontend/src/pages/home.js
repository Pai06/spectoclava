import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen">


      <div className="container mx-auto py-8 text-center items-center grid">
        <h1 className="text-4xl font-bold text-white mb-4 animate-fadeIn">
          Welcome to<span className="text-pink-500"> Spectoclava</span> - Unleashing <span className="text-pink-500">Cricket Analytics</span>
        </h1>

        <div>
          <Link href="/">
            <p className="inline-block mr-4 px-4 py-2 bg-gray-800 text-white font-bold rounded cursor-pointer">
              Home
            </p>
          </Link>
          <Link href="/dashboard">
            <p className="inline-block px-4 py-2 bg-gray-800 text-white font-bold rounded cursor-pointer">
              Dashboard
            </p>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Home;
