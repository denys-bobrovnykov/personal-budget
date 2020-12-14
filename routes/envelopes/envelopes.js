const express = require('express');
const router = express.Router();

const envelopes = [{ id: '0', name: 'test', budget: 0 }];
const totalBudget = {
  amount: 0
};

router.get('/', (req, res, next) => {
  return res.json({ envelopes, totalBudget });
});

router.post('/', (req, res, next) => {
  const { id, name, budget } = req.body;
  if (id && name && budget) {
    envelopes.push(req.body);
    totalBudget.amount += budget;
    return res.status(200).send(req.body);
  } else {
    return res.status(400).send('Error incomplete data');
  }
});

module.exports = router;
