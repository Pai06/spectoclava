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
        className="py-2 px-4 border border-gray-300 mr-2 rounded-l focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors duration-300 ease-in-out"
      />
      <select
        value={format}
        onChange={handleFormatChange}
        className="py-2 px-4 border border-gray-300 mr-2 rounded-r focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent ml-2 appearance-none bg-white text-gray-700 leading-tight hover:bg-pink-500 hover:text-white transition-colors duration-300 ease-in-out"
      >
        <option value={1}>Test</option>
        <option value={2}>ODI</option>
        <option value={3}>T20</option>
      </select>
      <button
        type="submit"
        className="bg-pink-500 hover:bg-pink-700 text-white py-2 px-4 rounded-r focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors duration-300 ease-in-out"
      >
        Submit
      </button>
    </form>
  );
};

export default PlayerForm;
