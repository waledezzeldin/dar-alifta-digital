const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/ask', async (req, res) => {
  const { question, madhhab } = req.body;
  const answer = `سؤالك: "${question}" تمت معالجته حسب المذهب: ${madhhab}`;
  res.json({ answer });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
