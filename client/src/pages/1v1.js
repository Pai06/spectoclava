import React, { useState } from "react";
import Navbar from "@/components/navbar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Home() {
  const [batsman, setBatsman] = useState("");
  const [bowler, setBowler] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleBatsmanChange = (e) => {
    setBatsman(e.target.value);
  };

  const handleBowlerChange = (e) => {
    setBowler(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/cricket-data?batsman=${encodeURIComponent(
          batsman
        )}&bowler=${encodeURIComponent(bowler)}`
      );

      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-32 text-center">
        <h1 className="text-3xl font-extrabold text-gray-300 mb-6">1v1 Matchup</h1>
        <form onSubmit={handleSubmit} className="mb-6 flex justify-center place-content-center mt-10">
          <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
            <label className="block text-gray-300 text-2xl font-bold">Batter:</label>
            <input
              type="text"
              className="shadow text-base font-bold transition duration-300 ease-in-out transform bg-gray-800 appearance-none rounded w-full md:w-40 py-2 px-3 text-gray-300 leading-tight focus:text-gray-200"
              placeholder="Batsman Name"
              value={batsman}
              onChange={handleBatsmanChange}
            />
            <label className="block text-gray-300 text-2xl font-bold">vs</label>
            <label className="block text-gray-300 text-2xl font-bold">Bowler:</label>
            <input
              type="text"
              className="shadow text-base font-bold transition duration-300 ease-in-out transform bg-gray-800 appearance-none rounded w-full md:w-40 py-2 px-3 text-gray-300 leading-tight focus:text-gray-200"
              placeholder="Bowler Name"
              value={bowler}
              onChange={handleBowlerChange}
            />
            <button
              className="py-2 px-4 text-base font-bold transition duration-300 ease-in-out transform hover:scale-105 text-gray-300 hover:text-gray-100 cursor-pointer bg-gray-800 rounded w-full mt-4"
              type="submit"
              disabled={loading}
            >
              Submit
            </button>
          </div>
        </form>

        {data.length > 0 && (
          <div className="relative z-10">
            <h2 className="text-xl font-bold text-gray-300">Year vs SR</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <XAxis
                  dataKey="Year"
                  label={{
                    value: "Year",
                    position: "bottom",
                    fontSize: 16,
                    fill: "white",
                  }}
                />
                <YAxis
                  label={{
                    value: "Strike Rate",
                    angle: -90,
                    position: "left",
                    offset: -9,
                    fontSize: 16,
                    fill: "white",
                  }}
                />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend iconType="circle" iconSize={10} />
                <Line type="monotone" dataKey="SR" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        {data.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-bold text-gray-300">Table of Data</h2>
            <div className="overflow-x-auto">
              <table className="table table-auto table-border table-striped text-gray-200 text-gray-100">
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Strike Rate</th>
                    <th>Runs</th>
                    <th>Balls</th>
                    <th>Outs</th>
                    <th>Dots</th>
                    <th>4s</th>
                    <th>6s</th>
                    <th>Avg</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.Year}</td>
                      <td>{item.SR}</td>
                      <td>{item.Runs}</td>
                      <td>{item.Balls}</td>
                      <td>{item.Outs}</td>
                      <td>{item.Dots}</td>
                      <td>{item.Fours}</td>
                      <td>{item.Sixes}</td>
                      <td>{item.Avg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
