const express = require('express');
const router = express.Router();

const envelopes = [
  { id: '0', name: 'test', budget: 0 },
  { id: '2', name: 'test2', budget: 2 }
];
const totalBudget = {
  amount: 0
};

router.get('/', (req, res) => {
  res.send({ envelopes, totalBudget });
});

router.get('/:id', (req, res) => {
  console.log(req.params.id);
  const envelope = envelopes.filter((env) => env.id === req.params.id);
  if (envelope.length !== 1) {
    res.status(400).send('Not found');
  }
  res.send(envelope[0]);
});

router.post('/', (req, res) => {
  const { id, name, budget } = req.body;
  if (id && name && budget) {
    envelopes.push(req.body);
    totalBudget.amount += budget;
    res.status(200).send(req.body);
  } else {
    res.status(400).send('Error incomplete data');
  }
});

module.exports = router;
