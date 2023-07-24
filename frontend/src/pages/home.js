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

          <img src="home.jpeg" className='w-1/2 h-1/2 mx-auto' />

      </div></>
  );
};

export default Home;
