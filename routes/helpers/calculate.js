const calculate = (envBudget, totalBudget, action) => {
  if (!action) {
    return (totalBudget += envBudget);
  } else {
    return (totalBudget -= envBudget);
  }
};

module.exports = { calculate };
