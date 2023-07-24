import React from 'react';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import Navbar from '../../components/navbar';
import { useState } from 'react';

const Home = () => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <Navbar />
      <div className=" min-h-screen bg-gray-900">

        <video src="assets/homepage_video.mp4" type="video/mp4" className="absolute w-full h-full object-cover" autoPlay muted loop />
        {/* <div className="flex flex-col justify-center items-center h-full">
        <Typewriter
          options={{
            strings: ["SpectoClava"],
            autoStart: true,
            loop: true
          }} />
        </div> */}


        {/* <div className="text-left ml-24">
          <div className="flex mt-18 items-center">
            <div className="flex-1 ml-16">
              <p className="mt-4">Cricket Matchup Analysis Dashboard</p>
            </div>
            <div className="flex justify-end mb-12 ml-32">
              <img src="/kohli.png" class="w-90 h-90" />
            </div>
          </div>
        </div> */}

      </div></>
  );
};

export default Home;
