const { dataListTraining } = require('../data/list-training');

module.exports = (req, res) => {
  res.json(dataListTraining);
};
