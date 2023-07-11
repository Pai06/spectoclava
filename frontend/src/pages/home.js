import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/navbar';

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />

      <div className="container mx-auto py-8 text-center items-center grid mt-32">
        <h1 className="text-4xl font-bold text-white mb-4 animate-fadeIn">
          Welcome to<span className="text-pink-500"> Spectoclava</span> - Unleashing <span className="text-pink-500">Cricket Analytics</span>
        </h1>

      </div>
    </div>
  );
};

export default Home;
