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
	rs.json(users);
});



module.exports = ctrl;