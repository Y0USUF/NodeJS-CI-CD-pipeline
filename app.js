const express = require('express');
const os = require('os');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello World!</h1>
    <p>This is a simple Node.js demo application running on ${os.hostname()}.</p>
  `);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});