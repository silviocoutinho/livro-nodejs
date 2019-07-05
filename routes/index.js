var express = require('express');
var router = express.Router();

    router.get('/', function(req, res) {
      res.status(201);
      if(req.accepts('text')) {
        res.write('name; email\n');
        res.write('Silvio Coutinho; silviocoutinho@ymail.com')
        res.end();
      } else {
        res.json({'name': 'Silvio Coutinho', 'email': 'silviocoutinho@ymail.com'});
      }
      //res.send('Hello World!');
    });

    //stormtroopers
    router.use('/stormtroopers', require('./stormtroopers.js'));


    // router.get('/clients', function(req, res) {
    //   res.status(201);
    //   res.json({'Client' : {'name' : 'Arlindo Cruz', 'Daughter' : 'Bia Altiere'} })
    // });

module.exports = router;
