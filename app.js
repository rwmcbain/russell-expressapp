var express = require('express');	// npm install express --save
									// npm install hbs --save
									// npm install path --save
var path = require('path');
var app = express();
var port = 3000;

// set public, views, and handlebars
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'hbs');


// require our controllers
var homeCtrl = require('./controllers/home');
var playgroundCtrl = require('./controllers/playground');
var userCtrl = require('./controllers/user');

// map '/' routes to controllers
app.use('/', homeCtrl);
app.use('/play', playgroundCtrl);
app.use('/users', userCtrl);


app.listen(process.env.PORT || port);
console.log('server has started');