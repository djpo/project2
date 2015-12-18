var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var request = require('request');
var bodyParser = require('body-parser');
var session = require('express-session');
var db = require('./models');
var app = express();
app.set('view engine', 'ejs');
app.use(session({
  secret:'hdsvhioadfgnioadfgnoidfajkl',
  resave: false,
  saveUninitialized: true,
}));
app.use(ejsLayouts);
app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({extended: true}));
	// need extended: true in order to parse objects into AJAX call

///////// find this middleware example in notes
// app.use(function(req, res) {
// 	session.currentUser = 222;
// 	console.log('index.js sayssss::: hi');
// });


app.get('/', function(req, res) {
	console.log('Hit root route');
	res.render('index');
});
app.get('/add', function(req, res) {
	res.render('add');
});
app.use('/results', require('./controllers/results'));
app.use('/process', require('./controllers/process'));
app.use('/summary', require('./controllers/summary'));



app.listen(3000, function() {
	console.log("Smooth sailing...");
});