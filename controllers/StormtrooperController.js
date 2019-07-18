const debug = require('debug')('app-express:models')
function StormtrooperController(StormtrooperModel){
  this.model = StormtrooperModel;
}

StormtrooperController.prototype.getAll = function(req, res, next) {
  this.model.find({}, function(err, data){
      if(err){
        return next(err)
      }
      res.json(data);
  });
};

StormtrooperController.prototype.getById = function(req, res, next) {
  res.send('Get a specific Stormtrooper by id');
};

StormtrooperController.prototype.create = function(req, res, next) {
  res.send('create a new stormtroopers');
};

StormtrooperController.prototype.update = function(req, res, next) {
  res.send('update a stormtrooper');
};

StormtrooperController.prototype.remove = function(req, res, next) {
  res.send('remove a stormtrooper');
};

module.exports = function(StormtrooperModel) {
  return new StormtrooperController(StormtrooperModel);
};
