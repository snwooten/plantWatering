const Sequelize = require('sequelize');
const db = require('../index');

const Plant = db.define('plant', {
  name: Sequelize.STRING,
  type: Sequelize.STRING,
  lastWatered: {
    type: Sequelize.DATE,
    allowNull: false
  },
  amountWatered: Sequelize.FLOAT
});

module.exports = Plant;
