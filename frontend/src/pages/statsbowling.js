import { useState } from 'react';
import PlayerForm from '../../components/PlayerForm';
import Loading from '../../components/loading';
import Navbar from '../../components/navbar';


const HomePage = () => {
  const [playerStats, setPlayerStats] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState(2); // Default format: ODI
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (playerName) => {
    try {
      setIsLoading(true);

      const response = await fetch('/api/bowling', {
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
        <div className=' justify-center grid items-center '>
          <h1 className="text-3xl font-bold mb-4 grid justify-center place-items-center text-gray-300">Player Statistics</h1>
          <PlayerForm
            onSubmit={handleSubmit}
            format={selectedFormat}
            onFormatChange={setSelectedFormat}
          />
        </div>

        {isLoading && <Loading />} {/* Show loading spinner only when isLoading is true */}
        {playerStats && playerStats.headers && playerStats.data ? (
          <div>
            <div className='grid place-items-center'>
              <h2 className="text-2xl font-bold mb-2 text-gray-300">{playerStats.player}</h2>
              <p className="mb-4 text-gray-300">Format: {playerStats.format}</p>
            </div>
            <div className="border border-gray-300 rounded-lg">
              <table className="w-full text-white">
                <thead>
                  <tr>
                    {playerStats.headers.map((header, index) => (
                      <th
                        key={index}
                        className="py-2 px-4 bg-gray-500 font-medium text-left"
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
