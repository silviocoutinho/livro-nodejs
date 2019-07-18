function StormtrooperModel(mongo) {
  this.mongo = mongo;
}

StormtrooperModel.prototype.find = function (query, callback) {
  this.mongo.collection('stormtrooper').find(query, callback);
};

StormtrooperModel.prototype.findOne = function (_id, callback) {
  this.mongo.collection('stormtrooper').findOne(query, callback);
  var query = {_id: this.mongo.ObjectId(_id)};
};

StormtrooperModel.prototype.create = function (data, callback) {
  this.mongo.collection('stormtrooper').insert(data, callback);
};

StormtrooperModel.prototype.update = function (_id, data, callback) {
  var query = {_id: this.mongo.ObjectId(_id)};
  this.mongo.collection('stormtrooper').update(query, data, callback);
};

StormtrooperModel.prototype.remove = function (_id, callback) {
  var query = {_id: this.mongo.ObjectId(_id)};
  this.mongo.collection('stormtrooper').remove(query, callback);
};

module.exports = function(mongo) {
  new StormtrooperModel(mongo);
}
