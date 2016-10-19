var express = require('express');//npm install express --save
									//npm install hbs --save
									//npm install path --save
var path = require('path');
var app = express();
var port = 3000;


app.listen(process.env.port || port);
console.log('server has started');