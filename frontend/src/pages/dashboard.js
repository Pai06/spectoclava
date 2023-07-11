import React from "react";
import Link from "next/link";


const Dashboard = () => {
    return (
        <><div className="bg-gray-900 h-screen flex justify-center">

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

        </div></>
    );
};

export default Dashboard;
