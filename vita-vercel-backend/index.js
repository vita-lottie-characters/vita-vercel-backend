const express = require('express');
const app = express();

app.use(express.json());

app.post('/webhook', (req, res) => {
  console.log('Webhook recibido:', req.body);
  res.status(200).send('OK');
});

app.get('/', (req, res) => {
  res.send('Backend funcionando correctamente 🚀');
});

module.exports = app;