var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render("default", {
		title: 'Home'
	});
});

app.get('/about', function(req, res) {
	res.render('about', {
		title: 'About US'
	});
});

app.get('/contact', function(req, res) {
	res.render('contact', {
		title: 'Contac Us'
	});
});

app.get('*', function(req, res) {
	res.send('Bad Route');
});

var server = app.listen(3000, function(){
	console.log('Listening server on port: 3000');
});