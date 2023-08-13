import { useState } from 'react';

const PlayerForm = ({ onSubmit, format, onFormatChange }) => {
  const [playerName, setPlayerName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(playerName);
  };

  const handleFormatChange = (e) => {
    const selectedFormat = parseInt(e.target.value);
    onFormatChange(selectedFormat);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center text-white space-y-2 p-4">
      <div className="mt-4 sm:mt-8 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
        <input
          type="text"
          placeholder="Enter player name"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          className="py-2 px-4 text-base font-bold transition duration-300 ease-in-out transform  bg-gray-800 rounded w-full"
        />
        <select
          value={format}
          onChange={handleFormatChange}
          className="py-2 px-4 text-base font-bold transition duration-300 ease-in-out transform  bg-gray-800 rounded w-full mt-2 sm:mt-0"
        >
          <option value={1}>Test</option>
          <option value={2}>ODI</option>
          <option value={3}>T20</option>
        </select>
      </div>
      <button
        type="submit"
        className="py-2 px-4 text-base font-bold transition duration-300 ease-in-out transform hover:scale-105  cursor-pointer bg-gray-800 rounded w-full mt-4"
      >
        Submit
      </button>
    </form>
  );
};

export default PlayerForm;
