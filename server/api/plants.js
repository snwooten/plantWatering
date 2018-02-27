'use strict';

const router = require('express').Router();
const Plant = require('../db/models').model('plant');

module.exports = router;

router.get('/', (req, res, next) => {
  Plant.findAll()
  .then(plants => res.json(plants))
  .catch(next);
})

router.get('/:id', (req, res, next) => {
  Plant.findById(req.params.id)
  .then(plant => res.json(plant))
  .catch(next);
})

router.post('/', (req, res, next) => {
  Plant.create(req.body)
  .then(plant => res.status(201).json(plant))
  .catch(next);
})

router.delete('/:id', (req, res, next) => {
  Plant.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => res.sendStatus(204))
  .catch(next);
})

router.put('/:id', (req, res, next) => {
  Plant.update(req.body, {
    where: {
      id: req.params.id
    },
    returning: true
  })
  .then(([_, updated]) => {
    res.json(updated[0])
  })
  .catch(next);
})
