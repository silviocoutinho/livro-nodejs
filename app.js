var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

/**
* Middleware
* methodOverride para utilizar
*  outros metodos alem de get e post
*/
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));
app.use(cors());

/**
* Middleware
* Body parser
* Para receber query string
* ou JSON
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


/**
* DEvolve uma vazio para a requisicao de
* um favicon.ico
* Uma API não necessita enviar esse icone
*/

app.use(function (req, res, next) {
  if (req.originalUrl === '/favicon.ico'){
    console.log(req.originalUrl);
    //return res.sendStatus(204);
    res.writeHead(204, {'Content-Type' : 'image/x-icon'});
    res.end('');
  } else {
    next();
  }
});

/**
* Habilitando o CORS
* tem que ser antes da descrição das rotas
*/
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });


//Router
app.use('/', require('./routes/index.js'));

/**
* Tratamento de erro para 404
*/
app.use(function(req, res, next) {
  var err = new Error('Not found here man (or woman)!');
  err.status = 404;
  next(err);
});

/**
* Tratamento de erro generico
*/
app.use(function(err, req, res, next) {
  console.log('\n' + err.stack);
  res.status(err.status || 500).json({err: err.message});
});

module.exports = app;
