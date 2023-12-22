// create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
app.use(bodyParser.urlencoded({extended: false}));
// set template engine
app.locals.pretty = true;
app.set('views', './views_file');
app.set('view engine', 'jade');
// create web server
app.listen(3000, function(){
  console.log('Connected, 3000 port!');
});
