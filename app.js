const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome homepage Baby!!');
});

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`WAZAAAAAAAAAAaa on port ${port}`);
});
