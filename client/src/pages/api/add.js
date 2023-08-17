export default function handler(req, res) {
    if (req.method === 'POST') {
      const { num1, num2 } = req.body;
      const result = Number(num1) + Number(num2);
      res.status(200).json({ result });
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }
  