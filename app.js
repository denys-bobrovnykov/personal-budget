const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.send('Hello World!');
});

const envelopes = require('./routes/envelopes/envelopes');

app.use('/envelopes', envelopes);

module.exports = app;
