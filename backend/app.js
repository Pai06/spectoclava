const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');
const cors = require('cors');

const app = express();
const port = 5000; // Choose a port number for your backend server

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

app.post('/api/calculate', (req, res) => {
  const { batter, bowler } = req.body;

  try {
    const pythonProcess = spawn('jupyter', ['nbconvert', '--execute', '1v1.ipynb', '--to', 'script', '--stdout', '--ExecutePreprocessor.timeout=-1', '--', batter, bowler]);

    let result = '';
    pythonProcess.stdout.on('data', (data) => {
      result += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
      console.error('Error executing Jupyter Notebook:', data.toString());
    });

    pythonProcess.on('close', (code) => {
      if (code === 0) {
        // Parse the output to extract the relevant data
        // You may need to modify this parsing based on your notebook's output format
        const lines = result.trim().split('\n');
        const tableData = lines.slice(1, -2).map((line) => {
          const [year, runs, balls, _, sr] = line.split(/\s+/);
          return { Year: year, Runs: runs, Balls: balls, SR: sr };
        });
        const graphData = lines.slice(-1)[0];

        res.json({ tableData, graphData });
      } else {
        console.error('Jupyter Notebook execution failed');
        res.status(500).json({ error: 'Internal server error' });
      }
    });
  } catch (error) {
    console.error('Error running Jupyter Notebook:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
