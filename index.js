const express = require('express');
const app = express();

app.use(express.json());

// LINEからのWebhookを受け取るエンドポイント
app.post('/webhook', (req, res) => {
  console.log('Webhook received:', req.body); // デバッグ用
  res.status(200).send('OK'); // LINEに「正常受信」を返す
});

// Vercel用のエクスポート
module.exports = app;
