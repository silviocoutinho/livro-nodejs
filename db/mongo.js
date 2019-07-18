const mongojs = require('mongojs');
const config = require('config');
const debug = require('debug')('app-express:db');
'use strict';

function _connection() {
  const username = config.get('mongo.username'),
  password       = config.get('mongo.password'),
  server         = config.get('mongo.server'),
  port           = config.get('mongo.port'),
  database       = config.get('mongo.database'),
  auth           = username ? username + ':' + password + '@' : '';
  return 'mongodb://' + auth + server + ':' + port + '/' + database;
}
db ='';
//const db2 = mongojs(_connection());
//console.log(db2);

var databaseUrl = "mongodb://localhost:27017"; // "username:password@example.com/mydb"
var collections = ["users", "reports"];
var db = mongojs(databaseUrl, collections);

//const db = mongojs('mongodb://localhost:27017');
// db.on('error', function(err) {
//   debug(err);
// });
module.exports = db;
