import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/navbar';

const Stats = () => {
  return (

    <><Navbar /><div className="bg-gray-900 min-h-screen">


      <div className="container mx-auto py-8 text-center items-center grid">

        <div>
          <Link href="/statsbatting">
            <p className="inline-block mr-4 px-4 py-2 bg-gray-800 text-white font-bold rounded cursor-pointer">
              Batting
            </p>
          </Link>
          <Link href="/statsbowling">
            <p className="inline-block px-4 py-2 bg-gray-800 text-white font-bold rounded cursor-pointer">
              Bowling
            </p>
          </Link>
        </div>

      </div>
    </div></>
  );
};

export default Stats;
