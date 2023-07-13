import React from "react";
import Link from "next/link";


const Dashboard = () => {
    return (
        <div className="bg-gray-900 h-screen flex justify-center">

            <div className="container mx-auto py-8 text-center relative">
                <div className="content text-left ml-32 mt-72">
                    <h1 className="text-5xl font-bold text-white mb-4 animate-fadeIn">SpectoClava</h1>
                    <p>Cricket Matchup Analysis Dashboard</p>
                </div>
                <div className="absolute top-0 right-0 mt-4 mr-4">
                    <Link href="/">
                        <p className="inline-block mr-4 px-4 py-2 bg-black text-white font-bold rounded cursor-pointer ease-in-out hover:scale-110 hover:text-white hover:bg-gray-700">
                            Home
                        </p>
                    </Link>
                    <Link href="/dashboard">
                        <p className="inline-block px-4 py-2 bg-black text-white font-bold rounded cursor-pointer ease-in-out hover:bg-gray-700 hover:scale-110 hover:text-white">
                            Dashboard
                        </p>
                    </Link>
                </div>

                <div className="mt-52 gap-5">
                    <Link href="/playerstats">
                        <p className="text-white text-lg font-bold transition duration-500 ease-in-out transform hover:scale-110 hover:text-pink-500 cursor-pointer bg-gray-800 py-2 px-4 rounded">
                            Player Statistics
                        </p>
                    </Link>

                    <Link href="/pvp">
                        <p className="text-white mt-3 text-lg font-bold transition duration-500 ease-in-out transform hover:scale-110 hover:text-pink-500 cursor-pointer bg-gray-800 py-2 px-4 rounded">
                            PvP
                        </p>
                    </Link>

                    <Link href="/tvt">
                        <p className="text-white mt-3 text-lg font-bold transition duration-500 ease-in-out transform hover:scale-110 hover:text-pink-500 cursor-pointer bg-gray-800 py-2 px-4 rounded">
                            TvT
                        </p>
                    </Link>
                </div>


            </div>

        </div>
            );
};

export default Dashboard;

            
