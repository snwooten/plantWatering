const db = require('./db/models');
const Plant = db.model('plant');
const Promise = require('bluebird');

const today = new Date();
const yesterday = new Date();
const lastWeek = new Date();

yesterday.setDate(today.getDate() + 1);
lastWeek.setDate(today.getDate() + 7);


const plants = [{
  name: 'Sylvia',
  type: 'African Violet',
  lastWatered: yesterday,
  amountWatered: 8.5
  },
  {
    name: 'Kurt',
    type: 'Aloe',
    lastWatered: today,
    amountWatered: 4.0
  }]

db.sync({force: true})
  .then(() => {
    return Promise.map(plants, plant => {
      return Plant.create(plant)
    })
    .then(() => {
      console.log('seeded successfully');
    })
  })
  .catch(console.error)
