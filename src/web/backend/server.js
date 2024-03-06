const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Emergency Sound Detection System is running!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
