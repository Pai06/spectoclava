// player-stats.js
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import cheerio from 'cheerio';
import { parse } from 'node-html-parser';

const getPlayerStats = async (playerName, format) => {
  const playerSearchUrl = `http://search.espncricinfo.com/ci/content/player/search.html?search=${encodeURIComponent(
    playerName
  )}&x=0&y=0`;
  const searchResponse = await axios.get(playerSearchUrl);
  const $ = cheerio.load(searchResponse.data);
  const playerUrl = $('.ColumnistSmry a').attr('href');
  const playerID = playerUrl.split('.html')[0].split('/').pop();

  const playerStatsUrl = `https://stats.espncricinfo.com/ci/engine/player/${playerID}.html?class=${format};template=results;type=bowling;view=innings`;
  const statsResponse = await axios.get(playerStatsUrl);
  const tables = cheerio('.engineTable', statsResponse.data);
  const tableHTML = tables.eq(3).html();

  const root = parse(tableHTML);
  const tableRows = root.querySelectorAll('tr');

  const headers = tableRows[0].querySelectorAll('th').map((header) => header.text);
  const data = tableRows.slice(1).map((row) =>
    row.querySelectorAll('td').map((cell) => cell.text.trim())
  );

  return {
    player: playerName,
    format: format === 1 ? 'Tests' : format === 2 ? 'ODIs' : 'T20s',
    headers,
    data,
  };
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end(); // Method Not Allowed
    return;
  }

  const { playerName, format } = req.body;

  try {
    const playerStats = await getPlayerStats(playerName, format);
    res.status(200).json(playerStats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
