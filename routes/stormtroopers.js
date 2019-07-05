const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.send('get all stormtroopers');
});

router.get('/:_id', function(req, res) {
  res.send('get a specific stormtrooper by id');
});

router.post('/', function(req, res){
  res.send('create a new stormtrooper');
});

router.put('/:_id', function(req, res) {
  res.send('update a stormtrooper')
});

router.delete('/:_id', function(req, res){
  res.send('remove a stormtrooper')
});

module.exports = router;
