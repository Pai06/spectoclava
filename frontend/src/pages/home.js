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
    <><div className=" min-h-screen  text-[#39ff14] ">

      {/* <video src="assets/homepage_video.mp4" type="video/mp4" className="absolute w-full h-full object-cover" autoPlay muted loop /> */}
      {/* <div className="flex flex-col justify-center items-center h-full">
        <Typewriter
          options={{
            strings: ["SpectoClava"],
            autoStart: true,
            loop: true
          }} />
        </div> */}
      <div className=" mx-auto text-center relative ">
        {/* <div className="content text-left ml-24 mt-52">
          <div className="flex mt-18 items-center">
            <div className="flex-1 ml-16">
              <h1 className="text-5xl font-bold mb-4 animate-fadeIn text-[#bfff00]">
                SpectoClava
              </h1>
              <p className="mt-4">Cricket Matchup Analysis Dashboard</p>
            </div>
            <div className="flex justify-end mb-12 ml-12">
              <img src="/kohli.png" class="w-120 h-120" />
            </div>
          </div>
        </div> */}

        <nav className='p-9 bg-gray-900 rounded-sm shadow text-xl font-mono border-white'>
          <div className="absolute top-0 right-0 mt-3 mr-4">
            <Link href="/">
              <p className="inline-block mr-4 px-4 py-2  text-white font-bold rounded cursor-pointer ease-in-out hover:scale-110 hover:text-white hover:bg-gray-700">
                Home
              </p>
            </Link>
            <Link href="/dashboard">
              <p className="inline-block px-4 py-2  text-white font-bold rounded cursor-pointer ease-in-out hover:bg-gray-700 hover:scale-110 hover:text-white">
                Dashboard
              </p>
            </Link>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Dropdown button
              <svg
                className="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <Link href="/playerstats">
                    <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Stats</p>
                  </Link>
                </li>
                <li>
                  <Link href="/playerstats">
                    <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Brother</p>
                  </Link>
                </li>
              </ul>
            </div>




          </div>
        </nav>




      </div>
    </div></>
  );
};

export default Home;
