import React from 'react';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div className="min-h-screen relative">
      <video src="assets/homepage_video.mp4" type="video/mp4" className="absolute w-full h-full object-cover" autoPlay muted loop />
      <div className="flex flex-col justify-center items-center h-full">
        <Typewriter
          options={{
            strings: ["SpectoClava"],
            autoStart: true,
            loop: true
          }}
        />
        <div className="container mx-auto py-8 text-center relative">
          <div className="content text-left mt-20">
            <h1 className="text-5xl font-bold text-white mb-4 animate-fadeIn">SpectoClava</h1>
            <p>Cricket Matchup Analysis Dashboard</p>
          </div>

          <div className="absolute top-0 right-0 mt-4 mr-4">
            <Link href="/">
              <p className="inline-block mr-4 px-4 py-2 bg-black text-white font-bold rounded cursor-pointer ease-in-out hover:scale-110 hover:text-pink-500 hover:bg-gray-700">
                Home
              </p>
            </Link>
            <Link href="/dashboard">
              <p className="inline-block px-4 py-2 bg-black text-white font-bold rounded cursor-pointer ease-in-out hover:bg-gray-700 hover:scale-110 hover:text-pink-500">
                Dashboard
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
