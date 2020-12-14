const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 3000;

app.get('/', (req, res, next) => {
  res.send('Hello world');
});

const envelopes = require('./routes/envelopes/envelopes');

app.use('/envelopes', envelopes);

app.listen(PORT, () => {
  console.log('Listening on: ', PORT);
});
