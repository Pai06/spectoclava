import React from "react";
import Link from "next/link";
import Navbar from "../../components/navbar";

const Dashboard = () => {
    return (
        <><Navbar /><div className="bg-gray-900 h-screen flex justify-center">

            <div className="mt-52 gap-5">
                <Link href="/playerstats">
                    <p className="text-white text-lg font-bold transition duration-500 ease-in-out transform hover:scale-110 hover:text-pink-500">
                        Player Statistics
                    </p>
                </Link>

                <Link href="/pvp">
                    <p className="text-white ml-10 text-lg font-bold transition duration-500 ease-in-out transform hover:scale-110 hover:text-pink-500">
                        PvP
                    </p>
                </Link>
                <Link href="/tvt">
                    <p className="text-white text-lg font-bold transition ml-10 duration-500 ease-in-out transform hover:scale-110 hover:text-pink-500">
                        TvT
                    </p>
                </Link>
            </div>

        </div></>
    );
};

export default Dashboard;
