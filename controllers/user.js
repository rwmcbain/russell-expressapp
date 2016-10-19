var express = require('express');

var ctrl = express.Router();


var users = [
	{
		username: 'Michael',
		password: 'passwordz'
	},
	{
		username: 'Russell',
		password: 'passwords'
	}

];


ctrl.get('/', function(res, req, next){
	rs.json(users[0]);
});

ctrl.get('/', function(res, req, next){
	rs.json(users[1]);
});


module.exports = ctrl;