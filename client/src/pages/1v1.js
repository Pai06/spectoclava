import Navbar from "@/components/navbar";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

export default function Home() {
  const [batsman, setBatsman] = useState("");
  const [bowler, setBowler] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState(null); // Initialize chartData as null

  const handleBatsmanChange = (e) => {
    setBatsman(e.target.value);
  };

  const handleBowlerChange = (e) => {
    setBowler(e.target.value);
  };

  const rowClass = "border border-gray-300 text-gray-300";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/cricket-data?batsman=${encodeURIComponent(
          batsman
        )}&bowler=${encodeURIComponent(bowler)}`
      );

      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);

        // Call a function to set chart data
        setChartData(getChartData(jsonData));
      } else {
        console.error("Error fetching data:", response.statusText);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  // Function to generate chart data
  // Function to generate chart data
  const getChartData = (jsonData) => {
    const labels = jsonData.map((item) => item.Year);
    const srData = jsonData.map((item) => item.SR);

    return {
      labels: labels,
      datasets: [
        {
          label: "SR (Strike Rate)",
          data: srData,
          borderColor: "rgb(75, 192, 192)",
          borderWidth: 2,
          fill: false, 
        },
      ],
    };
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
            >
              Submit
            </button>
          </div>
        </form>
        {chartData && (
          <div className="mt-6">
            <Line data={chartData} /> {/* Display the Line chart */}
          </div>
        )}
        {data.length > 0 && (
          <table className="min-w-full border-collapse border">
            <thead>
              <tr className="bg-gray-100 text-gray-900">
                <th>Year</th>
                <th>Runs</th>
                <th>Balls</th>
                <th>Outs</th>
                <th>Dots</th>
                <th>4s</th>
                <th>6s</th>
                <th>SR</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.Year}>
                  <td className={rowClass}>{item.Year}</td>
                  <td className={rowClass}>{item.Runs}</td>
                  <td className={rowClass}>{item.Balls}</td>
                  <td className={rowClass}>{item.Outs}</td>
                  <td className={rowClass}>{item.Dots}</td>
                  <td className={rowClass}>{item["4s"]}</td>
                  <td className={rowClass}>{item["6s"]}</td>
                  <td className={rowClass}>{item.SR}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
