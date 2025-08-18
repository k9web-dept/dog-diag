const express = require('express');
const app = express();
app.use(express.json());

app.post('/webhook', (req, res) => {
  console.log('LINE Webhook Received');
  console.log(JSON.stringify(req.body, null, 2));
  res.status(200).send('OK');
});

module.exports = app;
