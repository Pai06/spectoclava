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
    <form onSubmit={handleSubmit} className="flex items-center mb-4 gap-3">
    
      <input
        type="text"
        placeholder="Enter player name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        className="text-white ml-4 py-2 px-4 text-lg font-bold transition duration-500 ease-in-out transform  hover:text-gray-500 cursor-pointer bg-gray-800 rounded"
      />
      <select
        value={format}
        onChange={handleFormatChange}
        className="text-white ml-4 py-2 px-4 text-lg font-bold transition duration-500 ease-in-out transform  hover:gray-pink-500 cursor-pointer bg-gray-800 rounded"
      >

        <option value={1}>Test</option>
        <option value={2}>ODI</option>
        <option value={3}>T20</option>
      </select>
      <button
        type="submit"
        className="text-white ml-4 py-2 px-4 text-lg font-bold transition duration-500 ease-in-out transform hover:scale-110 hover:text-gray-500 cursor-pointer bg-gray-800 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default PlayerForm;
