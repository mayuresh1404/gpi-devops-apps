const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('GPI 2025 DevOps Project - Intermediate Level');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

