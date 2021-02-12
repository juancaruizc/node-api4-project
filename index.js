const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 4000;
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build, index.html')));

app.use('/api/mars', (_, res) => {
  res.json({ data: 'Hello from mars' });
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
