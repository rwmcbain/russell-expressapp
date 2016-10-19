var express = require('express');
var ctrl = express.Router();

/*data for our routes */

var data = [
	{
		name: 'Home',
		location: 'Michigan',
		notes: 'Gonna celebrate my bday yo'
	},
	{
		name: 'Vacation',
		location: 'Iceland',
		notes: 'Hot place to be'
	},
	{
		name: 'Job',
		location: 'California or Colorado',
		notes: 'get it'
	}
];


/*build our first real API */

ctrl.get('/', function(req, res, next){
	res.json(data);
})

ctrl.get('/1', function(req, res, next){
	res.json(data[0]);
});

ctrl.get('/2', function(req, res, next){
	res.json(data[1]);
});

ctrl.get('/3', function(req, res, next){
	res.json(data[2]);
});



module.exports = ctrl;