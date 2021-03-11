require('dotenv').config();
const express = require('express');

const server = express();

server.use(express.json());

if (process.env.NODE_ENV) {
  const cors = require('cors');
  server.use(cors());
}

server.get('*', (req, res) => {
  res.send('<h1>Hello from mars</h1>');
});

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`listening on port:${PORT}`);
});
