import React, { useState } from "react";

const TeamPredictor = () => {
  const [teamName1, setTeamName1] = useState("");
  const [teamName2, setTeamName2] = useState("");
  const [winner, setWinner] = useState("");
  const [chance1, setChance1] = useState(null);
  const [chance2, setChance2] = useState(null);

  const handleTeamName1Change = (e) => {
    setTeamName1(e.target.value);
  };

  const handleTeamName2Change = (e) => {
    setTeamName2(e.target.value);
  };

  const predictWinner = () => {
    // Randomly select a winner from the entered team names
    const teams = [teamName1, teamName2];
    const randomIndex = Math.floor(Math.random() * teams.length);
    const randomWinner = teams[randomIndex];
    setWinner(randomWinner);

    // Calculate random chance percentages
    const randomPercentage1 = Math.floor(Math.random() * 101);
    const randomPercentage2 = 100 - randomPercentage1; // Ensure the total is 100%
    setChance1(randomPercentage1);
    setChance2(randomPercentage2);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-3xl font-bold mb-6">Cricket Team Predictor</h1>
      <div className="w-full max-w-md bg-gray-100 p-6 rounded-lg shadow-md">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Team 1:</label>
            <input
              type="text"
              className="w-full px-3 py-2 placeholder-gray-400 text-gray-800 border rounded-lg focus:outline-none focus:ring"
              value={teamName1}
              onChange={handleTeamName1Change}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Team 2:</label>
            <input
              type="text"
              className="w-full px-3 py-2 placeholder-gray-400 text-gray-800 border rounded-lg focus:outline-none focus:ring"
              value={teamName2}
              onChange={handleTeamName2Change}
            />
          </div>
          <button
            type="button"
            className="w-full bg-indigo-500 text-white font-semibold py-2 rounded-lg hover:bg-indigo-600 transition duration-300"
            onClick={predictWinner}
          >
            Predict Winner
          </button>
        </form>

        {winner && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Predicted Winner:</h2>
            <p className="text-indigo-600 text-lg font-bold">{winner}</p>
          </div>
        )}

        {chance1 !== null && chance2 !== null && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Chances of Winning:</h2>
            <div className="text-center">
              <div className="bg-indigo-500 w-full h-8 rounded-lg">
                <div className="bg-indigo-600 h-8 rounded-lg" style={{ width: `${chance1}%` }}>
                  <p className="text-white font-semibold p-1">{`${chance1}%`}</p>
                </div>
              </div>
              <div className="bg-red-500 w-full h-8 rounded-lg mt-2">
                <div className="bg-red-600 h-8 rounded-lg" style={{ width: `${chance2}%` }}>
                  <p className="text-white font-semibold p-1">{`${chance2}%`}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamPredictor;
