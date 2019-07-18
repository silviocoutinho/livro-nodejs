const express = require('express');
const router = express.Router();
const mongo = require('../db/mongo');
const StormtrooperModel = require('../models/StormtrooperModel')(mongo);
const StormtrooperController = require('../controllers/StormtrooperController')(StormtrooperModel);

router.get('/', StormtrooperController.getAll).bind(StormtrooperController);


// router.get('/:_id', StormtrooperController.getById);
//
// router.post('/', function(req, res){
//   res.send('create a new stormtrooper');
// });
//
// router.put('/:_id', function(req, res) {
//   res.send('update a stormtrooper')
// });
//
// router.delete('/:_id', function(req, res){
//   res.send('remove a stormtrooper')
// });

module.exports = router;
