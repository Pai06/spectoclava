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
    <form onSubmit={handleSubmit} className="flex flex-col items-start text-white space-y-4">
      <div className="mt-8 flex flex-row items-center">
        <input
          type="text"
          placeholder="Enter player name"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          className="py-2 px-4 text-lg font-bold transition duration-500 ease-in-out transform hover:text-gray-500 bg-gray-800 rounded"
        />
        <div className="ml-4">
          <select
            value={format}
            onChange={handleFormatChange}
            className="py-2 px-4 text-lg font-bold transition duration-500 ease-in-out transform hover:gray-pink-500 cursor-pointer bg-gray-800 rounded"
          >
            <option value={1}>Test</option>
            <option value={2}>ODI</option>
            <option value={3}>T20</option>
          </select>
        </div>
      </div>



      <button
        type="submit"
        className="py-2 px-4 text-lg font-bold transition duration-500 ease-in-out transform hover:scale-110 hover:text-gray-500 cursor-pointer bg-gray-800 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default PlayerForm;
