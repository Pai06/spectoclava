import { useState } from 'react';
import PlayerForm from '../../components/PlayerForm';
import Navbar from '../../components/navbar';
import Loading from '../../components/loading';

const HomePage = () => {
  const [playerStats, setPlayerStats] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState(2); // Default format: ODI
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (playerName) => {
    try {
      setIsLoading(true);

      const response = await fetch('/api/batting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ playerName, format: selectedFormat }),
      });

      if (response.ok) {
        const data = await response.json();
        setPlayerStats(data);
      } else {
        throw new Error('Player stats not found');
      }
    } catch (error) {
      console.error(error);
      setPlayerStats(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-900 min-h-screen">
        <h1 className="text-3xl font-bold mb-4 text-pink-500">Player Stats</h1>
        <PlayerForm
          onSubmit={handleSubmit}
          format={selectedFormat}
          onFormatChange={setSelectedFormat}
        />

        {isLoading && <Loading />} {/* Show loading spinner only when isLoading is true */}
        {playerStats && playerStats.headers && playerStats.data ? (
          <div>
            <h2 className="text-2xl font-bold mb-2 text-pink-500">{playerStats.player}</h2>
            <p className="mb-4 text-pink-500">Format: {playerStats.format}</p>
            <div className="border border-gray-300 rounded-lg">
              <table className="w-full text-white">
                <thead>
                  <tr>
                    {playerStats.headers.map((header, index) => (
                      <th
                        key={index}
                        className="py-2 px-4 bg-pink-500 font-medium text-left"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {playerStats.data.map((row, index) => (
                    <tr key={index}>
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className="py-2 px-4 border-t border-white text-left"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default HomePage;
