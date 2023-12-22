const express = require('express');
const app = express();
const cors = require('cors');
const data = require('./data.json');

app.use(cors());

app.get('/api/data/glossary', (req, res) => {
  res.json(data.glossary);
});

app.get('/api/data/semanticGraph', (req, res) => {
  res.json(data.semanticGraph);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
