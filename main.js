'use strict';

const db = require('./server/db/models')
const app = require('./server')

db.sync()
.then(() => {
  console.log('db synced')
  app.listen(1337, () => console.log('I\'m listening now on port 1337'))
});
