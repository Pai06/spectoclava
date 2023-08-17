// pages/api/process.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { input } = req.body;

    // Send input to Colab
    try {
      const response = await axios.post(
        'URL_OF_YOUR_COLAB_API_ENDPOINT',
        { input }
      );
      res.status(200).json({ output: response.data.output });
    } catch (error) {
      res.status(500).json({ error: 'Error communicating with Colab' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
